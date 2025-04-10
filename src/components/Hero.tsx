
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 bg-neutral">
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-white via-neutral to-white opacity-50 z-0"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Digital Marketing & <span className="text-secondary">AI Solutions</span> Expert
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Elevating brands through strategic digital marketing and innovative AI-powered solutions. Transforming ideas into impactful digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Portfolio
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-highlight rounded-full blur opacity-75"></div>
              <div className="relative bg-white rounded-full overflow-hidden h-64 w-64 md:h-80 md:w-80 border-4 border-white shadow-xl">
                {/* Replace with your profile image when available */}
                <div className="h-full w-full bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-white text-6xl font-bold">
                  AF
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down" className="text-primary hover:text-secondary transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
