

// for in loop : Isko array ke saath nhi lete

const arr = [10,20,30,40,12];

for(let key in arr)
{
    console.log(key,arr[key]);                   // key prints index as in array key-value pair is index-value pair
}

// As at the end array is an object so we can also do this

arr.name = "Rohit";

for(let key in arr)
{
    console.log(key,arr[key]);              // But array cannot have string as an index whereas here we can do it that's why we don't use it with for in loop             
}

for(let i=0;i<arr.length;i++)
{
    console.log(i,arr[i]);              // Doesn't print name which is correct
}

// definedProperties : to change many properties at once

