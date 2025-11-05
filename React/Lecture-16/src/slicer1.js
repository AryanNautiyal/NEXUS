

// createAysncThunk

import { createAsyncThunk } from "@reduxjs/toolkit";


const FetchData = createAsyncThunk(

    // Need to give action here and action has : type and payload

    'Coin/fetch',

    async (args, thunkAPI)=>{

        try{

            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);

            // args is nothing but the parameter we will pass while calling this function

            const data = await response.json();

            return data;            // This returned data will be the payload

        }
        catch(error){

            return rejectWithValue(error.message)

        }
    }


)



// So when we first use it the type is initialized to Coin/fetch/pending === {type: 'Coin/fetch/pending' , payload: undefined}

// {type: 'Coin/fetch/fulfilled' , payload: data}

// {type: 'Coin/fetch/rejected' , payload: error.message}


// All the dispatch work is done by thunkAPI (can name it anything used thunkAPI here as async thunk) hence it handles all work by himself

// It automatically dispatches the pending action when the request is made

// It automatically dispatches the fulfilled action when the request is successful

// It automatically dispatches the rejected action when the request fails

// Now we only need to do FetchData(10)









// Now we will create a slice so that data is available in globally


import { createSlice } from "@reduxjs/toolkit";

const slicer1 = createSlice({
    name: 'slice1',
    initialState: {data: [], loading: false, error:null},
    reducers: {},       // As it's async operation so we will leave reducers empty and will use extraReducers

    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(FetchData.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(FetchData.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }
})


// Due to Coin/fetch we don't need to name a slice again as all will be as Coin/fetch/pending and etc

// FetchData is of type Coin/fetch



export default slicer1.reducer;

export { FetchData };