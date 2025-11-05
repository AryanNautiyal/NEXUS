


// bcrypt


// const bcrypt = require('bcrypt');

// const password = "Rohit@123";

// // hashcode + salt 

// async function hashing() {

//     // console.time("hash");





//     const hashpass = await bcrypt.hash(password,10);        // slow process

//     // 10 is round here so round tells how much complex hashing we want so here 10 suggests that it will run 2^10 times = 1024

//     // Algorithm is generating hashCode so round tells that how many times to run this algorithm 




//     // console.timeEnd("hash");

//     // Added these to check if its taking more time the number of times we increase round

//     console.log(hashpass);
    
// }

// // adds salt automatically and converts password to hashcode

// hashing();

// result : $2b$10$1/IdyP9oZWHn9.7a5FLhN.IbuTlslAQNkkqApxZne3XvuELGbnujK

// For everytime we run it adds different salt 

// result : $2b$10$4Agps9RlKva43UrkjqAxf.KgkLgBuf5FTKSlJYO5xezp21fzVL0di







/*

rounds=8 : ~40 hashes/sec
rounds=9 : ~20 hashes/sec
rounds=10: ~10 hashes/sec
rounds=11: ~5  hashes/sec
rounds=12: 2-3 hashes/sec
rounds=13: ~1 sec/hash
rounds=14: ~1.5 sec/hash
rounds=15: ~3 sec/hash
rounds=25: ~1 hour/hash
rounds=31: 2-3 days/hash

So if we do 31 rounds then hacker will need 2-3 days just to find 1 hash 

Won't use 31 as for saving user's data also will need this 


*/
















// Generating salt by ourself


const bcrypt = require('bcrypt');

const password = "Rohit@123";

async function hashing() {

    // Generating salt

    const salt = await bcrypt.genSalt(10);


    const hashpass = await bcrypt.hash(password,salt);

    // Either give number of rounds or just give salt
    
    const ans = await bcrypt.compare(password,hashpass);        // With this we will compare password returns true or false

    console.log(ans);

    // console.log(salt)

    // console.log(hashpass);
    
}


hashing();



// $2b$10$KNcGE9H82F/qeWf0LpMg3O        <-- salt
// $2b$10$KNcGE9H82F/qeWf0LpMg3OQxCc1Ohr8R5ggp6Y6JY5pZ1WirkfvZ6             <-- password

/*

    So we can see that password in hashcode is same till a point due to salt 

    So our salt contains all the information we need 

    $2b$10$KNcGE9H82F/qeWf0LpMg3O

        -- So 2b between ' $ ' indicates the version of bcrypt we are using
        
        -- So 10 between ' $ ' indicates the number of rounds we are using

        -- So after ' $ ' which is after 10 is the actual salt => KNcGE9H82F/qeWf0LpMg3O

        hashcode has 31 characters whereas salt has 22 characters

        $2b$10$KNcGE9H82F/qeWf0LpMg3OQxCc1Ohr8R5ggp6Y6JY5pZ1WirkfvZ6

        This is stored in DB

        So why are we storing rounds?

            -- So our password is Rohit@123 so if we convert is to hashcode and then we add salt to it

            -- So how many rounds should be run algorithm on this hashcode so we need that info also

            -- Hence the whole hashcode is stored along with bcrypt version

*/


