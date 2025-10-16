import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesPreview from '../components/sections/ServicesPreview';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import Testimonials from '../components/sections/Testimonials';
import TeamPreview from '../components/sections/TeamPreview';
import ContactCTA from '../components/sections/ContactCTA';
import AboutPreview from '../components/sections/AboutPreview';
import AffiliateCTA from '../components/sections/AffiliateCTA';
import BlogPreview from '../components/sections/BlogPreview';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <TeamPreview />
      <AffiliateCTA />
      <BlogPreview />
      <ContactCTA />
    </>
  );
};

export default HomePage;
