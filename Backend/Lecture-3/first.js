

let a = 10;

let b = "Hello Ji";

function sum(a,b){
    return a+b;
}

setTimeout(()=>{
    console.log("Hello Time Out");
},3000);

console.log(a);

console.log(sum(3,8));


// So we didn't write setTimeout() code in JS as Js is single threaded synchronous hence therefore in case of this setTimeout() it 

// won't execute code and wait for 3 sec at setTimeout() then prints and executes the rest of the code

// So setTimeout() is given to Libuv as JS doesn't know how to execute it

// So libuv tells OS to tell it after 3 sec and keeps the setTimeout() inside callback queue and eventloop then again and again checks if the stack is empty



// So to read file we use this

const fs = require('fs');

// fs.readFile("./data.json", (err,res)=>{
//     console.log(res);
// })


// This reading a file task is also handled by the Libuv

// So above readFile gives output in bytes as our computer understands in binary only so we give encoding format to it also


fs.readFile("./data.json", "UTF-8", (err,res)=>{
    console.log(res);
})


// Libuv gives data wrapped in callback function hence we are using callback everywhere (can also write utf-8 also)


// So Node.js has many modules inside it like the one we used fs (file system) 

