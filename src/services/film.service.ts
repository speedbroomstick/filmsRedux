import axios from "axios";
import {IGenresRoot, IRootActor, IRootFilms } from "../types/films.types";

class filmService{
    private options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2IxODgxMTk0YzkzYTc1OWQ3YjFkODdlNTA0ZmJiMSIsInN1YiI6IjY1MzY4MzE0YzhhNWFjMDBlMmI4MDY2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fA2OJuZVfKdOePLCeDfHRwQmS7Gdno4TPUaVgGgitnA'
        }
    }

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
    async getPopularPeople(limit:number){
        try {
            const response = await axios.get<IRootActor>(import.meta.env.VITE_BASE_URL_API+'/3/person/popular',this.options);
            const resultsArray = response.data.results.slice(0,limit);
            resultsArray.map((people)=>{
                people.profile_path = "https://image.tmdb.org/t/p/w500"+people.profile_path;
            })
            return resultsArray;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new filmService();