import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilm } from "../../types/films.types";

interface IPopularFilms {
    value: IFilm[];
  }

const initialState:IPopularFilms = {
    value: [],
}

export const popularMovieSlice = createSlice({
    name:"popularMovies",
    initialState,
    reducers:{
        setPopularFilms: (state, action: PayloadAction<IFilm[]>)=>{
            state.value = [...action.payload];
        }
    }
});

export const {setPopularFilms} = popularMovieSlice.actions