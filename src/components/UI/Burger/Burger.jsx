import React from "react";
import cl from "./Burger.module.scss";

const Burger = ({ burgerActive, setBurgerActive }) => {

  const burgerOnClick = () => {
    setBurgerActive(!burgerActive);
    console.log(burgerActive);
  };
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setBurgerActive(false);
  });

  return (
    <div className={cl.clickArea} onClick={burgerOnClick}>
      <div className={burgerActive ? `${cl.burger} ${cl.burger_active}` : `${cl.burger}`}>
        <div className={cl.burgerLine} />
      </div>
    </div>
  );
};

export default Burger;