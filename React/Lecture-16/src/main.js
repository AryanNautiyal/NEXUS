

// Whenever we fetch the data, there will be three states of the fetch operation

// 1. Pending
// 2. Fulfilled or resolved
// 3. Rejected or reject

// In case of getting the data from Github API we cab say if the data is still being fetched then it is in loading state

// If data is fetched then it will show data and if data isn't fetched then it will show error



// So should we send request to the API globally or in component (locally) where we want to use the data

// If we request locally then we will have to dispatch it to the global state so that it is globally available














// import ReactDOM from 'react-dom/client';

// import { useEffect } from 'react';

// import {useDispatch} from 'react-redux';


// function FetchUser(){

//     const dispatch = useDispatch();

//     useEffect(async ()=>{

//         dispatch(LoadingData(true));            // Did this so that it will show that request is pending

//         try{
//             const response = await fetch("....");

//             const data = await response.json();

//             dispatch(UpdateData(data));
//         }
//         catch(error){
//             dispatch(ErrorData("Error Occured"));

//         }

//     })
// }












// But this is not a good practice to do this in component

// As what if we have another component who wants to send fetch request also

// Then there we will also be needed to use useEffect and dispatch and same code will be repeated

// So we know Routing so what if routing takes us to that component who also needs to fetch data 

// And other component which we expected to fetch data first is not executed yet then due to this we cannot hope

// that the other path can just access data from store or global storage after one path has fetched the data

// As routing can take us to any component at any time

// So we fetch data globally and for this we got something crazyyyyy called as [{( createAsyncThunk )}]

// So it gives a function so we will only be needed to call the function and then it will take care of everything
















import ReactDOM from "react-dom/client";

import React from "react";

import stores from "./stores";

import { Provider } from "react-redux";
import CoinCreate from "./component/CoinCreate";



function App(){

    return (

        <Provider store={stores}>

            <CoinCreate></CoinCreate>


        </Provider>
    )
}




ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);