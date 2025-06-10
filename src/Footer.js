import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div>
        <h4>Little Lemon</h4>
        <li><Link to="/" aria-label="On Click">Inicio</Link></li>
        <li><Link to="/about" aria-label="On Click">Sobre Nosotros</Link></li>
        <li><Link to="/menu" aria-label="On Click">Menu</Link></li>
        <li><Link to="/booking" aria-label="On Click">Reservas</Link></li>
        <li><Link to="/order" aria-label="On Click">Pedidos Online</Link></li>
        <li><Link to="/login" aria-label="On Click">Login</Link></li>
      </div>
      <div>
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <div>
        <h4>Social Media Links</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;
