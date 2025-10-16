import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Jane Doe', company: 'Tech Corp', text: "Incredible work! Our new website has seen a 50% increase in conversions. Highly recommended.", rating: 5, img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/E5E7EB/111827?text=JD' },
  { name: 'John Smith', company: 'Creative Inc.', text: "The design process was seamless and the final product exceeded all our expectations. A true professional.", rating: 5, img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/E5E7EB/111827?text=JS' },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-4 text-text-dark">We are proud to have worked with amazing clients.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background-light p-8 rounded-lg shadow-lg flex flex-col"
            >
              <Quote className="text-primary" size={32} />
              <p className="text-text-dark mt-4 flex-grow">"{testimonial.text}"</p>
              <div className="mt-6 flex items-center">
                <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-text-dark">{testimonial.company}</p>
                </div>
                <div className="ml-auto flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
