import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm, ContactFormData } from '../../utils/emailService';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const contactData: ContactFormData = {
        ...formData,
        source: 'home-page'
      };
      
      const success = await submitContactForm(contactData);
      
      setIsSubmitting(false);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
      
      // Reset status message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
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
            Ready to connect? Contact us at management@mbmusicgroup.us or use the form below.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-300">
          
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center gap-3">
              <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
              <div>
                <p className="text-green-400 font-medium">Message sent successfully!</p>
                <p className="text-green-300/80 text-sm">Your message has been sent to management@mbmusicgroup.us</p>
              </div>
            </div>
          )}
          
          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center gap-3">
              <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
              <div>
                <p className="text-red-400 font-medium">Message could not be sent</p>
                <p className="text-red-300/80 text-sm">Please try again or email directly to management@mbmusicgroup.us</p>
              </div>
            </div>
          )}
          
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
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-600 to-pink-600
                         hover:from-red-700 hover:to-pink-700
                         disabled:from-gray-600 disabled:to-gray-700
                         text-white font-semibold py-4 px-8 rounded-xl
                         flex items-center justify-center gap-3 mx-auto
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl disabled:transform-none
                         disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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