
import { useState } from 'react';
import { 
  BrainCircuit,
  Target,
  TrendingUp,
  Layers,
  BarChart3,
  LineChart,
  Workflow,
  Users,
  Bot,
  Sparkles,
  Presentation,
  BarChart,
  Share2,
  Lightbulb
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  // Define skill categories
  const categories = [
    {
      name: 'Digital Marketing & Strategy',
      icon: <Target className="text-secondary" size={24} />,
      skills: [
        { 
          name: 'Meta Ads', 
          icon: <BarChart3 size={20} />,
          description: 'Campaign optimization & audience targeting'
        },
        { 
          name: 'Google Ads', 
          icon: <Target size={20} />,
          description: 'Search & display campaign management' 
        },
        { 
          name: 'Social Media Strategy', 
          icon: <Share2 size={20} />,
          description: 'Platform-specific content strategies' 
        },
        { 
          name: 'Content Planning', 
          icon: <Presentation size={20} />,
          description: 'Editorial calendars & content roadmaps' 
        },
        { 
          name: 'Community Growth', 
          icon: <Users size={20} />,
          description: 'Engagement & audience development' 
        },
        { 
          name: 'Branding', 
          icon: <Layers size={20} />,
          description: 'Identity development & brand positioning' 
        }
      ]
    },
    {
      name: 'AI & Automation',
      icon: <BrainCircuit className="text-secondary" size={24} />,
      skills: [
        { 
          name: 'AI Content Creation', 
          icon: <Bot size={20} />,
          description: 'Prompt engineering & content generation' 
        },
        { 
          name: 'Social Media Automation', 
          icon: <Sparkles size={20} />,
          description: 'Scheduling & engagement tools' 
        },
        { 
          name: 'Campaign Flow Design', 
          icon: <Workflow size={20} />,
          description: 'Automated marketing sequences' 
        },
        { 
          name: 'Audience Retargeting', 
          icon: <Target size={20} />,
          description: 'Behavior-based campaign optimization' 
        }
      ]
    },
    {
      name: 'Analytics & Optimization',
      icon: <TrendingUp className="text-secondary" size={24} />,
      skills: [
        { 
          name: 'PostHog', 
          icon: <LineChart size={20} />,
          description: 'User behavior tracking & analysis' 
        },
        { 
          name: 'Google Analytics', 
          icon: <BarChart size={20} />,
          description: 'Website performance & conversion tracking' 
        },
        { 
          name: 'A/B Testing', 
          icon: <Lightbulb size={20} />,
          description: 'Campaign & content performance testing' 
        },
        { 
          name: 'Insights-Driven Decision Making', 
          icon: <TrendingUp size={20} />,
          description: 'Data interpretation for strategy refinement' 
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  // Filter skills based on active category
  const activeSkills = categories.find(cat => cat.name === activeCategory)?.skills || [];

  const tools = [
    { name: 'Meta Ads Manager', icon: <BarChart3 size={20} /> },
    { name: 'Google Ads', icon: <Target size={20} /> },
    { name: 'PostHog', icon: <LineChart size={20} /> },
    { name: 'Google Analytics', icon: <TrendingUp size={20} /> },
    { name: 'Make.com', icon: <Workflow size={20} /> }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-neutral/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTQzNjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHpNNDIgMmgxdjRoLTF2LTR6bTItMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-secondary font-semibold mb-3 text-lg tracking-wide relative">
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-[2px] bg-secondary"></span>
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in digital marketing with a focus on AI integration and automation
          </p>
        </div>

        {/* Skills Categories Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center px-6 py-3 rounded-xl transition-all ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-100'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display - Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {activeSkills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-3 rounded-xl mr-4 flex-shrink-0">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary">{skill.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{skill.description}</p>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  Expert
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies - Modern visual approach */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center px-5 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-2 rounded-full mr-3 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
