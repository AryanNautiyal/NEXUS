
import { useState } from "react";


function Increment({counts, setCounts}){


// function Increment(){

//     const [counts, setCounts] = useState(0);


    return (

        <>

            <h2>Child Counter is {counts}</h2>

            <button onClick={()=>setCounts(counts+1)}>Increment</button>
        
        </>
    )
}


export default Increment;