



// import React, { useState, useMemo, useEffect, useRef } from "react";

// import ReactDOM from "react-dom/client";


// useRef hook




// function App(){

//     const [count, setCount] = useState(0);

//     const money = useRef(0);

//     return(

//         <>

//             <h1>Counter is: {count}</h1>

//             <button onClick={()=>setCount(count+1)}>Increment</button>

//             <h1>Money is: {money.current}</h1>

//             <button onClick={()=>money.current += 1}>Increment</button>
        
//         </>



//     )


// }






// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);






// We first incremented the value in money then when we increment counter it re-renders the function

// So due to this the money is again set to 0

// So we don't want the value of money to be lost so we use useRef to get reference of money

// useRef creates an object and stores the value inside a key called current

// useRef doesn't re-render the function 

// So only counter re-renders the function so when function is re-rendered the value of money is hold and is displayed
















// Stopwatch







import React, { useState, useMemo, useEffect, useRef } from "react";

import ReactDOM from "react-dom/client";




function StopWatch(){

    const [time, setTime] = useState(0);

    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);


    function start(){

        if(!isRunning)
        {

            intervalRef.current = setInterval(()=>{

                setTime((prevTime)=>prevTime+1);

            },1000);

            setIsRunning(true);
        }
    }


    function stop(){

        if(isRunning)       // Can also use intervalRef.current === null
        {

            clearInterval(intervalRef.current);

            intervalRef.current = null;  

            setIsRunning(false);

        }
        
    }

    function reset(){

        clearInterval(intervalRef.current);

        intervalRef.current = null;

        setTime(0);

    }


    return (
        <>

            <h1>Stopwatch is: {time}</h1>

            <button className="Start" onClick={start}>Start</button>


            <button className="Stop" onClick={stop}>Stop</button>


            <button className="Reset" onClick={reset}>Reset</button>

        </>
    )
}





ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>);








// We see that Stopwatch only shows 1 and doesn't increment

// This is because when function is re-rendered by setTime the old function in which time = 0 is there

// The setInterval in that old function is still executing and is always making time value 1 only 

// Hence we see 1 only


// So there is one more powerful thing in useState, the setTime() also takes a callback function 

// So prevTime gets the latest value of time 


// used useRef to gey reference of setInterval called as we need to clear that interval when Stop is clicked


// So in stop we didn't change time value so timer continues from where it left off