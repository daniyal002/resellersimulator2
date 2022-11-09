import React from "react";
import NewCar from "../../objects/Car/NewCar/NewCar";
import style from "./Garage.module.css";
import newArrCarList from "../../../data/newArrCarList";

export default function Garage() {
  const [arr, setArr] = React.useState(newArrCarList);
  return (
    <div className={style.garage}>
      {arr.map((car) => {
        return (
          <NewCar
            {...car}
            key={car.id}
            text={"Продать"}
            setArr={setArr}
            arr={arr}
          />
        );
      })}
    </div>
  );
}
