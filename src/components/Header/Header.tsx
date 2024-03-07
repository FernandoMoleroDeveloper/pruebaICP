import "./Header.scss";
import React from "react";
import Logo from "../../assets/Logos/logo.svg";
import UserAvatar from "../../assets/Profile/imagen-perfil.jpg";
import { CiSearch } from "react-icons/ci";

const Header: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__list">
        <a href="#" className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <div className="navbar__item">
          <a className="navbar__link" href="#">
            Home
          </a>
          <a className="navbar__link" href="#">
            Series
          </a>
          <a className="navbar__link" href="#">
            Películas
          </a>
          <a className="navbar__link" href="#">
            Mi lista
          </a>
        </div>
      </div>
      <div className="navbar__user">
        <CiSearch className="navbar__user-icon" />
        <span className="navbar__user-name">¡Hola, Alejandro!</span>
        <img className="navbar__user-avatar" src={UserAvatar} alt="User Avatar" />
      </div>
    </div>
  );
};

export default Header;
