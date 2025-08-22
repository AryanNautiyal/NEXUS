

// Promises in JS

// Problem of callback hell is solved by promises

// fetch operation is asynchronous task

// Will understand this with weather 



// Got this from getting London weather so will use the link in Call

// http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes        <== This is the particular format to talk to server to get weather data (API)

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);     // We fetched some data only using fetch so seeing what fetch comes with

// console.log(obj);                           // It returns Promise

// This is because as fetch() is asynchronous task so we didn't even wait for it to fetch the data we instantly printed it

// That's why output was Promise instead of data

// fetch takes some time to execute so directly executing will give Promise as output

// So to handle this

// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// setTimeout(()=>{
//     console.log(obj);  
// }, 2000);

// So with this we get the output

// But how can we determine when the data will be fetched as it can take 5 sec , 3 sec or some milliseconds also to fetch data

// So we cannot determine the correct time to it takes to fetch data

// So we cannot let it always wait for 2 sec as sometimes it will give Promise as output and sometimes it may give data as output

// Sometimes it may wait more than it has to as data might be fetched in milliseconds but it still waits for 2 sec

// So we cannot use setTimeout()

// So we use this


// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// obj.then((data)=>{
//     console.log(data);
// });


// I understand it like this if data is fetched then execute this 

// So whenever data is fetched after that it is automatically executed so this is the format for it

// This obj is promise object only 

// We are only waiting for the data to come and then execute the code inside then



// Promise : The Promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value



// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>{
//     console.log(response);
// });




// Promises have 3 states : 1. Pending  2. Resolve  3. Reject

// So we have pending as we have seen above when we haven't given the fetch enough time to fetch data

// Resolve is the state in which the data is fetched and the operations can be done on data or can say request to fetch data is resolved

// Reject is the state like when we login in Instagram it requires username and password but if we enter wrong we need to give error also as it's wrong

// So we need to handle errors also in this so we use catch() to handle error (Similar to Java)




// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// });





// If our request to fetch data is done it doesn't execute catch block but if our request was rejected them catch block is executed to handle error

// So it gives it in error

// then() only executes when the value is there inside the Promises

// Hence resolve states executes then() block and reject state executes catch() block





// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>{
//     console.log(response);
// });


// In this if we print response or Promise we see that the data is not we wanted, We wanted the body part of the response to see the weather

// It prints the header only so to see the weather we do this

// So promise object promises that it will bring us the data, not instantly but will surely bring the data (if data cannot be brought then rejection message is given)




// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>{                                                     // At the end Promises is object only
//     console.log(response.json());                               // This also return Promise with pending state
// });


// So this says accessing body part is also an asynchronous task or converting data to JSON is an asynchronous task

// JSON : JSON, which stands for JavaScript Object Notation, is a lightweight, text-based, human-readable format for exchanging data
 
// It's commonly used in web development and APIs to transmit data between a server and a client

//  JSON is versatile and can be used with various programming languages

// response.json() is also a promise then





// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>{        

//     const pro2 = response.json();   
    
//     pro2.then((data)=>{

//         console.log(data); 

//     });
// });




// Now returns the information about weather we really wanted


// Now some people do above task by this way





// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// const pro2 = Promises.then((response)=>{        

//     return response.json();

// });

// // Due to this we get the data we want from it

// pro2.then((data)=>{

//     console.log(data);

// });


// Needed to write then for pro2 as it returns data in json but it still is an asynchronous task and takes time therefore we need to wait until data is converted into JSON format




// Can also do this by Promise Chaining



// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>{        

//     return response.json();

// }).then((data)=>{

//     console.log(data);

// });



// As pro2 was also a promise so instead of writing that we just chained the promise

// The first then() returns the json format and next then() is executed when the data is converted to json and returned

// To make it more short




// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises.then((response)=>response.json())
// .then((data)=>{

//     console.log(data);

// });


// As you know arrow function The God


// More short



// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`);  

// Promises
// .then(response=>response.json())
// .then(data=>console.log(data));


// Done same with other then() plus removed brackets for parameters also as it was single only


// To make it even shorter


// fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`)
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));                                      // Added to show error in case of reject state 


// So we see a neat and clean coding way

// So now using this we can print what we want



fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_c))
.catch(error=>console.log(error));  

