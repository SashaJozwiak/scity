import React, { useState } from "react";
import cl from "./navbar.module.scss";
import icons from "./icons.jsx";

const {
  corporationIcon,
  projectsIcon,
  partnersIcon,
  contactsIcon,
} = icons(cl.icons);

const Navbar = ({ burgerActive, setBurgerActive }) => {
  const [activeButton, seActiveButton] = useState('');

  return (
    <nav className={burgerActive ? `${cl.navbar} ${cl.navbar_active}` : `${cl.navbar}`}>

      <a
        href="#1"
        className={activeButton === 'first' ? `${cl.navbar__link} ${cl.navbar__link_active}` : cl.navbar__link}
        onClick={() => seActiveButton('first')}
      >
        <p className={cl.link__text}>
          {corporationIcon}
          <span className={cl.textmenu}>Деятельность</span>
        </p>
      </a>

      <a
        href="#2"
        className={activeButton === 'second' ? `${cl.navbar__link} ${cl.navbar__link_active}` : cl.navbar__link}
        onClick={() => seActiveButton('second')}
      >
        <p className={cl.link__text}>
          {projectsIcon}
          Проекты
        </p>
      </a>

      <a
        href="#3"
        className={activeButton === 'third' ? `${cl.navbar__link} ${cl.navbar__link_active}` : cl.navbar__link}
        onClick={() => seActiveButton('third')}
      >
        <p className={cl.link__text}>
          {partnersIcon}
          Партнеры
        </p>
      </a>

      <a
        href="#4"
        className={activeButton === 'fourth' ? `${cl.navbar__link} ${cl.navbar__link_active}` : cl.navbar__link}
        onClick={() => seActiveButton('fourth')}
      >
        <p className={cl.link__text}>
          {contactsIcon}
          Контакты
        </p>
      </a>
    </nav>
  );
};

export default Navbar;
