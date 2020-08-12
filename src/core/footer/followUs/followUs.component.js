import React from 'react';

export default function FollowUs() {
  return (
    <div class="row">
      <div className="col-md-1 "></div>
      <div className="col-md-1 ">
        <a href="https://www.facebook.com/allureelectromecanica" target="blank">
          <img
            alt=""
            src="facebook.png"
            width="26"
            height="26"
            border="0"
            className="img-responsive"
            style={{ backgroundColor: '#ffffff' }}
          ></img>
        </a>
      </div>
      <div className="col-md-1 ">
        <a href="https://instagram.com/allureelectromecanica" target="blank">
          <img
            alt=""
            src="instagram.png"
            width="26"
            height="26"
            border="0"
            className="img-responsive"
          ></img>
        </a>
      </div>
    </div>
  );
}
