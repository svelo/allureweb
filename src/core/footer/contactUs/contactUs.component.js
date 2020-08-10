import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faEnvelope,
  faMobile,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope, faMobile, faPhone, faMapMarker);

export default function ContactUs() {
  return (
    <div class="container">
      <div class=" row bg-dark rounded ">
        <div class="row ">
          <div class="col-md-1">{<FontAwesomeIcon icon="phone" />}</div>
          <div class="col-md-11">
            <span class="col-xs-10">945 311 401</span>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-1">{<FontAwesomeIcon icon="mobile" />}</div>
          <div class="col-md-11">
            <span class="col-xs-10">663 062 361</span>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-1">{<FontAwesomeIcon icon="envelope" />}</div>
          <div class="col-md-11">
            <span class="col-xs-10">allureelectromecanica@gmail.com</span>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-1">{<FontAwesomeIcon icon="map-marker" />}</div>
          <div class="col-md-11">
            <span class="col-xs-11">c/ Iparraguirre nº1, Pabellón 3</span>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-11">
            <span class="col-xs-10">01006 Vitoria-Gasteiz Alava</span>
          </div>
        </div>
      </div>
    </div>
  );
}
