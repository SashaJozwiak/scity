import React from "react";
import { NavLink } from "react-router-dom";
//import { useNavigate } from "react-router";
import logo from "../../../assets/logo/logo2_svg.svg"
import logo2 from "../../../assets/logo/logo_3.svg"
import cl from "./navbar.module.scss";


//const navigator = useNavigate();

const Navbar = () => {
  const isActivePredicate = (isActive) => {
    return isActive
      ? `${cl.navbar__link} ${cl.navbar__link_active}`
      : cl.navbar__link
  }
  return (
    <div className={cl.navbar}>
      <img
        className="logo"
        src={logo}
        alt={"logo"}
        onClick={() => navigator("..")}
      />
      <NavLink className={({ isActive }) => isActivePredicate(isActive)} to="/projects"><p className={cl.link__text}>Проекты</p></NavLink>
      <NavLink className={({ isActive }) => isActivePredicate(isActive)} to="/corporation"><p className={cl.link__text}>Корпорация</p></NavLink>
      <NavLink className={({ isActive }) => isActivePredicate(isActive)} to="/partners"><p className={cl.link__text}>Партнеры</p></NavLink>
      <NavLink className={({ isActive }) => isActivePredicate(isActive)} to="/contacts"><p className={cl.link__text}>Контакты</p></NavLink>
      <img
        className="logo"
        src={logo2}
        alt={"logo"}
        onClick={() => navigator("..")}
      />
    </div>
  );
};

export default Navbar;
