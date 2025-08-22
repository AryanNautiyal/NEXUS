


// Copy pasted code from Lecture-29 second.js



// function placeOrder(callback){

//     console.log("Talking with Domino's");

//     setTimeout(()=>{

//         console.log("Order placed Successfully");
//         callback();

//     },2000)
// };

// function preparingOrder(callback){

//     console.log("Pizza preparation started.....");

//     setTimeout(()=>{

//         console.log("Pizza preparation Done");

//         callback();

//     },5000);
// }

// function pickupOrder(callback){

//     console.log("Reaching restaurant for picking order");

//     setTimeout(()=>{

//         console.log("Picked up the order by Delivery Boy");

//         callback();

//     },3000);
// }

// function deliverOrder(){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }


// placeOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     });
// });


// We have problem of inversion of control here as we are dependent on other person to call us so our department code gets executed





// cart = ['pizza', 'coke' ,'sandwich'];


// function placeOrder(cart, callback){

//     console.log("Talking with Domino's");

//     setTimeout(()=>{

//         console.log("Order placed Successfully");

//         const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka"};

//         callback(order);

//     },2000)
// };

// function preparingOrder(order, callback){

//     console.log("Pizza preparation started.....");

//     setTimeout(()=>{

//         console.log("Pizza preparation Done");

//         const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};

//         callback(foodDetails);

//     },5000);
// }

// function pickupOrder(foodDetails, callback){

//     console.log("Reaching restaurant for picking order");

//     setTimeout(()=>{

//         console.log("Picked up the order by Delivery Boy");

//         const droplocation = foodDetails.location;

//         callback(droplocation);

//     },3000);
// }

// function deliverOrder(droplocation){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }





// placeOrder(cart, (order)=>{                                                     
//     preparingOrder(order, (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             deliverOrder(droplocation);                                         // Think of it like in event listener we use events then inside if we call function we can pass events too to access element id which triggered event
//         });
//     });
// });



/*

        More like this

            callback(order) = (order)=>{};

            Hence entered passing value in each


        Code is sooooo complicated hence we use promise to solve this issue

*/



// Can do it using promise like this






cart = ['pizza', 'coke' ,'sandwich'];


function placeOrder(cart){

    console.log("Talking with Domino's");

    const pr = new Promise(function(resolve, reject){

        setTimeout(()=>{

        const food_available = true;                                    // Can use it to check if ordered food is available or not, can make a function for it

        if(food_available == true)
        {

            console.log("Order placed Successfully");

            const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka"};

            resolve(order);                                 // If this generates order then the state of the promise is resolved

        }
        else
        {
            reject("Items Out of Stock");
        }

    },2000)

    });

    return pr;

    
};

function preparingOrder(order){

    console.log("Pizza preparation started.....");

    const pr = new Promise(function(resolve,reject){

        const food_prepared = true;

        setTimeout(()=>{

            if(food_prepared == true)
            {

                

                console.log("Pizza preparation Done");

                const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};

                resolve(foodDetails);

            }
            else
            {

                reject("Items are still not prepared");

            }
        },5000);

    })

    return pr;

    
}

function pickupOrder(foodDetails){

    console.log("Reaching restaurant for picking order");

    const pr = new Promise(function(resolve,reject){

        const delivery_driver_accepted_order = true;

        setTimeout(()=>{

            if(delivery_driver_accepted_order == true)
            {

                console.log("Picked up the order by Delivery Boy");

                const droplocation = foodDetails.location;

                resolve(droplocation);
            }
            else
            {
                reject("Still looking for a delivery driver to pickup your food");
            }
        },3000);

    })

    return pr;

    
}

function deliverOrder(droplocation){

    console.log("Delivery boy on the way");

    setTimeout(()=>{

        console.log("Order Delivered successfully");

    },5000);
}




placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));                                  // Due to promises it is readable and clean code




// First placeOrder is called when it's work is done no matter it takes 5 sec or 10 sec or more or less it will then execute the preparingOrder and then same flow






// To create a Promise


// const pr = new Promise(function(resolve, reject){

// })

// return pr;




