import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../icons_assets/restauranfood_cuadrado.jpg';

function CallToAction() {
  return (
    <section className="hero" aria-label="Promotional section for reservations">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Somos un restaurante mediterráneo de propiedad familiar, enfocado en recetas tradicionales servidas con un toque moderno. En cada plato combinamos la autenticidad de los sabores de siempre con una presentación cuidada y creativa. Nuestro compromiso es ofrecer una experiencia culinaria cálida y acogedora, donde cada visita se sienta como una comida en casa, pero con la calidad y el detalle de un restaurante de primera.</p>
          <Link to="/booking" className="cta-btn" aria-label="On Click">Reserva tu mesa</Link>
        </div>
        <img src={heroImg} alt="Little Lemon restaurant" className="hero-img" />
      </div>
    </section>
  );
}

export default CallToAction;
