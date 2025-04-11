
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-3 text-lg tracking-wide relative">
            <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-[2px] bg-secondary"></span>
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            My Background
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Digital marketing specialist with a passion for AI-driven solutions and data-based strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Personal Info */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 rounded-xl mr-4">
                <User size={26} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Personal</h3>
            </div>

            <ul className="space-y-5">
              <li className="pb-4 border-b border-gray-100">
                <span className="font-semibold text-primary block mb-1">Name:</span> 
                <span className="text-gray-700">Akshay Menpara</span>
              </li>
              <li className="pb-4 border-b border-gray-100">
                <span className="font-semibold text-primary block mb-1">Location:</span> 
                <span className="text-gray-700">Gujarat, India</span>
              </li>
              <li>
                <span className="font-semibold text-primary block mb-1">Career Objective:</span>
                <span className="text-gray-700 leading-relaxed">To build a future-ready career by merging digital marketing with AI and automation, creating intelligent, data-driven strategies.</span>
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 rounded-xl mr-4">
                <Briefcase size={26} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Experience</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                <h4 className="text-lg font-semibold text-gray-800">Codtech IT Solutions</h4>
                <p className="text-sm text-secondary font-medium mb-2">Jan - Apr 2025</p>
                <p className="text-gray-600">Explored key areas of digital marketing including social media marketing, SEO, and brand reputation building.</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                <h4 className="text-lg font-semibold text-gray-800">IBM SkillsBuild</h4>
                <p className="text-sm text-secondary font-medium mb-2">Short Internship</p>
                <p className="text-gray-600">Focused on learning the basics of data analytics tools, their usage, and application in marketing insights.</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                <h4 className="text-lg font-semibold text-gray-800">Instagram Page Management</h4>
                <p className="text-sm text-secondary font-medium mb-2">Community Building</p>
                <p className="text-gray-600">Managed AI influencer page (70k+ followers) and co-founded REI Clan for content creators.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 backdrop-blur-sm">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 rounded-xl mr-4">
                <GraduationCap size={26} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                <h4 className="text-lg font-semibold text-gray-800">Bachelor of Information Technology</h4>
                <p className="text-sm text-secondary font-medium mb-2">V.V.P. Engineering College • Expected: May 2025</p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                <h4 className="text-lg font-semibold text-gray-800">Google Digital Marketing & E-commerce</h4>
                <p className="text-sm text-secondary font-medium mb-2">Coursera Certificate</p>
                <a href="https://coursera.org/share/6e7515b9470f0d593ff2cdbdc1c0d789" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:underline flex items-center mt-1">
                  View Certificate
                </a>
              </div>
              
              <div className="relative pl-6 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary"></div>
                <h4 className="text-lg font-semibold text-gray-800">IBM SkillsBuild - Data Analytics</h4>
                <p className="text-sm text-secondary font-medium mb-2">Certificate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-10 rounded-2xl border border-gray-100 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-primary">My Approach</h3>
          <p className="mb-6 text-gray-700 leading-relaxed">
            I'm an under graduating student from V.V.P. Engineering College with a strong passion for integrating AI, automation, and creativity into digital marketing. I love exploring how technology can make marketing smarter, faster, and more engaging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            My enthusiasm lies in exploring new trends, automating marketing processes, and using AI to boost content creativity and performance. I'm always eager to learn and innovate in the ever-evolving digital space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
