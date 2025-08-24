"use strict";
// Classes
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hi ${this.name}`);
    }
}
const obj1 = new Person("Rohit", 20);
const obj2 = new Person("Mohit", 25);
console.log(obj1);
console.log(obj2);
obj1.greet();
obj2.greet();
console.log(obj1.name);
// public private protected
// In Js only public is there, implementation of private in JS is very different
// Protected doesn't exist in JS
class Customer {
    // Can do same with functions too
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    setter(age1) {
        this.age = age1;
    }
    getter() {
        console.log(this.age);
    }
}
const P1 = new Customer("Deepak", 20, 420);
console.log(P1.name);
// console.log(P1.balance);     // Protected
// console.log(P1.age);
// P1.age = 30;         // Cannot change value too
// So to change just make setter function
P1.setter(21);
P1.getter();
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
}
const E1 = new Employee(420, "rohit", 20, 320);
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
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
// So whichever type goes in T will be returned by function (T) so hence we made generic function
console.log(["Helloo", "Dosto", "Better"]);
// Some people do this also
console.log(value(10));
const obj10 = {
    name: "Rohit",
    age: 20,
    aadhar: 123
};
const obj11 = {
    name: "Mohit",
    age: 25,
    aadhar: "abcd122233"
};
;
const obj12 = {
    name: "Mohit",
    age: 25,
    aadhar: "abcd122233",
    salary: 12345
};
//# sourceMappingURL=classes.js.map