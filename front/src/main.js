// main.js - attach form handler and initialize Leaflet map
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

// Attach contact form handler (index.html provides the form)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('contact-feedback');
    if (feedback) feedback.textContent = '¡Gracias! Hemos recibido tu mensaje.';
    form.reset();
  });
}

// Initialize the map once Leaflet is loaded
loadLeaflet(() => {
  try {
    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl) return;
    const map = L.map('leaflet-map').setView([19.2861, -99.2342], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([19.2861, -99.2342]).addTo(map).bindPopup('Santuario Axolotl (ubicación aproximada)').openPopup();
  } catch (err) {
    // non-fatal: map will not load, but page still works
    // eslint-disable-next-line no-console
    console.warn('Leaflet init error', err);
  }
});
