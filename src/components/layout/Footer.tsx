import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter size={20} />, href: '#' },
  { icon: <Github size={20} />, href: '#' },
  { icon: <Linkedin size={20} />, href: '#' },
];

const footerLinks = [
  { name: 'Terms', path: '/terms' },
  { name: 'Privacy', path: '/privacy' },
  { name: 'Refund Policy', path: '/refund-policy' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light border-t border-gray-700">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <Code className="text-primary" size={28} />
              <span>Portfolio</span>
            </Link>
            <p className="mt-2 text-sm text-text-dark">© 2025 Modern Portfolio. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-text-dark hover:text-primary transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
            <nav className="flex gap-4">
                {footerLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="text-sm text-text-dark hover:text-white transition-colors">
                        {link.name}
                    </Link>
                ))}
            </nav>
            <p className="text-sm text-text-dark">Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
