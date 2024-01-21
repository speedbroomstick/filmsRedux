import { useAppSelector } from "../../hooks/hooks";
import MainPoster from "../MainPoster/MainPoster";
import "./mainArea.scss";

export default function MainArea(){
    const {popularFilms} = useAppSelector((state)=>state.films)

    return(
        <div className="mainArea">
            <MainPoster header="Watch movies online" film={popularFilms} />
        </div>
    )
}