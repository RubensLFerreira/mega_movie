import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

function PeopleCard({ person, showLink = true }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl + person.profile_path} alt={person.name} />
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">
          <FaStar /> {person.known_for_department}
        </p>
      </div>
    </div>
  );
}

export default PeopleCard;
