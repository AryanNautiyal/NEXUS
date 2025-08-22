


// Callback hell


// Example ordering pizza

// function placeOrder(){

//     console.log("Talking with Domino's");

//     setTimeout(()=>{

//         console.log("Order placed Successfully");

//     },2000)
// };

// function preparingOrder(){

//     console.log("Pizza preparation started.....");

//     setTimeout(()=>{

//         console.log("Pizza preparation Done");

//     },5000);
// }

// function pickupOrder(){

//     console.log("Reaching restaurant for picking order");

//     setTimeout(()=>{

//         console.log("Picked up the order by Delivery Boy");

//     },3000);
// }

// function deliverOrder(){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }


// // If we print like this all of it will be jumbled up

// placeOrder();

// preparingOrder()

// pickupOrder();

// deliverOrder();



// function placeOrder(callback){

//     console.log("Talking with Domino's");

//     setTimeout(()=>{

//         console.log("Order placed Successfully");
//         callback(pickupOrder);

//     },2000)
// };

// function preparingOrder(callback){

//     console.log("Pizza preparation started.....");

//     setTimeout(()=>{

//         console.log("Pizza preparation Done");

//         callback(deliverOrder);

//     },5000);
// }

// function pickupOrder(callback){

//     console.log("Reaching restaurant for picking order");

//     setTimeout(()=>{

//         console.log("Picked up the order by Delivery Boy");

//         callback(deliverOrder);

//     },3000);
// }

// function deliverOrder(){

//     console.log("Delivery boy on the way");

//     setTimeout(()=>{

//         console.log("Order Delivered successfully");

//     },5000);
// }


// placeOrder(preparingOrder);


// Did callback() as we do not want to hardcode it


// Can do this also by this 



function placeOrder(callback){

    console.log("Talking with Domino's");

    setTimeout(()=>{

        console.log("Order placed Successfully");
        callback();

    },2000)
};

function preparingOrder(callback){

    console.log("Pizza preparation started.....");

    setTimeout(()=>{

        console.log("Pizza preparation Done");

        callback();

    },5000);
}

function pickupOrder(callback){

    console.log("Reaching restaurant for picking order");

    setTimeout(()=>{

        console.log("Picked up the order by Delivery Boy");

        callback();

    },3000);
}

function deliverOrder(){

    console.log("Delivery boy on the way");

    setTimeout(()=>{

        console.log("Order Delivered successfully");

    },5000);
}


placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
});


// This is called as callback hell

// Due to this readability is reduced



// So to resolve this problem they created promises