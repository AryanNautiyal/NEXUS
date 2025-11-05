
import { useState } from "react";

import { addItems, removeItems } from "../Slicer2";

import { useDispatch } from "react-redux";


export default function FoodCart({value}){

    const [inCard, setInCard] = useState(false);

    const dispatch = useDispatch();

    function handleClick(){

        if(inCard)
        {
            dispatch(removeItems());
            setInCard(false);

        }
        else
        {
            dispatch(addItems());
            setInCard(true);
        }
    
    }

    return (

        <>

             <h1>{value.food}</h1>

            <h2>{value.Price}</h2>

            <button onClick={handleClick}>{inCard?"Remove":"Add"}</button>


        </>
    )


}
