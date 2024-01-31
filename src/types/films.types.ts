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
  photoData:string[];
}

export interface IRootActor {
  page: number
  results: IActorInfo[]
  total_pages: number
  total_results: number
}

export interface IActorInfo {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: IKnownForItem[];
}

interface IKnownForItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

