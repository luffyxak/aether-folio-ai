
import { useState } from 'react';
import { Send, Linkedin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-neutral">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center">
          Let's discuss how we can work together to achieve your digital marketing goals
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4 text-gray-700">Connect With Me</h4>
                <div className="flex">
                  <a
                    href="https://linkedin.com/in/akshay-menpara-6a584317a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-blue-600 hover:bg-blue-700 text-white h-12 w-12 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} className="group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex items-center justify-center w-full md:w-auto"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
