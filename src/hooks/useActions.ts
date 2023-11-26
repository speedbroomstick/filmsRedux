import { useMemo } from "react";
import { linksSlice } from "../store/stateLink/stateLinkSlice";
import { actions as filmsActions } from "../store/films/filmsSlice"
import { useAppDispatch } from "./hooks";
import { bindActionCreators } from "@reduxjs/toolkit";

const RootActions = {
    ...linksSlice.actions,
    ...filmsActions,
}

export const useActions = () =>{
    const despatch = useAppDispatch()

    return useMemo(()=>bindActionCreators(RootActions,despatch),[despatch])
}