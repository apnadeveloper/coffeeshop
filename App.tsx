import React from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import FloatingShapes from './components/FloatingShapes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';

function App() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Persistent Background Layer 1: Canvas Particles */}
      <BackgroundAnimation />
      
      {/* Persistent Background Layer 2: Smooth Floating Blobs */}
      <FloatingShapes />
      
      {/* Layout */}
      <Navbar />
      <Hero />
      <Featured />
      <Menu />
      <Offers />
      <Features />
      <FAQ />
      <Testimonials />
      <About />
      <Contact />
      <Footer />

      {/* Utilities */}
      <BackToTop />
    </main>
  );
}

export default App;