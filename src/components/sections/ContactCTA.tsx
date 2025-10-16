import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="container text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Have a project in mind?</h2>
        <p className="mt-4 max-w-xl mx-auto text-text-dark">
          Let's build something amazing together. Reach out and let's discuss your ideas.
        </p>
        <Button to="/contact" size="lg" className="mt-8">
          Get in Touch
        </Button>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
