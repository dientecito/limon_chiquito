import React from 'react';
import logo from './icons_assets/limon_chiquito_logo.jpg';

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="Little Lemon logo" />
      </div>
        {/*
        <div className="hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
          </div>
          <img src="/restaurant_chef.jpg" alt="Hero" style={{ maxWidth: '300px', borderRadius: '16px' }} />
        </div>
        */}

    </header>
  );
}

export default Header;
