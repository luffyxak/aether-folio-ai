
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
                <span className="font-medium text-primary">Name:</span> Your Name
              </li>
              <li>
                <span className="font-medium text-primary">Location:</span> City, Country
              </li>
              <li>
                <span className="font-medium text-primary">Email:</span> your.email@example.com
              </li>
              <li>
                <span className="font-medium text-primary">Interests:</span> AI Technology, Digital Innovation, Marketing Analytics, Content Strategy
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
                <h4 className="font-medium">Digital Marketing Director</h4>
                <p className="text-sm text-gray-500">Company Name • 2021 - Present</p>
                <p className="mt-2">Leading digital marketing strategies, implementing AI-driven campaigns, and optimizing customer journeys.</p>
              </div>
              <div>
                <h4 className="font-medium">Marketing Specialist</h4>
                <p className="text-sm text-gray-500">Previous Company • 2018 - 2021</p>
                <p className="mt-2">Developed and executed comprehensive marketing campaigns across multiple channels.</p>
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
                <h4 className="font-medium">Master's in Digital Marketing</h4>
                <p className="text-sm text-gray-500">University Name • 2016 - 2018</p>
                <p className="mt-2">Specialized in digital marketing strategies and analytics.</p>
              </div>
              <div>
                <h4 className="font-medium">Bachelor's in Business Administration</h4>
                <p className="text-sm text-gray-500">University Name • 2012 - 2016</p>
                <p className="mt-2">Focused on marketing and business strategy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary/5 p-8 rounded-lg border border-primary/10">
          <h3 className="text-xl font-semibold mb-4 text-primary">My Approach</h3>
          <p className="mb-4">
            I blend traditional marketing principles with cutting-edge AI technologies to create data-driven strategies that deliver measurable results. My expertise lies in identifying opportunities for digital transformation and implementing solutions that enhance both user experience and business outcomes.
          </p>
          <p>
            Whether it's developing comprehensive marketing campaigns, optimizing conversion funnels, or leveraging AI to personalize customer interactions, I'm passionate about driving growth through innovative digital strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
