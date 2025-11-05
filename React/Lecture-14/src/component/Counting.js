

import { useSelector, useDispatch } from "react-redux";      

// Because now we are making react and redux talk with each other so used redux


import { Increment, Decrement, Reset } from "../Slicer1";



export default function Counting(){

    const count = useSelector((state)=>state.slice1.count);

    const dispatch = useDispatch();

    return (

        <>

            <h1>Counter is {count}</h1>

            <button onClick={()=>dispatch(Increment())}>Increment</button>

            <button onClick={()=>dispatch(Decrement())}>Decrement</button>

            <button onClick={()=>dispatch(Reset())}>Reset</button>
        
        </>

    )
}


/*

        State is here the global state 

        Whenever we use the useSelector it brings us global state

        So data is stored like this in that

        const state = {
        
            slice1 : {

                count : 0

            }

            slice2 : {
            
                count : 2,
                name : "Rohan"

            }

            slice3 : {
            
                login : true
                
            }
        }


        So to read from this we use state.slice1.count

        state is just variable here can name it anything

        const count = useSelector((Hello)=>Hello.slice1.count);

*/