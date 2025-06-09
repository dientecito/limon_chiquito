import React from 'react';
import { Link } from 'react-router-dom'; // <-- Agrega esta línea
import heroImg from '../icons_assets/restauranfood_cuadrado.jpg'; // Cambia el nombre y ruta según tu imagen

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="cta-btn">Reserve a Table</Link> {/* Cambia el botón por Link */}
        </div>
        <img src={heroImg} alt="Little Lemon restaurant" className="hero-img" />
      </div>
    </section>
  );
}

export default CallToAction