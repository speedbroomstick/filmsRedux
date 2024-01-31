import { useAppSelector } from "../../hooks/hooks";
import MainPoster from "../MainPoster/MainPoster";
import Slider from "../Slider/Slider";
import "./mainArea.scss";
// import {comedyFilm} from "../../testData/comdyFilms"

export default function MainArea(){
    const {popularFilms,popularPeople} = useAppSelector((state)=>state.films)

    return(
        <div className="mainArea">
            <MainPoster header="Watch movies online" film={popularFilms} />
            <Slider photoData={popularFilms.map(films=>films.poster_path)}/>
            <Slider photoData={popularPeople.map(people=>people.profile_path)} />
        </div>
    )
}