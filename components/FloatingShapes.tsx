import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {/* Top Left Coffee Blob */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-coffee-500/20 rounded-full blur-[100px]"
      />
      
      {/* Bottom Right Rose/Mocha Blob */}
      <motion.div 
        animate={{ 
          x: [0, -100, 50, 0], 
          y: [0, 100, -50, 0],
          scale: [1.2, 1, 1.1, 1.2],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-rose-900/10 rounded-full blur-[120px]"
      />
      
      {/* Center Floating Accent */}
      <motion.div 
        animate={{ 
          x: [0, 70, -70, 0], 
          y: [0, 70, -70, 0],
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-amber-900/10 rounded-full blur-[80px]"
      />
    </div>
  );
};

export default FloatingShapes;