

// Call back function

function names(fun)
{
    console.log("Hello I am name");
    fun();
}

function greet(){
    console.log("I am call back function");
}

names(greet);

names(function Noob(){
    console.log("Noob");
});

// can also do arrow function too

// Real world use case is as we built a function to fetch data from backend so we need to call this function every 5 sec we use this

function fetchData(){
    console.log("Fetching data...")
}


setInterval(fetchData, 5000);               // Takes 2 arguments (function to be called and time in milliseconds)

