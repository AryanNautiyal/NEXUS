

// https://v8.dev/blog/fast-properties <== Read this blog for how fast memory access is done in v8 engine by hashing

// Function

function greet(){

    console.log("Hello Coder Army");

    console.log("Namaste bhaiyo");

    console.log("Toh kaise ho aap log");

}

greet();

function sum(num1, num2){               // num1 & num2 are parameters
    console.log(num1 + num2);
};

sum(3,4);           // 3 & 4 are arguments

const f = function(){
    console.log("Hello Luffy");
}

f();

// f is stored in stack & function is stored in heap

console.log(f());       // undefined as didn't return anything



// Arrow function

const fun = () => {
    console.log("Hello Coder");
}

fun();

const sum01 = (a,b) => {
    return a+b;
}

console.log(sum01(3,4));

// Advantage is that it's shortcut like this

const sum02 = (a,b) => a+b;     // Automatically returns a+b

console.log(sum02(3,4));

// If writing in single line then no need for {} and return also

const cuboid = (a,b,c) => a*b*c;

console.log(cuboid(2,2,2));

const cube = num => num*num;        // Removed () as single parameter

console.log(cube(8));

const print = function(...number){
    console.log(number);
} 

print(1,2,3);

print(5,7,9,4,2);

print(2,5);


let obj = {
    name: "Rohit",
    age:20,
    amount:420
};

function fun01(obj1){
    // obj1 = {name:"Damn",age:45};        // didn't work as obj1 reference is redirected to another address space while the obj had the same address as changes were done in obj1
    console.log(obj1.name, obj1.amount);
};

fun01(obj);

// Can also do this by

function fun02({name,amount}){
    console.log(name, amount);
};

fun02(obj);


// Don't use this very costly operation

// obj2 = Object.create(obj1);

// console.log(obj2.__proto__);

