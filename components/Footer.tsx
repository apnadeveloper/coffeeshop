import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="text-coffee-500" />
              <span className="font-serif text-xl text-white font-bold">VELVET<span className="text-coffee-500">BEAN</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Crafting the perfect cup since 2010. Experience the art of coffee in every sip.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-coffee-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-coffee-500 transition-colors">Menu</a></li>
              <li><a href="#offers" className="hover:text-coffee-500 transition-colors">Offers</a></li>
              <li><a href="#about" className="hover:text-coffee-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>7:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8:00 - 21:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>8:00 - 21:00</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for the latest beans and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/5 border-l border-t border-b border-white/10 rounded-l-md px-3 py-2 w-full text-sm text-white focus:outline-none focus:border-coffee-500"
              />
              <button className="bg-coffee-500 text-white px-3 py-2 rounded-r-md text-sm hover:bg-coffee-400 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Velvet Bean Coffee Co. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;