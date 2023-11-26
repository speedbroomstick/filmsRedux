import { configureStore } from "@reduxjs/toolkit";
import { reducer as filmsReducer } from "./films/filmsSlice";
import {linksSlice} from "./stateLink/stateLinkSlice"

export const store = configureStore({
    reducer: {
        activeLink: linksSlice.reducer,
        films: filmsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch