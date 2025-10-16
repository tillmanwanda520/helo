import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brush, ShoppingCart, Users, PenTool } from 'lucide-react';

const services = [
  { icon: <Code />, title: 'Web Development', description: 'Building fast, responsive, and scalable websites from scratch.' },
  { icon: <PenTool />, title: 'WordPress Customization', description: 'Tailoring WordPress themes and plugins to your exact needs.' },
  { icon: <ShoppingCart />, title: 'Amazon KDP Services', description: 'Designing and formatting books for Amazon KDP platform.' },
  { icon: <Users />, title: 'Social Media Management', description: 'Growing your online presence and engaging your audience.' },
  { icon: <Brush />, title: 'Canva Design', description: 'Creating stunning graphics for your brand and social media.' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-text-dark">We offer a wide range of services to help you succeed online.</p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-background-light p-8 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="text-primary mb-4">{React.cloneElement(service.icon, { size: 40 })}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-text-dark">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
