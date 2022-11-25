import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
