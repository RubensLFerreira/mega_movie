import { useState, useEffect } from "react";

import tmdb from "../../services/tmdb";
import SerieCard from "../../components/SerieCard";

import "../style.css";

const seriesURL = import.meta.env.VITE_API_SERIE;
const key = import.meta.env.VITE_API_KEY;

const Serie = () => {
  const [topSeries, setTopSeries] = useState([]);

  const getTopRatedSeries = async (url) => {
    const movies = await tmdb.get(url).then((res) => res);
    setTopSeries(movies.data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${seriesURL}top_rated?${key}&language=pt-BR`;
    getTopRatedSeries(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top Séries</h2>
      <div className="movies-container">
        {topSeries.length === 0 && <p>Carregando...</p>}
        {topSeries &&
          topSeries.map((serie) => <SerieCard key={serie.id} serie={serie} />)}
      </div>
    </div>
  );
};

export default Serie;
