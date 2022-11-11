import React from "react";
import style from "./Car.module.css";

export default function Car({
  id,
  carName,
  carColor,
  carYear,
  carPrice,
  condition,
  mileage,
  text,
  func,
  arr,
  item,
}) {
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
        <button onClick={() => func(arr, item)}>{text}</button>
      </div>
    </>
  );
}
