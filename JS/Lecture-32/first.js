

// We can use async await with Promises also 

// const cart = ['pizza', 'coke' ,'sandwich'];


// function placeOrder(cart){

//     console.log("Talking with Domino's");

//     const pr = new Promise(function(resolve, reject){

//         setTimeout(()=>{

//         const food_available = true;                                    // Can use it to check if ordered food is available or not, can make a function for it

//         if(food_available == true)
//         {

//             console.log("Order placed Successfully");

//             const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka"};

//             resolve(order);                                 // If this generates order then the state of the promise is resolved

//         }
//         else
//         {
//             reject("Items Out of Stock");
//         }

//     },2000)

//     });

//     return pr;

    
// };

// function preparingOrder(order){

//     console.log("Pizza preparation started.....");

//     const pr = new Promise(function(resolve,reject){

//         const food_prepared = true;

//         setTimeout(()=>{

//             if(food_prepared == true)
//             {

                

//                 console.log("Pizza preparation Done");

//                 const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};

//                 resolve(foodDetails);

//             }
//             else
//             {

//                 reject("Items are still not prepared");

//             }
//         },5000);

//     })

//     return pr;

    
// }

// function pickupOrder(foodDetails){

//     console.log("Reaching restaurant for picking order");

//     const pr = new Promise(function(resolve,reject){

//         const delivery_driver_accepted_order = true;

//         setTimeout(()=>{

//             if(delivery_driver_accepted_order == true)
//             {

//                 console.log("Picked up the order by Delivery Boy");

//                 const droplocation = foodDetails.location;

//                 resolve(droplocation);
//             }
//             else
//             {
//                 reject("Still looking for a delivery driver to pickup your food");
//             }
//         },3000);

//     })

//     return pr;

    
// }

// function deliverOrder(droplocation){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }




// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error)); 



// Some doesn't like this format also as for some it's still hard to read


// So to make our life easier



// const cart = ['pizza', 'coke' ,'sandwich'];


// function placeOrder(cart){

//     console.log("Talking with Domino's");

//     const pr = new Promise(function(resolve, reject){

//         setTimeout(()=>{

//         const food_available = true;                                    // Can use it to check if ordered food is available or not, can make a function for it

//         if(food_available == true)
//         {

//             console.log("Order placed Successfully");

//             const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka"};

//             resolve(order);                                 // If this generates order then the state of the promise is resolved

//         }
//         else
//         {
//             reject("Items Out of Stock");
//         }

//     },2000)

//     });

//     return pr;

    
// };

// function preparingOrder(order){

//     console.log("Pizza preparation started.....");

//     const pr = new Promise(function(resolve,reject){

//         const food_prepared = true;

//         setTimeout(()=>{

//             if(food_prepared == true)
//             {

                

//                 console.log("Pizza preparation Done");

//                 const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};

//                 resolve(foodDetails);

//             }
//             else
//             {

//                 reject("Items are still not prepared");

//             }
//         },5000);

//     })

//     return pr;

    
// }

// function pickupOrder(foodDetails){

//     console.log("Reaching restaurant for picking order");

//     const pr = new Promise(function(resolve,reject){

//         const delivery_driver_accepted_order = true;

//         setTimeout(()=>{

//             if(delivery_driver_accepted_order == true)
//             {

//                 console.log("Picked up the order by Delivery Boy");

//                 const droplocation = foodDetails.location;

//                 resolve(droplocation);
//             }
//             else
//             {
//                 reject("Still looking for a delivery driver to pickup your food");
//             }
//         },3000);

//     })

//     return pr;

    
// }

// function deliverOrder(droplocation){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }



// const order = await placeOrder(cart);                               // Due to this await it won't execute next line until there's a value in order that we wanted

// const foodDetails = await preparingOrder(order);

// const droplocation = await pickupOrder(foodDetails);

// deliverOrder(droplocation);


// await means to wait until we get the values, as we don't want the next ones to execute until we get values of this one


// But we cannot use await normally like this so we need a function inside which await will be there so the function should be asynchronous function







// const cart = ['pizza', 'coke' ,'sandwich'];


// function placeOrder(cart){

//     console.log("Talking with Domino's");

//     const pr = new Promise(function(resolve, reject){

//         setTimeout(()=>{

//         const food_available = true;                                    // Can use it to check if ordered food is available or not, can make a function for it

//         if(food_available == true)
//         {

//             console.log("Order placed Successfully");

//             const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka"};

//             resolve(order);                                 // If this generates order then the state of the promise is resolved

//         }
//         else
//         {
//             reject("Items Out of Stock");
//         }

//     },2000)

//     });

//     return pr;

    
// };

// function preparingOrder(order){

//     console.log("Pizza preparation started.....");

//     const pr = new Promise(function(resolve,reject){

//         const food_prepared = true;

//         setTimeout(()=>{

//             if(food_prepared == true)
//             {

                

//                 console.log("Pizza preparation Done");

//                 const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};

//                 resolve(foodDetails);

//             }
//             else
//             {

//                 reject("Items are still not prepared");

//             }
//         },5000);

//     })

//     return pr;

    
// }

// function pickupOrder(foodDetails){

//     console.log("Reaching restaurant for picking order");

//     const pr = new Promise(function(resolve,reject){

//         const delivery_driver_accepted_order = true;

//         setTimeout(()=>{

//             if(delivery_driver_accepted_order == true)
//             {

//                 console.log("Picked up the order by Delivery Boy");

//                 const droplocation = foodDetails.location;

//                 resolve(droplocation);
//             }
//             else
//             {
//                 reject("Still looking for a delivery driver to pickup your food");
//             }
//         },3000);

//     })

//     return pr;

    
// }

// function deliverOrder(droplocation){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }


// async function greet() {

//     const order = await placeOrder(cart);                                   // Promise is going in order as at the end promise is data only as it show data fetched

//     const foodDetails = await preparingOrder(order);

//     const droplocation = await pickupOrder(foodDetails);

//     deliverOrder(droplocation); 
    
// }


// greet();



// async await came in ECMA6 probably







// const p1 = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         resolve("Hello Everyone");

//     },5000)
// });


// async function greet() {

//     const data1 = await p1;                         // await p1 pauses greet() until p1 resolves 
//     console.log(p1);
//     console.log(data1);

//     const data2 = await p1;                         // As the promise was same and the promise was already resolved before so it didn't wait and executed directly as p1 promise had value already at the time of data2
//     console.log(data2);
    
// }

// greet();                        // without calling function async function won't execute although promise will be made





// const p1 = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         resolve("First Promise Resolved");

//     },5000)
// });


// const p2 = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         resolve("Second Promise Resolved");

//     },5000)
// });


// async function greet() {

//     const data1 = await p1;                         
//     console.log(data1);

//     const data2 = await p2;                         
//     console.log(data2);
    
// }

// greet();                      



/*

    So when first p1 is executed so it gives to Web API and it starts 5 sec timer and then p2 is executed and same for p2 is done

    Then greet function is called so in greet function first line is executed

    As 1st line has await so it waits until the promise p1 is resolved so when p1 is resolved then it prints and as timer for both kind of started together

    Hence p2 also get value and gets executed simultaneously 

    Remember this is not executing simultaneously due to await as it's only executing simultaneously due to flow of the program

    Change p2 time to 7000 you can see it waits 2 sec after data1 is printed 


*/




// If we do same using then it will give other output





// const p1 = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         resolve("First Promise Resolved");

//     },8000)
// });


// const p2 = new Promise(function(resolve,reject){

//     setTimeout(()=>{

//         resolve("Second Promise Resolved");

//     },5000)
// });


// p1.then((response)=>console.log(response));
// p2.then((response)=>console.log(response)); 




// First data in p2 is printed as p2 is resolved first and as p1 is resolved 3 sec after p2 so it prints after





// What if write p1 and p2 in a function


// function test1(){

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

//     const data1 = await test1();                         
//     console.log(data1);

//     const data2 = await test2();                         
//     console.log(data2);
    
// }

// greet();   




// In this when function is called then only the timer starts for p1 and p2 hence first data1 is printed in 5 sec due to await 

// And then after waiting for 5 more sec data2 is printed







async function meet() {

    return "Hello Coder";
    
}

async function sheet() {
    
}

console.log(meet());

meet().then(value=>console.log(value));

console.log(sheet());

sheet().then(value=>console.log(value));



// Async function always returns promise 

// Case 1: when we return any number, string, etc in async function then it converts it to promise and returns it

// Case 2: when we return nothing, then it converts undefined to promise and returns it


// Hence we deduced that async function always returns a promise and await is always used inside async function


