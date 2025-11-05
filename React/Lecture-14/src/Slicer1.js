

import { createSlice } from "@reduxjs/toolkit";

const reactslicer = createSlice({

    name:"slice1",
    initialState: {count:0},
    reducers: {
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count=0}
    }
})



// Here our state = {count:0} as we have passed object so hence we used state.count in reducers



export const {Increment, Decrement, Reset} = reactslicer.actions;


// By this we export increment, decrement and reset functions 



export default reactslicer.reducer;