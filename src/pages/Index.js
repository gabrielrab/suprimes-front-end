import React from "react";
import { Link } from "react-router-dom";

import "./Index.css";

import Menu from "../assets/menu.svg";
import LogoAndSlogan from "../assets/logo-and-slogan.svg";
import Arrow from "../assets/angle-arrow-down.svg";

export default function() {
  return (
    <>
      <nav>
        <div className="menu">
          <img src={Menu} alt="Menu" />
        </div>
        <ul>
          <li>
            <Link to="">Brands</Link>
          </li>
          <li>
            <Link to="">Creators</Link>
          </li>
          <li>
            <Link to="/">Supremes</Link>
          </li>
          <li>
            <Link to="">Content</Link>
          </li>
          <li>
            <Link to="">Contato</Link>
          </li>
        </ul>
        <Link to="/login">Entrar</Link>
      </nav>
      <header>
        <img src={LogoAndSlogan} alt="Supremes" className="logo-slogan" />
        <img src={Arrow} alt="Saiba Mais" className="arrow" />
      </header>
      <footer>
        <ul>
          <li>Sobre</li>
          <li>Termo & Condições</li>
        </ul>

        <ul>
          <li>
            <Link to="">Facebook</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">YouTube</Link>
          </li>
          <li>
            <Link to="">Twich</Link>
          </li>
          <li>
            <Link to="">Instagram</Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
