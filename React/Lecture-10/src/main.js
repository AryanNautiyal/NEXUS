

import React, { useState, useMemo, useEffect } from "react";

import ReactDOM from "react-dom/client";


// useMemo hook 



function Fibonacci(n){
        if(n<=1)
        {
            return n;
        }

        return Fibonacci(n-1)+Fibonacci(n-2);
}


// Now this function won't be created again and again

// So no need to useCallback




function App(){

    const [count, setCount] = useState(0);

    const [number, setNumber] = useState(0);

    // const [result, setResult] = useState(null); 


    

    const result = useMemo(()=>Fibonacci(number), [number]);            // callback function and dependency

    // useMemo hook has slight advantage over useEffect here



/*

    useEffect(()=>{
        setResult(Fibonacci(number))                                       // Cannot return value with useEffect hence giving error if we return
    }, [number]);


*/


    return (
        <>

            <h1>Counter is: {count}</h1>

            <button onClick={()=>setCount(count+1)}>Increment</button>

            <button onClick={()=>setCount(count-1)}>Decrement</button>

            <div>

                <h2>Fibonacci number is: {result}</h2>

                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>

            </div>
        
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




// If we try to get 50th fibonacci number the website becomes unresponsive so this is bad

// If we try 40th then page becomes slow even the counter increment works slow

// So this is an expensive operation

// So whenever we increment the counter it again calculates the fibonacci number due to which the increment is delayed

// Hence here we can use useMemo to just use the before calculated value





/*

    When we use useEffect when number is changed the App() is called again and executed again 

    useEffect() executes at last only so rest of the code will be executed then useEffect will execute as number is changed

    Then after that the inside useEffect there is setResult so App() will be called again and re-rendered

    So everything will be loaded again so it renders 2 times whereas in case of useMemo the render is only one time

*/