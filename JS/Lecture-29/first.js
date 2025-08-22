


// Callback hell

// Callback function : Giving function as an argument to another function

// function fetchuser(){

//     console.log("Fetching the user Detail......");

//     setTimeout(()=>{

//         console.log("Data fetched successfully");

//         const name = "Rohit";               // Data fetched from backend

//         meet(name);

// },2000);
// };

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){

//     console.log(`Hello ${name}, I will meet you in Delhi`);

// }

// fetchuser();









// So for above we have an advantage as in above we haven't used callback to we will now use callback




// function fetchuser(callback){

//     console.log("Fetching the user Detail......");

//     setTimeout(()=>{

//         console.log("Data fetched successfully");

//         const name = "Rohit";              

//         callback(name);

// },2000);
// };

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){

//     console.log(`Hello ${name}, I will meet you in Delhi`);

// }

// function edit(name){

//     console.log(`Edit ${name}, of the user`);
// }

// // fetchuser(greet);

// // fetchuser(meet);

// fetchuser(edit);




// Due to using callback we can now instead of greet can also give meet in argument due to which we don't need to make any changes in the function itself

// We have only written one function code and if we didn't use callback then we will be needed to hardcode everything

// callback is just variable not a special keyword in JS callback function definition is that only this is just generalizing it (I think)

// It just calls back any function given by user as an argument






function fetchuser(callback){

    console.log("Fetching the user Detail......");

    setTimeout(()=>{

        console.log("Data fetched successfully");

        const obj = {
            name: "Rohit",
            age: 28,
            city: "Delhi"
        };              

        callback(obj);

},2000);
};

function greet(obj){
    console.log(`Hello ${obj.name}`);
}

function meet(obj){

    console.log(`Hello ${obj.name}, I will meet you in Delhi`);

}

function printAge(obj){

    console.log(`User ${obj.age}`);
}

function edit(obj){

    console.log(`Edit ${obj.name}, of the user`);
}

// fetchuser(greet);

// fetchuser(meet);

// fetchuser(edit);

fetchuser(printAge);



