import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Lead Developer', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/1F2937/E5E7EB?text=AJ' },
  { name: 'Bob Williams', role: 'UI/UX Designer', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/1F2937/E5E7EB?text=BW' },
  { name: 'Charlie Brown', role: 'Project Manager', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/1F2937/E5E7EB?text=CB' },
];

const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Meet Our Team</h2>
          <p className="mt-4 text-text-dark">The creative minds behind our successful projects.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img src={member.img} alt={member.name} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="text-white hover:text-primary"><Linkedin size={24} /></a>
                  <a href="#" className="text-white hover:text-primary"><Twitter size={24} /></a>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
