import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={s.navList}>
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLink_active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
}
