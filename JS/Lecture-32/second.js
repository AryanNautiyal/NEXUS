




//  function test1(){

//     const p1 = new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("First Promise Resolved");

//         },5000)
//     });

//     return p1;

// }

// function test2(){

//     const p2 = new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("Second Promise Resolved");

//         },5000)
//     });

//     return p2;

// }




// async function greet() {

//     console.log("Hello I greet You");

//     const data1 = await test1();                         
//     console.log(data1);

//     const data2 = await test2();                         
//     console.log(data2);
    
// }

// greet();   

// console.log("Hello Coder Army");

// console.log("Kaise ho aap sab log");


/*

    So first our functions are ignored and function call greet is executed

    So as we know GEC is created for whole program and when function is called a separate EC is created for greet

    Inside greet first line is executed and prints then when second line is executed there's a function call there

    So separate EC is created for the test1 function so it's first line is executed but it first line contains setTimeout so it gives it to Web API

    So Web API starts it's timer so till then JS removes test1 from call stack and sees await is there so lines below it in greet function cannot be executed

    So it removes greet also from call stack and continues executing GEC and prints last 2 statements then when call stack is empty

    As test1 is creating a promise so it goes in microtask queue and as event loop sees the call stack is empty it puts the greet in call stack (as test1 is executed as returned promise)
    
    Then it again removes greet and waits for 5 sec

    As the timer of 5 sec ends it prints and then test2 is called then it gives to Web API again and it sends it to microtask queue after the timer has ended

    then as the program has ended so it goes to call stack and gets executed

*/



// Remember that as browser is multithreaded so we can have multiple core so the threads are gone in order only irrespective of the timer

// each thread is allocated a CPU and when the timer ends the CPU just executes it (thread scheduling and all that also comes here) so in microtask queue multiple CPU are there to execute the threads






// How errors are handled in this



//  function test1(){

//     const p1 = new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("First Promise Resolved");

//         },5000)
//     });

//     return p1;

// }

// function test2(){

//     const p2 = new Promise(function(resolve,reject){

//         setTimeout(()=>{

//             resolve("Second Promise Resolved");

//         },5000)
//     });

//     return p2;

// }




// async function greet() {

//     try{

//         console.log("Hello I greet You");

//         const data1 = await test1();                         
//         console.log(data1);

//         const data2 = await test2();                         
//         console.log(data2);

//     }

//     catch(error){

//         console.log(error);

//     }
    
    
// }

// greet();   

// console.log("Hello Coder Army");

// console.log("Kaise ho aap sab log");









// Now like in our code before there is no dependency between of test1 & test2, this means they are independent task so to execute them parallelly we use this method



 function test1(){

    const p1 = new Promise(function(resolve,reject){

        setTimeout(()=>{

            resolve("First Promise Resolved");

        },5000)
    });

    return p1;

}

function test2(){

    const p2 = new Promise(function(resolve,reject){

        setTimeout(()=>{

            resolve("Second Promise Resolved");

        },5000)
    });

    return p2;

}




async function greet() {

    try{

        console.log("Hello I greet You");


        const [data1, data2] = await Promise.all([test1(), test2()]);                   // Takes array as input and returns array also
        
        // Due to this both are parallelly executed
                       
        console.log(data1);
               
        console.log(data2);

    }

    catch(error){

        console.log(error);

    }
    
    
}

greet();   

console.log("Hello Coder Army");

console.log("Kaise ho aap sab log");




// fetch() always returns a promise only