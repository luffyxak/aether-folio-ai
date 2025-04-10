
import { useState } from 'react';
import { 
  BarChart3, 
  Bot, 
  LineChart,
  BrainCircuit,
  Layers,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";

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
    },
    {
      name: 'Creative Execution',
      icon: <Layers className="text-secondary" size={24} />,
      skills: [
        { name: 'Trend-Based Reels', level: 92 },
        { name: 'Engaging Caption Writing', level: 88 },
        { name: 'Niche Page Branding', level: 85 }
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
    { name: 'Chat GPT', icon: <Bot size={20} /> },
    { name: 'Claude AI', icon: <Bot size={20} /> },
    { name: 'Instagram', icon: <Users size={20} /> },
    { name: 'LinkedIn', icon: <Users size={20} /> }
  ];

  return (
    <section id="skills" className="section-padding bg-neutral">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        <p className="section-subtitle text-center">
          Specialized in digital marketing with a focus on AI integration and automation
        </p>

        {/* Skills Categories Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`flex items-center px-6 py-3 rounded-full transition-all ${
                activeCategory === category.name
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Progress Bars */}
        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="flex items-center mb-6">
            {categories.find(cat => cat.name === activeCategory)?.icon}
            <h3 className="text-xl font-semibold ml-2">{activeCategory}</h3>
          </div>

          <div className="space-y-6">
            {activeSkills.map((skill) => (
              <div key={skill.name} className="animate-fade-in">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-secondary">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-2 rounded-md mr-3">
                  {tool.icon}
                </div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
