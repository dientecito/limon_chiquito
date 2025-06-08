import React from 'react';

const specials = [
  { title: 'Greek Salad', description: 'Fresh and crispy.', price: '$12.99' },
  { title: 'Bruschetta', description: 'Grilled bread with tomatoes.', price: '$5.99' },
  { title: 'Lemon Dessert', description: 'Sweet and tangy.', price: '$4.99' },
];

function Specials() {
  return (
    <section className="section specials">
      <h2>This Week's Specials</h2>
      {specials.map((item, index) => (
        <div className="special-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p><strong>{item.price}</strong></p>
        </div>
      ))}
    </section>
  );
}

export default Specials;