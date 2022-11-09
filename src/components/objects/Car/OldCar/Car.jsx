import React from "react";
import style from "./Car.module.css";
import newArrCarList from "../../../../data/newArrCarList";

export default function Car({
  id,
  carName,
  carColor,
  carYear,
  carPrice,
  condition,
  mileage,
  add,
  text,
}) {
  function transfer(arr) {
    newArrCarList.push(arr);
    return newArrCarList;
  }

  return (
    <>
      <div className={style.car}>
        <h2>Название: {carName}</h2>
        <span>ID: {id}</span>
        <span>Цвет: {carColor}</span>
        <span>Год: {carYear}</span>
        <span>Цена: {carPrice} ₽</span>
        <span>Состояние: {condition}</span>
        <span>Пробег: {mileage} км</span>
        <button onClick={() => transfer(add)}> {text} </button>
      </div>
    </>
  );
}
