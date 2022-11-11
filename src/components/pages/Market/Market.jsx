import React from "react";
import style from "./Market.module.css";
import Car from "../../objects/Car/OldCar/Car";
import carList from "../../../data/carList.js";
import newArrCarList from "../../../data/newArrCarList";

export default function Market() {
  function addArr(arr, item) {
    arr.push(item);
  }
  return (
    <div className={style.market}>
      {carList.map((car) => {
        return (
          <Car
            {...car}
            key={car.id}
            text={"Купить"}
            arr={newArrCarList}
            item={carList[car.id]}
            func={addArr}
          />
        );
      })}
    </div>
  );
}
