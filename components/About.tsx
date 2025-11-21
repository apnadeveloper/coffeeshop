import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mt-4 mb-6 leading-tight">
              Brewing Passion <br /> Since 2010.
            </h2>
            <p className="text-coffee-100 text-lg mb-6 leading-relaxed">
              At Velvet Bean, we believe coffee is more than just a drink—it's a ritual. 
              We started with a small roastery in the heart of the city, dedicated to 
              sourcing the finest ethical beans from around the globe.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Every cup is a testament to our commitment to quality. From the precise temperature 
              of our water to the specific pressure of our tamping, nothing is left to chance. 
              We invite you to taste the difference that passion makes.
            </p>
            <button className="text-coffee-500 border-b border-coffee-500 pb-1 hover:text-white hover:border-white transition-colors">
              Read More About Us
            </button>
          </motion.div>

          {/* Right Side: 4 Images Grid */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                 <img 
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop" 
                    alt="Coffee beans" 
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                 />
                 <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop" 
                    alt="Coffee beans in hands" 
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                 />
              </div>
              <div className="space-y-4">
                 <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" 
                    alt="Coffee shop interior" 
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                 />
                 <img 
                    src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=600&auto=format&fit=crop" 
                    alt="Fresh latte art" 
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg opacity-80 hover:opacity-100 transition-opacity"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;