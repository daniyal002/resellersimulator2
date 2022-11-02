import React from "react";
import style from "./AccountMoney.module.css";

export default function AccountMoney() {
  return (
    <div className={style.accountMoney}>
      <span>Деньги на счету: 10000 ₽</span>
    </div>
  );
}
