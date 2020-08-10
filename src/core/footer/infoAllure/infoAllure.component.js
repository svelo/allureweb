import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class InfoAllure extends Component {
  render() {
    return (
      <div>
        <div>
          <h6>Electricidad y mecánica del automovil</h6>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Link
              to="/presupuesto"
              className="btn btn-success"
              style={{ backgroundColor: '#ff8c00' }}
            >
              {'  Pide tu presupuesto '}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
