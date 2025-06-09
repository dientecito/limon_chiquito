import React from 'react';
import logo from './icons_assets/limon_chiquito_logo.jpg';
import Nav from './Nav'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom'; // Agrega esta línea

function Header() {
  return (
    <header>
      <div className="header-top">
        <Link to="/"> {/* Envuelve el logo en Link */}
          <img src={logo} alt="Little Lemon logo" />
        </Link>
        <Nav />
      </div>
      {/* ...resto del código... */}
    </header>
  );
}

export default Header;
