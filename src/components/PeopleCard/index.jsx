import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

function PeopleCard({ person, showLink = true }) {
  return (
    <div className="movie-card">
      <img src={imageUrl + person.profile_path} alt={person.name} />
      <h2>{person.name}</h2>
      <p>
        <FaStar /> {person.known_for_department}
      </p>
    </div>
  );
}

export default PeopleCard;
