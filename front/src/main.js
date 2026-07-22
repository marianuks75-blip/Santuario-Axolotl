const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <header class="site-header">
      <div class="brand">
        <span class="logo">🦎</span>
        <div>
          <p class="eyebrow">Santuario Axolotl</p>
          <h1>Conservación, refugio y cultura del ajolote mexicano</h1>
        </div>
      </div>
      <nav class="site-nav">
        <a href="#productos">Productos</a>
        <a href="#video">Video</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#mapa">Mapa</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    <main class="page">
      <section class="hero" id="hero">
        <div class="hero-copy">
          <p class="eyebrow">Refugio y conciencia</p>
          <h2>Un espacio dedicado a la protección y difusión del ajolote</h2>
          <p class="lead">Visítanos para conocer nuestro refugio, explorar productos responsables y apoyar la conservación de esta especie única.</p>
          <div class="actions">
            <a href="#productos" class="button primary">Ver productos</a>
            <a href="#contacto" class="button secondary">Escribirnos</a>
          </div>
        </div>
        <div class="hero-visual">
          <img src="https://via.placeholder.com/720x520.png?text=Ajolote+refugio" alt="Ajolote en su refugio" loading="lazy" />
        </div>
      </section>

      <section class="section cards" id="productos">
        <h2>Productos</h2>
        <p class="section-copy">Encuentra artículos inspirados en la conservación y la cultura mexicana, creados para apoyar nuestro refugio.</p>
        <div class="grid cards-grid">
          <article>
            <img src="https://via.placeholder.com/520x320.png?text=Producto+1" alt="Producto 1" loading="lazy" />
            <h3>Playera Ajolote</h3>
            <p>Diseño original con mensaje de conservación.</p>
          </article>
          <article>
            <img src="https://via.placeholder.com/520x320.png?text=Producto+2" alt="Producto 2" loading="lazy" />
            <h3>Taza Ecológica</h3>
            <p>Material sostenible y arte del ajolote mexicano.</p>
          </article>
          <article>
            <img src="https://via.placeholder.com/520x320.png?text=Producto+3" alt="Producto 3" loading="lazy" />
            <h3>Cuaderno</h3>
            <p>Notas y bocetos con ilustraciones de la fauna.</p>
          </article>
        </div>
      </section>

      <section class="section video-section" id="video">
        <h2>Video del refugio</h2>
        <p class="section-copy">Descubre nuestro espacio y nuestras actividades en este breve recorrido audiovisual.</p>
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Video de Santuario Axolotl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      <section class="section testimonials" id="testimonios">
        <h2>Testimonios</h2>
        <p class="section-copy">Historias reales de visitantes, voluntarios y colaboradores que apoyan al refugio.</p>
        <div class="grid testimonial-grid">
          <article>
            <p>“El refugio es hermoso y el equipo explica todo con mucho cariño. Aprendí a valorar al ajolote de otra manera.”</p>
            <span>— María, visitante</span>
          </article>
          <article>
            <p>“Compré una taza y llegó rápido. Me encanta apoyar una causa que protege a los ajolotes.”</p>
            <span>— Jorge, colaborador</span>
          </article>
          <article>
            <p>“El equipo hace un trabajo admirable en la conservación y la educación ambiental.”</p>
            <span>— Ana, voluntaria</span>
          </article>
        </div>
      </section>

      <section class="section map-section" id="mapa">
        <h2>Ubicación</h2>
        <p class="section-copy">Nos encontramos en el corazón del área protegida, con visitas guiadas y actividades educativas.</p>
        <div class="map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188671.45344795708!2d-99.23419657485816!3d19.2861115066769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92a3e08cc6d%3A0x31cd9225f12405be!2sXochimilco%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700580000000!5m2!1ses!2smx" title="Mapa del refugio Santuario Axolotl" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </section>

      <section class="section contact-section" id="contacto">
        <div class="contact-copy">
          <h2>Contacto</h2>
          <p>¿Tienes dudas, pedidos especiales o quieres apoyar el refugio? Escríbenos y te responderemos pronto.</p>
        </div>
        <form id="contact-form" class="contact-form">
          <label>Nombre<input type="text" name="nombre" placeholder="Tu nombre" required></label>
          <label>Correo<input type="email" name="correo" placeholder="correo@ejemplo.com" required></label>
          <label>Teléfono<input type="tel" name="telefono" placeholder="123 456 7890"></label>
          <label>Mensaje<textarea name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea></label>
          <button type="submit" class="button primary">Enviar mensaje</button>
          <p id="contact-feedback" class="feedback"></p>
        </form>
      </section>

      <section class="section info-section" id="privacy">
        <h2>Aviso de privacidad</h2>
        <p>Protegemos tus datos personales y los usamos únicamente para responder tus consultas y mejorar nuestros servicios. No compartimos información con terceros.</p>
      </section>

      <section class="section info-section" id="terms">
        <h2>Términos y condiciones</h2>
        <p>El uso de este sitio es con fines informativos y de apoyo al refugio. Todas las compras y donaciones se realizan de acuerdo con las políticas de conservación del proyecto.</p>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>Santuario Axolotl</strong>
        <p>Protección de especies, educación ambiental y productos con causa.</p>
      </div>
      <div class="footer-links">
        <a href="#privacy">Aviso de privacidad</a>
        <a href="#terms">Términos y condiciones</a>
      </div>
    </footer>

    <style>
      :root {
        color-scheme: light;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #eef7f2;
        color: #12332a;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background: linear-gradient(180deg, #eef7f2 0%, #ffffff 100%);
      }
      .site-header,
      .site-footer {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .site-header {
        position: sticky;
        top: 0;
        background: rgba(255,255,255,0.96);
        backdrop-filter: blur(10px);
        z-index: 10;
        border-bottom: 1px solid rgba(18, 51, 42, 0.08);
      }
      .brand {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      .logo {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: #2f8f6b;
        color: white;
        font-size: 1.5rem;
      }
      .site-nav {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .site-nav a,
      .footer-links a {
        color: #1f5a40;
        text-decoration: none;
        font-weight: 600;
      }
      .page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1.5rem 4rem;
      }
      .hero {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 2rem;
        align-items: center;
        background: white;
        border-radius: 32px;
        padding: 3rem;
        box-shadow: 0 24px 60px rgba(18, 51, 42, 0.08);
      }
      .hero-copy {
        max-width: 620px;
      }
      .hero h2 {
        font-size: clamp(2.5rem, 3vw, 4rem);
        margin: 0.5rem 0 1rem;
        line-height: 1.05;
      }
      .hero .lead {
        font-size: 1.05rem;
        line-height: 1.9;
        color: #365a47;
      }
      .hero-visual img {
        width: 100%;
        border-radius: 28px;
        object-fit: cover;
      }
      .section {
        margin-top: 3.5rem;
      }
      .section h2 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
      }
      .section-copy {
        margin: 0 0 1.5rem;
        color: #45675c;
        max-width: 760px;
      }
      .grid {
        display: grid;
        gap: 1.5rem;
      }
      .cards-grid {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      }
      .cards-grid article,
      .testimonial-grid article,
      .contact-form {
        background: white;
        border-radius: 28px;
        padding: 1.75rem;
        box-shadow: 0 18px 45px rgba(18, 51, 42, 0.08);
      }
      .cards-grid article img {
        width: 100%;
        border-radius: 20px;
        margin-bottom: 1rem;
      }
      .cards-grid article h3 {
        margin: 0 0 0.5rem;
      }
      .video-wrapper,
      .map-wrapper {
        border-radius: 28px;
        overflow: hidden;
        box-shadow: 0 18px 45px rgba(18, 51, 42, 0.08);
        background: white;
      }
      .video-wrapper iframe,
      .map-wrapper iframe {
        width: 100%;
        min-height: 420px;
        border: 0;
      }
      .testimonial-grid {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      }
      .testimonial-grid article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .testimonial-grid article p {
        margin: 0;
        color: #2e4e3d;
        line-height: 1.8;
      }
      .testimonial-grid article span {
        font-weight: 700;
        color: #1f5a40;
      }
      .contact-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: start;
      }
      .contact-form {
        display: grid;
        gap: 1rem;
      }
      .contact-form label {
        display: grid;
        gap: 0.5rem;
        color: #385740;
        font-weight: 600;
      }
      .contact-form input,
      .contact-form textarea {
        width: 100%;
        border: 1px solid #d9e6dc;
        border-radius: 16px;
        padding: 0.95rem 1rem;
        font: inherit;
        resize: vertical;
      }
      .contact-form .button {
        width: max-content;
      }
      .feedback {
        margin: 0;
        color: #1f5a40;
        font-weight: 700;
        min-height: 1.1rem;
      }
      .info-section {
        background: white;
        border-radius: 28px;
        padding: 2rem;
        box-shadow: 0 18px 45px rgba(18, 51, 42, 0.08);
      }
      .site-footer {
        border-top: 1px solid rgba(18, 51, 42, 0.1);
        gap: 2rem;
      }
      .site-footer p {
        margin: 0.25rem 0 0;
        color: #45675c;
      }
      @media (max-width: 900px) {
        .hero,
        .contact-section {
          grid-template-columns: 1fr;
        }
        .site-header,
        .site-footer {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    </style>
  `;

  const form = root.querySelector('#contact-form');
  const feedback = root.querySelector('#contact-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      feedback.textContent = '¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.';
      form.reset();
    });
  }
}
