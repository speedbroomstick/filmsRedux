import axios from "axios";
import { IRootFilms } from "../types/films.types";

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
            return resultsArray;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new filmService();