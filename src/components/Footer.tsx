
import { ChevronRight, Linkedin, ArrowUp, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white pt-16 pb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHpNNDIgMmgxdjRoLTF2LTR6bTItMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">AM</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Digital marketing specialist with expertise in AI integration, automation, and creative marketing strategies.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com/in/akshay-menpara-6a584317a" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl transition-all border border-white/10 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="tel:+917622889233" 
                aria-label="Call" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl transition-all border border-white/10 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>Call</span>
              </a>
              
              <a 
                href="mailto:akshaymenpara0@gmail.com" 
                aria-label="Email" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl transition-all border border-white/10 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 border-b border-white/10 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-secondary flex items-center transition-colors group"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5 border-b border-white/10 pb-3">Services</h3>
            <ul className="space-y-3">
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
                    className="text-gray-300 hover:text-secondary flex items-center transition-colors group"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> 
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} AM. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
