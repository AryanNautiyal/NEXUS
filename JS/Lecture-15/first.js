

let obj = {
    name:"Rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};



// For in loop

for(let key in obj)
{
    console.log(key, " : ", obj[key]);
}


let obj2 = Object.create(obj);          // Prototype created

obj2.money = 420;

obj2.id = "Roh";

console.log(obj2);              // only money and id are printed as they are obj2 keys , rest can be accessed

console.log(Object.keys(obj2));

for(let key in obj2)                        // Object.keys() only print the keys that the object has
{
    console.log(key);                   // Whereas for in loop prints both the keys (the ones that are inherited and the ones that are in obj2)
}

// So why isn't this also printing the keys of Object.prototype as obj2 is printing it's parent keys in for in loop then why not also printing for grandparent too

// Whenever we write any key value pair we use writable, enumerable and configurable



