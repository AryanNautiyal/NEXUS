

let num=10;

// First memory is allocated and is stored in RAM (memory allocated in RAM)

let a=70;

// Inside a memory space 70 is stored

// Location name is a in which 70 is stored more like our location 


// Primitive and non-primitive data type

num = true;  // Boolean

num = "Hello"; // String 

num = 500.7; // Float

num = null; 
 
//  Null

num = undefined; // Variable is declared but no value is assigned to it

// NULL explicitly is assigned while undefined can be unexplicitly also

num = BigInt("9007199254740991"); // Represents integers larger than 2^53 - 1


num = Symbol('id')     // Symbols are unique, immutable primitive values used mainly as object property keys to avoid naming collisions.


let num1 = Symbol('id');

// num1 != num


// By Rohit Negi now

// Number

let account_balance = 20;

console.log(account_balance);

// String

let str = "rohit";

console.log(str);

console.log("str");

console.log(typeof(str))

let str1 = "rohit negi is a good boy and he doesn't know how to use zoom";

console.log(str);

console.log(typeof(str));

let comment = 'Hello dosto';

console.log(comment);

// It's our choice to use semicolon or not


// Boolean

let statement = true;

console.log(statement);

console.log(typeof(statement));

// Undefined

let account;

console.log(account);

// NULL

let balance = null;

console.log(balance);

// Usecase if bank servers down so instead of sending zero as zero will scare people so we send null

// it cannot be undefined as bank account will be alloted some value but we explicitly sended null as servers down

// So users will know that due to some issues they cannot access their balance

console.log(typeof(balance));

// Returns type object 

// Biggest error in javascript as although null is itself a class but it returns object

// It's typeof should retun null only but it didn't and this mistake was made as developer only made this in 10 days

// We can easily fix it but we do not fix it as our legacy codes that are used in companies (10-15 years before code)

// As it might create problem in some cases might give null and some cases might give object

// So in modern code might see it null but in legacy code might give object so due to this the error was left as it is


// Bigint

let aa = 4444443334344343343433434344344334434334;

console.log(aa);

// Gives output 4.444443334344343e+39 but we want to return or print number so

// So we modify it to make it see as big int we add 'n' in ending

let bb = 432333434343453445343554545434455656656544n;

console.log(bb);

// Gives output 432333434343453445343554545434455656656544n

/*

    Reason:

        For a number 64 bit are allocated in memory for number

        64 bit = 8 bytes so Number is stored in 8 bytes

        So if we enter a very big number then when we convert it to binary let's say it requires 68 bits to store
        
        So 68bit cannot be stored in 64 bit

        Hence there was data loss so we needed big int

        so to store big integer we use big int 

        so to do that we add n in last to indicate that it is big int

*/

/*

    Largest or smallest number we can store in this

    How can we store negative numbers ?

        -- So if we have 3 bits then we allocate the first bit for sign

                0 = Positive & 1 = Negative

        -- So in 2 bits we have range -3-3

                min = -3 & max = 3

        -- 3 = 011 & -3 = 111

        But in this 0 can be implemented by 000 & 100 and this is not healthy but as js was made in 10 days so yeah what can you expect


        Note: In cpp negative numbers are stored in 2's complement but here they are stored like this and 2's complement approach is better as
                zero has only one notation 
*/



// So if we have 3 bit number then smallest number is -3 and largest number is 3 (2^3 so divide equally in positive and negative)

// Can calculate by ( 2^3 - 1 = 7 so highest is 7 in 4 bits and - ( 2^3-1 ) is lowest in 4 bits which is -7) 




