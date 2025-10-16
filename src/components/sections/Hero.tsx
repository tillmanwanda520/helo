import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative flex items-center justify-center h-[calc(100vh-80px)] min-h-[600px] bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10 container text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Modern Elementor Portfolio Website
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg text-text-dark sm:text-xl"
          >
            Crafting stunning, high-performance websites with a focus on user experience and conversion.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button to="/contact" size="lg">Hire Me</Button>
            <Button to="/portfolio" variant="outline" size="lg">View Portfolio</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper for grid pattern background
const GridPattern: React.FC = () => (
  <style jsx global>{`
    .bg-grid-pattern {
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
  `}</style>
);

export default Hero;
