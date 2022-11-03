import React from "react";
import cl from "./navbar.module.scss";
import icons from "./icons.jsx";

const {
  corporationIcon,
  projectsIcon,
  partnersIcon,
  contactsIcon,
} = icons(cl.icons);

const Navbar = ({ burgerActive, setBurgerActive }) => {

  return (
    <nav className={burgerActive ? `${cl.navbar} ${cl.navbar_active}` : `${cl.navbar}`}>
      
      <a href="#1" className={`${cl.navbar__link} ${cl.navbar__link_active}`}>
        <p className={cl.link__text}>
          {corporationIcon}
          <span className={cl.textmenu}>Деятельность</span>
        </p>
      </a>

      <a href="#2" className={cl.navbar__link}>
        <p className={cl.link__text}>
          {projectsIcon}
          Проекты
        </p>
      </a>

      <a href="#3" className={cl.navbar__link}>
        <p className={cl.link__text}>
          {partnersIcon}
          Партнеры
        </p>
      </a>

      <a href="#4" className={cl.navbar__link}>
        <p className={cl.link__text}>
          {contactsIcon}
          Контакты
        </p>
      </a>
    </nav>
  );
};

export default Navbar;
