import { useQuery } from "@tanstack/react-query"
import filmService from "../services/film.service"


export const useFilms = () =>{
    return useQuery(
        { 
          queryKey: ['films'], 
          queryFn: ()=>  filmService.getFilms()
        })
}