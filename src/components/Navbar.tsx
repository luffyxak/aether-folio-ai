
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold font-montserrat text-primary flex items-center group"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform inline-block">AM</span>
          <span className="ml-2">Akshay<span className="text-secondary">Menpara</span></span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-textDark hover:text-secondary transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary transform -translate-x-1/2 group-hover:w-full transition-all"></span>
            </a>
          ))}
          <Button 
            asChild
            className="ml-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-textDark focus:outline-none p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden pt-24`}
      >
        <div className="flex flex-col items-center space-y-6 py-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl text-primary hover:text-secondary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild
            className="mt-6 bg-gradient-to-r from-primary to-secondary text-white px-8 py-6 rounded-xl text-lg"
            onClick={() => setIsOpen(false)}
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
