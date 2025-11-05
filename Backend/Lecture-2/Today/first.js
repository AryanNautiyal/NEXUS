


// sum

// const sum = require("./current/sum");

// // sub

// const sub = require("./current/sub");

// mul

// const mul = require("./current/mul");


// sum(2,4);

// sub(3,4);

// mul(6,8);


// console.log("Hello Ji");


// So this is not a good practice as we are requiring them one by one

// So instead of it we will create an index.js file and import it all here




// So now instead of importing them one by one we have imported them in a single file and we will just import that file



// const {sum, sub, mul} = require("./current/index");




// Can do it without writing /index also



const {sum, sub, mul} = require("./current");




sum(2,4);

sub(3,4);

mul(6,8);


console.log("Hello Ji");



// So it's Node.js rule that if we are exporting something and we are going inside a folder and in require we have only specified folder name

// Then by default it exports index.js




