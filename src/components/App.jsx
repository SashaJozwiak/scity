import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./UI/navbar/navbar.jsx";
import AppRouter from "./AppRouter.jsx";
import BacgroundVideo from "./UI/BackgroundVideo/BackgroundVideo.jsx";

const App = () => {
  return (
    <div>
      <BacgroundVideo />
      <HashRouter>
        <Navbar />
        <AppRouter />
      </HashRouter>
    </div>
  );
};

export default App;
