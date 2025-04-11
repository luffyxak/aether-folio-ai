
import { ChevronRight, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHpNNDIgMmgxdjRoLTF2LTR6bTItMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Akshay<span className="text-secondary">Menpara</span></h3>
            <p className="mb-8 text-gray-300 leading-relaxed">
              Digital marketing specialist with expertise in AI integration, automation, and creative marketing strategies.
            </p>
            <div className="flex">
              <a 
                href="https://linkedin.com/in/akshay-menpara-6a584317a" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl transition-all border border-white/10 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-3">Quick Links</h3>
            <ul className="space-y-4">
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
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-3">Services</h3>
            <ul className="space-y-4">
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

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Akshay Menpara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
