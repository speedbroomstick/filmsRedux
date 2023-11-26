import { useAppSelector } from "../../../hooks/hooks";
import { IFilmCard } from "../../../types/films.types";
import "./filmCard.scss";
import {AiFillStar} from "react-icons/ai";

export default function FilmCard({poster_path,genre_ids,vote_average,title}:IFilmCard){
    
    const {genres} = useAppSelector((state)=>state.films)

    return(
        <div className="filmCard">
            <img src={poster_path} alt={title} />
            <div className="descriptionMovie">
                <h2>{title}</h2>
                <h4>{
                    genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name+" ")
                }</h4>
                <div className="rating">
                    <AiFillStar/>
                    <p>{vote_average}</p>
                </div>
            </div>
        </div>
    )
}