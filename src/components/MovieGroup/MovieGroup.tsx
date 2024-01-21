// import { IMovieGroup } from "../../types/films.types";
import FilmCard from "./FilmCard/FilmCard";
import "./movieGroup.scss";
import { IMovieGroup } from "../../types/films.types";

export default function MovieGroup({head,filmData}:IMovieGroup){
    return(
        <div className="movieGroup">
            <h1 className="headerMovieGroup">{head}</h1>
            {filmData.map(film=>(
                <FilmCard
                key={film.id}
                id={film.id} 
                poster_path={film.poster_path}
                genre_ids={film.genre_ids}
                vote_average={film.vote_average}
                title={film.title}
                />
            ))}
        </div>
    )
}