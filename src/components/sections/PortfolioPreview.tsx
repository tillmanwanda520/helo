import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const portfolioItems = [
  { img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/10B981/FFFFFF?text=Project+1', category: 'Websites' },
  { img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/374151/FFFFFF?text=Project+2', category: 'Design' },
  { img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/10B981/FFFFFF?text=Project+3', category: 'KDP Books' },
  { img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/374151/FFFFFF?text=Project+4', category: 'Websites' },
];

const PortfolioPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Work</h2>
          <p className="mt-4 text-text-dark">A glimpse into our creative solutions and successful projects.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img src={item.img} alt={item.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button to="/portfolio" variant="outline">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
