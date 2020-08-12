import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Company from '../../components/company/company.component';
import Contact from '../../components/contact/contact.component';
import Budget from '../../components/budget/budget.component';

export default function Routing() {
  return (
    <div className="container" style={{ backgroundColor: '#ffffff' }}>
      <Switch>
        <Route path="/empresa">
          <Company />
        </Route>
        <Route path="/presupuesto">
          <Budget />
        </Route>
        <Route path="/contacto">
          <Contact />
        </Route>
        <Route path="/users"></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}
