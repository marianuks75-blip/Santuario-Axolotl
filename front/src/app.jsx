import React, { useState, useEffect } from 'react';

function useLoadLeaflet() {
  useEffect(() => {
    if (window.L) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    document.body.appendChild(script);
  }, []);
}
function Map() {
  useLoadLeaflet();
  useEffect(() => {
    const waitForLeaflet = () => {
      if (window.L) {
        const mapEl = document.getElementById('leaflet-map');
        if (!mapEl || mapEl.dataset.inited) return;
        try {
          const map = L.map('leaflet-map').setView([19.2861, -99.2342], 11);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(map);
          L.marker([19.2861, -99.2342]).addTo(map).bindPopup('Santuario Axolotl').openPopup();
          mapEl.dataset.inited = '1';
        } catch (err) {
          console.warn('Leaflet init error', err);
        }
      } else {
        setTimeout(waitForLeaflet, 200);
      }
    };
    waitForLeaflet();
  }, []);
  return <div id="leaflet-map" style={{height:420}} />;
}

function ContactForm() {
  const [msg, setMsg] = useState('');
  function onSubmit(e) {
    e.preventDefault();
    setMsg('¡Gracias! Hemos recibido tu mensaje.');
    e.target.reset();
  }
  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <label>Nombre<input name="nombre" required /></label>
      <label>Correo<input type="email" name="correo" required /></label>
      <label>Asunto<select name="asunto"><option>Consulta</option><option>Pedido</option></select></label>
      <label>Mensaje<textarea name="mensaje" rows="4" required></textarea></label>
      <button className="button" type="submit">Enviar</button>
      <p id="contact-feedback" style={{fontWeight:700,color:'#1f5a40'}}>{msg}</p>
    </form>
  );
}

function Products() {
  const items = [
    {title:'Playera', desc:'Diseño con causa', img:'https://via.placeholder.com/520x320.png?text=Producto+1'},
    {title:'Taza', desc:'Material reciclado', img:'https://via.placeholder.com/520x320.png?text=Producto+2'},
    {title:'Cuaderno', desc:'Ilustraciones locales', img:'https://via.placeholder.com/520x320.png?text=Producto+3'}
  ];
  return (
    <section id="productos">
      <h2>Productos</h2>
      <div className="cards">
        {items.map((it, i) => (
          <div className="card" key={i}><img src={it.img} alt={it.title} /><h3>{it.title}</h3><p>{it.desc}</p></div>
        ))}
      </div>
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`topnav ${scrolled ? 'elevated' : ''}`}>
      <div className="topnav-inner">
        <div className="brand">
          <div className="emoji">🦎</div>
          <div className="brand-text"><div className="eyebrow">Santuario Axolotl</div><strong>Conservación</strong></div>
        </div>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#productos" onClick={() => setOpen(false)}>Productos</a>
          <a href="#video" onClick={() => setOpen(false)}>Video</a>
          <a href="#testimonios" onClick={() => setOpen(false)}>Testimonios</a>
          <a href="#mapa" onClick={() => setOpen(false)}>Mapa</a>
          <a href="#formulario" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>
    </header>
  );
}

function App(){
  return (
    <div>
      <Nav />
      <main className="container with-nav">
        <section className="hero animate-up">
          <div className="hero-copy">
            <h1>Un espacio dedicado a la protección y difusión del ajolote</h1>
            <p className="lead">Visítanos para conocer nuestro refugio, explorar productos responsables y apoyar la conservación de esta especie única.</p>
            <div style={{marginTop:16}}>
              <a className="button" href="#formulario">Contactar</a>
              <a className="muted" href="#productos" style={{marginLeft:16}}>Ver productos</a>
            </div>
          </div>
          <div className="hero-visual animate-fade">
            <img src="https://via.placeholder.com/720x520.png?text=Ajolote+refugio" alt="Ajolote" />
          </div>
        </section>

        <Products />

        <section id="video" className="animate-up">
          <h2>Video del refugio</h2>
          <div className="video-wrapper"><iframe width="100%" height="420" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Video" frameBorder="0" allowFullScreen></iframe></div>
        </section>

        <section id="testimonios" className="animate-up">
          <h2>Testimonios</h2>
          <div className="cards"><div className="card">“El refugio es hermoso.”<br/><strong>— Visitante</strong></div><div className="card">“Apoyar al refugio fue muy gratificante.”<br/><strong>— Donante</strong></div></div>
        </section>

        <section id="mapa" className="animate-up">
          <h2>Mapa</h2>
          <Map />
        </section>

        <section id="tabla-ejemplo" className="animate-up">
          <h2>Horarios</h2>
          <table><thead><tr><th>Día</th><th>Horario</th><th>Actividad</th></tr></thead><tbody><tr><td>Lunes</td><td>09:00 - 13:00</td><td>Visitas guiadas</td></tr><tr><td>Miércoles</td><td>10:00 - 14:00</td><td>Talleres</td></tr><tr><td>Sábado</td><td>11:00 - 16:00</td><td>Mercadillo</td></tr></tbody></table>
        </section>

        <section id="formulario" className="animate-up">
          <h2>Contacto</h2>
          <ContactForm />
        </section>

        <footer className="site-footer animate-fade"><div><strong>Santuario Axolotl</strong><p>Protección, educación y productos con causa.</p></div><div><a href="#tabla-ejemplo">Horarios</a><a href="#formulario" style={{marginLeft:16}}>Contacto</a></div></footer>
      </main>
    </div>
  );
}

export default App;
