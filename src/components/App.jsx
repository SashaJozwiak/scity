import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./UI/Navbar/Navbar.jsx";
import AppRouter from "./AppRouter.jsx";
import BacgroundVideo from "./UI/BackgroundVideo/BackgroundVideo.jsx";
import Header from "./UI/Header/Header.jsx";
import StroyCityLogo from "./UI/StroyCityLogo/StroyCityLogo.jsx";
import MadeInRussiaLogo from "./UI/MadeInRussiaLogo/MadeInRussiaLogo.jsx";
import Burger from "./UI/Burger/Burger.jsx";
import Menu from "./Menu/Menu.jsx";

const App = () => {
  return (
    <React.Fragment>
      <BacgroundVideo />
      {/* <HashRouter>
        <AppRouter />
        <Header>
          <StroyCityLogo />
          <Menu />
          <MadeInRussiaLogo />
        </Header>
      </HashRouter> */}
    </React.Fragment >
  );
};

export default App;
