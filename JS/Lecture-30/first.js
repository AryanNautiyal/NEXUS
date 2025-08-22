


// For client and server to interact we need APIs

// APIs are the set of rules for the communication

// client can be browser, app, iphone, alexa so all these are made in different ways and different systems

// So for all of them to interact they need to come on common term

// Hence API (Application Programming Interface) is there 




// Web API is very powerful

// It has DOM, console, Fetch, setTimeout, etc

// Hence to use API or to communicate you need to follow syntax like setTimeout(()=>{},5000);

// So as JS doesn't understand setTimeout() hence it leaves it as it's not part of it and it is handled by Web API

// Web API is present inside browser

// Browser is multithreaded whereas JS is single threaded hence it is asynchronous task

// So JS gives setTimeout() to browser and tells it to remind him to execute it after 5 second 

// So browser calculates 5 seconds and then reminds the JS to execute it (browser is multithreaded and has it's own timer so it can easily handle it)

// Then JS resumes it's normal execution hence the output for statements after setTimeout() is executed before it 

// So there is one more thing called event loop

// Let's say our JS finished the whole execution as that setTimeout line might be 2nd last so it removes Global Execution Context of this from the call stack

// Event loop if it sees that the call stack is empty then it puts a function from the callback queue into the call stack

// The call stack is a specific type of stack data structure used by a computer program to manage function calls during execution


// console.log("Hello Coder Army");

// setTimeout(()=>{
//     const a = 2+4;
//     console.log(a);
// },5000);

// setInterval(()=>{
//     console.log("I am fast");
// },2000);

// let b = 20;

// let arr = [20,30,11];

// for(let i of arr)
// {
//     console.log(i+b);
// }

/*

    So if we take another example of code above

    So first GEC is created for the code and then when 1st line is executed as JS doesn't have console.log so it calls the console.log of Web API

    Then (empty spaces are ignored) it sees setTimeout() so it tells Web API to remind him after 5 sec to execute the callback function

    Then it sees setInterval() so it tells Web API to remind him after every 2 sec to execute callback function 

    Then it executes rest statements

    When whole program is executed it removes the GEC from call stack and in callback queue setTimeout() and setInterval() are present

    So by event loop they are allocated in stack as stack is empty then when they are in stack they will get executed

    So only setInterval() is executed first as it's timer was 2 sec then after 2 sec again it will allocate memory to setInterval() in call stack 

    Then as 4 sec are gone then after 5 sec setTimeout() will be executed as after 6 sec the setInterval() will be executed for the 3rd time

    Then after the work is done setTimeout() and setInterval() are removed from stack 


*/


// console.log("Hello Coder Army");

// setTimeout(()=>{
//     const a = 2+4;
//     console.log(a);
// },0);

// setInterval(()=>{
//     console.log("I am fast");
// },2000);

// let b = 20;

// let arr = [20,30,11];

// for(let i of arr)
// {
//     console.log(i+b);
// }


// Note : when callback function like setTimeout() , setInterval() is executed they are gone to Web API then to callback queue 

// So in above code although we have set timer = 0 sec still it will execute after the whole program is executed and GEC is removed from call stack

// As event loop only allocates memory to callback function in callback queue when stack is empty as before GEC was there so it didn't put it before

// So after GEC is removed or stack is empty event loop puts them in stack

// This is because we don't want race condition to occur

// Like if we allow event loop to allocate memory even when stack is not empty then it can lead to race condition and output can be inconsistent 

// Like remember race condition in OS the output depends on the flow of execution so due to this if we run program again and again each time output will be different

// Event listener is also not part of JS, it is part of Web API as browser is powerful as it's multithreaded




// Spoilers for next lecture fetch() and promises



// console.log("I am first");

// fetch("https://youtube.com")
// .then(()=>console.log("Hello"));

// console.log("I am last");


// fetch is used to fetch data and perform some operations on this data

// fetch operation is an asynchronous task

// So fetch only performs operations when the data has arrived or data is obtained

// So when GEC is created and execution is started then it gives fetch to Web API as not part of JS

// Then when data is fetched it goes to microtask queue as promises goes to microtask queue whereas the normal things like event listener etc goes to callback queue

// The priority of microtask queue is higher so first the event loop checks if the call stack is empty, if it is then goes to microtask queue 

// If there's a task there in queue then memory is allocated to it and after that it checks callback queue.


console.log("I am first");

setTimeout(()=>{
    console.log("Executed Successfully");
}, 1000);                                                       // Need to give 1 sec as fetching was taking time normally so it was being executed after setTimeout()

fetch("https://youtube.com")
.then(()=>console.log("Hello"));

console.log("I am last");


// The microtask queue in JavaScript primarily holds callbacks associated with Promises and MutationObserver

// These tasks are executed after the current script finishes executing and before the browser moves on to the next task in the macrotask queue