

const http = require('http');           // imported http module (node has given us module to create server)

// const server = http.createServer((req,res)=>{

//     res.end("Hello Coder Army");

// });

// // Server is created

// server.listen(4000, ()=>{
//     console.log("I am listening at port number 4000")
// });

// Setting port at which we want server to listen and to check printed printing statement

// server is hosted locally in our system for now

// http://localhost:4000/ <= use this to obtain the output  {localhost you know plus we added the port number we told server to listen to }

// So this sends request to the server




// To add react routing also 


const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.end("Hello Coder Army");
    }
    else if(req.url === '/contact'){
        res.end("This is our Contact Page");
    }
    else if(req.url === "/about"){
        res.end("This is our About Page");
    }
    else{
        res.end("Error: Page Not found");
    }

});

// Server is created

server.listen(4000, ()=>{
    console.log("I am listening at port number 4000")
});



// Will use Express for creating servers instead of this as much easier in Express

