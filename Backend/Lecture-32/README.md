

*** WebRTC ***

WebRTC (Web Real-Time Communication) is a technology that enables Web applications and sites to capture and optionally stream audio and/or video media, as well as to exchange arbitrary data between browsers without requiring an intermediary.


Similar to socket only 


# How video calls used to work before ?

So client will send to server then server will send to other client who wanted to video chat and then other client sends to server and server sends to the client

So this is how the video flows before 




                    Video                                   Video
      -------------------------------------  -------------------------------------
      |                                   |  |                                   |
      |                                   |  |                                   |
      V                                   V  V                                   V
    Rohan                               Server                                 Sohan
      ^                                   ^  ^                                   ^
      |                                   |  |                                   |
      |                                   |  |                                   |
      -------------------------------------  -------------------------------------
                    Video                                   Video



Problem here is that first the video is transferred from Rohan to Server then Server processes the video and then sends to Sohan

Same is happening with Sohan

So if server is handling many users then the server is gone for good (RIP) as bandwidth spent will be more as it's video 

*** Bandwidth is the maximum amount of data that can be transferred over a network connection in a given amount of time, typically measured in bits per second (bps) ***

So what WebRTC says is that it will connect Rohan and Sohan without server only 

So Rohan <-------------------> Sohan

Server is removed from this interaction 

So this is called *** P2P Protocol *** [Peer to Peer]

So to connect both Rohan and Sohan should know each other's IP address and Port number as through server also they were connecting using those only 


So first Rohan and Sohan will be joined through a socket (as WebRTC has no method of sending IP address and Port number to each other so only in this connection and transfer of IP and port number is done through server after that no need of server)

So like in discord we both are connected to a socket so when we click on video call icon it just instantly does video call so we can say that socket connection was there first so through it IP and port address were shared to do video call

So after transfer of IP address and Port number there is no more need of server in video call 

So how will Rohan know about his own IP address and Port number and how will Sohan know it's own IP address and Port number


# Revision - So as there are limited number of IP addresses so our Router gets one public ip address and it gives us private ip addresses 



# NAT (Network Address Translation) converts the private IP addresses of devices on a local network into a single public IP address for internet access, and vice versa. 


*** STUN (Session Traversal Utilities for NAT) Server ***


STUN server is a network service that helps devices behind a Network Address Translator (NAT) discover their public IP address and the port number being used for a connection

So Rohan will send request to STUN server and this server will return Rohan's IP address and Port number

Similarly Sohan will also get his IP address and Port number

Now they will just share their IP address and Port number to each other 

So now our question should be if this is enough to start a video call?


*** How video travels on the network ***

So our video and audio in that video will travel separately 

So video is just frames so video is just many images in the end 

So audio size in same time is less than that of video 

So will it be sensible to just send video without any compression or anything ??

So *** codecs *** is used here 

# A codec is a technology that codes and decodes data, used to compress and decompress digital media like audio and video files for efficient storage, transmission and playback.


As in the end all is converted to binary only so how will our user will know that which one is for audio and which one is for video and the receiver also won't have knowledge about if there is compression algorithm applied or not 


So with IP address and Port number we also send which codecs (algorithm) we are using for compression, will we talk in video or audio, what will be the audio part and what will be the video part in this data 

So all this is send to other person through offer 

So as getting our IP address and port number from STUN server will take time so during that time we will just send this data

So we will just follow *** Session Description Protocol (Media Protocol) ***

So we will first send this to tell receiver that we will follow this protocol so that if their browser doesn't support that protocol then sender will know

So when we send this the receiver will return with either yes or no 

So we also need a *** Turn (Traversal Using Relays around NAT) Server *** also here

# A TURN (Traversal Using Relays around NAT) server acts as a relay to enable communication between two devices when a direct connection is not possible due to firewalls or Network Address Translators (NATs). 

So let's say a group video call all will be needed to share IP address to each other and Port number also so all will send to each other so mesh topology will be created 

So in case of scalable system this is not good as more the number of user = more time taken for just sharing data 

So if we send video in case of many users the video will be sent to each user separately so more data will be used as it's going to many users

So my network will be slow now as I am sending and receiving video from multiple users 

So instead of sending separately we will just use a common server to compress and all video and send to users

So although we said that server is not needed in WebRTC but here as a solution we are using server so we should understand it ourselves that using WebRTC only we can do video calling, etc for limited number of users only which means that for like 50-100 users in a single meeting we cannot use WebRTC there as data and all will be spent so there we will be forced to introduce a server there

To control the data usage as with the server now many users will get data from only one server and need to send data to server only so it's much more easier and scalable now 

So here we will need a server now 

So now it will work in one of the 2 ways :

        -- Multipoint Conferencing Unit (MCU)

        -- Selective Forwarding Unit (SFU)


# MCU (Multipoint Conferencing Unit)

So in this if it receives data from 3 users and there are let's say total 4 people in video call then it won't send data again and again to other users as it will only just increase it's bandwidth 

So instead what it will do is that it will just take the data it's getting from other 3 user and will perform compression and all and will then just send it to user 4 as a single unit only 

So now client will only be needed to send 1 video and will receive 1 video in return only so less load on CPU now in client side and less bandwidth 

So disadvantage of this will be that the load on server will be much more as if there are 500 users then the server will get data from all those uesrs and will combine it as 1 and will then send it because of which the load is too much

There is chances of latency as time will be taken to perform operations on data

So video layout will be fixed by the server 

So this architecture won't be prioritized as if the number of users are much larger then the load on server will be too much

As if we take example of Whatsapp it has billions of users and if billions of user use video call feature then the server is gone for good

# Definition for MCU - In a video conferencing system using a Multipoint Control Unit (MCU) architecture, a "video layout that is fixed by the server" means the server is entirely responsible for the mixing, processing, and arrangement of all participants' video streams into a single composite video stream which is then sent to each participant. 




# SFU (Selective Forwarding Unit)

So what SFU does it whatever the video is coming to it, it will just forward it or can say send it to everyone that is there in the video call

It won't apply any operation, nothing.

So upload stream will be one but there will be many download stream as server will send data in many streams according to number of users (let's say 3 users so 3 streams will be there stream 1 for user 1 data like this)

*** Stream is a sequence of data that is processed one item at a time, allowing for the handling of large or potentially infinite amounts of data without loading it all into memory at once ***

So now it will be up to browser how it wants to display it to you


# Definition for SFU - SFU (Selective Forwarding Unit) architecture is a WebRTC server-based design for multi-party video calls where the server acts as a selective router for media streams. Unlike a mixer that processes streams, the SFU forwards each participant's media stream to all others without altering it. This reduces the processing load on the server and the client's need for a high-bandwidth upstream connection, making it scalable and efficient. 



Google, Zoom, etc use SFU architecture only 

So as we might have seen that in a meeting only 3-4 people are important so even in meeting of 1000 users Google or Zoom only shows 20 or less users video in one screen only and can even show low quality video of user also 

So in SFU we will only show less people video in one tab so like in Zoom when we click on next then we see next 20 users and so on therefore less data is now being transferred to user

Hence it's name is Selective Forwarding Unit as it only sends data of selected users who are appearing in our screen only because of this Google uses this 

Now this system is also scalable 

Hence therefore we have seen that there is a limit to number of users that can join in a meeting as if there are more users then cost needs to be paid to use that resource as for many users there will be load on the server



*** So now back to TURN server ***

So when we are video calling in same network (meaning same public IP address) there we don't want public IP address we will just need private IP address and then video call can be done 

So now there is firewall in between each user and server so firewall allows request to go from inside to outside but not from outside to inside (checks and all will be needed first)

So even if they have each other's port number and IP address the video call cannot be done if firewall just rejects the request

Let's say someone from outside amazon tries to request amazon so it will just reject it if it doesn't follow the protocols and person from amazon can send request to person outside amazon as his firewall might not have those protocols 





So we need solutions for these now in WebRTC

        -- Public and Private IP

        -- Firewall bypass


So to bypass firewall there will be a need of another server 

So now both Rohan and Sohan will request this server and both will be connected to this server so now both of them requested the server so firewall of server will only be seen as they are requesting 

Now Rohan will send message to Sohan through server and same with Sohan so the server which is here and acts as intermediatory is called TURN server

TURN server can be different also, it is not compulsory that both connect to same TURN server 

So now what will have so Rohan will have TURN server address with whom it is connected and same with Sohan it will also have TURN server address with whom it is connected so now Rohan and Sohan both will share each other's TURN server IP address and Port number 

So they will share each other's TURN server details through signalling (through WebSocket). Now for Rohan to send video to Sohan what will Rohan do is he will send video to TURN server and will tell TURN server to send to this server then the TURN server will (if same will send to that port number) or (if not same then will send to other TURN server then it will send it to Sohan)



*** What WebRTC does is ***

# ICE Candidate : ICE candidate in WebRTC is a potential network path for a connection, consisting of an IP address and port. These candidates are gathered by a process called Interactive Connectivity Establishment (ICE) to find the best way for two peers to connect directly, even when behind firewalls and Network Address Translators (NATs). The three main types are host (local IP), server reflexive (public IP from a STUN server), and relayed (from a TURN server)



So what WebRTC does is it finds and gives all the 3 (Private IP address, Public IP address, Turn server address {all are with port address})

So WebRTC gives all 3 addresses so now Rohan will share all 3 with Sohan and Sohan will share all 3 with Rohan then they will decide the best path to connect out of the 3 

If they are on same network then private is best, if they are on different network then public if no firewall is interrupting and if the firewall is blocking then TURN server is the best




STUN server is free but TURN server has it's costing 




