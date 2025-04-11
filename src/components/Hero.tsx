
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 bg-gradient-to-br from-white via-neutral to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTQzNjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHpNNDIgMmgxdjRoLTF2LTR6bTItMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="absolute top-20 left-0 w-full h-80 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              
              <span className="inline-block text-secondary font-semibold mb-4 text-lg tracking-wide relative">
                <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-[2px] bg-secondary"></span>
                Hello, I'm
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AM</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 tracking-tight">
                Digital Marketing <span className="text-secondary font-semibold">&</span> AI Integration Specialist
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                Merging creativity with technology to craft impactful digital strategies. Specialized in AI-powered marketing solutions and automation.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  className="px-8 py-6 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-xl transition-all text-lg hover:-translate-y-1"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="px-8 py-6 border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-xl text-lg transition-all hover:-translate-y-1"
                >
                  <a href="#skills">Explore My Skills</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Abstract decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
              
              {/* Profile image container */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-highlight rounded-full blur opacity-75 animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="relative bg-white rounded-full overflow-hidden h-72 w-72 md:h-80 md:w-80 border-4 border-white shadow-2xl">
                  {/* AM logo */}
                  <div className="h-full w-full bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-white text-8xl font-bold">
                    AM
                  </div>
                </div>
              </div>
              
              {/* Tech decoration elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-center border border-white rotate-6">
                <div className="text-primary font-semibold">AI</div>
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-center border border-white rotate-12">
                <div className="text-secondary font-semibold">Digital</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Scroll down" 
            className="bg-white/80 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <ArrowDown size={20} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
