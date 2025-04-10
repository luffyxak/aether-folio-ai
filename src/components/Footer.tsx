
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">AetherFolio<span className="text-secondary">AI</span></h3>
            <p className="mb-4 text-gray-300">
              Transforming digital experiences through strategic marketing and advanced AI integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-secondary">
                in
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-secondary">
                X
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-secondary">
                ig
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
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
                'SEO Optimization', 
                'Social Media Strategy', 
                'Content Creation',
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

          {/* Newsletter - Non-functional in this version */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive the latest updates on digital marketing trends and AI innovations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-white/10 border-white/20 border text-sm focus:outline-none focus:ring-1 focus:ring-secondary w-full"
              />
              <button 
                className="bg-secondary hover:bg-secondary/90 text-white rounded-r-md px-4 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} AetherFolioAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
