

//  set 

const set1 = new Set([10,20,30,40,10]);

console.log(set1);

console.log(typeof(set1));

const set = new Set();

set.add(4);

set.add(6);

set.add("Rohit");

set.add(30);

console.log(set);

console.log(set1.size);         // Returns size of set

set.delete(6);

console.log(set);

const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);

let new_user = "rohit_negi9";

console.log(user_id.has(new_user));         // Checks membership

user_id.clear();                    // Clears all the elements in the set

console.log(user_id);

let arr = [10,30,20,10,40,50,30];

const seet = new Set(arr);

console.log(seet);

arr = [...seet];                // ... brings or expands the set

console.log(arr);

let s1 = new Set([10,20,30,40,50]);

let s2 = new Set([10,20,70,80]);

// For union

let s3 = new Set([...s1,...s2]);

console.log(s3);

// For intersection

let s4 = new Set([...s1].filter((num)=> s2.has(num)));

console.log(s4);

// filter can only be applied to array

s1.forEach((num)=>console.log(num));            // One way to iterate over set

for(let value of s1)
{
    console.log(value);                     // Another way
}

for(let value in s1)
{
   console.log(value);       
}


