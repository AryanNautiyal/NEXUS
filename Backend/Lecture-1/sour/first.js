
import sum from "./second";

console.log("Hello Ji");


// Code didn't work here as you know in HTML and all we define type as module then only it allows import and export 

// Therefore we cannot use import and export here



// So from here we can withdraw a conclusion that our Node.js by default supports our CJS module 


// So our latest is MJS (Module JavaScript and refers to files that use the modern ECMAScript Modules (ESM) syntax with import and export keywords)



// So if we change their file extension to mjs then we can use import and export 

// Made new sour1 folder for it


// When we were doing react we weren't doing anything this was because we had bundler there which was handling everything


// So then we will have to use mjs everywhere so we don't want to do that also so we can do this

// So we can instead so that we can just use npm init or can create package.json file and then inside that do this


/*

    {
        "type" : "module"
    }

    Due to this we can now use import export statements 

*/


// Can do "type" : commonjs for CJS module

