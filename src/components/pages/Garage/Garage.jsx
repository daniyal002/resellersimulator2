import React from "react";
import Car from "../../objects/Car/Car";
import style from "./Garage.module.css";
import newArrCarList from "../../../data/newArrCarList";

export default function Garage() {
  return (
    <div className={style.garage}>
      {newArrCarList.map((car) => {
        return (
          <Car
            {...car}
            key={car.id}
            text={"Продать"}
            del={newArrCarList[car.id]}
          />
        );
      })}
    </div>
  );
}
