

import { createSlice } from "@reduxjs/toolkit";

const reactslicer = createSlice({

    name:"slice1",
    initialState: {count:0},
    reducers: {
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=>{state.count = state.count-1},
        Reset: (state)=>{state.count=0},
        CustomIncreaser: (state,action) => {state.count += action.payload}

        // payload or action is nothing but the value passed while dispatching the action
    }
})


// Immer is used in the background which creates a new object of state

// As we have seen before using useState we see that when we do count+=1 it doesn't reflect the updated value in website

// So we use useState which creates new object with updated value of count





export { reactslicer };



export const {Increment, Decrement, Reset, CustomIncreaser} = reactslicer.actions;





export default reactslicer.reducer;


// before we used to do like this

/*

       Increment: (state)=>{
            return {...state, count: state.count+1}
        }

        Because in this we are creating a new object of state

        So new object is created and react sees that the object is changed and re-renders the component

        But now with immer we can directly change the state variable as it creates a new object in the background

*/





/*
        Immer

            ------- Immer creates a draft or duplicate of the state object

            ------- So we do changes in that draft or duplicate object only

            ------- After the changes are done then the immer creates a new object of state with the changes made in the draft

            ------- So immer tells to either return new object or make changes in the draft one

*/