import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo2_svg.svg"
import logo2 from "../../../assets/logo/logo_3.svg"
import cl from "./navbar.module.scss";

const Navbar = () => {
  const navigator = useNavigate();
  const isActiveCheck = (isActive) => {
    return isActive
      ? `${cl.navbar__link} ${cl.navbar__link_active}`
      : cl.navbar__link
  }

  return (
    <div className={cl.navbar}>
      <img
        className={cl.logo}
        src={logo}
        alt={"logo"}
        onClick={() => navigator("/")}
      />
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/corporation"><p className={cl.link__text}>Корпорация</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/projects"><p className={cl.link__text}>Проекты</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/partners"><p className={cl.link__text}>Партнеры</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/contacts"><p className={cl.link__text}>Контакты</p></NavLink>
      <img
        className={cl.logo}
        src={logo2}
        alt={"logo"}
        onClick={() => navigator("/")}
      />
    </div>
  );
};

export default Navbar;
