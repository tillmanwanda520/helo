import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

// Placeholder pages for routing
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container py-20 text-center">
    <h1 className="text-4xl">{title}</h1>
    <p className="mt-4">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<PlaceholderPage title="About Us" />} />
          <Route path="/services" element={<PlaceholderPage title="Services" />} />
          <Route path="/portfolio" element={<PlaceholderPage title="Portfolio" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/team" element={<PlaceholderPage title="Our Team" />} />
          <Route path="/testimonials" element={<PlaceholderPage title="Testimonials" />} />
          <Route path="/affiliate" element={<PlaceholderPage title="Affiliate Program" />} />
          <Route path="/pricing" element={<PlaceholderPage title="Pricing" />} />
          <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/refund-policy" element={<PlaceholderPage title="Refund Policy" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
