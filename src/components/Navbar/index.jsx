import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

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
    <nav className="navbar">
      <h2>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </h2>
      <h3>
        <Link to="/">Início</Link>
        <Link to="/topmovies">Filmes</Link>
        <Link to="/topseries">Séries</Link>
        <Link to="/toppeople">Pessoas</Link>
      </h3>
      {/* <Link to="/movie/1">Movie</Link> <br />
      <Link to="/search">Search</Link> */}
      <form onSubmit={handleSubmit}>
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
    </nav>
  );
}

export default Navbar;
