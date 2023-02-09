import { useState, useEffect } from "react";

import tmdb from "../services/tmdb";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  // pegando lista de filmes
  const getTopRatedMovies = async (url) => {
    const movies = await tmdb.get(url).then((res) => res);
    // const data = await res.json();
    // console.log(movies.data.results);
    setTopMovies(movies.data.results);
  };

  useEffect(() => {
    // top filmes avaliados
    const topRatedUrl = `${moviesURL}top_rated?${key}&language=pt-BR`;
    // console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top filmes</h2>
      <div className="movies-container">
        {/* cache */}
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
