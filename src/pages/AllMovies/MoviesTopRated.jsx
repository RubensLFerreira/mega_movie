import { useState, useEffect } from "react";

import MovieCard from "../../components/AllMovieCards/MovieCard";
import tmdb from "../../services/tmdb";

import "./MoviesStyle.css";

const moviesURL = import.meta.env.VITE_API_MOVIE;
const key = import.meta.env.VITE_API_KEY;

const MoviesTopRated = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const movies = await tmdb.get(url).then((res) => res);
    setTopMovies(movies.data.results);
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${key}&language=pt-BR`;
    getTopRatedMovies(topRatedURL);
    console.log(topRatedURL);
  }, []);

  return (
    <div className="container">
      <h3 className="title-movies">Mais bem avaliados</h3>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default MoviesTopRated;
