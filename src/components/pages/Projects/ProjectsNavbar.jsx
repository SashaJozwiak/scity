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
    <div className={cl.corporation}>
    <div className={cl.corporation__navbar}>
      <NavLink to="rf" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>
          Россия
        </p>
      </NavLink>

      <NavLink to="rb" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>
          Беларусь
        </p>
      </NavLink>

      <NavLink to="rk" className={({ isActive }) => isActiveCheck(isActive)}>
        <p className={cl.link__text}>
          Узбекистан
        </p>
      </NavLink>
    </div>
    </div>
  );
};

export default ProjectsNavbar;