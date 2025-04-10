
import { useState } from 'react';
import { 
  BarChart3, 
  LineChart, 
  Bot, 
  Search, 
  Mail, 
  Share2, 
  PenTool,
  MonitorSmartphone,
  Database,
  Code
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  // Define skill categories
  const categories = [
    {
      name: 'Digital Marketing',
      icon: <BarChart3 className="text-secondary" size={24} />,
      skills: [
        { name: 'SEO & SEM', level: 95 },
        { name: 'Content Marketing', level: 90 },
        { name: 'Social Media Strategy', level: 85 },
        { name: 'Email Marketing', level: 88 },
        { name: 'PPC Advertising', level: 82 }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: <Bot className="text-secondary" size={24} />,
      skills: [
        { name: 'AI Implementation', level: 85 },
        { name: 'Data Analysis', level: 80 },
        { name: 'Customer Insights', level: 87 },
        { name: 'Predictive Analytics', level: 75 },
        { name: 'Chatbot Development', level: 78 }
      ]
    },
    {
      name: 'Technical',
      icon: <Code className="text-secondary" size={24} />,
      skills: [
        { name: 'HTML & CSS', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'Python', level: 65 },
        { name: 'API Integration', level: 80 },
        { name: 'CMS Platforms', level: 88 }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  // Filter skills based on active category
  const activeSkills = categories.find(cat => cat.name === activeCategory)?.skills || [];

  const tools = [
    { name: 'Google Analytics', icon: <LineChart size={20} /> },
    { name: 'SEMrush', icon: <Search size={20} /> },
    { name: 'Mailchimp', icon: <Mail size={20} /> },
    { name: 'Hootsuite', icon: <Share2 size={20} /> },
    { name: 'Adobe Creative Suite', icon: <PenTool size={20} /> },
    { name: 'Figma', icon: <PenTool size={20} /> },
    { name: 'WordPress', icon: <MonitorSmartphone size={20} /> },
    { name: 'Tableau', icon: <Database size={20} /> }
  ];

  return (
    <section id="skills" className="section-padding bg-neutral">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        <p className="section-subtitle text-center">
          Specialized in digital marketing with a focus on AI integration and data-driven strategies
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
            <h3 className="text-xl font-semibold ml-2">{activeCategory} Skills</h3>
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
