import React from "react";
import cl from "./Header.module.scss";

const Header = ({ children }) => {
  return (
    <header className={cl.header}>
      {children}
    </header>
  );
};

export default Header;
