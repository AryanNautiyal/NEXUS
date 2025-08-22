

let num = 231;          // Number

let num1 = new Number(231);     // object

console.log(num1);

console.log(typeof(num1));

let num2 = new Number(231);

console.log(num1==num);         // Returns true as both first converted to number then compared so 231==231

console.log(num1==num2);        // Returns false as both are object type so no conversion then it compares so num1 & num2 will have different address space reference

let num3 = 231.68;

console.log(num3.toFixed(1));       // We wanted one digit after decimal only so it rounded it off 

let num9 = 231.6894;

console.log(num9.toFixed(1)); 

console.log(num9.toFixed(2)); 

console.log(num9.toFixed(3)); 

console.log(num3.toPrecision(4));       // We want 4 digits only 

console.log(num3.toPrecision(3));

console.log(num3.toPrecision(2));       // Gives exponential form here

console.log(num3.toExponential(2));     // Will give only 2 digits after decimal and gives in exponential form

console.log(num3.toString());

console.log(typeof(num3.toString()));

console.log(num3.valueOf());        // Only tells value



// Math

console.log(Math.E);        // E = Euler's value

console.log(Math.LN10);         // Log base e to 10 (loge 10)

console.log(Math.PI);


console.log(Math.LOG10E);


console.log(Math.random());     // Value is between  0-1

console.log(Math.random()*10);

let num4 = 23.5;

console.log(Math.floor(num4));

console.log(Math.ceil(num4));

console.log(Math.floor(Math.random()*10));

// Math.random() generates value between range 0 to 1

console.log(Math.floor(Math.random()*10)+1);  // random gives value 0 to 1 then *10 it gives 0-9 floor makes value integer and then we added one to make range 1-10

// console.log(Math.floor(Math.random()*(max-min+1)+min));

// How is this formula generated ?

//      max-min+1 = how many different numbers we want (range). {as there's 0 also so max-min+1 is done}

//      +min to get that range starting as if random number is zero and range is 11-20 we need to add 11 which is min

