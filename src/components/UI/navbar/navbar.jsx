import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo.gif"
import logoback from "../../../assets/logo/logo2_svg.svg"
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
      <div className={cl.logos} onClick={() => navigator("/")}>
        <img
          className={cl.logofont}
          src={logo}
          alt={"logo"}
        />
        <img
          className={cl.logback}
          src={logoback}
          alt={"logo"}
        />
      </div>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/corporation">
        <p className={cl.link__text}>
          <svg className={cl.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M240.1 4.2c9.8-5.6 21.9-5.6 31.8 0l171.8 98.1L448 104l0 .9 47.9 27.4c12.6 7.2 18.8 22 15.1 36s-16.4 23.8-30.9 23.8H32c-14.5 0-27.2-9.8-30.9-23.8s2.5-28.8 15.1-36L64 104.9V104l4.4-1.6L240.1 4.2zM64 224h64V416h40V224h64V416h48V224h64V416h40V224h64V420.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512H32c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1V224z" /></svg>
          Деятельность</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/projects">
        <p className={cl.link__text}>
          <svg className={cl.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" /></svg>
          Проекты</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/partners">
        <p className={cl.link__text}>
          <svg className={cl.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM96 128H0V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128zM48 352c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128H544zm64 208c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z" /></svg>
          Партнеры</p></NavLink>
      <NavLink className={({ isActive }) => isActiveCheck(isActive)} to="/contacts">
        <p className={cl.link__text}>
          <svg className={cl.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
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
