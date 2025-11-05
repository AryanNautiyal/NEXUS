

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FetchData } from "../slicer1";

import CoinCard from "./CoinCard";


export default function CoinCreate(){

    const dispatch = useDispatch();

    const {data,loading, error} = useSelector((state)=>state.slice1);

    useEffect(()=>{

        dispatch(FetchData(50));

    },[]);

    if(loading){

        return <h1>Data is Loading</h1>
    }
    if(error){
        return <h1>Error has Occurred</h1>
    }

    return(
        <>

        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
            
                {data.map((value)=>{

                    return <CoinCard key={value.id} coin={value}></CoinCard>

                })}
            
        </div>
        </>
    )

    // display information of 20 user

}








// Here what really happens ?

/*

       Store is created and all global variables value is initialized 

       dispatch(FetchData(50)) is called so stores sees it's type but here FetchData doesn't have any type

       As normally it returns action in which type is written but here it doesn't

       So the stores doesn't know how to handle this request so there is a middleware in between them 

       So middleware sees that it's a normal function not an action so it calls that function

       So when FetchData is called so async thunk function is executed 

       So first it dispatches an action of type Coin/fetch/pending whose payload is undefined

       Then it dispatches it to stores, so stores checks it's type and sees slice name but there isn't any slice name

       So as it didn't find slice name so it will forward it to every slice 

       So any reducer that needs it will automatically handle it

       So our slice reducer knows how to handle it

       So it goes to that slice's extraReducers and then one by one it checks with which type it matches

       And then it will run the case corresponding to that type

       And runs the case

       Then when data is obtained then it dispatches another action with fulfilled this time and same is executed again

       Same with error

*/




/*

       So we might think that it is error that it sends to every slice as principally it should go to only one slice

       But it is not an error as it is done intentionally

       As let's take a scenario where let's see that we need to display user data also and user posts also

       So if it goes to both slices then it's better as user data will also contain user posts also

       Hence we didn't named it slice1/fetch instead we did Coin/fetch such that it goes to every slice

*/