import { ISlider } from "../../types/films.types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import FilmCard from "../MovieGroup/FilmCard/FilmCard";
import "./slider.scss";
import { Autoplay } from "swiper/modules";

export default function Slider({ photoData }: ISlider) {

    return (
        <div className="wraperSlider">
            <h1>Comedy</h1>
            <div className="slider">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    autoplay={{delay:5000, disableOnInteraction:false}}
                >
                    {photoData.map((data)=>(
                            <SwiperSlide key={data}><FilmCard key={data} poster_path={data} scale={{ width: 16, height: 20 }} margin={1} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}