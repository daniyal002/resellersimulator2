import { Link } from 'react-router-dom';
import React from 'react';
import style from './Nav.module.css';

export default function Nav() {
  return (
    <div className={style.nav}>
      <ul>
        <li>
          <Link to="/">Домой</Link>
        </li>
        <li>
          <Link to="garage">Гараж</Link>
        </li>
        <li>
          <Link to="market">Рынок</Link>
        </li>
      </ul>
    </div>
  );
}
