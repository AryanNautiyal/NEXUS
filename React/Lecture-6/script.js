

import React, {useState} from "react";

// Part of react only and you know export only mentioned here so that's why {}

// useState is a function that automatically makes the changes in count appear in DOM too

import ReactDOM from "react-dom/client";



function Counter(){

    let [count, setCount] = useState(0);            // useState initialized it's value

    // It returns two things (1. Value and 2. Function whose name we can do anything)

    // It states that whenever our variable value is changed we will be needed to call this function and give new value to it as argument 




    // console.log(count);              

    // By using this line we can see that the function code is executed again and again



    function incrementNumber(){
        count += 1;
        setCount(count);
    }

    function decrementNumber(){
        count -= 1;
        setCount(count);            // setCount() handles all the DOM manipulation (rendering)
    }

    return (

        <div className="first">

            <h1>Count is: {count}</h1>
            
            <button onClick={incrementNumber}>Increment : {count}</button>

            <button onClick={decrementNumber}>Decrement : {count}</button>    

                    {/* So useState sees where all we have used the variable count and updates it everywhere */}

            {/* You know eventListener click and all same and it takes callback function  */}

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Counter/>);


// Our count wasn't incrementing or decrementing as we haven't updated our DOM when we are changing count value

// So we can do querySelector('h1') then innerText = count in each function

// But what if we have to do same to many elements that are using counts so it is difficult as code will increase in size

// Tiresome work to just write again and again

// We have learned that React tells that he will do all the DOM manipulation for us and we only need to focus on UI

// So we won't manipulate DOM hence here our Hooks is introduced 

// Hooks is nothing but functions and we have many types of Hooks but mainly used ones are {some names}

// Here we will study useState hook 







// Whenever we call setCount() it again calls the Counter() function 

// So when this function is again called it doesn't execute the lines again instead it executes the lines like

// let [count , setCount ] = useState(1);

// Then it sees below lines and put value of count = 1 there too 

