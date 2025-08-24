

// Type Inference in TS

let num:number = 10;

let x = 10;     // Gives no error

x = 20;         // Gives no error

// x = "Rohit";        // Gives error

// Even though we didn't specify the type of x it still gives error 

// So here it automatically determines the type of x to be a number so when we changed it to string it gives error

let money;      // Now it's type is any as we haven't given it any value so we can now use it as normal JS variable

money = 20;

money = "Rohit";

// This is dangerous 

// unknown is safer than any

let val2:unknown;

val2 = 20;

val2 = "Rohit";


console.log(money.toUpperCase());       // Works with any

// console.log(val2.toUpperCase());    // It's giving error as we cannot perform any operation on unknown until we specify it's type


if(typeof(val2) === 'string')
{
    console.log(val2.toUpperCase());    // Now gives no error
}

if(typeof(val2) === 'number')
{
    console.log(val2.toFixed(2));
}


// Array

let arr:number[] = [2,4,5,7,11];

let arr1:number[][] = [[1,2,3,4],[5,6,7,8]];

let arr3 = ["Rohit", 20, 11, "Sohan"];          // Automatically guesses it's a mixed array of number and string

let arr4:(string | number)[] = ["Rohit", 20, 11, "Sohan"]; 

// "|" this symbol indicates union

arr4.push(10);

let arr5:(string | number | boolean)[] = [1, "Aryan", 5, 7, 9, "Mohan", false];


let tuple:[string,number] = ["Rohit",10];

let tup:[string, number, number] = ["Rohit",10,23];

// JS before was interpreted language 

// Interpreted language means that it just directly runs code line by line whereas compiler converts it to machine code or intermediate format and then it executes

// Hence JS is slow as compared to Cpp 

// Before JS was slow but now they converted from interpreted language to JIT (Just In Time) language

// Due to which JS was fast and there was a boom for it

// JIT is combination of compile time and interpreted

// (v8 engine) First JS behaves like interpreted language, line by line gives instruction to CPU to execute the code

// Now it sees that there's a function or loop (function is called repeatedly)

// So at first it is interpreted only  but when function is called again after instead of line by line executing it 

// It just gives the machine code to the CPU to execute it 

// So it means first time it executes it line by line but when it is called again then instead of line by line it just gives the whole machine code that it interpreted earlier to the CPU to execute

// An interpreter processes and executes code written in a high-level programming language line by line

// It translates each line into machine-readable instructions and executes it immediately before moving to the next line 

// This differs from a compiler, which translates the entire program into machine code before execution 

// JavaScript (JS) is not strictly an interpreted or compiled language; rather, modern JavaScript engines employ a Just-In-Time (JIT) compilation approach

//  This means that while JavaScript code is initially interpreted, frequently executed or "hot" sections of the code are dynamically compiled into optimized machine code at runtime

// Platform dependent : Cpp code is compiled and converted to machine code but this machine code cannot be run on other system

// As this machine code is specific to the machine it is compiled on so in other system Cpp code will be run again and compiled again by the other compiler which converts it into machine code which is specific to their system

// Platform independent : Java generates bytecode  or compiler converts the Java code to platform independent byte code

// This byte code can be then executed in any system by JVM (JVM is platform dependent)

// JS is platform independent

// As there is no intermediatory between JS so we will be needed to give only the source code or js file only to execute it 

// Like in java there is intermediatory bytecode similarly in cpp it's machine code, in js there's nothing so platform independent

// Only browser is needed

// In TS we are only compiling it to convert it to .js file

// Then JS runs

// So compiler name is not really correct for it so people call it transpiler (translation) 

// transpiler is not converting TS code to machine code or interpreting it, it is only translating it to js code



// Objects

let obj1 = {
    name : "Rohit",
    age : 20,
    gender : "female"
};


// inline 

let obj2:{name:string,age:number,gender:string} = {
    name : "Rohit",
    age : 20,
    gender : "female"
};


let person : {name:string, age:number, balance: number};

person = {
    name:"rohit",
    age:20,
    balance:420
};

// Using type aliases

type customer = {
    name : string,
    age:number,
    id:string
};

let c1:customer = {
    name:"rohit",
    age:20,
    id:"fsfsd"
};


// Interface

interface admin{
    name:string,
    age:number,
    position:string
};

let obj3:admin = {
    name:"Rohit",
    age:20,
    position:"manager"
};

// Use interface intead of type as interface is strong

interface admin1{

    name:string,
    age:number,
    position:string

};

interface admin1{
    id:string
};

// Merges both so we need to enter id also if we are taking admin1

let obj4:admin1 = {
    name: "rohit",
    age:20,
    position:"manager",
    id:"fsddfsdd"
};

// type cannot merge and interface translation process is fast so it is optimized


// type can be used with primitive datatype also

// Interface used only with object

