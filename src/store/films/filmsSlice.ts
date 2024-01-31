import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilm, IGenres,IActorInfo } from "../../types/films.types";

interface IFilmsStorage {
    films: IFilm[];
    popularFilms: IFilm[];
    genres: IGenres[];
    popularPeople: IActorInfo[];
  }
const initialState: IFilmsStorage = {
    films: [],
    popularFilms: [],
    genres: [],
    popularPeople: []
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
        },
        setPopularPeople: (state,action:PayloadAction<IActorInfo[]>)=>{
            state.popularPeople = [...action.payload]
        }
    }
})

export const {actions,reducer} = filmsSlice