import { useState } from "react";


export default function Add(){

    const [count, setCount] = useState(0);

    return (
        <>

        <h1>Count is : {count}</h1>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        
        </>
    )
}