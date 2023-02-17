import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsArrowLeftSquare,
} from "react-icons/bs";

import tmdb from "../../services/tmdb";
import "./SeriesStyle.css";

const imageUrl = import.meta.env.VITE_IMG;
const seriesURL = import.meta.env.VITE_API_SERIE;
const key = import.meta.env.VITE_API_KEY;

const Serie = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  const getSerie = async (url) => {
    const series = await tmdb.get(url).then((res) => res);
    setSerie(series.data);
  };

  useEffect(() => {
    const serieURL = `${seriesURL}${id}?${key}&language=pt-BR`;
    console.log(serieURL);
    getSerie(serieURL);
  }, []);

  return (
    <div className="container">
      <h2>
        <Link to="/">
          <BsArrowLeftSquare />
        </Link>
      </h2>
      {serie && (
        <div className="cards text-bg-dark mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={imageUrl + serie.poster_path}
                alt={serie.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title title-cards">{serie.name}</h3>
                <h4 className="card-text text-cards">{serie.tagline}</h4>
                <p className="card-text text-cards">
                  <BsHourglassSplit /> Duração: {serie.runtime} minutos
                </p>
                <p className="card-text text-cards">
                  <BsFillFileEarmarkTextFill /> Descrição: {serie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Serie;
