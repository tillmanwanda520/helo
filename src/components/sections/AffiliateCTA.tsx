import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const AffiliateCTA: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="container text-center bg-primary/10 p-12 rounded-lg"
      >
        <h2 className="text-3xl font-bold text-white">Join Our Affiliate Program</h2>
        <p className="mt-4 max-w-2xl mx-auto text-text-dark">
          Earn commissions by referring new clients to our services. It's a win-win.
        </p>
        <Button to="/affiliate" className="mt-8" size="lg">Become an Affiliate</Button>
      </motion.div>
    </section>
  );
};

export default AffiliateCTA;
