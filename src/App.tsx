import "./App.scss";
import LeftToolBar from "./components/LeftToolBar/LeftToolBar";
// import { useFilms } from './hooks/useFilms';

function App() {
  //  const {data} = useFilms()
  // console.log(data)
  return (
  <div className="wrapper">
    <LeftToolBar/>
  </div>
  );
}

export default App;
