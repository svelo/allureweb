import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar.component';
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
