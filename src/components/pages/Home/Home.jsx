import React from "react";
import { Routes, Route } from "react-router-dom";

import style from "./Home.module.css";
import Garage from "../Garage/Garage";
import Market from "../Market/Market";

import newArrCarList from "../../../data/newArrCarList";

export default function Home() {
  const [arr, setArr] = React.useState(newArrCarList);
  console.log(arr);

  return (
    <div className={style.container}>
      <div className={style.home}>
        <Routes>
          <Route path="garage" element={<Garage arr={arr} setArr={setArr} />} />
          <Route path="market" element={<Market />} />
        </Routes>
      </div>
    </div>
  );
}
