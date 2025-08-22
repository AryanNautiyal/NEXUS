let user1 = {
    name: "Rohit",
    age:20
};

let user2 = {
    amount:20,
    money:50
};

console.log(user2.money);

user2.__proto__ = user1;                // Due to this user2 can now accesss properties of user1

console.log(user2.name);        // Due to above properties now user2 can access user1 name

// So we made user1 a prototype for user2 

// So all the properties of user1 is inherited by user2 now

// Can also see in console if we use Array.prototype all the same properties that were with arr

/*

    So we have object Array.prototype in which all the functions are there like push pop etc

    So when we initialize the array it inherits all the properties from Array.prototype

    So when we write arr.__proto__ it shows from whom it has inherited

*/


/*

    So when we wants to see arr prototype's prototype

    We use arr.__proto__.__proto__

    Then we can see that arr prototype's prototype is object

    Both Object.prototype and arr.__proto__.__proto__ are having same properties

    Also getting same with Array.prototype.__proto__ <== (kinda of course as arr.__proto__ is Array.prototype only)

    So Array.prototype inherits properties from Object.prototype as Object.prototype has all the implementation

    And arr inherits properties from Array.prototype

    So if we write arr.__proto__.__proto__.__proto__ then it returns null as there's no prototype for Object.prototype

    This is called prototype chaining and that's why we call arr an object

*/

let arr = [1,2,3,4,5];

console.log(arr.__proto__ == Array.prototype);

console.log(arr.__proto__.__proto__ == Object.prototype);

console.log(arr.__proto__.__proto__.__proto__ == null);


// So whenever we create array or etc it's prototype properties are attached to it



