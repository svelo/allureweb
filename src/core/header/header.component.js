import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link" to="/">
              {'Home'}
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
}
