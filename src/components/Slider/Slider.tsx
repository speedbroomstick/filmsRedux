import { useEffect, useState } from "react";
import { ISlider } from "../../types/films.types";
import FilmCard from "../MovieGroup/FilmCard/FilmCard";
import "./slider.scss";

export default function Slider({ films }: ISlider) {

    const [indexFilm, setIndexFilm] = useState(0);
    const [copyFilms, setCopyFilms] = useState(films.slice(0, 4));

    useEffect(() => {
        let i = 1;
        if (indexFilm !== films.length - 1) {
            const timeoutId = setTimeout(() => {
                setIndexFilm(indexFilm + 1);
                copyFilms[i].poster_path = films[indexFilm].poster_path;
               // setCopyFilms([...copyFilms])
                i++;
            }, 1000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
        else{
            setIndexFilm(0);
        }
    }, [indexFilm, films.length]);

    return (
        <div className="wraperSlider">
            <h1>Comedy</h1>
            <div className="slider">
            {[0, 1, 2, 3].map((i, index) => (
                 <FilmCard key={i} poster_path={copyFilms[index].poster_path} scale={{ width: 14, height: 20 }} margin={1} />
            ))}
            </div>
        </div>
    )
}