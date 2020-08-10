import React, { Component } from 'react';
import Navbar from './navbar/navbar.component';
import Logos from './logos/logos.componet';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Logos></Logos>
      </div>
    );
  }
}
