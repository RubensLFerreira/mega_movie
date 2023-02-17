import Wallpaper from "../../components/Wallpaper";
import MoviesNowPlaying from "../AllMovies/MoviesNowPlaying";

import "./HomeStyle.css";

const Home = () => {
  return (
    <div>
      <Wallpaper />
      <div className="container">
        <h1 className="title-primary">
          Bem-vindo ao <span>Mega Movie</span>
        </h1>
        <h3 className="title-second">
          Milhões de filmes, séries para descobrir. Venha explorar!
        </h3>
      </div>
      <MoviesNowPlaying />
    </div>
  );
};

export default Home;
