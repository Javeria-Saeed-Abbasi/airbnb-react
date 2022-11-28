import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes } from "react-router-dom";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import Navbar2 from "./component/ExpandNav/ExpandNav";
import Header from "./component/Header/Header";
import Navbar1 from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Header/>
       <Routes>
              <Route exact path="/" element={<Navbar1 />} />
              <Route exact path="/src/component/ExpandNav/ExpandNav.js" element={<Navbar2/>} />

            </Routes>
    </div>
  );
}

export default App;
