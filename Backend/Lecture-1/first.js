

// require("./second");                            // Before people used to bring second.js file to other JS file

// We require this second.js file in our first.js file hence require (logical name)

console.log("Hello I am first");


// I need second.js code in my first.js file 


// So we call this CJS (Common JS module)






// sum(3,4);




// So based on before we thought that require would bring the whole code of second.js into first.js but we cannot call this function here

// As error it gives is that sum is not defined 

// Hence we can say that we cannot call functions until they are exported

// So they are by default made private in first.js file so sum function must have came as private due to which we cannot access it



// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined

// It is also known as a self-executing anonymous function


// So our whole code of second.js comes like this as shown in IIFE




(function(){


console.log("Hello I am second");




function sum(a,b){
    console.log(a+b);
}

})();



// So all content in second.js file comes inside a function and the function is automatically called (calling itself)

// Hence the name IIFE = Immediately Invoked Function Expression

// sum(3,4) isn't executed as the function is wrapped inside another function




// So we can use sum function by using module.export

// Then we will write sum like this





// const sum = require("./second");  

// sum(3,4);





// Now to export more than 1 function 

const obj = require("./second");  

obj.sum(3,4);

obj.sub(4,3);



// So we call this CJS and this is our old method to export and import things

// People still use it in some places where there is old codes (Used majorly in industries as people haven't switched to import export in backend)

// People use import and export in frontend whereas they use require in backend


// Our new and latest used ones are import and export



