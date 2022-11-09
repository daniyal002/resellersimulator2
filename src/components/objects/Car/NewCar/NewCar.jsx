import React from "react";
import style from "./NewCar.module.css";

export default function Car({
  id,
  carName,
  carColor,
  carYear,
  carPrice,
  condition,
  mileage,
  text,
  setArr,
  arr,
}) {
  function deleteArr(id) {
    setArr(arr.filter((el) => el.id !== id));
  }

  return (
    <div className={style.car}>
      <h2>Название: {carName}</h2>
      <span>ID: {id}</span>

      <span>Цвет: {carColor}</span>
      <span>Год: {carYear}</span>
      <span>Цена: {carPrice} ₽</span>
      <span>Состояние: {condition}</span>
      <span>Пробег: {mileage} км</span>
      <button onClick={() => deleteArr(id)}>{text}</button>
    </div>
  );
}
