
import { ChevronRight, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Akshay<span className="text-secondary">Menpara</span></h3>
            <p className="mb-4 text-gray-300">
              Digital marketing specialist with expertise in AI integration, automation, and creative marketing strategies.
            </p>
            <div className="flex">
              <a 
                href="https://linkedin.com/in/akshay-menpara-6a584317a" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary flex items-center transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Digital Marketing', 
                'Social Media Strategy', 
                'AI Content Creation', 
                'Community Growth',
                'AI Integration'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#contact"
                    className="text-gray-300 hover:text-secondary flex items-center transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" /> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Akshay Menpara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
