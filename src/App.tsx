import "./App.scss";
import LeftToolBar from "./components/LeftToolBar/LeftToolBar";
import MainArea from "./components/MainArea/MainArea";
import RightToolBar from "./components/RightToolBar/RightToolBar";
// import { useFilms } from './hooks/useFilms';

function App() {
  //  const {data} = useFilms()
  // console.log(data)
  return (
  <div className="wrapper">
    <LeftToolBar/>
    <MainArea/>
    <RightToolBar/>
  </div>
  );
}

export default App;
