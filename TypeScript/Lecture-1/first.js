

let balance = 200;

// What if someone changed the value of balance here (when code is too long)

balance = "Three Hundred";      // Due to this results in NaN

console.log(balance * 10);

// Same can happen with age

let age = 20;               // We wanted to show this age but below one is printed

age = "Twenty";

console.log(age);

// These things happen when we fetch data from backend

let obj = {

    name: "Rohit",
    age:17
};

console.log(obj.len);               // This also didn't give us error when we try to see length of an object

// Even if we do this it still doesn't give error

console.log(obj.height);

// JS just thinks that it just needs to show the output by any method

// Due to this there will be problems as developer and to debug these we cannot do that in large codes


// Similarly if someone tried to increase age but age is in string (which is done by someone in between)

console.log(age+10);            // Still doesn't show error, it just prints Twenty10

// No error is shown 

// Due to this debugging is much more harder (when we work in companies length of code is large)


// can also store obj.heigth in a variable even though obj.height doesn't exist

const a = obj.height;

console.log(a);

// So all these problems are solved by TS


// TS says that whenever we declare a variable we will tell which type of variable we are taking

// So we will do like this let num:number = 10; so if someone in between write num = "Rohit" it will just give error there

// Hence it's name is TypeScript as we will be needed to specify the type 

// TS is strict to datatype (in short can say this)


// So our browser only understands HTML, CSS, JS 

// Our browser doesn't understand TS 

// So whenever we will write TS code we will convert it to JS code

// This conversion is done by a compiler

