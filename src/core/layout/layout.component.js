import React, { Component } from 'react';
import Header from '../header/header.component';
import Main from '../main/main.component';
import Footer from '../footer/footer.component';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Router>
      </div>
    );
  }
}
