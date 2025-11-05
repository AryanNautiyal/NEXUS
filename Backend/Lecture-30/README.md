



*** Web Socket ***

So let's understand the problem first 

So we see that we see live scores for cricket matches so if user wants to get new score they will refresh again and again or send request to backend again and again (in case of not using web socket)

So here a problem is being created for backend as user will request again and again even if there is no change in score user might think there might be and will send request again and again 

Hence our backend will be disturbed like this and UX is also getting pretty bad as user needs to refresh everytime to get new score 

Similar can be said in case of Whatsapp so all this can be resolved by using *** Web sockets ***


So using web sockets without sending request the server will just send latest data 

That's why in cricket matches and all scores don't need to be refreshed again and again 




*** Traditional Method *** 


http1.0 - So before sending any data there was a need to establish a connection between client and server before sending data

So before making TCP connection there is a process called as *** Three way handshake *** 


So client will first send request to establish a connection between him and server and server will either reply with yes or no to establish connection 

Then client sends server another response like ok 

More like this flow

        -- client : Kya mei connection banalu tere saath

        -- server : Thik h bana le

        -- client : ok

So the above 3 steps are Syn , Syn-Ack , Ack

Syn == Synchronous & Ack == Acknowledgement 

So first client asks server if it's free as message that client's sending might be too large 


So first client will request server so it so a sequence number will be given to server as to tell from where the packet number will be starting that it's sending to the server 

So server will just increment the count of that and will acknowledge that it will take all the packets starting with 111 let's say (sequence number let's say 110)

So this way server can also know if by chance any packet is lost as packet number will be in continuous manner 

So server also gives a sequence number to client as to tell client from which packet number it will be starting, to detect packet loss

So client will know that all packet from 501 will be send by server and the port number will also be there

After sending and receiving the message between client and server is done this connection is broken 

So this connection is broken by *** Four way handshake ***

        -- server : I have send you the data

        -- client : I have received it

        -- client : I have send all the data I wanted to

        -- server : I have received it 

Now connection is broken




http1.1 - In this the connection is kept instead of breaking it 

So they can still send more data 

But here also first request will be made then response will be given by the server 

In this the connection break will be done when either client says or server says but what will happen if both of them say nothing, then our Node.js and other have some rules like if client and server are connected and there is no communication for max 70-75 seconds then the connection will be broken 

So automatically terminated after sometime of no communication 

*** Polling in a computer network is a controlled access protocol where a primary or master device periodically checks secondary or slave devices to see if they have data to send ***

So the process of sending requests again and again to check if server has data or not is called polling 


*** Long polling is a client-server communication pattern where a client sends a request to a server, which then holds the connection open until new data is available or a timeout occurs. ***


So in case of long polling the client sends the request to the server and server then holds the request of the client until data is given from other server

But as we can learn that if we hold the request of the client there will be a load on the server 

So many resources will be consumed 



So solution to all this they found was *** Server Side Streaming or Server Side Chunking ***

So as we have seen that in ChatGPT also it gives response in chunks rather than giving it as a whole 

So streaming means that slowly show data to user, the data that we have should be send forward to client slowly slowly 

(Jitna data aa rha h utna data hi client ko bhejte jao)

So like hello comes so server will send hello only to user till the time the rest of the data comes

So when client requests for data so it knows that the data will be coming in chunks only 

But there is a problem in this as packet number if doesn't come in order then the other packet number cannot be send to user until user receives all the packet number before that packet

There are also high chances of packet loss due to which above case will arise then so we cannot display message in case of packet loss

So the lost packet will be needed to be retransmitted so that message can be sent again 

So client cannot request server again to send data as if it does then the connection of request that was made before will be broken 




So here comes our solution of web socket 


*** Web Socket ***

So TCP connection will be made here (three handshake one)

So TCP connection is must 

Then after that it tells to upgrade this connection into web socket 

So both client and server will have each other's ip address and port number

So client tells server that they are upgrading their connection to web socket and then server responds with ok then their connection is upgraded

Now both are free birds and now they both can send each other message freely 



*** Socket.io ***

Similar to how we used Express.js to create server when we can just do that with Node.js also

Here also we can create web socket using socket.io or using web sockets only 

It's easier for us to create web socket using socket.io




                            -----------------------------------
                            |            Socket.io            |
                            |                                 |
                            -----------------------------------
                                            |
                                            |
                                            |
                                            |
                                            V
                            -----------------------------------
                            |          Web  Socket            |
                            |                                 |
                            -----------------------------------                                            

Kinda like this


Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

The Socket.IO connection can be established with different low-level transports:

        HTTP long-polling
        WebSocket
        WebTransport


So if the browser is old or a company has web socket disabled (firewall {disabled in firewall}) so there it will convert the connection to HTTP long polling 

So with long polling also will give a feel that it is bidirectional 


[ WebTransport is a modern web API that provides secure, low-latency, and flexible client-server communication by using the HTTP/3 and QUIC protocols. ]



If we write code only with web socket then when connection was upgraded and client and server are still not talking to each other then we were needed to write extra code as to check if the client hasn't left the connection 

So we use socket.io as it automatically checks by sending pings to check if they are alive 


So if server sends some data to client but due to network error the client was disconnected and hasn't received the data so that data is lost as server will think that client has the data so therefore we use socket.io as it automatically handles that 

So for each packet received an acknowledgement is sent to server in socket.io





