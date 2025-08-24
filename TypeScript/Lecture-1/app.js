"use strict";
// Javascript comes inside typescript
Object.defineProperty(exports, "__esModule", { value: true });
// So we will see what were the problems in JS due to which we are learning typescript
// All the codes that we write in JS can also be written in TS also so below one is allowed, even though it might give error
// let a = 10;
// let b = 20;
// let a:number = 10;
// let b:number = 20;
// This converts it into old version of JS (ES3 or ES5)
// So we will tell it to convert into which version of JS
// In corresponding JS file use strict comes as we have in config file kept use strict = true
/*

    If you have sourceMap enabled in your tsconfig.json (which is often the default or recommended for debugging),
    tsc will also generate source map files alongside your compiled JavaScript
 
    These .map files allow debugging tools to map the compiled JavaScript back to your original TypeScript source code,
    making it easier to identify and fix issues in your TypeScript

*/
// a = "Rohit";        // Now gives error here 
// It gives line number at which this error occurred which makes debugging easier
// It still converts the TS code to JS even though there's error
// Reason behind this is we can write JS code in TS also as TS is superset of JS
// Or can say TS is parent of JS
// If we write any faulty code which runs in JS then we can write in TS too but it gives error 
// But still it will convert TS file to corresponding JS
// Number
let a = 10;
let b = 20;
// string
let str = "Rohit";
// boolean
let isExist = true;
// Bigint
let bignumber = 12323323343432n; // BigInt literals are not available when targeting lower than ES2020 <= gives this error while writing only
// In JS it won't give error until we run and if output is irregular we will be needed to debug the code
// Whereas in TS it tells the error while writing also and when converting it also tells the error
// null
let abc = null;
// undefined
let bcd = undefined;
let names = "Mohan";
let honey = 20;
//# sourceMappingURL=app.js.map