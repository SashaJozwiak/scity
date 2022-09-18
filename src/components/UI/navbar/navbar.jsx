import React from "react";
import { Link } from "react-router-dom";
import cl from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <Link className={cl.navbar__link} to="/corporation"><p className={cl.link__text}>Корпорация</p></Link>
      <Link className={cl.navbar__link} to="/news"><p className={cl.link__text}>Новости</p></Link>
      <Link className={cl.navbar__link} to="/partners"><p className={cl.link__text}>Партнеры</p></Link>
      <Link className={cl.navbar__link} to="/contacts"><p className={cl.link__text}>Контакты</p></Link>
    </div >
  )
}

export default Navbar;
