import { IconType } from "react-icons"

export interface IRootFilms {
    page: number
    results: IFilm[]
    total_pages: number
    total_results: number
  }
  
export interface IFilm {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
export interface ISegmentBar {
      id:number;
      label: string;
      icon: IconType;
  }
export interface ISegmentBarProps {
  head:string;
  segment: ISegmentBar[];
}

export interface IFilmCard extends Omit<IFilm,"adult"|"original_language"|"backdrop_path"|"release_date"|"video"|"popularity"|"vote_count"|"original_title"|"overview">{

}
export interface IGenresRoot {
  genres: IGenres[]
}

export interface IGenres {
  id: number
  name: string
}

export interface IMovieGroup{
  head: string;
  filmData: IFilmCard[];
}