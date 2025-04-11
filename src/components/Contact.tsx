
import { useState } from 'react';
import { Send, Linkedin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-softBlue/40 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQTQzNjUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHptMi0yaDF2NGgtMXYtNHpNNDIgMmgxdjRoLTF2LTR6bTItMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your digital marketing strategy? Let's discuss how we can achieve your business goals together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white backdrop-blur-sm bg-opacity-70 p-10 rounded-2xl shadow-lg transform hover:translate-y-[-5px] transition-all duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-primary">Get in touch</h3>
              
              <div className="mt-10">
                <h4 className="font-medium mb-6 text-gray-700">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/akshay-menpara-6a584317a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-blue-500 to-blue-700 text-white h-14 w-14 rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={26} className="group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a
                    href="tel:+917622889233"
                    className="group bg-gradient-to-br from-green-500 to-teal-600 text-white h-14 w-14 rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label="Call"
                  >
                    <Phone size={26} className="group-hover:scale-110 transition-transform" />
                  </a>
                  
                  <a
                    href="mailto:akshaymenpara0@gmail.com"
                    className="group bg-gradient-to-br from-primary to-highlight text-white h-14 w-14 rounded-xl flex items-center justify-center transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    aria-label="Email"
                  >
                    <Mail size={26} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white backdrop-blur-sm bg-opacity-70 p-10 rounded-2xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 backdrop-blur-sm transition-all"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 backdrop-blur-sm transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-lg transition-all text-lg flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
