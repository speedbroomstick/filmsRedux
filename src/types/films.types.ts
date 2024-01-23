import { IconType } from "react-icons"

export interface IRootFilms {
    page: number
    results: IFilm[]
    total_pages: number
    total_results: number
  }
  
export interface IFilm {
    adult: boolean
    backdrop_path?: string
    genre_ids?: number[]
    id?: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title?: string
    video?: boolean
    vote_average?: number
    vote_count?: number
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

export interface IFilmCard extends Omit<IFilm,"adult"|"original_language"|"release_date"|"video"|"popularity"|"vote_count"|"original_title"|"overview">{
  scale?: {
    width:number;
    height:number;
  };
  margin?:number;
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
export interface IRedButton{
  content:string;
  width:number;
}
export interface IMainPoster{
  header: string;
  film:IFilmCard[];
}

export interface ISlider{
  films:IFilmCard[];
}