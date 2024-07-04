import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" 
          className={({ isActive }) => (isActive ? css.navLinkActive : css.navLink)}
          end >
            Home
          </NavLink>
        </li>
        <NavLink to="/" 
          className={({ isActive }) => (isActive ? css.navLinkActive : css.navLink)}
          end >
            Movies
          </NavLink>
      </ul>
    </nav>
  );
};
