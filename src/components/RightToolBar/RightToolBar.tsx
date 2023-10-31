import MovieGroup from "../MovieGroup/MovieGroup";
import SearchInput from "../SearchInput/SearchInput";
import { filmData } from "./filmCardData";
import "./rightToolBar.scss";

export default function RightToolBar(){
    return(
        <div className="rightToolBar">
            <SearchInput/>
            <MovieGroup filmData={filmData} head="Popular Movies"/>
        </div>
    )
}