

// Const for primitive (no value change)

const a = 20;

// a = 40;

console.log(a);


// Cont in non primitive (value changed)

const obj = {
    id:10,
    balance:200
}

obj.id = 11;

console.log(obj);

// Value is changed here as in stack obj has an address so address is const here so address cannot be changed but value can as they are not const and stored in heap


// Whereas in above case it didn't change as in primitive data type the value is stored in stack only whereas in non primitive the reference is stored


let obj2 = {
    id:20,
    money:30
};

// obj = obj2;

// This will not be allowed as changing the reference


// String in JS

let str = "Hello Coder Army";

let str1 = "Mein toh mast hu";

let str2 = `Aur bhaiya kya haal chaal`;

let price = 80;

console.log(str, str1, str2);

console.log("PRice of the tomato is : ",price);

console.log(`Price of the tomato is ; ${price}`);

// Most used one is back tick one


// String concatenation

let s1 = "Hello";

let s2 = " Coder Army";

let s3 = s1 + s2;

console.log(s3);

console.log(s3.length);   // Used for length of the string

console.log(s3.toLowerCase());  // Used to lowercase


console.log('"hello coder army"');


console.log("'hello coder army'");

let message = " Rohit bhaiya bahut bada badmash h.\n Voh bahut gande insaan h";

console.log(message);

let message1 = " Rohit bhaiya bahut bada badmash h.\\n Voh bahut gande insaan h";  // To print \n we use \ as it tells to just print it instead of looking for it's meaning

console.log(message1);


let special = "rohit";

console.log(special[0]);

console.log(special.charAt(3));

// Used to access some elements from string

console.log(special.toUpperCase());

// Due to uppercase and lowercase it capitalize and lowercase all letters but data in original str is not changed

// No change in original string due to uppercase and lowercase





// Searching in string


let hero = "Hello Coder Army Coder";

console.log(hero.indexOf("Coder"));     // Returns 6 as C in Coder has index 6

console.log(hero.indexOf("C"));

console.log(hero.indexOf("e"));    // Only returns the first index of occurence of the letter

console.log(hero.lastIndexOf("Coder"));   // Returns the last index of occurence of the letter or string (here it is 17)

console.log(hero.indexOf("coder"));     // Returns -1 if not found

console.log(hero.includes("coder"));        // Used to check membership (returns true or false)



// String slicing

let new_str = "HelloDon";

console.log(new_str.slice(0,3));        // Last index is not included here so output is Hel

console.log(new_str.substring(0,3));    // Same working as slice

// Slice can take negative index also whereas substring cannot

console.log(new_str.slice(-5,-8));      // Returns Hel only

console.log(new_str.slice(-6,5));       // Can use this combo also

console.log(new_str.slice(-2,4));       // Output is empty string as -2 > 4 (starting index should be smaller than ending one) so therefore it prints blank as it doesn't know how to print it

let str10 = "Hello Ji Kaise ho";

console.log(str10.replace("Ji","Money"));

let str12 = "Hello Ji Kaise ho Ji";

console.log(str12.replaceAll("Ji","Money"));


let str11 = "Money! honey! sunny! funny";

console.log(str11.split("!"));

console.log(str11.split("! "));


let str13 = "  hello ji ";

console.log(str13.trim());      // Removes starting and end spaces

console.log(str13.trim().length);

let str15 = "# Hello Bhaiyo #";

console.log(str15.trim('#'));       // This doesn't work so it removes spaces only

console.log(str13.trimStart());

console.log(str13.trimStart().length);

console.log(str13.trimEnd());

// Trim start and end are used to remove whitespaces from start or end



// New way to create string (not much preferable)

let lateststring = new String("Hello Coder Army");

console.log(lateststring);

console.log(typeof(lateststring));      // As expected object of String

// As new keyword is used so stored in heap
