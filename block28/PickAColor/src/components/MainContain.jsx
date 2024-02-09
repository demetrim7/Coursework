import { Routes, Route, Link, } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Violet from "./Violet";
import Yellow from "./Yellow";

 function Main () {
    return (
      <>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/violet" element={<Violet />} />
            <Route path="/yellow" element={<Yellow />} />
          </Routes>
        </div>
        <footer className="footer">
          <Link to="/"><h6>Home</h6></Link>
          <Link to="/blue"><h6>Blue</h6></Link>
          <Link to="/red"><h6>Red</h6></Link>
          <Link to="/violet"><h6>Violet</h6></Link>
          <Link to="/yellow"><h6>Yellow</h6></Link>
        </footer>
      </>
    );
 }

 export default Main