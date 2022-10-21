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

const Navbar = () => {
  const isActiveCheck = (isActive) => {
    return isActive
      ? `${cl.navbar__link} ${cl.navbar__link_active}`
      : cl.navbar__link
  }

  return (
    <nav className={cl.navbar}>
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
    </nav>
  );
};

export default Navbar;
