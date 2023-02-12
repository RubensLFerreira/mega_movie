import wallpaper from "/wallpaper/galaxia.jpg";

function Wallpaper() {
  return (
    <div>
      <div>
        <img className="wallpaper" src={wallpaper} alt="wallpaper" />
      </div>
      <div className="mega-movie">
        <h1>Bem vindo ao <span>Mega Movie</span></h1>
      </div>
    </div>
  )
}

export default Wallpaper;