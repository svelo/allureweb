import React, { Component } from 'react';

export default class Company extends Component {
  render() {
    return (
      // <div class="text-center">
      //   <img src="2.jpg" class="rounded" alt="..."></img>
      // </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <img
              alt=""
              src="2.jpg"
              class="img-responsive rounded"
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
