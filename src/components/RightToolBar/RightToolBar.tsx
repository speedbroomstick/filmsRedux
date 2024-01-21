import { useAppSelector } from "../../hooks/hooks";
import MovieGroup from "../MovieGroup/MovieGroup";
import SearchInput from "../SearchInput/SearchInput";
import RedButton from "../redButton/RedButton";
// import { filmData } from "./filmCardData";
import "./rightToolBar.scss";

export default function RightToolBar(){
    const {popularFilms} = useAppSelector((state)=>state.films)

    return(
        <div className="rightToolBar">
            <SearchInput/>
            <MovieGroup filmData={popularFilms} head="Popular Movies"/>
            <RedButton content="All tranding movies" width={15}/>
        </div>
    )
}