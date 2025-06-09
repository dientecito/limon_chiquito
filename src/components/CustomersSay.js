import React from 'react';

const testimonials = [
  { name: 'Maria', stars: '⭐⭐⭐⭐⭐', text: 'Excellent food and great service!' },
  { name: 'John', stars: '⭐⭐⭐⭐', text: 'Loved the lemon dessert.' },
  { name: 'Alex', stars: '⭐⭐⭐⭐⭐', text: 'Best restaurant in town!' },
];

function CustomersSay() {
  return (
    <section className="testimonials">
  <div className="testimonial-content">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-wrapper">
      <div className="testimonial-list">
        {testimonials.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{review.name}</h3>
            <p>{review.stars}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}


export default CustomersSay;
