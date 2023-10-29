import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LinkState {
    value: number
  }

const initialState:LinkState = {
    value: 0,
}

export const linksSlice = createSlice({
    name: 'link',
    initialState,
    reducers:{
        setState: (state, action: PayloadAction<number>) =>{
            state.value = action.payload;
        }
    }
})

export const {setState} = linksSlice.actions