import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const Snowfall = () => {
  const snowflakes = useMemo(() => 
    Array.from({ length: 150 }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 5;
      const xStart = Math.random() * 100;
      const xEnd = xStart + (Math.random() * 20 - 10);
      
      return (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/70"
          style={{
            width: size,
            height: size,
            left: `${xStart}vw`,
          }}
          initial={{ top: '-10px', opacity: 0 }}
          animate={{
            top: '110vh',
            left: [`${xStart}vw`, `${xEnd}vw`],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      );
    }), []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[99]">
      {snowflakes}
    </div>
  );
};

export default Snowfall;