import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./UI/navbar/navbar.jsx";
import AppRouter from "./AppRouter.jsx";
import BacgroundVideo from "./UI/BackgroundVideo/BackgroundVideo.jsx";
import Header from "./UI/Header/Header.jsx";
import StroyCityLogo from "./UI/StroyCityLogo/StroyCityLogo.jsx";
import MadeInRussiaLogo from "./UI/MadeInRussiaLogo/MadeInRussiaLogo.jsx";

const App = () => {
  return (
    <React.Fragment>
      <BacgroundVideo />
      <HashRouter>
        <AppRouter />
        <Header>
          <StroyCityLogo />
          <Navbar />
          <MadeInRussiaLogo />
        </Header>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
