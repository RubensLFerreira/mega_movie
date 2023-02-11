import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import tmdb from "../services/tmdb";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const key = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const movies = await tmdb.get(url).then((res) => res);
    setMovies(movies.data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${key}&query=${query}&language=pt-BR`;
    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
