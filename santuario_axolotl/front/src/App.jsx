import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import Catalog from './components/Catalog.jsx'
import PlanesTabla from './components/PlanesTabla.jsx'
import Offers from './components/Offers.jsx'
import About from './components/About.jsx'
import MisionVision from './components/MisionVision.jsx'
import Partners from './components/Partners.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Legal from './components/Legal.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsapp from './components/FloatingWhatsapp.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <Catalog />
        <PlanesTabla />
        <Offers />
        <About />
        <MisionVision />
        <Partners />
        <Gallery />
        <Testimonials />
        <Contact />
        <Legal />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
