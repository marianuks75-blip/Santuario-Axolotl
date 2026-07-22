const root = document.getElementById('root');

if (root) {
  root.innerHTML = `
    <header class="site-header">
      // Dynamically load Leaflet CSS and JS for the interactive map
      function loadLeaflet(callback) {
        if (window.L) return callback();
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => callback();
        document.body.appendChild(script);
      }

      const root = document.getElementById('root');

      if (root) {
        root.innerHTML = `
          <header class="site-header">
            <div class="brand">
              <span class="logo">🦎</span>
              <div>
                <p class="eyebrow">Santuario Axolotl</p>
                <h1>Conservación, refugio y cultura del ajolote</h1>
              </div>
            </div>
            <nav class="site-nav">
              <a href="#productos">Productos</a>
              <a href="#video">Video</a>
              <a href="#testimonios">Testimonios</a>
              <a href="#mapa">Mapa</a>
              <a href="#formulario">Contacto</a>
              <a href="#tabla-ejemplo">Tabla</a>
            </nav>
          </header>

          <main class="page">
            <section id="titulos" class="section">
              <h2>Títulos de ejemplo</h2>
              <h1>H1 - Santuario Axolotl</h1>
              <h2>H2 - Conservación</h2>
              <h3>H3 - Actividades</h3>
            </section>

            <section id="listas" class="section">
              <h2>Listas</h2>
              <p>Lista desordenada:</p>
              <ul>
                <li>Protección</li>
                <li>Educación</li>
                <li>Investigación</li>
              </ul>

              <p>Lista ordenada:</p>
              <ol>
                <li>Visita el refugio</li>
                <li>Participa como voluntario</li>
                <li>Apoya comprando productos</li>
              </ol>
            </section>

            <section id="productos" class="section">
              <h2>Productos destacados</h2>
              <div class="grid cards-grid">
                <article>
                  <img src="https://via.placeholder.com/520x320.png?text=Playera+Ajolote" alt="Playera Ajolote" loading="lazy" />
                  <h3>Playera Ajolote</h3>
                  <p>Playera de algodón con diseño exclusivo.</p>
                </article>
                <article>
                  <img src="https://via.placeholder.com/520x320.png?text=Taza+Ajolote" alt="Taza Ajolote" loading="lazy" />
                  <h3>Taza Ecológica</h3>
                  <p>Taza reutilizable con arte del ajolote.</p>
                </article>
              </div>
            </section>

            <section id="iframe-ejemplo" class="section">
              <h2>IFrame ejemplo</h2>
              <p>Embeds o iframes permiten mostrar contenido externo dentro del sitio.</p>
              <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Video" frameborder="0" allowfullscreen></iframe>
              </div>
            </section>

            <section id="video" class="section">
              <h2>Video HTML5</h2>
              <video controls width="720" preload="metadata">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Tu navegador no soporta video HTML5.
              </video>
            </section>

            <section id="testimonios" class="section">
              <h2>Testimonios</h2>
              <div class="testimonial-grid">
                <blockquote>"Excelente experiencia educativa." <footer>— Visitante</footer></blockquote>
                <blockquote>"Apoyar al refugio fue muy gratificante." <footer>— Donante</footer></blockquote>
              </div>
            </section>

            <section id="mapa" class="section">
              <h2>Mapa interactivo</h2>
              <p>Mapa interactivo con Leaflet y OpenStreetMap.</p>
              <div id="leaflet-map" style="height:420px;border-radius:12px;box-shadow:0 12px 32px rgba(0,0,0,0.08)"></div>
            </section>

            <section id="tabla-ejemplo" class="section">
              <h2>Tabla de horarios</h2>
              <table class="simple-table">
                <thead>
                  <tr><th>Día</th><th>Horario</th><th>Actividad</th></tr>
                </thead>
                <tbody>
                  <tr><td>Lunes</td><td>09:00 - 13:00</td><td>Visitas guiadas</td></tr>
                  <tr><td>Miércoles</td><td>10:00 - 14:00</td><td>Talleres educativos</td></tr>
                  <tr><td>Sábado</td><td>11:00 - 16:00</td><td>Mercadillo solidario</td></tr>
                </tbody>
              </table>
            </section>

            <section id="formulario" class="section">
              <h2>Formulario de contacto (mejorado)</h2>
              <form id="contact-form" class="contact-form">
                <label>Nombre<input type="text" name="nombre" placeholder="Tu nombre" required></label>
                <label>Correo<input type="email" name="correo" placeholder="correo@ejemplo.com" required></label>
                <label>Asunto<select name="asunto">
                  <option value="consulta">Consulta</option>
                  <option value="pedido">Pedido</option>
                  <option value="voluntariado">Voluntariado</option>
                </select></label>
                <label>Preferencia
                  <div>
                    <label><input type="checkbox" name="aviso" value="newsletter"> Recibir novedades</label>
                    <label><input type="radio" name="preferencia" value="email" checked> Email</label>
                    <label><input type="radio" name="preferencia" value="telefono"> Teléfono</label>
                  </div>
                </label>
                <label>Mensaje<textarea name="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea></label>
                <button type="submit" class="button primary">Enviar mensaje</button>
                <p id="contact-feedback" class="feedback"></p>
              </form>
            </section>

            <section id="enlaces" class="section">
              <h2>Hipervínculos y anclas</h2>
              <p>Enlace externo: <a href="https://es.wikipedia.org/wiki/Ajolote" target="_blank" rel="noopener">Wikipedia — Ajolote</a></p>
              <p>Enlace interno (ancla): <a href="#mapa">Ir al mapa</a></p>
            </section>

          </main>

          <footer class="site-footer">
            <div>
              <strong>Santuario Axolotl</strong>
              <p>Protección, educación y productos con causa.</p>
            </div>
            <div class="footer-links">
              <a href="#tabla-ejemplo">Horarios</a>
              <a href="#formulario">Contacto</a>
            </div>
          </footer>

          <style>
            :root{color-scheme:light;font-family:Segoe UI, Tahoma, Geneva, Verdana, sans-serif}
            .page{max-width:1100px;margin:0 auto;padding:2rem}
            .section{margin-top:2.5rem}
            .cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
            .testimonial-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
            .simple-table{width:100%;border-collapse:collapse}
            .simple-table th,.simple-table td{padding:.75rem;border:1px solid #e6efe9}
            .contact-form label{display:block;margin-bottom:.75rem}
            .contact-form input,.contact-form textarea,.contact-form select{width:100%;padding:.6rem;border:1px solid #dfeee1;border-radius:8px}
            .button{display:inline-block;padding:.6rem 1rem;border-radius:12px;border:0;background:#2f8f6b;color:#fff;font-weight:700}
            header.site-header{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
            .site-nav a{margin-left:1rem;color:#1f5a40;text-decoration:none}
            @media(max-width:800px){.site-nav{display:none}}
          </style>
        `;

        // Contact form handling
        const form = root.querySelector('#contact-form');
        const feedback = root.querySelector('#contact-feedback');
        if (form && feedback) {
          form.addEventListener('submit', (event) => {
            event.preventDefault();
            feedback.textContent = '¡Gracias! Hemos recibido tu mensaje.';
            form.reset();
          });
        }

        // Initialize Leaflet map after loading the library
        loadLeaflet(() => {
          try {
            const map = L.map('leaflet-map').setView([19.2861, -99.2342], 11);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            L.marker([19.2861, -99.2342]).addTo(map).bindPopup('Santuario Axolotl (ubicación aproximada)').openPopup();
          } catch (err) {
            console.warn('Leaflet init error', err);
          }
        });
      }
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
