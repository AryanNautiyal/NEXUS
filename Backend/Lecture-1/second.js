

console.log("Hello I am second");




function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}


// module.exports = sum;

console.log(module.exports);

// We can see that module.exports is an empty object

module.exports = {sum,sub};

// If name of key and value is same then can just do like above so we won't be needed to write sum: sum, sub: sub again



// So as we know module.exports is an empty object hence

module.exports.sum = sum;

module.exports.sub = sub;