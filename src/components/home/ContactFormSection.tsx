import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                       bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to connect? Drop us a message and let's make something amazing together.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
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
                           transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
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
                           transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
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
                           transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
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
                           transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
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
                         transition-all duration-300 resize-vertical"
                placeholder="Tell us more about your message..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-pink-600
                         hover:from-red-700 hover:to-pink-700
                         text-white font-semibold py-4 px-8 rounded-xl
                         flex items-center justify-center gap-3 mx-auto
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;