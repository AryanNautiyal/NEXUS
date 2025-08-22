



// Map is a collection of key-value pair

// Key can be anything here whereas in case of object key is considered as string only

// Map also remembers the order of insertion of elements (**Imp**) so order is maintained

let map1 = new Map();

map1.set(3,90);                     // key, value pair is entered

map1.set("Rohit",45);

map1.set(20,"Mohan");

console.log(map1);

// If we try to use same key again it updates the previous value as key should be unique

map1.set("Rohit",40);

console.log(map1);

map1.delete(3);                 // key is given

console.log(map1);

console.log(map1.has("Rohit"));

console.log(map1.size);

map1.clear();

console.log(map1);

const map2 = new Map([
    [4,"Rohit"],
    ["Mohan","Rohan"],
    [30,9]
]);                                     // Data entered in form of 2D array

console.log(map2);

for(let val of map2)
{
    console.log(val);
}

// for of loop iterates over iterable values whereas for in loop enumerate over enumerable values

for(let [key,val] of map2)                  // destructured array here
{
    console.log(key,val);
}

map2.forEach((num)=>console.log(num));          // Prints values only

[...map2].forEach(([key,value])=>console.log(key,value));           // Prints key value pair now
 