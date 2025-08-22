

// Shallow copy example

let obj1 = {
    a:1,
    b:2
}

let obj2 = obj1;

obj2.a = 10;

console.log(obj2, obj1);        // Changes in both as shallow copy (address or reference copy)


// Deep copy example

let obj3 = {
    a:1,
    b:2
};

let obj4 = structuredClone(obj3);

obj4.a = 10;

console.log(obj4, obj3);            // No changes in obj3 as created totally different copy in heap and different address is stored in stack in variable


// Nested object

const user = {
    name:"Rohit",
    balance:420,
    address:{
        pincode:246149,
        city:"kotdwar"
    }
};

console.log(user.address.pincode);

const user2 = Object.assign({},user);

console.log(user2);

user2.name = "Mohit";

console.log(user2,user);                    // assign Creates deep copy

user2.address.pincode = 341248;

console.log(user2,user);        // Nested ones are changed but data at single level cannot be changed

// So assign creates deep copy but for the nested object it copies or shallow copy the reference

// In above example deep copy is made of name and balance whereas shallow copy is created of address

// Same will happen with spread operator (...)

// So preferable is structured clone as it creates deep copy for both


// freeze() : Prevents any modification to an object

// seal() : Prevents adding or removing properties but allows modification of existing properties 



// Destructuring of an object

let obj = {
    name:"Rohit",
    money:430,
    balance:30,
    age:20,
    aadhar: "aedfsrgg"
};

const {name, balance} = obj;        // Value of name in obj is stored in name

console.log(name,balance);

// We can also change variable name too

const {name: full_name, balance:amount} = obj;       

console.log(full_name,amount);          // Now can only access it through full_name and amount (cannot access by name & balance)

const {name:name1,age,...obj9} = obj;

console.log(name1,age,obj9);                // Used spread operator or can also call it rest operator to store rest remaining elements in an object


// Destructuring can also be done with array

const arr = [1,2,3,4,5,6,7,8];

const [first,second] = arr;             // Use square brackets here

console.log(first, second);

const [f,s, ,fourth, , sixth] = arr;

console.log(f,s,fourth,sixth);                  // Gave gap to ignore or not get that value we only needed 4 & 6 not 3 & 5 so gave gap for them

const [ff,ss,...third] = arr;

console.log(ff,ss,third);

// To destructure nested object

let obj01 = {
    name:"Rohit",
    age:20,
    address: {
        pincode:246149,
        city:"Kotdwar",
        state:"uk"
    }
};

// To get it's pincode as we can easily deconstruct the name and age

const {name:name01} = obj01;

console.log(name01);

const {address:{pincode}} = obj01;

// console.log(adds);

// const {pincode} = adds;

// console.log(pincode);


// Can do by this or can do directly

console.log(pincode);

// address : adds stores value in adds so we wanted only pincode so instead of writing adds we destructured is more {} to obtain only pincode

/*

    If we see closely rest operator is always used in LHS when the element isn't created

    While the spread operator is always used in RHS and used with elements that are already created

    In short rest operator collects while spread operator expands the elements

*/

let obj02 = {
    name:"Rohit",
    age:20,
    marks:[10,88,34,99],
    address: {
        pincode:246149,
        city:"Kotdwar",
        state:"uk"
    }
};

// To access particular marks (say 34)

const {marks:[, ,th]} = obj02;

console.log(th);



let user01 = {
    name:"Rohit",
    amount:420,
    greet:function(){
        return "Hello Coder Army"
    },
    meet:function(){
        return 20;
    }
};

console.log(user01.greet(),user01.meet());


// Important for interview perspective (prototype chaining)

// In console in chrome arr.__proto__

// After using proto we see many functions that we can use on our data that we didn't even created like toString() etc


