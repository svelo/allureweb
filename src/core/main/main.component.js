import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routing from '../routing/routing.component';
import Company from '../../components/company/company.component';

export default class Main extends Component {
  render() {
    return (
      <Routing></Routing>
      // <div className="container">
      //   <Switch>
      //     <Route path="/company">
      //       <Company />
      //     </Route>
      //     <Route path="/users"></Route>
      //     <Route path="/"></Route>
      //   </Switch>
      // </div>
    );
  }
}
