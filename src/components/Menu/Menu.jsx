import React, { useState } from "react";
import cl from "./Menu.module.scss";
import Burger from "../UI/Burger/Burger.jsx";
import Navbar from "../UI/Navbar/Navbar.jsx";

const Menu = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <div className={cl.menu}>
      <Burger burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
      <Navbar burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </div>
  );
};

export default Menu;
