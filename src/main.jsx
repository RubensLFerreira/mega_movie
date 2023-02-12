import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";

import TopMovies from "./pages/TopMovies";
import Movie from "./pages/Movie";

import TopSeries from "./pages/TopSeries";
import Serie from "./pages/Serie";

import TopPeople from "./pages/TopPeople";
import Search from "./pages/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />

          <Route path="/topmovies" element={<TopMovies />} />
          <Route path="/movie/:id" element={<Movie />} />

          <Route path="/topseries" element={<TopSeries />} />
          <Route path="/tv/:id" element={<Serie />} />

          <Route path="/toppeople" element={<TopPeople />} />

          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
