import React from 'react';
import restaurantImage from '../icons_assets/restaurant.jpg'; // Asegúrate de tener la imagen en tu proyecto

function Chicago() {
  return (
    <section className="section-about">
      <div className="about-container">
        <div className="about-card">
          <h2>Little Lemon - Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu inspired by the flavors of the Mediterranean.
          </p>
        </div>
        <div className="about-image">
          <img src={restaurantImage} alt="Little Lemon restaurant in Chicago" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
