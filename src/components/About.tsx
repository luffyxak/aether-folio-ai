
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <p className="section-subtitle text-center">
          Digital marketing specialist with a passion for AI-driven solutions and data-based strategies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* Personal Info */}
          <div className="bg-neutral p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-secondary/10 p-3 rounded-full mr-4">
                <User size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Personal</h3>
            </div>

            <ul className="space-y-3">
              <li>
                <span className="font-medium text-primary">Name:</span> Akshay Menpara
              </li>
              <li>
                <span className="font-medium text-primary">Location:</span> Gujarat, India
              </li>
              <li>
                <span className="font-medium text-primary">Email:</span> akshaymenpara17@gmail.com
              </li>
              <li>
                <span className="font-medium text-primary">Career Objective:</span> To build a future-ready career by merging digital marketing with AI and automation, creating intelligent, data-driven strategies.
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-neutral p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-secondary/10 p-3 rounded-full mr-4">
                <Briefcase size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Codtech IT Solutions</h4>
                <p className="text-sm text-gray-500">Jan - Apr 2025</p>
                <p className="mt-2">Explored key areas of digital marketing including social media marketing, SEO, and brand reputation building.</p>
              </div>
              <div>
                <h4 className="font-medium">IBM SkillsBuild</h4>
                <p className="text-sm text-gray-500">Short Internship</p>
                <p className="mt-2">Focused on learning the basics of data analytics tools, their usage, and application in marketing insights.</p>
              </div>
              <div>
                <h4 className="font-medium">Instagram Page Management</h4>
                <p className="text-sm text-gray-500">Community Building</p>
                <p className="mt-2">Managed AI influencer page (70k+ followers) and co-founded REI Clan for content creators.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-neutral p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-secondary/10 p-3 rounded-full mr-4">
                <GraduationCap size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Bachelor of Information Technology</h4>
                <p className="text-sm text-gray-500">V.V.P. Engineering College • Expected: May 2025</p>
              </div>
              <div>
                <h4 className="font-medium">Google Digital Marketing & E-commerce</h4>
                <p className="text-sm text-gray-500">Coursera Certificate</p>
                <p className="mt-2">
                  <a href="https://coursera.org/share/6e7515b9470f0d593ff2cdbdc1c0d789" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">View Certificate</a>
                </p>
              </div>
              <div>
                <h4 className="font-medium">IBM SkillsBuild - Data Analytics</h4>
                <p className="text-sm text-gray-500">Certificate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary/5 p-8 rounded-lg border border-primary/10">
          <h3 className="text-xl font-semibold mb-4 text-primary">My Approach</h3>
          <p className="mb-4">
            I'm an under graduating student from V.V.P. Engineering College with a strong passion for integrating AI, automation, and creativity into digital marketing. I love exploring how technology can make marketing smarter, faster, and more engaging.
          </p>
          <p>
            My enthusiasm lies in exploring new trends, automating marketing processes, and using AI to boost content creativity and performance. I'm always eager to learn and innovate in the ever-evolving digital space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
