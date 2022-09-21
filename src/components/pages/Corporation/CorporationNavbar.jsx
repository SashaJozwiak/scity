import React from "react";
import { NavLink } from "react-router-dom";
import cl from "../pages_scss/corporation.module.scss"

const CorporationNavbar = () => {
  const isActiveCheck = (isActive) => {
    return isActive
      ? `${cl.corp} ${cl.corp_active}`
      : `${cl.corp}`
  };
  return (
    <div className={cl.corporation__navbar}>
      <NavLink to="about" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>Проектирование</p>
      </NavLink>

      <NavLink to="history" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>Производство</p>
      </NavLink>

      <NavLink to="achivements" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>Монтаж</p>
      </NavLink>
    </div>
  );
};

export default CorporationNavbar;
