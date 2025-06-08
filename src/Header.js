import logo from './icons_assets/limon_chiquito_logo.jpg'; // Ajusta la ruta si tu logotipo está en otra carpeta

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" style={{ height: '60px' }} />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;
