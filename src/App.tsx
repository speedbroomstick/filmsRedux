import { useEffect } from "react";
import "./App.scss";
import LeftToolBar from "./components/LeftToolBar/LeftToolBar";
import MainArea from "./components/MainArea/MainArea";
import RightToolBar from "./components/RightToolBar/RightToolBar";
import { useActions } from "./hooks/useActions";
import { usePopularFilms } from "./hooks/usePopularFilms";

function App() {
  const {setPopularFilms} = useActions()
  const {data} = usePopularFilms()
  useEffect(() => {
    if (data) {
      setPopularFilms(data);
    }
  }, [data, setPopularFilms]);

  return (
  <div className="wrapper">
    <LeftToolBar/>
    <MainArea/>
    <RightToolBar/>
  </div>
  );
}

export default App;
