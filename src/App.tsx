import { useEffect } from "react";
import "./App.scss";
import LeftToolBar from "./components/LeftToolBar/LeftToolBar";
import MainArea from "./components/MainArea/MainArea";
import RightToolBar from "./components/RightToolBar/RightToolBar";
import { useActions } from "./hooks/useActions";
import { usePopularFilms } from "./hooks/usePopularFilms";
import { useGenres } from "./hooks/useGenres";

function App() {
  const {setPopularFilms,setGenres} = useActions()
  const {data:popularFilms} = usePopularFilms()
  const {data:genres} = useGenres()
  useEffect(() => {
    if (popularFilms && genres) {
      setPopularFilms(popularFilms);
      setGenres(genres);
    }
  }, [popularFilms,genres,setGenres, setPopularFilms]);
  
  return (
  <div className="wrapper">
    <LeftToolBar/>
    <MainArea/>
    <RightToolBar/>
  </div>
  );
}

export default App;
