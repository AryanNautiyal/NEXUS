
// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.


/*


console.log(20);

console.log(window);            // Can see window in console in browser in html page due to linking with script


// They are part of global scope but aren't part of global object
let a = 10;
const b = 20;

// Part of global object
var c = 30;

console.log(this.c);

console.log(this);

console.log(this == window);

// function name(){
//     console.log("Hello Coder Army");
// }

*/



// 1: Global Context (Outside Any Function)
// In browsers: window 
// In Node.js: Module's exports object 



// console.log(this);      // in browser points to window then in vscode it will point to empty object which is called Module's exports object






// ****************************************************************


// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.

// function greet(){
//     console.log(this);
// }

// greet();




// ii: Strict Mode
// this will be undefined inside a function.




// "use strict"                // That we are following latest JS rules (String mode) but in legacy codes they cannot follow this therefore people don't use it much
// function greet(){
//     console.log(this);              // In strict mode giving undefined 
// }

// greet();

// window.greet();



// let and const are not part of global object




// ****************************************************************

// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.



// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this);          // Points to object 
//         console.log(this.name);
//         // console.log(name)           // Doesn't print name here hence used this
//     }
// }

// obj.meet();




// "use strict"

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this);          // Points to object 
//         console.log(this.name);
//         // console.log(name)           // Doesn't print name here hence used this
//     }
// }

// obj.meet();




// ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.




// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);              // As it doesn't have it's own this so it takes from surrounnding which is global scope only ({} <= of object is not considered under scope)
//     }
// }

// obj.greet();





// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);                  // Points to object as arrow function doesn't have his this and it's scope is function only so from function only it will pick and function one points to object only
//         };

//         ab();

//    }
// }



// obj.greet();








// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.





// class Person{
//     constructor(name,age){
//         this.name = name;                   // this keyword points to this instance of the object
//         this.age = age;
//     }
// }


// let a = new Person("Rohit", 20);
// console.log(a);







// let greet = ()=>{
//     console.log(this);
// }

// greet();

// "use strict"

// let meet = function(){
//     console.log(this);
// }

// meet();              // Cannot use window.meet() here as let is not part of global object here






// Executed without specifying anything (non-strict mode. {by default})
// a = 10;
// console.log(a);







// Executing with strict mode gives errors

// "use strict"

// a=10;           // Error name a is not defined
// console.log(a);






// let obj = {
//     name:10
// }

// Object.freeze(obj);

// obj.name = 30;          // No error here without strict

// console.log(obj);







// "use strict"

// let obj = {
//     name:10
// }

// Object.freeze(obj);

// obj.name = 30;          // error here with strict so it makes debugging easier

// console.log(obj);





// let & const are part of block scope whereas var is part of global object 

// So whoever is part of global object is accessible everywhere in the entire program

// If let & const also become part of global object then they will be accessed directly outside the block scope also

// When we create var inside function then only it doesn't become part of global object