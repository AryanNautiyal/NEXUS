


<!-- Arrow function: Multiply -->

<!-- Rest Parameter -->

<!-- CallBack Function -->

type chill = (a:number) => void;


<!-- classes in TS -->
class Bank{
    name:string;
    age:number;
    account:number;

    constructor(name:string,age:number,account:number){
        this.name = name;
        this.age = age;
        this.account = account;
    }

    greet():void {
        console.log(`Hello ${this.name}`);
    }
}

const B1 = new Bank("Rohit",20,102);




<!-- public: Default; accessible everywhere.
private: Accessible only within the class.
protected: Accessible within the class and its subclasses. -->

<!-- Inheritance -->

<!-- super keyword is used to call the constructor of parent -->
<!-- super.mehtod() is used to call parent class method also from child class -->



<!-- Generics -->
Generics in TypeScript allow you to create flexible, reusable components by enabling you to specify types as parameters in functions, classes, interfaces, and other constructs. This helps provide type safety while keeping the flexibility to work with various data types.


function identity<T>(value: T): T {
  return value;
}

console.log(identity(5));           // Works with numbers
console.log(identity("Hello"));     // Works with strings
console.log(identity([1, 2, 3]));   // Works with arrays



<!-- Generic Interfaces -->

interface Person<T> {
    name:string,
    age:number,
    id:T
};

<!-- You can use multiple generics also -->




