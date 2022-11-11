import React from "react";
import NewCar from "../../objects/Car/NewCar/NewCar";
import style from "./Garage.module.css";

export default function Garage({ arr, setArr }) {
  const deleteArr = (id) => {
    setArr((current) =>
      current.filter((employ) => {
        return employ.id !== id;
      })
    );
  };
  // console.log(arr);

  return (
    <div className={style.garage}>
      {arr.map((car) => {
        return (
          <NewCar {...car} key={car.id} text={"Продать"} func={deleteArr} />
        );
      })}
    </div>
  );
}
