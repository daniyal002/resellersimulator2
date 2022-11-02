import React from "react";
import style from "./Market.module.css";
import Car from "../../objects/Car/Car";
import carList from "../../../data/carList.js";

export default function Market() {
  return (
    <div className={style.market}>
      {carList.map((car) => {
        return (
          <Car {...car} key={car.id} add={carList[car.id]} text={"Купить"} />
        );
      })}
    </div>
  );
}
