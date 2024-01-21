import axios from "axios";
import {IGenresRoot, IRootFilms } from "../types/films.types";

class filmService{
    async getFilms() {
        try {
            const response = await axios.get<IRootFilms>(import.meta.env.VITE_BASE_URL_API + `/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=1&per_page=10`);
            const resultsArray = response.data.results;
            return resultsArray;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getPopularFilms(limit:number) {
        try {
            const response = await axios.get<IRootFilms>(import.meta.env.VITE_BASE_URL_API + `/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=1`);
            const resultsArray = response.data.results.slice(0,limit);
            resultsArray.map((film)=>{
                film.backdrop_path = "https://image.tmdb.org/t/p/w1280"+film.backdrop_path;
                film.poster_path = "https://image.tmdb.org/t/p/w500"+film.poster_path;
            })
            return resultsArray;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getGenres() {
        try {
            const response = await axios.get<IGenresRoot>(import.meta.env.VITE_BASE_URL_API + `/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
            const resultsArray = response.data.genres;
            return resultsArray;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new filmService();