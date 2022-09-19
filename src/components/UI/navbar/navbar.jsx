import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router";
import logo from "../../../assets/logo/logo2_svg.svg"
import logo2 from "../../../assets/logo/logo_3.svg"
import cl from "./navbar.module.scss";


//const navigator = useNavigate();

const Navbar = () => {
  return (


    <div className={cl.navbar}>
              <img
                className="logo"
                src={logo}
                alt={"logo"}
                onClick={() => navigator("..")}
              />
      <Link className={cl.navbar__link} to="/corporation"><p className={cl.link__text}>Корпорация</p></Link>
      <Link className={cl.navbar__link} to="/projects"><p className={cl.link__text}>Проекты</p></Link>
      <Link className={cl.navbar__link} to="/partners"><p className={cl.link__text}>Партнеры</p></Link>
      <Link className={cl.navbar__link} to="/contacts"><p className={cl.link__text}>Контакты</p></Link>

      <img
                className="logo"
                src={logo2}
                alt={"logo"}
                onClick={() => navigator("..")}
              />


    </div>
  );
};

export default Navbar;
