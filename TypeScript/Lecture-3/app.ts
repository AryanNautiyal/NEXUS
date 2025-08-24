

interface Person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number                   // Some people might not have aadhar card yet so they won't have an aadhar number

    // So we will make aadhar number optional by putting "?"
};

const obj:Person = {
    name:"Rohit",
    age:20,
    gender:"Male",
    aadhar:1234
};

const obj1:Person = {
    name:"Mohit",
    age:10,
    gender:"Male"
};



// Utility Types for Objects


interface customer{
    name:string,
    age:number,
    balance:number
};

const obj2:Partial<customer> = {

    name:"Rohit",
    balance:210
};

// Due to writing partial all it's properties are optional now


interface customer1{
    name:string,
    age:number,
    balance:number
};

const obj3:Required<customer1> = {

    name:"Rohit",
    balance:210,
    age:30
};

// Due to required all it's properties are compulsory to enter now

interface customer3{
    name:string,
    age:number,
    balance:number
};

const obj4:Readonly<customer> = {

    name:"Rohit",
    balance:210,
    age:20
};

// obj4.name = "Mohit";        

// Readonly makes all the property read only so we cannot modify it


// Array of objects


const arr = [{name:"Rohit",age:20},{name:"Mohit",age:25}];

/*

    By hovering mouse over the arr it tells

        const arr: {
        name: string;
        age: number;
    }[]

*/

const arr1: {name:string,age:number}[] = [{name:"Rohit",age:20},{name:"Mohit",age:25}];


// Function in TS

// function greet(a){
//     console.log(a);
//     console.log("Hello");
//     return a+5;
// }

// Above gives error as we haven't specified the type

function greet(a:number):number{
    console.log(a);
    console.log("Hello");
    return a+5;
}

// a:number indicates a is of number type then 2nd number indicates that return type is number


console.log(greet(10));


function meet(msg:string,val:number):void{
    console.log(msg,val);
}

meet("Anshika Verma",4);



function neet(msg:string = "Jit"){      // Default parameter

    console.log(msg);

}

neet();
neet("Bittu");


// Optional parameter

function GATE(person?:string){

    console.log(person || "Mohan");     // If no value entered then use "Mohan"
}

GATE("Rohit");
GATE();



// Arrow function

const sum = (a:number,b:number):number => {
    return a+b;
}

console.log(sum(10,5));


// Callback function


function placeOrder(order:number,callback:(amount:number) => void): void{

    const amount:number = order+10;
    callback(amount);

};

placeOrder(10,(amount:number)=>{
    console.log(amount);
});



// Rest parameter

function total(...arr:number[]):number{

    let ans:number = 0;

    // for(let val of arr){

    //     ans = ans + val;
    // }

    arr.forEach((val:number) => ans += val)
    return ans;

}


console.log(total(2,3,4,5,6,4,2,4,6,3,5));



// extend keyword

interface human{

    name:string,
    age:number
};

interface Teacher extends human{
    salary:string,
    id:number
};

const obj5:Teacher = {
    name:"Rohit",
    age:20,
    salary:"chillar",
    id:34
};

interface BankEmployee extends human{
    salary:string,
    position:string
};

const obj6:BankEmployee = {

    name:"Rohit",
    age:20,
    salary:"chillar",
    position:"Manager"
};


const obj7:(BankEmployee | Teacher) = {
    name:"Bholu",
    age:10,
    salary:"Chillar",
    id:345,
    position:"Manager"
};
