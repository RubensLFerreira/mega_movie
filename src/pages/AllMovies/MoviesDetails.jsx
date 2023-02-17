import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsArrowLeftSquare,
} from "react-icons/bs";

import tmdb from "../../services/tmdb";
import "./MoviesStyle.css";

const imageUrl = import.meta.env.VITE_IMG;
const moviesURL = import.meta.env.VITE_API_MOVIE;
const key = import.meta.env.VITE_API_KEY;

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
    <div className="container">
      <h2>
        <Link to="/">
          <BsArrowLeftSquare />
        </Link>
      </h2>
      {movie && (
        <div className="cards text-bg-dark mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={imageUrl + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title title-cards">{movie.title}</h3>
                <p className="card-text text-cards">
                  <BsWallet2 /> Orçamento: {formatCurrency(movie.budget)}
                </p>
                <p className="card-text text-cards">
                  <BsGraphUp /> Receita: {formatCurrency(movie.revenue)}
                </p>
                <p className="card-text text-cards">
                  <BsHourglassSplit /> Duração: {movie.runtime} minutos
                </p>
                <p className="card-text text-cards">
                  <BsFillFileEarmarkTextFill /> Descrição: {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
