import React from "react";
import { NavLink } from "react-router-dom";
import cl from "../pages_scss/corporation.module.scss"

const ProjectsNavbar = () => {
  const isActiveCheck = (isActive) => {
    return isActive
      ? `${cl.corp} ${cl.corp_active}`
      : `${cl.corp}`
  };
  return (
    <div className={cl.corporation__navbar}>
      <NavLink to="rf" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>
          Российская Федерация
        </p>
      </NavLink>

      <NavLink to="rb" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>
          Республика Беларусь
        </p>
      </NavLink>

      <NavLink to="rk" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>
          Республика Казахстан
        </p>
      </NavLink>
    </div>
  );
};

export default ProjectsNavbar;