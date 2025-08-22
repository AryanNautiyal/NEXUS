

// About scope & why var is bad


let a = 10;
var b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

//  Everyone here is now global scope 


function fun(){
    let d = 20;
    var e = 20;
    const f = 30;

    // d,e,fis local variable and scope is within function {}
    
    console.log(d,e,f);   

    console.log("Function scope Ended");

};

fun();

// console.log(d,e,f);         // Won't print as they are local variable

if(true){
    let g = 20;
    var h = 20;
    const i = 30;

    // Block scope
};

console.log(h);             // This is the reason why we don't use var as although we shouldn't be allowed to access local variable outside {} but in case of if block we can that's why not preferable


// console.log(g);          // As you know local variable

// Also var allows to create same name variables in same scope which is dangerous

var amount = 100;
var amount = 200;

console.log(amount);        // Output 200 

// Same variable name with 2 values whereas in let and const it gives error for it



// Global scope you know

// Local scope (functional scope {functions here only})

// Block scope (if else block , for loop etc)

// Var didn't follow block scope



// Another reason why var is degenerate


console.log(z);         // Returns undefined instead of error as it knows that z variable is created but as it isn't assigned value before it so it gives undefined
var z = 50;



// Can do this


hi();


function hi(){
    console.log("Hi");
}


// But

// ff();       // Cannot do this

const ff = function(){
    console.log("Hello");
}

ff();

// because we did it in variable and variable needs to be declared and defined before 

// In other case you know function declared


let i = 1;
while(i<6){
    console.log("Hel");
    i+=1;
};


do{
    console.log("He");
    i+=1;
}while(i<10);




