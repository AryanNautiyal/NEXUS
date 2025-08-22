

//  Don't use Math.random() for otp generation as Math.random() has some algorithm which it applies on system clock to calculate random number

//  So if hacker gets the system clock then there are high chances it can use patterns and algorithms to just find the algorithm that generates otp

//  And with this it can just use system clock and algorithm to find otp generated

const arr = [2, 35, 1, 8, 9, "rohit", true];

console.log(arr);

console.log(arr.length);

console.log(arr[3]);

console.log(arr.at(4));     // Returns value at given input index

console.log(arr[-3]);       // Returns undefined as it doesn't accept negative indexing

console.log(arr.at(-3));        // It accepts negative indexing in case of at()

const newarr = arr;

console.log(arr==newarr);

const newnewarr = structuredClone(arr);         // Instead of putting address stored in arr it makes a copy of arr and stores it in different place so even if we edit something in arr it will not reflect in newnewarr

console.log(arr==newnewarr);

// push

arr.push(30);
arr.push(50);

console.log(arr);       // Added 2 elements in arr

console.log(newnewarr);         // No changes in it


// pop

arr.pop();

console.log(arr);

arr.pop()

console.log(arr);

arr.unshift(9)      // Adds element in the starting of the array

console.log(arr);

arr.unshift(30);

console.log(arr);

arr.shift();        // Removes element from the starting of the array

console.log(arr);

arr.shift();

console.log(arr);


delete arr[0];      // Can delete an element at a particular index but it's problem is it leaves empty space <1 empty item>

// Due to this the disadvantage as elements have same index and 1 space is empty in arr (not preferable to use)

console.log(arr);

arr.shift();

arr.push(8);

console.log(arr);

console.log(arr.indexOf(8));        // Returns first index of occurence 

console.log(arr.lastIndexOf(8));        // Returns last index of occurence

console.log(arr.includes('rohit'));     // Same work



// slice

console.log(arr);

console.log(arr.slice(2,5));            // Same as in string

console.log(arr);           // No change in original array 

// splice

/*

console.log(arr.splice(2,5));       // 1st parameter : Starting index  & 2nd parameter : Number of elements we want

console.log(arr);           // Change in original array

// Elements that are left are in original array rest are either in new array or some other place due to splice

*/

// Can do like this

console.log(arr);   

let newsplice = arr.splice(2,5);


console.log(newsplice);       

console.log(arr);   

// Can also add elements in array with splice 

console.log(arr);   

arr.splice(0,2, 2, 35, 1, 8, 9, 'rohit', true, 8);            // All elements are added in array after first 2 parameters

console.log(arr);   


arr.splice(2,0);            // Gave 0 so that no element is deleted


console.log(arr.toString());   

console.log(typeof(arr.toString()));   

console.log(arr.join(" "));   

console.log(typeof(arr.join(" ")));



let arr2 = [5,12,19,20];

let arr3 = [2,35,6,11];

let arr4 = [23,432,45,344,232,22];

let arr5 = arr2.concat(arr3);

console.log(arr5);

let arr6 = arr5.concat(arr4);

console.log(arr6);

//      'OR'

console.log(arr2.concat(arr3,arr4));

//      'OR'

console.log(arr5.concat(arr4));

// there's not enough space as max 6 can come in one line therefore going in next line (it's not 2D array)


// To make 2D array


let arr7 = [1,5,7,2];

arr7.push(arr2);

console.log(arr7);

console.log(arr7[4]);

console.log(arr7[4][2]);


// 2D array

let arr2D = [[1,2,3,4],[5,6,7,8], [9,10,11,12]];


console.log(arr2D);

console.log(arr2D[1]);


let arr3D = [[[1,2,3],[4,5,6]],[[7,8,9],[10,11,12]], [[13,14,15],[16,17,18]]];

console.log(arr3D);

console.log(arr3D[1][1][1]);

// Flat is used to reduce dimensionality (by default 1)
let newarr1 = arr2D.flat();

console.log(newarr1);       // Made the array 1D from 2D


let newarr2 = arr3D.flat();

console.log(newarr2);

// Since it was 3D array so it converted it to 2D array but couldn't convert it to 1D array so we do this instead as it takes one parameter

let newarr3 = arr3D.flat(2);

console.log(newarr3);

// To convert any dimension array to 1D 

let newarr4 = arr3D.flat(Infinity);

console.log(newarr4);

// So when we want to see if given variable is array we use

console.log(typeof(newarr4));           // But this returns object only so instead we do this

console.log(Array.isArray(newarr4));        // Returns true if yes and false if no

// Not recommended method to create array

let ac = new Array(2,233,44,34,55,22,44);

console.log(ac);

// 1 Problem in this is that when we enter only 1 element to add in array it instead creates that much space for elements

let an = new Array(5);

console.log(an);

// So with only multiple elements it adds them to array



/*

    In cpp arrays are stored in contiguous allocation in heap (as we use new keyword)

    So whenever size is increased the array is reallocated with bigger size

    But in JS this doesn't happen

    As in JS array can not only store integers but can also store string, boolean etc and all have different memory requirement

    Therefore the size of array is variable;

    

*/