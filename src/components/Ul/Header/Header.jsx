import React from "react";
import style from "./Header.module.css";
import AccountMoney from "../AccountMoney/AccountMoney";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <span className={style.logo}>Reseller Simulator</span>
        <AccountMoney />
        <Nav />
      </div>
    </div>
  );
}
