import "./style.css";

import wallpaper from "/wallpaper/galaxia.jpg";

const Home = () => {
  return (
    <div className="container">
      {/* <h2 className="title">Início</h2> */}
      <div>
        <img className="wallpaper" src={wallpaper} alt="wallpaper" />
      </div>
      <div className="mega-movie">
        <h1>
          Bem vindo ao <span>Mega Movie</span>
        </h1>
      </div>

      <div className="lancamentos">
        <div>
          <h2>Filmes em cartaz</h2>
        </div>

        <div>
          <h2>Séries em cartaz</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
