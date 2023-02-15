import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

function MovieCard({ movie, showLink = true }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          <FaStar /> {movie.vote_average}
        </p>
        {showLink && (
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
