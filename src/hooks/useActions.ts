import { useMemo } from "react";
import { linksSlice } from "../store/stateLink/stateLinkSlice";
import { popularMovieSlice } from "../store/popularMovie/popularMovieSlice"
import { useAppDispatch } from "./hooks";
import { bindActionCreators } from "@reduxjs/toolkit";

const RootActions = {
    ...linksSlice.actions,
    ...popularMovieSlice.actions
}

export const useActions = () =>{
    const despatch = useAppDispatch()

    return useMemo(()=>bindActionCreators(RootActions,despatch),[despatch])
}