import React from 'react';

export default function WhereWeAre() {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        width="300"
        height="200"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d869.7744250733489!2d-2.660268559455107!3d42.83989079673727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc27bb547ab4b%3A0xd83066f070ae726f!2sAllure%20Electromecanica%20-%20Vitoria!5e0!3m2!1ses!2ses!4v1591192089781!5m2!1ses!2ses"
        frameBorder="0"
        allowFullScreen="allowfullscreen"
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}
