

import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./Slicer2";

const store = configureStore({
    reducer:{
        slice2: CartReducer
    }
})



export default store;