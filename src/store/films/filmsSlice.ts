import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilm, IGenres, } from "../../types/films.types";

interface IFilmsStorage {
    films: IFilm[];
    popularFilms: IFilm[];
    genres: IGenres[];
  }
const initialState: IFilmsStorage = {
    films: [],
    popularFilms: [],
    genres: [],
};

export const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers:{
        setFilms: (state, action: PayloadAction<IFilm[]>) =>{
            state.films = [...action.payload];
        },
        setPopularFilms: (state, action: PayloadAction<IFilm[]>)=>{
            state.popularFilms = [...action.payload];
        },
        setGenres: (state, action: PayloadAction<IGenres[]>)=>{
            state.genres = [...action.payload];
        }
    }
})

export const {actions,reducer} = filmsSlice