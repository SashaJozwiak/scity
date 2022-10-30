import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./navbar.module.scss";
import icons from "./icons.jsx";

const {
  corporationIcon,
  projectsIcon,
  partnersIcon,
  contactsIcon,
} = icons(cl.icons);

const Navbar = ({ burgerActive, setBurgerActive }) => {
  const isActiveCheck = (isActive) => {
    return isActive
      ? `${cl.navbar__link} ${cl.navbar__link_active}`
      : cl.navbar__link
  }
  const navLinkOnClick = () => {
    //if (burgerActive) setBurgerActive(false);
  };

  return (
    <nav className={burgerActive ? `${cl.navbar} ${cl.navbar_active}` : `${cl.navbar}`}>
      <NavLink
        className={({ isActive }) => isActiveCheck(isActive)}
        to="/corporation" onClick={navLinkOnClick}
      >
        <p className={cl.link__text}>
          {corporationIcon}
          Деятельность
        </p>
      </NavLink>

      <NavLink
        className={({ isActive }) => isActiveCheck(isActive)}
        to="/projects" onClick={navLinkOnClick}
      >
        <p className={cl.link__text}>
          {projectsIcon}
          Проекты
        </p>
      </NavLink>

      <NavLink
        className={({ isActive }) => isActiveCheck(isActive)}
        to="/partners" onClick={navLinkOnClick}
      >
        <p className={cl.link__text}>
          {partnersIcon}
          Партнеры
        </p>
      </NavLink>

      <NavLink
        className={({ isActive }) => isActiveCheck(isActive)}
        to="/contacts" onClick={navLinkOnClick}
      >
        <p className={cl.link__text}>
          {contactsIcon}
          Контакты
        </p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
