import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faCheckSquare,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheckSquare, faCoffee, faHome);

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark rounded">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            {<FontAwesomeIcon icon="home" />}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/empresa">
            {' Empresa '}
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/presupuesto">
            {' Presupuesto '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
