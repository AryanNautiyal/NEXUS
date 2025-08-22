
// global object

console.log("Hello World");

console.log(Math.random());

// So from where are we getting Math.random() function and also console.log()

// So we can say they might be written somewhere that's why we can use them

// Global object is that object in which all this is kept

// In chrome browser the global object is called window

// In our vscode environment the global object is called nodejs

console.log(global);

console.log(global.Math.random());

// So it is very confusing due to many different names so for this reason a common name was done

// globalThis <= points to global object irrespective of the environment

console.log(globalThis.Math.random());



