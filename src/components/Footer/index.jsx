import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../public/favicon/favicon-32x32.png";

import "./FooterStyle.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-container d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <p className="col-md-4 mb-0">
          Rubens, Adejane | &copy; 2023 IFCE Campus Cedro
        </p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src={logo} alt="logo" />
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Início
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies/popular" className="nav-link">
              Filmes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tv/popular" className="nav-link">
              Series
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/famosos" className="nav-link">
              Famosos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Sobre
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
