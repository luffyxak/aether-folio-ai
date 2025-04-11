
import { useState } from 'react';
import { 
  BarChart3, 
  Bot, 
  LineChart,
  BrainCircuit,
  Layers,
  Users,
  Target,
  TrendingUp,
  Workflow
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  // Define skill categories
  const categories = [
    {
      name: 'Digital Marketing & Strategy',
      icon: <Target className="text-secondary" size={24} />,
      skills: [
        { name: 'Meta Ads', level: 85 },
        { name: 'Google Ads', level: 80 },
        { name: 'Social Media Strategy', level: 90 },
        { name: 'Content Planning', level: 85 },
        { name: 'Community Growth', level: 95 },
        { name: 'Branding', level: 82 }
      ]
    },
    {
      name: 'AI & Automation',
      icon: <BrainCircuit className="text-secondary" size={24} />,
      skills: [
        { name: 'AI Content Creation', level: 88 },
        { name: 'Social Media Automation', level: 85 },
        { name: 'Campaign Flow Design', level: 80 },
        { name: 'Audience Retargeting', level: 75 }
      ]
    },
    {
      name: 'Analytics & Optimization',
      icon: <TrendingUp className="text-secondary" size={24} />,
      skills: [
        { name: 'PostHog', level: 75 },
        { name: 'Google Analytics', level: 70 },
        { name: 'A/B Testing', level: 78 },
        { name: 'Insights-Driven Decision Making', level: 85 }
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
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-white to-neutral/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTQzNjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHpNNDIgMmgxdjRoLTF2LTR6bTItMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
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
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center px-8 py-4 rounded-xl transition-all ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-100'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span className="mr-3">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 rounded-xl mr-4">
              {categories.find(cat => cat.name === activeCategory)?.icon}
            </div>
            <h3 className="text-2xl font-bold text-primary">{activeCategory}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {activeSkills.map((skill) => (
              <div key={skill.name} className="animate-fade-in">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-primary">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 group hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="font-medium text-gray-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
