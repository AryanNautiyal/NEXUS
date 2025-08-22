let obj={};

obj.name = "Rohit";

// key value writable enumerable configurable

console.log(Object.getOwnPropertyDescriptor(obj,'name'));               // writable enumerable connfigurable By default added and all are true

// writable = true  (we can change the value)

obj.name = "Mohit";
obj.age = 20;

console.log(obj);

// writable = false (we cannot change the value)



// Configurable = true means we can change writable enumerable and configurable value to true or false

// if configurable = false then we cannot change it

let obj1 = {};

Object.defineProperty(obj1, 'name', {
    value: "Rohit",
    writable:true,
    enumerable:true,
    configurable:false
});

console.log(obj1);

// When writable = false

obj1.name = "Mohit";

console.log(obj1);              // No change is observed

// When configurable is false

Object.defineProperty(obj1, 'name',{
    writable:false
});

obj1.name = "Mohit";

console.log(obj1);          // Still working like writable = true


const obj01 = {
    name:"Rohit",
    age:23,
    account_number:30001
};

Object.defineProperty(obj01,'account_number',{
    writable:false
});

obj01.account_number = 20001;

console.log(obj01.account_number);


const customer = {
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000
};

// name and account_number kabhi change nhi hone chahiye

Object.defineProperty(customer, 'name',{
    writable:false,
    configurable:false
})

customer.name = "Mohit";

console.log(customer);

Object.defineProperty(customer,'account_number',{
    enumerable:false
});

// Jis bhi key ka enumerable true hoga un sabhka access hoga ya print karega 

// Inherit ki hui bhi print hogi keys jabh tak unka bhi enumerable false kara ho

for(let key in customer)
{
    console.log(key);               // Account number is not printed as it's not enumerable
}

let customer2 = Object.create(customer);

customer2.city = 'Haridwar';

customer2.place = 'Delhi';


for(let key in customer2)
{
    console.log(key);               // Prints it's key + inherited keys but account number is not printed as enumerable is false          
}

console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
