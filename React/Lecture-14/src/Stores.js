
import { configureStore } from "@reduxjs/toolkit";

import slice1Reducer from "./Slicer1";


const stores = configureStore({
    reducer:{

        slice1: slice1Reducer

        // slice2: slice2Reducer           // Just consider we created one more 

    }
})



// So here we only need to match slice and store and the rest is all managed

// In the form slice_name : reducer_functions



// So from here we can check which slice name to use

// Only one Stores.js file will be made





export default stores;
