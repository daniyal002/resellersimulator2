import React from 'react';
import style from './Header.module.css';
import Nav from '../Nav/Nav';

export default function Header() {
  return (
    <div className={style.header}>
      <span className="logo">Reseller Simulator</span>
      <Nav />
    </div>
  );
}
