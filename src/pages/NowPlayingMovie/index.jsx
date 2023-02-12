import { useState, useEffect } from "react";

import tmdb from "../../services/tmdb";
import NowPlayingMovieCard from "../../components/NowPlayingMovieCard";

const nowPlayingMovieURL = import.meta.env.VITE_API;
const key = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
  const [topMovie, setNowPlaying] = useState([]);

  const getNowPlayingMovie = async (url) => {
    const now = await tmdb.get(url).then((res) => res);
    setNowPlaying(now.data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${nowPlayingMovieURL}now_playing?${key}&language=pt-BR`;
    getNowPlayingMovie(topRatedUrl);
  }, []);

  return (
    <div style={{marginTop: '25%'}} className="container">
      <h2 className="title">Filmes em Cartaz</h2>
      <div className="movies-container">
        {topMovie.length === 0 && <p>Carregando...</p>}
        {topMovie &&
          topMovie.map((movie) => (
            <NowPlayingMovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default NowPlaying;
