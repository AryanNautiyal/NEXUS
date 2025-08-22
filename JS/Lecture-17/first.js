


// reduce

const arr = [10,20,30,40,50];

const result = arr.reduce((acc,curr)=>{
    acc = acc+curr;
    return acc;
}, 0)


// acc = accumulator and curr = current value (that comes from array like first curr = 10 then 20 then 30 etc)

// everything we return in this goes to accumulator

// (callback function , initializer) : initializer is used to initialize value of acc

console.log(result);


// Short

const res = arr.reduce((acc,curr)=> acc+curr , 0);

console.log(res);

const ar = ["orange" , "apple" , "banana", "orange" , "apple" , "banana", "orange" , "apple" , "banana", "orange","grapes"];

const r = ar.reduce((acc,curr)=> {
    if (acc.hasOwnProperty(curr))                   // if curr already in acc returns true if not returns false
        acc[curr] += 1;

    else
        acc[curr] = 1;

    return acc;
}, {});

console.log(r);

// Shortcut

const rr = ar.reduce((acc,curr)=> {
    (acc.hasOwnProperty(curr)) ?   acc[curr] += 1 :   acc[curr] = 1;   
        
    return acc;
}, {});

console.log(rr);            // Not easy way to read code 

