import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  { title: '10 Tips for a Faster WordPress Site', category: 'WordPress', date: 'May 20, 2025', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/111827/9CA3AF?text=Blog+1' },
  { title: 'The Rise of Headless CMS', category: 'Web', date: 'May 15, 2025', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/111827/9CA3AF?text=Blog+2' },
  { title: 'Mastering Canva for Social Media', category: 'Design', date: 'May 10, 2025', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/111827/9CA3AF?text=Blog+3' },
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-background-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">From Our Blog</h2>
          <p className="mt-4 text-text-dark">Insights, tips, and news from the world of web and design.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg group"
            >
              <Link to="/blog/post-slug" className="block">
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity" />
                <div className="p-6">
                  <p className="text-sm text-primary font-medium">{post.category}</p>
                  <h3 className="mt-2 text-lg font-bold text-white group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="mt-3 text-sm text-text-dark">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
