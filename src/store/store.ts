import { configureStore } from "@reduxjs/toolkit";
// import { reducer as filmsReducer } from "./films/filmsSlice";
import {linksSlice} from "./stateLink/stateLinkSlice"
// import { api } from "./api/api";

export const store = configureStore({
    reducer: {
        activeLink: linksSlice.reducer,
        // [api.reducerPath]: api.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch