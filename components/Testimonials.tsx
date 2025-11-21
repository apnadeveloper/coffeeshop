import React from 'react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">What They Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 p-8 rounded-2xl relative border border-white/5 hover:border-coffee-500/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-coffee-800/50" size={48} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} loading="lazy" className="w-14 h-14 rounded-full object-cover border-2 border-coffee-500" />
                <div>
                  <h4 className="text-white font-serif text-lg">{t.name}</h4>
                  <span className="text-coffee-400 text-xs uppercase tracking-wider">{t.role}</span>
                </div>
              </div>
              <p className="text-gray-300 italic">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;