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
    <nav class="navbar navbar-expand navbar-dark bg-dark rounded">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link" to="/">
            {<FontAwesomeIcon icon="home" />}
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/company">
            {' Empresa '}
          </Link>
        </li>

        <li class="nav-item">
          <Link className="nav-link" to="/users">
            {' Link 3 '}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
