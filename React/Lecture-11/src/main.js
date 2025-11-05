



// State lifting in React



import React, { useState, useEffect, useMemo, useCallback } from "react";

import ReactDOM from "react-dom/client";

import Increment from "./component/Increment";

import Decrement from "./component/Decrement";



function App(){

    const [count, setCount] = useState(0);


    return (
        <>

            <h1>Parent Counter is: {count}</h1>

            {/* <h1>Hello Coder Army</h1> */}

            <Increment counts={count} setCounts={setCount}/>

            {/* <Increment/> */}

            <Decrement counts={count} setCounts={setCount}/>
        
        </>
    )
}








ReactDOM.createRoot(document.getElementById('root')).render(<App/>);










// Now if we create all variables in child function (Increment) then we have another like Decrement child function

// So how can we decrement the counts value in Increment by using the Decrement (i.e. other child)

// Hence we use state lifting here

// State lifting says to create these variables in the most common ancestor so that both of the child can access it






