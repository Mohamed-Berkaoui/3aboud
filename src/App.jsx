import { Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Favorite from "./pages/Favorite";
import Navigator from "./components/Navigator";
function App() {
  return (
    <div className="App">
      <Navigator/>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path={"/series"} element={<Series />} />
        <Route path="/favorite" element={<Favorite />} /> 
      </Routes>
    </div>
  );
}

export default App;
