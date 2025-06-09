import React from 'react';

const specials = [
  {
    title: 'Greek Salad',
    description: 'Fresh and crispy.',
    price: '$12.99',
    image: '/icons_assets/greek salad.jpg' // Usa la ruta correcta de tu imagen
  },
  {
    title: 'Bruschetta',
    description: 'Grilled bread with tomatoes.',
    price: '$5.99',
    image: '/icons_assets/bruchetta.svg' // Usa la ruta correcta de tu imagen
  },
  {
    title: 'Lemon Dessert',
    description: 'Sweet and tangy.',
    price: '$4.99',
    image: '/icons_assets/lemon dessert.jpg' // Usa la ruta correcta de tu imagen
  },
];

function Specials() {
  return (
    <section className="section specials">
      <h2>This Week's Specials</h2>
      <div className="specials-list">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="special-card-img"
              style={{ width: '100%', borderRadius: '8px 8px 0 0', marginBottom: '0.5rem' }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>{item.price}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;