import React, { Component } from 'react';
import ContactUs from './contactUs/contactUs.component';
import WhereWeAre from './where/whereWeAre.component';

export default class Footer extends Component {
  render() {
    //return <div class="bg-dark rounded fixed-bottom">footer</div>;
    return (
      <div class="container">
        <div class=" row bg-dark rounded ">
          <div class="col-md-4 col-sd-12">
            <h5 style={{ color: '#ff8c00' }}>Allure Electromecanica</h5>
            <div>
              <h6>Electricidad y mecánica del automovil</h6>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ backgroundColor: '#ff8c00' }}
                >
                  Pide tu presupuesto
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sd-12">
            {' '}
            <h5 style={{ color: '#ff8c00' }}>Contacta con nosotros</h5>
            <ContactUs></ContactUs>
          </div>
          <div class="col-md-4 col-sd-12">
            {' '}
            <h5 style={{ color: '#ff8c00' }}>¿Dónde estamos?</h5>
            <WhereWeAre></WhereWeAre>
          </div>
        </div>
      </div>
    );
  }
}
