import { useAppSelector } from "../../hooks/hooks";
import { IMainPoster } from "../../types/films.types";
import RedButton from "../redButton/RedButton";
import "./mainPoster.scss";

export default function MainPoster({header, film}:IMainPoster){
    const {genres} = useAppSelector((state)=>state.films)

    const showPoster = () =>{
        if (!film || film.length === 0) {
            return null; 
          }
        return <>
        <img key={film[0].id} src={film[0].backdrop_path} alt="" />
        <div className="description">
            <h2 className="title">{film[0].title}</h2>
            <h4 className="genres">{genres.filter(genre => film[0].genre_ids.includes(genre.id)).map(item => item.name+" ")}</h4>
            <RedButton content="Watch" width={10}/>
        </div>
        </> 
    }
    return(
        <div className="poster">
            <h3>{header}</h3>

            <div className="posterPhoto">
                {showPoster()}
            </div>
        </div>
    )
}