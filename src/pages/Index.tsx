
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  // Update page title and metadata
  useEffect(() => {
    document.title = 'Akshay Menpara | Digital Marketing with AI Integration';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
