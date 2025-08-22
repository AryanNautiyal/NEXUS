


// Symbol skipped for now will learn later


// Non-primitive data types

// array, object, function comes in this

let n = 10;
let n2 = 20;
let n3 = 30;

// Array

let arr = [10,20,30];

console.log(arr)

let arr1 = [10,20,30,"String",10.11, true];

console.log(arr1)

console.log(typeof(arr1));

// Returns object as array is a class and arr1 is an object of that class


// Object

// In the form of key-value pairs and put comma (,) only [kind of like python dictionary]

let obj = {
    user_name: "Rohit",
    account_number: 43334343434,
    balance: 420
}

console.log(obj);

console.log(typeof(obj));

// Use of object as we need to group or keep same type of data together

// Also if we need to bring this data from backend if separate they will come 1 by 1 but with object all will come together

// Cannot do this by array as we won't know the order or we won't know which indicates it's account number, which is balance etc 

// Repeatedly asking backend for info due to this our frontend will slow therefore we use object


// We can assign a function also to a variable

let fun = function(){
    console.log("Hello Coder Army");
    return 10;
}

fun();

// Without function calling function won't work

console.log(typeof(fun));

console.log(fun());


// Type conversion

let account_balance = "100";

let num = Number(account_balance);

console.log(Number(account_balance));

console.log(typeof(num));

let bool = true;

console.log(Number(bool));

// Return 1 as of course true

let x = false;

console.log(Number(x));

let account = "100xs";

console.log(Number(account));

// Returns NaN (Not a Number) as xs cannot be converted to number

let y;

console.log(Number(y));

// Returns NaN (Not a Number) as not defined

let z = null;

console.log(Number(z));

// Returns 0 for null



// String conversion

let ab = 20;
console.log(String(ab));

let ax = true;

console.log(String(ax));

let ay = false;

console.log(String(ay));

// Boolean

console.log(Boolean("str"));

// Return true (returns false only if string is empty)

let abc = " ";

console.log(Boolean(abc));

// Will return true as there's something in string (even space). {as space as ASCII value also}


console.log(4+8+12);

// Same for other operators also

console.log(6*3+18/6-9);

// Used same operator precedence and associativity

// Divide multiply same and left to right and then add and subtract


console.log(20%3);


// ++ , --

let sum = 20;

sum++;

console.log(sum);

// Post increment and post decrement 

console.log(++sum);

// Pre increment and pre decrement

// Assignment operator

let xaa = 5;

xaa += 10

console.log(xaa);