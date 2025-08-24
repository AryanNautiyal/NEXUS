
// Classes

class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    greet():void{                       // Without writing function it will work here
        console.log(`hi ${this.name}`);
    }
}

const obj1 = new Person("Rohit",20);

const obj2 = new Person("Mohit",25);

console.log(obj1);

console.log(obj2);

obj1.greet();

obj2.greet();

console.log(obj1.name);


// public private protected

// In Js only public is there, implementation of private in JS is very different

// Protected doesn't exist in JS


class Customer{
    name:string;
    private age:number;         // Now cannot access it outside class
    protected balance:number;

    // Can do same with functions too

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    setter(age1:number): void {

        this.age = age1;

    }

    getter(): void {

        console.log(this.age);

    }
}


const P1 = new Customer("Deepak",20,420);

console.log(P1.name);

// console.log(P1.balance);     // Protected

// console.log(P1.age);

// P1.age = 30;         // Cannot change value too

// So to change just make setter function

P1.setter(21);

P1.getter();


class Employee extends Customer{

    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){

        super(name,age,balance);
        this.salary = salary;
    }

}

const E1 = new Employee(420,"rohit",20,320);

console.log(E1);


// Protected accessible in child class



// Generics : Templates

// function value(a:(number | string | boolean | number[])):(number|string|number[]|boolean){

//     return a;

// }

// console.log(value(10));

// console.log(value("Rohit"));

// console.log(value([10,11,12,13,14]));

// console.log(value(true));

// So to make generalized function who returns what is entered so we use generics


function value<T>(a:T):T{
    return a;
}


console.log(value(10));

console.log(value("Rohit"));

console.log(value([10,11,12,13,14]));

console.log(value(true));

// So whichever type goes in T will be returned by function (T) so hence we made generic function

console.log(["Helloo","Dosto","Better"]);

// Some people do this also

console.log(value<number>(10));


// Generic interface


interface Admin<T>{
    name:string,
    age:number,
    aadhar:T
}

const obj10:Admin<number> = {
    name:"Rohit",
    age:20,
    aadhar:123
};

const obj11:Admin<string> = {
    name:"Mohit",
    age:25,
    aadhar:"abcd122233"
};

interface Admin1<T, U> {
    name:string,
    age:number,
    aadhar:T,
    salary:U
};

const obj12:Admin1<string,number> = {
    name:"Mohit",
    age:25,
    aadhar:"abcd122233",
    salary:12345
};