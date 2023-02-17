import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";

import Movie from "./pages/AllMovies/MoviesDetails";
import MoviesTopRated from "./pages/AllMovies/MoviesTopRated";
import MoviesPopular from "./pages/AllMovies/MoviesPopular";
import MoviesNowPlaying from "./pages/AllMovies/MoviesNowPlaying";
import MoviesUpComing from "./pages/AllMovies/MoviesUpComing";

import Serie from './pages/AllSeries/SeriesDetails';
import SeriesTopRated from "./pages/AllSeries/SeriesTopRated";
import SeriesPopular from "./pages/AllSeries/SeriesPopular";
import SeriesAiringToday from "./pages/AllSeries/SeriesAiringToday";
import SeriesOnTheAir from "./pages/AllSeries/SeriesOnTheAir";

import Search from "./pages/Search";
import People from './pages/People';

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Movie />}></Route>
          <Route path="/movies/top_rated" element={<MoviesTopRated />}></Route>
          <Route path="/movies/popular" element={<MoviesPopular />}></Route>
          <Route path="/movies/now_playing" element={<MoviesNowPlaying />}></Route>
          <Route path="/movies/upcoming" element={<MoviesUpComing />}></Route>

          <Route path="/tv/:id" element={<Serie />}></Route>
          <Route path="/tv/top_rated" element={<SeriesTopRated />}></Route>
          <Route path="/tv/popular" element={<SeriesPopular />}></Route>
          <Route path="/tv/airing_today" element={<SeriesAiringToday />}></Route>
          <Route path="/tv/on_the_air" element={<SeriesOnTheAir />}></Route>
        
          <Route path="search" element={<Search />}></Route>

          <Route path="/people" element={<People />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
