import { useEffect } from "react";
import "./App.scss";
import LeftToolBar from "./components/LeftToolBar/LeftToolBar";
import MainArea from "./components/MainArea/MainArea";
import RightToolBar from "./components/RightToolBar/RightToolBar";
import { useActions } from "./hooks/useActions";
// import {filmData as popularFilms} from "./testData/filmCardData"
// import {genres} from "./testData/genresData"
import { usePopularFilms } from "./hooks/usePopularFilms";
import { useGenres } from "./hooks/useGenres";
import {usePopularPeople} from "./hooks/usePopularPeople"

function App() {
  const {setPopularFilms,setGenres,setPopularPeople} = useActions()
  const {data:popularFilms} = usePopularFilms()
  const {data:genres} = useGenres()
  const {data:popularPeople} = usePopularPeople()

  useEffect(() => {
    if (popularFilms && genres && popularPeople) {
      setPopularFilms(popularFilms);
      setGenres(genres);
      setPopularPeople(popularPeople);
    }
  }, [popularFilms,genres,setGenres, setPopularFilms,setPopularPeople,popularPeople]);
  
  return (
  <div className="wrapper">
    <LeftToolBar/>
    <MainArea/>
    <RightToolBar/>
  </div>
  );
}

export default App;
