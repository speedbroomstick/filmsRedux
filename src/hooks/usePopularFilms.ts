import { useQuery } from "@tanstack/react-query"
import filmService from "../services/film.service"


export const usePopularFilms = () =>{
    return useQuery(
        { 
          queryKey: ['popularFilms'], 
          queryFn: async ()=> await filmService.getPopularFilms(6)
        })
}