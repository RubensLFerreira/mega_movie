import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

function SerieCard({ serie, showLink = true }) {
  return (
    <div className="movie-card">
      <img src={imageUrl + serie.poster_path} alt={serie.name} />
      <h4>{serie.name}</h4>
      <p>
        <FaStar /> {serie.vote_average}
      </p>
      {showLink && <Link to={`/tv/${serie.id}`}>Detalhes</Link>}
    </div>
  );
}

export default SerieCard;
