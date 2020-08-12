import React, { Component } from 'react';
import ContactUs from './contactUs/contactUs.component';
import WhereWeAre from './where/whereWeAre.component';
import InfoAllure from './infoAllure/infoAllure.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import FollowUs from './followUs/followUs.component';

library.add(faFacebookF);

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className=" row bg-dark rounded ">
          <div className="col-md-4 col-sd-12">
            <h6 style={{ color: '#ff8c00' }}>Allure Electromecanica</h6>
            <InfoAllure></InfoAllure>
            <div className="mt-3">
              <h6 style={{ color: '#ff8c00', marginTop: 2 }}>Siguenos</h6>
              <FollowUs></FollowUs>
            </div>
          </div>
          <div className="col-md-4 col-sd-12">
            {' '}
            <h6 style={{ color: '#ff8c00' }}>Contacta con nosotros</h6>
            <ContactUs></ContactUs>
          </div>
          <div className="col-md-4 col-sd-12">
            {' '}
            <h6 style={{ color: '#ff8c00' }}>¿Dónde estamos?</h6>
            <WhereWeAre></WhereWeAre>
          </div>
        </div>
      </div>
    );
  }
}
