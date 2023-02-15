import wallpaper1 from "/wallpaper/galaxia.jpg";
import wallpaper2 from "/wallpaper/adao.jpg";
import wallpaper3 from "/wallpaper/batman.jpg";
// import wallpaper4 from "/wallpaper/liga.png";

function Wallpaper() {
  return (
    <div>
      {/* <div class="card text-bg-dark">
        <img src={wallpaper4} class="card-img" alt="..." />
        <div className="card-img-overlay">
          <h1 className="card-title">Bem-vindo ao Mega Movie</h1>
          <p className="card-text">
            Os melhores lançamentos de filmes e series você encontra aqui!
          </p>
          <p className="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div> */}

      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="wallpaper" src={wallpaper1} alt="wallpaper" />
          </div>

          <div class="carousel-item">
            <img className="wallpaper" src={wallpaper2} alt="wallpaper" />
          </div>

          <div class="carousel-item">
            <img className="wallpaper" src={wallpaper3} alt="wallpaper" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mega-movie">
        <h1>
          Bem vindo ao <span>Mega Movie</span>
        </h1>
      </div>
    </div>
  );
}

export default Wallpaper;
