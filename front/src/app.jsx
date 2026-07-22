const { useState, useEffect } = React;

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

function App(){
  return (
    <div className="container">
      <header>
        <div className="logo"><div className="emoji">🦎</div><div><div className="eyebrow">Santuario Axolotl</div><strong>Conservación y refugio</strong></div></div>
        <nav><a href="#productos">Productos</a><a href="#video">Video</a><a href="#testimonios">Testimonios</a><a href="#mapa">Mapa</a><a href="#formulario">Contacto</a></nav>
      </header>

      <section className="hero">
        <div>
          <h1>Un espacio dedicado a la protección y difusión del ajolote</h1>
          <p>Visítanos para conocer nuestro refugio, explorar productos responsables y apoyar la conservación de esta especie única.</p>
          <div style={{marginTop:16}}><a className="button" href="#formulario">Contactar</a><a href="#productos" style={{marginLeft:16}}>Ver productos</a></div>
        </div>
        <div><img src="https://via.placeholder.com/720x520.png?text=Ajolote+refugio" alt="Ajolote" /></div>
      </section>

      <Products />

      <section id="video" style={{marginTop:24}}>
        <h2>Video del refugio</h2>
        <div className="video-wrapper"><iframe width="100%" height="420" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Video" frameBorder="0" allowFullScreen></iframe></div>
      </section>

      <section id="testimonios" style={{marginTop:24}}>
        <h2>Testimonios</h2>
        <div className="cards"><div className="card">“El refugio es hermoso.”<br/><strong>— Visitante</strong></div><div className="card">“Apoyar al refugio fue muy gratificante.”<br/><strong>— Donante</strong></div></div>
      </section>

      <section id="mapa" style={{marginTop:24}}>
        <h2>Mapa</h2>
        <Map />
      </section>

      <section id="tabla-ejemplo" style={{marginTop:24}}>
        <h2>Horarios</h2>
        <table><thead><tr><th>Día</th><th>Horario</th><th>Actividad</th></tr></thead><tbody><tr><td>Lunes</td><td>09:00 - 13:00</td><td>Visitas guiadas</td></tr><tr><td>Miércoles</td><td>10:00 - 14:00</td><td>Talleres</td></tr><tr><td>Sábado</td><td>11:00 - 16:00</td><td>Mercadillo</td></tr></tbody></table>
      </section>

      <section id="formulario" style={{marginTop:24}}>
        <h2>Contacto</h2>
        <ContactForm />
      </section>

      <footer><div><strong>Santuario Axolotl</strong><p>Protección, educación y productos con causa.</p></div><div><a href="#tabla-ejemplo">Horarios</a><a href="#formulario" style={{marginLeft:16}}>Contacto</a></div></footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
