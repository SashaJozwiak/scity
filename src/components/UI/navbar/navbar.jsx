import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/corporation">Корпорация</Link>
        <Link to="/news">Новости</Link>
        <Link to="/partners">Партнеры</Link>
        <Link to="/contacts">Контакты</Link>
      </div>
    </div>
  )
}

export default Navbar;
