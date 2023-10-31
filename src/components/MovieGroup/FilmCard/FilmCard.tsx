import { IFilmCard } from "../../../types/films.types";
import "./filmCard.scss";
import {AiFillStar} from "react-icons/ai";

export default function FilmCard({backdrop_path,genre_ids,popularity,title}:IFilmCard){
    return(
        <div className="filmCard">
            <img src={backdrop_path} alt={title} />
            <div className="descriptionMovie">
                <h2>{title}</h2>
                <p>{genre_ids}</p>
                <div className="rating">
                    <AiFillStar/>
                    <p>{popularity}</p>
                </div>
            </div>
        </div>
    )
}