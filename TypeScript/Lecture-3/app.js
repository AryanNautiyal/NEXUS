"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
const obj = {
    name: "Rohit",
    age: 20,
    gender: "Male",
    aadhar: 1234
};
const obj1 = {
    name: "Mohit",
    age: 10,
    gender: "Male"
};
;
const obj2 = {
    name: "Rohit",
    balance: 210
};
;
const obj3 = {
    name: "Rohit",
    balance: 210,
    age: 30
};
;
const obj4 = {
    name: "Rohit",
    balance: 210,
    age: 20
};
// obj4.name = "Mohit";        
// Readonly makes all the property read only so we cannot modify it
// Array of objects
const arr = [{ name: "Rohit", age: 20 }, { name: "Mohit", age: 25 }];
/*

    By hovering mouse over the arr it tells

        const arr: {
        name: string;
        age: number;
    }[]

*/
const arr1 = [{ name: "Rohit", age: 20 }, { name: "Mohit", age: 25 }];
// Function in TS
// function greet(a){
//     console.log(a);
//     console.log("Hello");
//     return a+5;
// }
// Above gives error as we haven't specified the type
function greet(a) {
    console.log(a);
    console.log("Hello");
    return a + 5;
}
// a:number indicates a is of number type then 2nd number indicates that return type is number
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Anshika Verma", 4);
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("Bittu");
// Optional parameter
function GATE(person) {
    console.log(person || "Mohan"); // If no value entered then use "Mohan"
}
GATE("Rohit");
GATE();
// Arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 5));
// Callback function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
;
placeOrder(10, (amount) => {
    console.log(amount);
});
// Rest parameter
function total(...arr) {
    let ans = 0;
    // for(let val of arr){
    //     ans = ans + val;
    // }
    arr.forEach((val) => ans += val);
    return ans;
}
console.log(total(2, 3, 4, 5, 6, 4, 2, 4, 6, 3, 5));
;
;
const obj5 = {
    name: "Rohit",
    age: 20,
    salary: "chillar",
    id: 34
};
;
const obj6 = {
    name: "Rohit",
    age: 20,
    salary: "chillar",
    position: "Manager"
};
const obj7 = {
    name: "Bholu",
    age: 10,
    salary: "Chillar",
    id: 345,
    position: "Manager"
};
//# sourceMappingURL=app.js.map