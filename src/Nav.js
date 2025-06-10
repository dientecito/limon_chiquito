import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main Navigation">
      <ul>
        <li><Link to="/" aria-label="On Click">Inicio</Link></li>
        <li><Link to="/about" aria-label="On Click">Sobre Nosotros</Link></li>
        <li><Link to="/menu" aria-label="On Click">Menu</Link></li>
        <li><Link to="/booking" aria-label="On Click">Reservas</Link></li>
        <li><Link to="/order" aria-label="On Click">Pedidos Online</Link></li>
        <li><Link to="/login" aria-label="On Click">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

