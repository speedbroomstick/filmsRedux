import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../../types/films.types";

const initialState: IFilm[] = [];

export const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers:{
        setFilms: (state, action: PayloadAction<IFilm>) =>{
            state.push(action.payload)
        }
    }
})

export const {actions, reducer} = filmsSlice
