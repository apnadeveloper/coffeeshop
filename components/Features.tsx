import React from 'react';
import { FEATURES } from '../constants';
import { motion } from 'framer-motion';
import { Coffee, Award, Clock, Bean } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Coffee: <Coffee size={32} />,
  Award: <Award size={32} />,
  Clock: <Clock size={32} />,
  Bean: <Bean size={32} />
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-coffee-900/20 relative z-10">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold">Why Us?</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">The Right Choice</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center text-coffee-500 mb-6 group-hover:text-white group-hover:bg-coffee-500 transition-colors duration-300">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;