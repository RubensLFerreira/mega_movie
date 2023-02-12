import { useState, useEffect } from "react";

import tmdb from "../../services/tmdb";
import PeopleCard from "../../components/PeopleCard";

import "../style.css";

const peopleURL = import.meta.env.VITE_API_PERSON;
const key = import.meta.env.VITE_API_KEY;

const People = () => {
  const [topPeople, setTopPeople] = useState([]);

  const getTopRatedPeople = async (url) => {
    const people = await tmdb.get(url).then((res) => res);
    setTopPeople(people.data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${peopleURL}popular?${key}&language=pt-BR`;
    getTopRatedPeople(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Pessoas populares</h2>
      <div className="movies-container">
        {topPeople.length === 0 && <p>Carregando...</p>}
        {topPeople &&
          topPeople.map((person) => (
            <PeopleCard key={person.id} person={person} />
          ))}
      </div>
    </div>
  );
};

export default People;
