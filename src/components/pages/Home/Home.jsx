import React from "react";
import { Routes, Route } from "react-router-dom";

import style from "./Home.module.css";
import Garage from "../Garage/Garage";
import Market from "../Market/Market";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.home}>
        <Routes>
          <Route path="garage" element={<Garage />} />
          <Route path="market" element={<Market />} />
        </Routes>
      </div>
    </div>
  );
}
