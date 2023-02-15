import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdb from "../../services/tmdb";
const imageUrl = import.meta.env.VITE_IMG;
import { BsHourglassSplit, BsFillFileEarmarkTextFill } from "react-icons/bs";

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

  useEffect(() => {
    const serieURL = `${seriesURL}${id}?${key}&language=pt-BR`;
    getSerie(serieURL);
  }, []);
  return (
    <div className="movie-page">
      <div className="card" style={{ width: "25rem", color: "black" }}>
        {serie && (
          <>
            <img
              className="card-img-top"
              src={imageUrl + serie.poster_path}
              alt={serie.name}
            />
            <div className="card-body">
              <h5 className="card-title">{serie.name}</h5>
              <p className="card-text">{serie.tagline}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>
                  <BsHourglassSplit /> Duração:
                </h4>
                <p>{serie.runtime} minutos</p>
              </li>
              <li className="list-group-item">
                <h4>
                  <BsFillFileEarmarkTextFill /> Descrição:
                </h4>
                <p>{serie.overview}</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Serie;
