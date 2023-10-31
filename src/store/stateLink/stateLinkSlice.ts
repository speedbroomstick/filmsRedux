import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ILinkState {
    value: number
  }

const initialState:ILinkState = {
    value: 1,
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