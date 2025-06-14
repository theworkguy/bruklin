import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-black/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-pink-500/30 to-purple-500/30 animate-gradient-shift"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform
                       ${isVisible ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6
                       bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent text-glow">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Ready to connect? Drop us a message and let's make something amazing together.
          </p>
        </div>

        <div className={`bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-500 glass-effect hover-lift
                      transform ${isVisible ? 'animate-scale-in animate-delay-300' : 'scale-95 opacity-0'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-left animate-delay-400">
                <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                           transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                           focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="animate-fade-in-right animate-delay-400">
                <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                           transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                           focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-left animate-delay-500">
                <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                           transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                           focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="animate-fade-in-right animate-delay-500">
                <label htmlFor="subject" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                           transition-all duration-300 hover:bg-white/15 focus:bg-white/15
                           focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  placeholder="What's this about?"
                />
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-600">
              <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                         text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                         transition-all duration-300 resize-vertical hover:bg-white/15 focus:bg-white/15
                         focus:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                placeholder="Tell us more about your message..."
              />
            </div>

            <div className="text-center animate-fade-in-up animate-delay-700">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-600 to-pink-600
                         hover:from-red-700 hover:to-pink-700
                         disabled:from-gray-600 disabled:to-gray-700
                         text-white font-semibold py-4 px-8 rounded-xl
                         flex items-center justify-center gap-3 mx-auto
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl neon-glow
                         disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;