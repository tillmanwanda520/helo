import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background-light">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/1F2937/E5E7EB?text=About+Me"
            alt="About me"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A Little About Me</h2>
          <p className="mt-4 text-text-dark leading-relaxed">
            I'm a passionate developer and designer with a knack for creating beautiful, functional, and user-centric digital experiences. With a strong background in WordPress and modern frontend technologies, I help businesses and individuals achieve their online goals.
          </p>
          <Button to="/about" variant="ghost" className="mt-6 group">
            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
