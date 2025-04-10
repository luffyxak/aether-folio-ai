
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-secondary hover:underline">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <a href="tel:+12345678901" className="text-secondary hover:underline">
                      +1 (234) 567-8901
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">
                      City, Country
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4 text-gray-700">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary hover:bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    X
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-secondary text-white h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    ig
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
