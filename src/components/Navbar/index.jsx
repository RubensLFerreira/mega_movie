import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import logo from "/favicon/favicon-32x32.png";

import "./style.css";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificando se a busca nn extá vázia
    if (!search) return;

    // passando a pesquisa para search
    navigate(`/search?q=${search}`);

    // limpando input de pesquisa
    setSearch("");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
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
                  <Link to="/topmovies" className="dropdown-item">
                    Top filmes
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Lançamentos
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Melhores filmes
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Outros
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/topseries"
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
                  <Link to="/topseries" className="dropdown-item">
                    Top séries
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Lançamentos
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Melhores series
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/" className="dropdown-item">
                    Outros
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/toppeople" className="nav-link">
                Famosos
              </Link>
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="d-flex" role="search">
            <input
              type="text"
              name="pesquisar"
              id="pesquisar"
              placeholder="Pesquisar"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
