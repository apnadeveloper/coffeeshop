import React from 'react';
import { motion } from 'framer-motion';

const OFFERS = [
  {
    title: "Student Special",
    description: "Get 20% off with a valid student ID every weekday.",
    color: "from-amber-900 to-black",
    badge: "20% OFF"
  },
  {
    title: "Family Bundle",
    description: "Free pastry with every 4 drinks ordered on weekends.",
    color: "from-stone-800 to-black",
    badge: "FREE PASTRY"
  },
  {
    title: "Business Meeting",
    description: "Reserve a table for 5+ and get complimentary bottomless drip coffee.",
    color: "from-orange-950 to-black",
    badge: "FREE REFILLS"
  }
];

const Offers: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="offers" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold">Promotions</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Special Offers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFERS.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-2xl p-8 h-80 flex flex-col justify-center items-center text-center bg-gradient-to-br ${offer.color} border border-white/10 group hover:border-coffee-500/50 transition-colors`}
            >
              <div className="absolute top-4 right-4 bg-coffee-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {offer.badge}
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">{offer.title}</h3>
              <p className="text-coffee-100 leading-relaxed">{offer.description}</p>
              <a 
                href="#contact"
                onClick={handleScrollToContact}
                className="mt-8 px-6 py-2 border border-white/30 text-white hover:bg-white hover:text-black transition-all rounded text-sm uppercase tracking-widest inline-block"
              >
                Claim Offer
              </a>
              
              {/* Background decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-coffee-500/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;