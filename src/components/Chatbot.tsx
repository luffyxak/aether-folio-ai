
import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageSquare, Info } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'bot',
          text: "Hello! I'm your AI marketing assistant. I can help with digital marketing strategies, industry trends, or provide expert advice. Whether you need content ideas, platform recommendations. I'm here to support your business goals. What marketing challenge can I help you with today?",
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Generate a unique ID
  const generateId = () => Math.random().toString(36).substring(2, 9);

  // Simulate sending a message to the AI
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = {
      id: generateId(),
      type: 'user' as const,
      text: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    try {
      // Simulate API call to Gemini
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Predefined response templates based on keywords
      let botResponse = "I'm not sure I understand. Could you please rephrase your question?";
      const lowerCaseMessage = message.toLowerCase();
      
      if (lowerCaseMessage.includes('digital marketing') || lowerCaseMessage.includes('marketing')) {
        botResponse = "Digital marketing is all about connecting with your audience through various online channels. I specialize in SEO, content marketing, social media strategies, and data-driven campaigns that deliver measurable results.";
      } else if (lowerCaseMessage.includes('seo') || lowerCaseMessage.includes('search engine')) {
        botResponse = "SEO is crucial for online visibility! My approach combines technical optimization, quality content creation, and strategic link building to improve your rankings and drive organic traffic.";
      } else if (lowerCaseMessage.includes('ai') || lowerCaseMessage.includes('artificial intelligence')) {
        botResponse = "AI is transforming marketing through personalization, predictive analytics, and automation. I can help implement AI solutions like chatbots, recommendation engines, and content optimization tools to enhance your digital strategy.";
      } else if (lowerCaseMessage.includes('portfolio') || lowerCaseMessage.includes('projects')) {
        botResponse = "My portfolio includes diverse projects from AI-powered chatbots for e-commerce to comprehensive SEO campaigns for tech startups. Each project demonstrates my focus on delivering measurable business results through digital innovation.";
      } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('hire')) {
        botResponse = "I'd love to discuss your project! You can reach me through the contact form on this website, or email me directly at your.email@example.com. Let's schedule a consultation to talk about your specific needs.";
      }
      
      // Add bot response
      setMessages(prev => [...prev, {
        id: generateId(),
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      }]);
      
    } catch (error) {
      toast({
        title: "Couldn't connect to AI",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-all transform ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-secondary hover:bg-secondary/90'
        }`}
        aria-label="Chat with AI"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-40 overflow-hidden transition-all transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-primary text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Bot size={20} className="mr-2" />
            <span className="font-medium">AI Assistant</span>
          </div>
          <button
            onClick={() => toast({
              title: "About this AI",
              description: "This chatbot is powered by Gemini 2.5 Pro and can help with questions about digital marketing and AI trends.",
              variant: "default",
            })}
            className="text-white/80 hover:text-white"
            aria-label="Info"
          >
            <Info size={18} />
          </button>
        </div>

        {/* Messages Container */}
        <div className="h-96 overflow-y-auto p-4 bg-neutral">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.type === 'user'
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.type === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {formatTime(msg.timestamp)}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-secondary"
            disabled={isTyping}
          />
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-r-md transition-colors"
            disabled={isTyping || !message.trim()}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
