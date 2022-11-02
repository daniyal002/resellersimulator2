import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Header from "./components/Ul/Header/Header";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Home />
        </main>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
