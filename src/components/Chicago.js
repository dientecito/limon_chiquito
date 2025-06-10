import React from 'react';
import restaurantImage from '../icons_assets/restaurant.jpg'; // Asegúrate de tener la imagen en tu proyecto

function Chicago() {
  return (
    <section className="section-about">
      <div className="about-container">
        <div className="about-card">
          <h2>Little Lemon - Chicago</h2>
          <p>
            Especializado en cocina mediterránea, el restaurante ofrece un menú cuidadosamente elaborado con ingredientes frescos y de origen local, lo que garantiza sabor, calidad y compromiso con los productores de la zona. Además de su propuesta gastronómica, Little Lemon destaca por su carta de cócteles clásicos, preparados con esmero y perfectos para acompañar cualquier comida o celebrar un momento especial. Su ambiente informal pero lleno de vida lo convierte en el punto de encuentro ideal para quienes buscan disfrutar de una experiencia culinaria auténtica, cercana y llena de sabor.
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
