

// JS is a single threaded synchronous language:

// JS behaviour : Asynchronous  (JS also show asynchronous behaviour)






// Synchronous behaviour

// console.log(10);

// console.log(20);

// console.log(30);




// Asynchronous behaviour


// console.log(10);

// setTimeout(()=>{
//     console.log(20);
// },2000);

// console.log(30);





// Above can also be done like this

console.log(10);

const timer = Date.now();

while(Date.now() - timer < 2000)
{
    // Waits for 2 seconds
};

console.log(20);

console.log(30);


// We see that in this the 30 is not printed before 20 whereas in above one it was

// This is because this one is synchronous task whereas the above one was asynchronous task


// setTimeout() isn't even part of JS, it's part of Web API

// Then how does our JS engine understands it

// It is handled by Web API only so our web API calculates the time for timeout till then JS executes other statements

// Whereas in this one the while loop belongs to JS therefore synchronous behaviour (All stated in ECMA script belongs to JS anything other than that doesn't belong to it)

// window object is also not part of JS, it is headache of browser only

// console.log() is also not part of the JS

// All asynchronous tasks wants callback
