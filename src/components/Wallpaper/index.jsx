import wallpaper1 from "/wallpaper/galaxia.jpg";
import wallpaper2 from "/wallpaper/adao.jpg";
import wallpaper3 from "/wallpaper/batman.jpg";

function Wallpaper() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="wallpaper" src={wallpaper1} alt="wallpaper" />
        </div>
        <div className="carousel-item">
          <img className="wallpaper" src={wallpaper2} alt="wallpaper" />
        </div>
        <div className="carousel-item">
          <img className="wallpaper" src={wallpaper3} alt="wallpaper" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Wallpaper;
