import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaTiktok, FaFacebook, FaTwitter } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "General Inquiries",
      details: "hello@bruklin.us",
      description: "For general questions and fan mail"
    },
    {
      icon: Mail,
      title: "Press & Media",
      details: "press@bruklin.us",
      description: "For interviews and media requests"
    },
    {
      icon: Mail,
      title: "Business & Booking",
      details: "booking@bruklin.us",
      description: "For performance and collaboration inquiries"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY",
      description: "Based in the heart of the music scene"
    }
  ];

  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/bruklin', label: 'Instagram', color: 'from-purple-600 via-pink-600 to-yellow-500' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@bruklin', label: 'TikTok', color: 'from-gray-900 to-gray-800' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=61565927709906', label: 'Facebook', color: 'from-blue-600 to-blue-800' },
    { icon: FaTwitter, url: 'https://twitter.com/bruklin', label: 'Twitter', color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <>
      <SEOHead
        title="Contact - Get in Touch with Bruklin"
        description="Contact Bruklin for bookings, press inquiries, collaborations, or fan messages. Based in New York, NY. Multiple contact options available for different types of inquiries."
        keywords="contact Bruklin, booking inquiries, press contact, fan mail, collaboration requests, New York artist contact, music booking"
        url="/contact"
        type="website"
      />
      <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6
                         tracking-wider">
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Let's connect! Whether you're a fan, media, or looking to collaborate, I'd love to hear from you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10
                          hover:border-white/20 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="inquiryType" className="block text-white font-medium mb-2">
                    Type of Inquiry
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-white focus:outline-none focus:border-blue-400
                             transition-all duration-300"
                  >
                    <option value="general" className="bg-black">General Question</option>
                    <option value="press" className="bg-black">Press & Media</option>
                    <option value="booking" className="bg-black">Booking & Business</option>
                    <option value="collaboration" className="bg-black">Collaboration</option>
                    <option value="fan" className="bg-black">Fan Message</option>
                  </select>
                </div>

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
                    placeholder="Tell me more about your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600
                           hover:from-blue-700 hover:to-purple-700
                           text-white font-semibold py-4 px-6 rounded-xl
                           flex items-center justify-center gap-3
                           transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                            backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                                    flex-shrink-0">
                        <info.icon size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        <p className="text-blue-400 font-medium mb-1">{info.details}</p>
                        <p className="text-white/70 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 
                            backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-green-400" />
                  <h3 className="text-xl font-bold text-white">Response Time</h3>
                </div>
                <p className="text-white/80">
                  I typically respond to messages within 24-48 hours. For urgent press or business inquiries, 
                  please use the specific email addresses above for faster response.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                            backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-gradient-to-br ${social.color}
                                 rounded-xl p-4 flex items-center gap-3
                                 transition-all duration-300 transform hover:scale-105
                                 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]`}
                      aria-label={`Follow Bruklin on ${social.label}`}
                    >
                      <social.icon 
                        size={24} 
                        className="text-white transition-transform duration-300 
                                 group-hover:scale-110" 
                      />
                      <span className="text-white font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Can I request a song or cover?</h3>
                <p className="text-white/80">
                  I love hearing from fans! While I can't fulfill every request, I do read all messages and 
                  appreciate your suggestions for future projects.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Do you do collaborations?</h3>
                <p className="text-white/80">
                  I'm always open to creative collaborations with other artists, producers, and creators. 
                  Please use the 'Booking & Business' email to discuss opportunities.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">How can I get updates?</h3>
                <p className="text-white/80">
                  Follow me on social media for the latest updates, or check my website for news and releases.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Can I use your music?</h3>
                <p className="text-white/80">
                  For licensing or usage rights, please contact the 'Business & Booking' email with details 
                  of your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;