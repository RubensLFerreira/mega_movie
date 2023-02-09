import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Mega Movie
        </Link>
      </h2>
      {/* <Link to="/movie/1">Movie</Link> <br />
      <Link to="/search">Search</Link> */}
      <form action="">
        <input
          type="text"
          name="pesquisar"
          id="pesquisar"
          placeholder="Pesquisar"
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
