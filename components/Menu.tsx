import React from 'react';
import { MENU_ITEMS } from '../constants';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-neutral-900/50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Our Menu</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-4 rounded-xl flex gap-4 hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-serif text-white group-hover:text-coffee-400 transition-colors">{item.name}</h3>
                  <span className="text-lg font-bold text-coffee-500">{item.price}</span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                <div className="flex justify-end mt-2">
                   <button className="text-xs uppercase tracking-wider text-white flex items-center gap-1 hover:text-coffee-400">
                     Add to Order <Plus size={14} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;