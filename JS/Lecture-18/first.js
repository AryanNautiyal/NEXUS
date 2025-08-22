

/*
var x = 10;
let y = 20;
const z = 30;

console.log(x);

console.log(y);

console.log(z);



*/

/*

    Execution context is created here

    It is divided into 2 parts 

            -- Memory

            -- Code

    It allocates memory first (tasks are not being executed only memory is allocated)

    When it allocates memory to x it has value undefined as it is variable (tasks are executed in code part)

    Now y will be allocated memory but they were added later in JS versions so for this they do not give them anything even the undefined 

    Whereas they gave undefined for var as it was added before and was used too much before (before let & const were added)

    Same for const also. This is called as **temporal deadzone**

    So now memory allocation is done then it executes or starts code execution phase

    So first statement is executed i.e. var x = 10;

    Then after that let y = 20; is executed

    Then after that let z = 30; is executed

    After executing those statements and assigning them those values in their memory space next lines are executed

    first console.log(x); prints x on the screen

    Then console.log(y); prints y on the screen

    Then console.log(z); prints z on the screen

*/



/*

    JS is synchronous single threaded language. It means one instruction at a time is executed in JS i.e. there is no concurrency here.

    Now synchronous means that it will read all the instructions line by line in synchronized manner

*/



/*
console.log(x);

console.log(y);

console.log(z);


var x = 10;
let y = 20;
const z = 30;


*/

/*

    Here also same will happen

    First memory allocation is done 

    x is initialized with undefined whereas y & z are only declared but are not initialized

    Then we come in code execution phase

    console.log(x); is executed and undefined is printed as x is initialized with undefined

    console.log(y); is executed and error is shown as y is declared but not initialized and same with z

*/


/*

    What is temporal deadzone?

            -- y & z are in temporal deadzone until they are initialized

            -- The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using let and const. 
            
            -- It's the period between when a variable's scope is entered and when the variable is actually declared, during which the variable cannot be accessed.

            
            
            1. The variable exists in scope from the start of its enclosing block

            2. But it cannot be accessed until its declaration is executed

            3. Attempting to access it earlier results in a ReferenceError

*/



//  declare -------------------------------------------------- initialization
//                         temporal deadzone



// Hoisting in JS

// Hoisting is JavaScript's default behavior of moving declarations to the top of their containing scope during the compilation phase, before code execution.

// Hoisting is a fundamental JavaScript concept that explains why you can use some variables/functions before their declaration in code
 
//  Understanding it helps prevent bugs and write more predictable code

/*


        Most appropriate example of hoisting is in that code where we called function before and then wrote code for declaring it

*/

//  example of hoisting in above code

/*
var x = undefined;
let y;                  // Due to hoisting


console.log(x);

console.log(y);

x = 10;
y = 20;

*/


// First in our stack in allocated memory Global Execution Context (GEC) is stored as due to this then memory and code are further done

// For function a separate execution context is created as inside functions also variables are declared and etc

// This execution context will be stored in function calls or space allocated to it in stack and when function is executed the space is deallocated

// When all are executed and program is terminated then GEC is also deallocated stack memory



// greet();

// function greet(){
//     console.log("Hello World");
// }

// First memory is allocated to greet in which function code is stored

// when greet() is called is sees that the greet has been allocated memory and inside that function code is stored and executes that code


// But when function is stored in variable only variable is allocated memory first then after that then variable is initialized with function

