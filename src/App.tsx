import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#4b2e39]">
      <Header />
      <Hero />
      <Gallery />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
