import { useAppSelector } from "../../hooks/hooks";
import MovieGroup from "../MovieGroup/MovieGroup";
import SearchInput from "../SearchInput/SearchInput";
// import { filmData } from "./filmCardData";
import "./rightToolBar.scss";

export default function RightToolBar(){
    const {popularFilms} = useAppSelector((state)=>state.films)

    return(
        <div className="rightToolBar">
            <SearchInput/>
            <MovieGroup filmData={popularFilms} head="Popular Movies"/>
        </div>
    )
}