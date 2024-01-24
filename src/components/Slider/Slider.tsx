import { ISlider } from "../../types/films.types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import FilmCard from "../MovieGroup/FilmCard/FilmCard";
import "./slider.scss";

export default function Slider({ films }: ISlider) {

    return (
        <div className="wraperSlider">
            <h1>Comedy</h1>
            <div className="slider">
                <Swiper
                    slidesPerView={4}
                >
                    {films.map((film)=>(
                            <SwiperSlide><FilmCard key={film.id} poster_path={film.poster_path} scale={{ width: 14, height: 20 }} margin={1} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}