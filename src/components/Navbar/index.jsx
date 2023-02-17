import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import logo from "/favicon/favicon-32x32.png";
import { BiSearchAlt2 } from "react-icons/bi";

import "./NavbarStyle.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {/* <img src={logo} alt="logo" /> */}
          Mega Movie
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Início
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/topmovies"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filmes
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/movies/popular" className="dropdown-item">
                    Populares
                  </Link>
                </li>
                <li>
                  <Link to="/movies/now_playing" className="dropdown-item">
                    Em cartaz
                  </Link>
                </li>
                <li>
                  <Link to="/movies/upcoming" className="dropdown-item">
                    Próximas estreias
                  </Link>
                </li>
                <li>
                  <Link to="/movies/top_rated" className="dropdown-item">
                    Mais bem avaliados
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/topmovies"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Séries
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/tv/popular" className="dropdown-item">
                    Populares
                  </Link>
                </li>
                <li>
                  <Link to="/tv/airing_today" className="dropdown-item">
                    Em exibição hoje
                  </Link>
                </li>
                <li>
                  <Link to="/tv/on_the_air" className="dropdown-item">
                    Na TV
                  </Link>
                </li>
                <li>
                  <Link to="/tv/top_rated" className="dropdown-item">
                    Mais bem avaliados
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/people" className="nav-link">
                Famosos
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSubmit} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Pesquisar"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="btn btn-outline-success" type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
