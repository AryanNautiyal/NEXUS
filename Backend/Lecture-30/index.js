

const express = require('express');

const app = express();



const {Server} = require('socket.io');




// Now need to upgrade this server TCP connection to web socket 

// const server = app.listen(4000,()=>{
//     console.log("Listening to port 4000");
// })


// const io = new Server(server);

// So this line tells that if any web socket requests comes give it to io and if any other normal TCP requests give it to app


// So now our app will handle normal TCP requests whereas io will handle web socket requests

// But we don't do it like this as if server starts listening first then web socket is attached 

// So to solve this 

const http = require('http');

const server = http.createServer(app);

const io = new Server(server);


server.listen(4000,()=>{
    console.log("Listening");
})


// app.listen creates the server, express() only returns an express application 


// Now web socket is attached first then server starts listening 


// io.on("Connection",(socket)=>{


// })

// So if someone wants to connect so we used io.on so as to tell that I am on and then we have written socket to know who wants to connect

// Can write anything instead of socket, we just used socket here

// So when device tries to make WebSocket connection with server it sends socket and using socket.id we identify them



io.on("connection",(socket)=>{

    socket.on('message',(data)=>{
        io.emit("new-message", data);
    })

    socket.on("disconnect", ()=>{
        console.log("Disconnected from the server");
    })


})


// So after creating WebSocket connection if someone wants to disconnect then they can use this function 

// So behind the scene socket will use id to determine which one wants to disconnect

// So when someone sends server data then the server will just broadcast it to everyone using io.emit and will give new message to everyone

// socket used when doing work for individual and io used for all 

// "connection" in above cannot be changed but we can just write 'msg' or anything instead of "message"

