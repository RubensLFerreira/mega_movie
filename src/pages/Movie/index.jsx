import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import tmdb from "../../services/tmdb";
// import MovieCard from "../../components/MovieCard";
const imageUrl = import.meta.env.VITE_IMG;

const moviesURL = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;

import "./style.css";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const movies = await tmdb.get(url).then((res) => res);
    setMovie(movies.data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${key}&language=pt-BR`;
    getMovie(movieURL);
  }, []);
  return (
    <div className="movie-page">
      <div className="card" style={{ width: "25rem", color: "black" }}>
        {movie && (
          <>
            <img
              className="card-img-top"
              src={imageUrl + movie.poster_path}
              alt={movie.title}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.tagline}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>
                  <BsWallet2 /> Orçamento:
                </h4>
                <p>{formatCurrency(movie.budget)}</p>
              </li>
              <li className="list-group-item">
                <h4>
                  <BsGraphUp /> Receita:
                </h4>
                <p>{formatCurrency(movie.revenue)}</p>
              </li>
              <li className="list-group-item">
                <h4>
                  <BsHourglassSplit /> Duração:
                </h4>
                <p>{movie.runtime} minutos</p>
              </li>
              <li className="list-group-item">
                <h4>
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h4>
                <p>{movie.overview}</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Movie;
