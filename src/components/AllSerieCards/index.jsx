import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

function SerieCard({ serie, showLink = true }) {
  return (
    <div className="card">
      <img src={imageUrl + serie.poster_path} alt={serie.name} />
      <div className="card-body">
        <h5 className="card-title">{serie.name}</h5>
        <p className="card-text">
          <FaStar /> {serie.vote_average}
        </p>
        {showLink && (
          <Link to={`/tv/${serie.id}`} className="btn btn-primary">
            Detalhes
          </Link>
        )}
      </div>
    </div>
  );
}

export default SerieCard;
