function Main() {
  return (
    <main>
      <h2>Specials</h2>
      <section className="specials">
        <div className="specials-grid">
          <article className="special-card">
            <img src="/icons_assets/greek salad.jpg" alt="Greek Salad" />
            <h3>Greek Salad</h3>
            <p>Fresh salad with feta cheese, olives, and crisp vegetables.</p>
            <button>Order a delivery</button>
          </article>
          <article className="special-card">
            <img src="/icons_assets/bruchetta.svg" alt="Bruschetta" />
            <h3>Bruschetta</h3>
            <p>Grilled bread topped with tomatoes, garlic, and basil.</p>
            <button>Order a delivery</button>
          </article>
          <article className="special-card">
            <img src="icons_assets/lemon dessert.jpg" alt="Lemon Dessert" />
            <h3>Lemon Dessert</h3>
            <p>Sweet and tangy lemon dessert to finish your meal.</p>
            <button>Order a delivery</button>
          </article>
  </div>
      </section>
      <h2>Testimonials</h2>
      <section className="testimonials">
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <div className="testimonial-rating">08/10</div>
                  <div className="testimonial-user">
                    <img src="https://www.thispersondoesnotexist.com/?rand=1" alt="User 1" className="testimonial-avatar" />
                    <span className="testimonial-name">Ana López</span>
                  </div>
                  <div className="testimonial-text">¡La comida estuvo deliciosa y el servicio muy rápido!</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-rating">09/10</div>
                  <div className="testimonial-user">
                    <img src="https://www.thispersondoesnotexist.com/?rand=2" alt="User 2" className="testimonial-avatar" />
                    <span className="testimonial-name">Carlos Ruiz</span>
                  </div>
                  <div className="testimonial-text">Excelente ambiente, volveré pronto.</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-rating">07/10</div>
                  <div className="testimonial-user">
                    <img src="https://www.thispersondoesnotexist.com/?rand=3" alt="User 3" className="testimonial-avatar" />
                    <span className="testimonial-name">María Pérez</span>
                  </div>
                  <div className="testimonial-text">Me encantó el postre de limón, muy recomendado.</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-rating">10/10</div>
                  <div className="testimonial-user">
                    <img src="https://www.thispersondoesnotexist.com/?rand=4" alt="User 4" className="testimonial-avatar" />
                    <span className="testimonial-name">Javier Gómez</span>
                  </div>
                  <div className="testimonial-text">¡Todo perfecto, repetiré sin duda!</div>
                </div>
              </div>
        </section>
          <section className="descripcion">
          <div className="descripcion-texto">
            <h2>Little Lemon</h2>
            <h3>Bienvenido a Little Lemon</h3>
            <p>
              Descubre el auténtico sabor mediterráneo en el corazón de Chicago. Disfruta de platos frescos, ambiente acogedor y un servicio excepcional. ¡Ven a vivir una experiencia culinaria única!
            </p>
          </div>
          <div className="descripcion-imagen">
            <img src="/icons_assets/restaurant.jpg" alt="Restaurante Little Lemon" />
          </div>
        </section>
    </main>
  );
}

export default Main;
