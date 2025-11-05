

// Closure

let b = 10;

function greet(){
    let a = 20;

    console.log(a);

    function meet(){

        console.log(a);

    }

    return meet;

}

const num = greet();

console.log(num);

num();

// This is closure

// console.log(a);



/*

    So the function greet is called and executed and every other function or code is executed as all functions are stored in heap

    So even if they are removed from stack we can still access them so in num the reference of meet function is stored

    That's why it can access it and the function meet has stored the reference of outer variables it can access

    Hence a is printed

*/

