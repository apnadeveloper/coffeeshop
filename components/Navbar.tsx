import React, { useState, useEffect } from 'react';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../constants';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Approx height to offset fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    } else if (href === '#home' || href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu - Left */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS_LEFT.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-coffee-100 hover:text-coffee-500 px-3 py-2 text-sm uppercase tracking-widest font-light transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')} 
              className="flex flex-col items-center group cursor-pointer"
            >
               <Coffee className="h-8 w-8 text-coffee-500 group-hover:scale-110 transition-transform duration-300" />
               <span className="font-serif text-xl text-white font-bold tracking-tighter mt-1">VELVET<span className="text-coffee-500">BEAN</span></span>
            </a>
          </div>

          {/* Desktop Menu - Right */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS_RIGHT.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-coffee-100 hover:text-coffee-500 px-3 py-2 text-sm uppercase tracking-widest font-light transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-coffee-500 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1 flex flex-col items-center">
              {[...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-coffee-100 hover:text-coffee-500 block px-3 py-4 text-lg uppercase tracking-widest font-light cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;