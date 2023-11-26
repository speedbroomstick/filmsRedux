import { useQuery } from "@tanstack/react-query"
import filmService from "../services/film.service"


export const useGenres = () =>{
    return useQuery(
        { 
          queryKey: ['genresFilms'], 
          queryFn: async ()=> await filmService.getGenres()
        })
}