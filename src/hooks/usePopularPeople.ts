import { useQuery } from "@tanstack/react-query"
import filmService from "../services/film.service"


export const usePopularPeople = () =>{
    return useQuery(
        { 
          queryKey: ['popularPeople'], 
          queryFn: async ()=> await filmService.getPopularPeople(6)
        })
}