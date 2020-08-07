import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Company from '../../components/company/company.component';

export default function Routing() {
  return (
    <div className="container">
      <Switch>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/users"></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}
