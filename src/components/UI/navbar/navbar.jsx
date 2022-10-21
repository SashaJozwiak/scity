import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.gif"
import logoback from "../../../assets/logo/logo2_svg.svg"
import logo2 from "../../../assets/logo/logo_3.svg"
import cl from "./navbar.module.scss";
import icons from "./icons.jsx";
import StroyCityLogo from "../StroyCityLogo/StroyCityLogo.jsx";

const {
  corporationIcon,
  projectsIcon,
  partnersIcon,
  contactsIcon,
} = icons(cl.icons);

const Navbar = () => {
  const navigator = useNavigate();
  const isActiveCheck = (isActive) => {
    return isActive
      ? `${cl.navbar__link} ${cl.navbar__link_active}`
      : cl.navbar__link
  }

  return (
    <div className={cl.navbar}>
      <StroyCityLogo navigator={() => navigator("/")} />
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/corporation">
        <p className={cl.link__text}>
          {corporationIcon}
          Деятельность</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/projects">
        <p className={cl.link__text}>
          {projectsIcon}
          Проекты</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/partners">
        <p className={cl.link__text}>
          {partnersIcon}
          Партнеры</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/contacts">
        <p className={cl.link__text}>
          {contactsIcon}
          Контакты</p></NavLink>
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
