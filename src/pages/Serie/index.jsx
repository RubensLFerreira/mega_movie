import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../../services/tmdb";
import SerieCard from "../../components/SerieCard";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const seriesURL = import.meta.env.VITE_API_SERIE;
const key = import.meta.env.VITE_API_KEY;

import "./style.css";

const Serie = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  const getSerie = async (url) => {
    const series = await tmdb.get(url).then((res) => res);
    setSerie(series.data);
  };

  useEffect(() => {
    const serieURL = `${seriesURL}${id}?${key}&language=pt-BR`;
    getSerie(serieURL);
  }, []);

  return (
    <div className="movie-page">
      {serie && (
        <>
          <SerieCard serie={serie} showLink={false} />
          <p className="tagline">{serie.name}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Frase:
            </h3>
            <p>{serie.tagline}</p>
          </div>

          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{serie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Serie;
