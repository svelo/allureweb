import React, { Component } from 'react';
import ContactUs from './contactUs/contactUs.component';
import WhereWeAre from './where/whereWeAre.component';
import InfoAllure from './infoAllure/infoAllure.component';

export default class Footer extends Component {
  render() {
    //return <div class="bg-dark rounded fixed-bottom">footer</div>;
    return (
      <div className="container">
        <div className=" row bg-dark rounded ">
          <div className="col-md-4 col-sd-12">
            <h5 style={{ color: '#ff8c00' }}>Allure Electromecanica</h5>
            <InfoAllure></InfoAllure>
          </div>
          <div className="col-md-4 col-sd-12">
            {' '}
            <h5 style={{ color: '#ff8c00' }}>Contacta con nosotros</h5>
            <ContactUs></ContactUs>
          </div>
          <div className="col-md-4 col-sd-12">
            {' '}
            <h5 style={{ color: '#ff8c00' }}>¿Dónde estamos?</h5>
            <WhereWeAre></WhereWeAre>
          </div>
        </div>
      </div>
    );
  }
}
