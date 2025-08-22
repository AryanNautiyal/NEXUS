

// So in 64 bit the maximum and minimum number we can store is


/*

    64 bit so 1 sign bit so 63 bits number

*/

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);


// But it's not calculated that way


/*

    Format for it is

        -- 1 bit for sign (sign bit)

        -- 52 bits are for number  (mantissa)

        -- 11 bits for exponent

    So 52 + 11 + 1 = 64 

    So range is 2^53-1 to - (2^53-1)

*/


/*

    Example to store 42.75 

    So we convert it to binary 42 in binary is 101010

    .75 will be also converted in binary 

        .75 X 2 = 1.5 <-- 1
        .5 X 2 = 1.0 <-- 1

        after this .0 X 2 will always result in 0 so .75 in binary is 11


    42.75 = 101010.11

    We then place decimal to make it 1. always

    So 1.0101011 X 2^5  (as binary or root is 2 so used 2 and shifted decimal 5 times to make it 1.0 so 2^5)

    So 5 = exponent

    So 5 is stored in 11 bits

    Last 52 bits is mantissa so all the number after decimal or decimal part is mantissa so all is stored in 52 bits 

    As by default condition is to store matissa only as 1 or before decimal part is always 1 or can say it is always in form 1.

    Exponent is also not stored directly like 5 = 101

    A bias is added to exponent in this it's 1023

    So exponent is 1023 + 5 = 1028


*/



/*

    So in reality our data is stored in 52 bits

    So total bits is mantissa bits + 1 bit that is by default present to make it 1. so total 53 bits


    So Max number can be 2^53-1 and Min number can be - (2^53-1)


    Note: -1 is always done to exclude 0 to get correct max number

*/

/*

    To store 0.75 

    0.75 in binary 0.11

    So here our exponent comes in handy so

    0.11 = 1.1 X 2^-1

    So -1 + 1023 = 1022 (exponent)

    1 is mantissa (as 1.1)

    Hence we can store decimals numbers also like this

    Therefore we used this IEEE 754 Double Precision Representation so that we can store decimals also 


*/



/*

    We bias exponent so that there is no need for us to store their sign as it will always be positive 

    So in detial

    2^10-1 = 1023 as we have 11 bits for exponent

    So 2^10-1 will go for positive and same for negative numbers

    (Used 2^53-1 in mantissa as discussed before it's 52 bits + 1. bit so 53 bits)

    While in exponent only 11 bits so 2^10-1 is done


    So biased it

    Did 2^10 as 1 bit for sign is reserved in this normally (but in IEEE 754 notation we don't keep sign bit so still max number can be 2^10-1)

    JavaScript engine knows how to decode it


*/