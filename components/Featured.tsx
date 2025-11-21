import React from 'react';
import { FEATURED_COFFEES } from '../constants';
import { motion } from 'framer-motion';

const Featured: React.FC = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold"
          >
            Our Favorites
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white mt-2"
          >
            Featured Blends
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_COFFEES.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-full aspect-square w-48 mx-auto mb-6 border-4 border-coffee-800 group-hover:border-coffee-500 transition-colors duration-500">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">{coffee.name}</h3>
              <p className="text-coffee-200 text-sm mb-3 px-4">{coffee.description}</p>
              <span className="text-coffee-500 font-bold text-lg">{coffee.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;