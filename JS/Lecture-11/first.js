
//  How to create object

const obj = {
    name:"rohit",
    account_balance:420,
    gender:"Male",
    age:30
};

console.log(obj);

const inst = {
    insta_id : 'rohit_negi9',
    password : "Male",
    age: 30
};

console.log(typeof(inst));

console.log(obj.name);

console.log(obj.age);

console.log(obj.gender);

// Key is stored as string only

const obj1 = {
    "name" : "rohit",
    "account_balance" : 420,
    "gender" : "Male",
    "age" : 30
};

// Can write like this also as key is stored as string only

console.log(obj1.name);

console.log(obj1["name"]);          // Can also access like this

console.log(obj["name"]);

// Cannot give space in key if using without string one

// If we give any number as a key then also it will be ultimately stored as a string only

const objj = {
    0:20,
    // accoun t: 23310
    "accoun t": 23310               // Using this then only space is considered
};

// console.log(objj.0);        // Cannot access it using this

// console.log(objj.accoun t);     // Same here also 

console.log(objj['0']);

console.log(objj["accoun t"]);      // Now both can be accessed

console.log(objj[0]);           // Can access normal only (for numbers only)

// Array is also type of object

let arr = [10,20,30];

// Same as

const arr1 = {
    0:10,
    1:20,
    2:30,
    length:3
};

console.log(arr1[1] , arr[1]);


const objjj = {
    undefined : 30,
    null : 0
};

// Undefined is converted in string only

console.log(objjj['undefined'], objjj.null);

const person = new Object();

console.log(person);            // Empty object

// Can add delete or modify property later

person.name = 'aryan';

person.age = 20;

person.gender = "Male";

console.log(person);

delete person.age;

console.log(person);

person.name = "Mohit";

console.log(person);

//  Third method to create object

class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let per1 = new People('Rohit',20,"Male");

let per2 = new People('Mohit',25,"Male");

console.log(per1,per2);

// Advantage of this is we can create more person and also the we won't be needed to write age, name key names again and again


// Common methods for object

let object = {
    name:'Rohit',
    age:30,
    account_balance:420,
    gender:"Male"
};


const arrob = Object.keys(object);           // Returns Array

console.log(arrob);

const arrobj1 = Object.values(object);

console.log(arrobj1);

const arrobj2 = Object.entries(object);     // returns 2D array (each 1D array contains key-value pairs)

console.log(arrobj2);

// Assign use

const obj11 = {a:1,b:2};

const obj22 = {c:3,d:4};

// const obj33 = obj11 + obj22;

// console.log(obj33);         // With this cannot combine

// Hence used this

// const obj33 = Object.assign(obj11,obj22);

// console.log(obj33,obj11,obj22);

// We can see that obj11 has also changed therefore in 1st parameter we assign {} so that can changes will be in {} as source

const obj33 = Object.assign({},obj11,obj22);

console.log(obj33,obj11,obj22);     // Now no change in obj11

// Object.assign(target,source)     It's like this

obj33.a = 10;

console.log(obj11.a);           // Didn't change obj11.a also

// Shallow copy vs Deep copy

/*

        Shallow copy is just giving the same pointer reference or same address value of the original object to the copy 

        Any changes in shallow copy will result in changes in original also


        Deep copy creates a real copy more like StructuredCopy() and changes in copy will not result in changes in original one

*/

// Spread operator

const obj5 = {...obj11,...obj22};       // Can combine like this also

console.log(obj5);

obj5.a = 102;

console.log(obj5,obj11);        // No changes in obj11 (deep copy)

const obj6 = Object.freeze(obj5);

const obj7 = Object.seal(obj5);

/*

        Object.freeze()	

            -- ❌ Prevents adding new properties	

            -- ❌ Prevents deleting properties	

            -- ❌ Prevents changes to existing properties	

            -- Shallow (does not freeze nested objects)	

            -- Full immutability	


        Object.seal()

            -- ❌ Prevents adding new properties

            -- ✅ Allows deleting existing properties

            -- ✅ Allows modifying existing properties

            -- Shallow (does not seal nested objects)

            -- Partial immutability (lock structure)




*/





