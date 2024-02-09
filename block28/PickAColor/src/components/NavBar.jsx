import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/blue">
        <h1>Blue</h1>
      </Link>
      <Link to="/red">
        <h1>Red</h1>
      </Link>
      <Link to="/violet">
        <h1>Violet</h1>
      </Link>
      <Link to="/yellow">
        <h1>Yellow</h1>
      </Link>
    </div>
  );
}

export default NavBar;
