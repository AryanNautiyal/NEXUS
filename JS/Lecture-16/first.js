

// writable = false is not used for prevention of hacking 

// It is used so that no one accidentally changes it



// for of loop

// Aaram se access array

const arr = [10,20,30,40,50];

for(let value of arr)
{
    console.log(value);
}


let str = "Rohit is good boy";

for(let value of str)
{
    console.log(value);
}


// Don't use for of loop in object

const obj = {
    name:"Chavi",
    age:22,
    gender:'female'
};

/*
for(let value of obj)
{
    console.log(value);                     // Doesn't print as obj is not iterable (we don't know how can we reach second key from first key)

    // Symbol.iterable is not defined for object
};

*/

// If we just want to do it

for(let value of Object.values(obj))
{
    console.log(value);
}

// forEach can also be used to iterate over array

let arr01 = [10,20,30,40,50];

arr01.forEach(function(num){                    // Expects a call back function so we make a function
    console.log(num);
});

// Best approach

arr01.forEach((num)=>console.log(num));

arr01.forEach((num, index)=>console.log(num, index));       // prints index too

arr01.forEach((num, index, arr)=>{
    arr01[index] = num*2;
    console.log(arr01[index]);
});  

// Call back function = giving function as argument in a function



// filter

let arr02 = [10,22,33,41,50];

const res = arr02.filter((num)=>{
    return num%2 == 0;          // returns true or false , will take number if true , if not doesn't take it
});

console.log(res);


let arr00 = [10,11,22,33,44,55];

arr00.filter((num)=> num%2 == 0).forEach((num)=> console.log(num));

const students = [
    {name:'Rohan', age:22, marks:70},
    {name:'Ron', age:24, marks:80},
    {name:'Ro', age:22, marks:30},
    {name:'Roh', age:22, marks:40},
    {name:'Roan', age:22, marks:90}
]

const result = students.filter((value)=> value.marks>50);

console.log(result);

// Can also do result by this also


const result2 = students.filter(({marks})=> marks>50);                  // Destructured object as only marks were needed

console.log(result);

const result1 = students.filter((value)=> value.marks>50).forEach((value)=> value.grade = 'A+');

console.log(result);



const arrr = [1,2,3,4,5];

const ress = arrr.map((num)=> num*num);

console.log(ress);                  // Can modify results here

arrr.map((num)=> num*num).forEach((num)=>console.log(num));                 // map and filter are different as filter can only filter results 

// map and forEach are different as in case of forEach nothing is returned

const r = arrr.forEach((num) => num);

console.log(r);     // returns undefined


const a = [1,2,3,4,5,6];

const rr = a.filter((num)=>num%2==0).map((num)=>num*num);

console.log(rr);


