

import { useSelector, useDispatch } from "react-redux";      




import { Increment, Decrement, Reset } from "../Slicer1";



export default function Counting(){

    const count = useSelector((state)=>state.slice1.count);     // can also call is subscriber as subscribing to the event

    const dispatch = useDispatch();

    console.log(Increment());

    return (

        <>

            <h1>Counter is {count}</h1>

            <button onClick={()=>dispatch(Increment())}>Increment</button>

            <button onClick={()=>dispatch(Decrement())}>Decrement</button>

            <button onClick={()=>dispatch(Reset())}>Reset</button>
        
        </>

    )
}




// Each reducer function will have 2 things

// actions : {type : "slice_name/function_name", payload : undefined}


/*

      So this object goes to stores and it sees that it's slice1 part so it goes to slice1 and sees in the values

      To execute the function dispatched

*/