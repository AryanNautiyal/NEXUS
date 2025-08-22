

// Comparison operator

let a1 = 1;

let a2 = 2;

console.log(a1==a2);

a1 = 2;

a2 = 2;

console.log(a1==a2);

a1 = 10;

a2 = 5;

console.log(a1>a2);

console.log(a1<a2);

console.log(a1>=a2);

console.log(a1<=a2);


let num = 10;

let str = "10";

console.log(num == str);

// Returns true as our js engine before comparing converts them to same type (implicit type conversion)


let a3 = 10;

let str1 = "30";

console.log(a3<str1);

// If we write "30x" instead of "30" then it won't compare as it cannot be converted

let str2 = "30x";

console.log(a3<str2);

// Returns false as not a number

// ===  (first type check, if type is same then compares value)

console.log(a3===str1);

// If type not same then returns false


let a4 = 30;

let a5 = 30;

console.log(a4===a5);


// null == undefined (true)

console.log(null == undefined);

// null === undefined (false)

console.log(null === undefined);

// As null is object type and undefined is type undefined

console.log(null==0);

console.log(null<0);

console.log(null>0);

console.log(null<=0);

console.log(null>=0);

// null == undefined only and will not be equivalent to anything other (no type conversion is done here due to this rule)

// In case of <= & >= it will convert it's type first

// Rule: null can only be == to undefined

console.log(undefined==0);

console.log(undefined==0);

console.log(undefined<0);

console.log(undefined>0);

console.log(undefined<=0);

console.log(undefined>=0);

// Returns false for all as undefined is NaN when converted to number

console.log(NaN == NaN);

//  Returns false as both NaN are different from each other

str5 = "rohit";

str6 = "mohan";

console.log(Number(str5) == Number(str6));

// Both str are converted to number which gives NaN and this NaN is compared so it is false as they are different NaN


//  === : strict equality operator

// every comparison operator does type conversion

let abc1 = 123;

let abc2 = "123";

let abc3 = 123;

console.log(abc1==abc2==abc3);

//  Returns false as abc1==abc2 returns true & true != abc3

console.log(undefined!=null);

// Returns false


// In short in type conversion everything will try to convert to Number only & null == undefined only and not == to anything other



// null and undefined are considered equal to each other only when using loose equality (== or !=). So as != is inversion of == hence the rule is applied here too

// That's why returned false as undefined == null

// Logical operator

console.log(11>15 && 12<15);

console.log(11>15 || 12<15);

console.log(!(11>15) && 12<15);


// Bitwise operator

console.log(4&5);

console.log(4|5);

console.log(4^5);

console.log(4<<5);

console.log(200>>5);

console.log(0.1+0.2)

// Returns 0.3000000004 something as 0.1 is not exactly converted in binary so it's approximation is stored in mantissa therefore it gives that output


// Kind of a rule I think NaN is not equal to NaN
