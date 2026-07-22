const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <main class="page">
      <section class="hero">
        <p class="eyebrow">Santuario Axolotl</p>
        <h1>Conservamos al ajolote mexicano y acercamos su historia a todo el mundo.</h1>
        <p class="lead">Explora nuestra tienda, conoce nuestro refugio y descubre cómo apoyar la conservación de una especie única.</p>
        <div class="actions">
          <a href="#catalogo" class="button primary">Ver productos</a>
          <a href="#contacto" class="button secondary">Contactar</a>
        </div>
      </section>

      <section class="cards" id="catalogo">
        <article>
          <h2>Refugio</h2>
          <p>Un espacio dedicado a la protección, educación y cuidado de los ajolotes.</p>
        </article>
        <article>
          <h2>Tienda</h2>
          <p>Productos inspirados en la conservación y la cultura del ajolote mexicano.</p>
        </article>
        <article>
          <h2>Conservación</h2>
          <p>Tu apoyo ayuda a difundir conocimiento y a proteger este tesoro biológico.</p>
        </article>
      </section>

      <section class="contact" id="contacto">
        <h2>¿Quieres colaborar?</h2>
        <p>Escríbenos para conocer más sobre el proyecto, pedidos especiales o actividades.</p>
      </section>
    </main>

    <style>
      :root {
        color-scheme: light;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #f4fbf8;
        color: #12332a;
      }
      body {
        margin: 0;
        background: linear-gradient(135deg, #f4fbf8 0%, #e2f5ee 100%);
      }
      .page {
        max-width: 1100px;
        margin: 0 auto;
        padding: 3rem 1.5rem 4rem;
      }
      .hero {
        background: white;
        border-radius: 24px;
        padding: 3rem;
        box-shadow: 0 20px 40px rgba(18, 51, 42, 0.08);
      }
      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.25em;
        font-size: 0.85rem;
        font-weight: 700;
        color: #2f8f6b;
      }
      h1 {
        font-size: clamp(2rem, 4vw, 3rem);
        line-height: 1.2;
        margin: 0.5rem 0 1rem;
      }
      .lead {
        font-size: 1.1rem;
        line-height: 1.7;
        color: #45675c;
        max-width: 760px;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1.5rem;
      }
      .button {
        display: inline-block;
        padding: 0.9rem 1.2rem;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 700;
      }
      .button.primary {
        background: #2f8f6b;
        color: white;
      }
      .button.secondary {
        background: #e7f8f1;
        color: #1b5a43;
      }
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
      }
      .cards article, .contact {
        background: white;
        border-radius: 20px;
        padding: 1.5rem;
        box-shadow: 0 12px 24px rgba(18, 51, 42, 0.06);
      }
      .contact {
        margin-top: 1.5rem;
      }
    </style>
  `;
}
