import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./UI/navbar/navbar.jsx";
import AppRouter from "./AppRouter.jsx";
import BacgroundVideo from "./UI/BackgroundVideo/BackgroundVideo.jsx";

const App = () => {
  return (
    <div>
      <BacgroundVideo />
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};

export default App;
