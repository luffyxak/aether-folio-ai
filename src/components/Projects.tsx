
import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  // Project categories
  const categories = ['All', 'Marketing Campaigns', 'AI Solutions', 'Web Development'];
  const [activeFilter, setActiveFilter] = useState('All');

  // Project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce AI Chatbot',
      description: 'Developed an AI-powered customer service chatbot that increased sales by 23% and reduced support tickets by 45%.',
      image: 'bg-gradient-to-br from-primary/80 to-secondary/80',
      category: 'AI Solutions',
      tags: ['Chatbot', 'E-Commerce', 'Customer Service'],
      link: '#'
    },
    {
      id: 2,
      title: 'SEO Campaign for Tech Startup',
      description: 'Implemented comprehensive SEO strategy that resulted in 156% increase in organic traffic and improved SERP rankings.',
      image: 'bg-gradient-to-br from-secondary/80 to-highlight/80',
      category: 'Marketing Campaigns',
      tags: ['SEO', 'Content Strategy', 'Analytics'],
      link: '#'
    },
    {
      id: 3,
      title: 'Finance Industry Landing Page',
      description: 'Designed and developed high-converting landing page with 4.2% conversion rate, exceeding industry average by 2x.',
      image: 'bg-gradient-to-br from-highlight/80 to-primary/80',
      category: 'Web Development',
      tags: ['Web Design', 'CRO', 'UX/UI'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Campaign for Retail Brand',
      description: 'Created and managed multi-channel social campaign resulting in 78% engagement increase and $1.2M in attributable sales.',
      image: 'bg-gradient-to-br from-primary/70 to-highlight/70',
      category: 'Marketing Campaigns',
      tags: ['Social Media', 'Content Creation', 'Paid Advertising'],
      link: '#'
    },
    {
      id: 5,
      title: 'AI-Powered Content Recommendation Engine',
      description: 'Built personalized content recommendation system using machine learning, improving user session time by 34%.',
      image: 'bg-gradient-to-br from-secondary/70 to-primary/70',
      category: 'AI Solutions',
      tags: ['Machine Learning', 'Content Personalization', 'Python'],
      link: '#'
    },
    {
      id: 6,
      title: 'Corporate Website Redesign',
      description: 'Completely redesigned corporate website improving mobile conversions by 56% and reducing bounce rate by 23%.',
      image: 'bg-gradient-to-br from-highlight/70 to-secondary/70',
      category: 'Web Development',
      tags: ['Web Design', 'Responsive', 'WordPress'],
      link: '#'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Portfolio Projects</h2>
        <p className="section-subtitle text-center">
          A selection of my recent digital marketing and AI integration projects
        </p>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-neutral text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${project.id * 0.1}s` }}
            >
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <h3 className="text-2xl font-bold text-white px-4 text-center">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-neutral text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-secondary text-lg font-medium transition-colors"
          >
            View All Projects <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
