

Server is something that serves the request


There are 2 types of server : 



Hardware server which is provided by AWS, Heruko, Vercel

Hardware server is like CPU and all (hardware)

We cannot use our system as hardware server as we need to have internet access and our system should be online 24/7

Also we will need a computer with good specifications to handle request and all

So we use the services provided by AWS and all for hardware server as they have much good servers and computer and all that




Software servers are inside hardware server they are more like you know automation things that when client request it automatically gives data to it

So we only need to worry about making software servers as hardware servers are provided by companies 

We deploy our code to their hardware server only, so our software server code is also there




socket = IP + port number

When we request for data to server first this socket is created then request is served and then this socket is removed

If client requests again then socket is again created

Sometimes it retains the socket for some time so that when client requests again it can serve the request (in new version)


So there was also need of web sockets as we have seen before in case of sockets it only sends data when the data is requested by client

Whereas in chat application when our friend sends us message although we didn't request for the nessage but the server is forced to deliver the message

Hence in case of real time chat application we need web sockets here

