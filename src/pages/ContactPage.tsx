import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Globe, MessageSquare } from 'lucide-react';
import { FaInstagram, FaTiktok, FaFacebook, FaTwitter, FaSpotify, FaYoutube } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { submitContactForm, ContactFormData } from '../utils/emailService';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        source: 'contact-page'
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
          message: '',
          inquiryType: 'general'
        });
      } else {
        setSubmitStatus('error');
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "General Inquiries",
      details: "management@mbmusicgroup.us",
      description: "For all inquiries including fan mail, press, media, and business",
      link: 'mailto:management@mbmusicgroup.us',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY",
      description: "Based in the heart of the music scene",
      link: null,
      color: 'from-emerald-400 to-green-500'
    },
    {
      icon: Globe,
      title: "Management",
      details: "MB Music Group LLC",
      description: "Professional representation and booking",
      link: 'https://mbmusicgroup.us',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const socialLinks = [
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/bruklin', 
      label: 'Instagram', 
      color: 'from-purple-600 via-pink-600 to-yellow-500',
      followers: '52.9K'
    },
    { 
      icon: FaTiktok, 
      url: 'https://www.tiktok.com/@bruklin', 
      label: 'TikTok', 
      color: 'from-gray-900 to-gray-800',
      followers: '17.8K'
    },
    { 
      icon: FaFacebook, 
      url: 'https://www.facebook.com/profile.php?id=61565927709906', 
      label: 'Facebook', 
      color: 'from-blue-600 to-blue-800',
      followers: '8.7K'
    },
    { 
      icon: FaTwitter, 
      url: 'https://twitter.com/bruklin', 
      label: 'Twitter', 
      color: 'from-blue-400 to-blue-600',
      followers: '12.3K'
    },
    { 
      icon: FaSpotify, 
      url: 'https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO', 
      label: 'Spotify', 
      color: 'from-green-500 to-green-600',
      followers: '7.8M+ streams'
    },
    { 
      icon: FaYoutube, 
      url: 'https://www.youtube.com/@BruklinOfficial', 
      label: 'YouTube', 
      color: 'from-red-500 to-red-600',
      followers: '16.8K subs'
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Question', icon: MessageSquare },
    { value: 'press', label: 'Press & Media', icon: Globe },
    { value: 'booking', label: 'Booking & Business', icon: Mail },
    { value: 'collaboration', label: 'Collaboration', icon: Send },
    { value: 'fan', label: 'Fan Message', icon: CheckCircle },
  ];

  return (
    <>
      <SEOHead
        title="Contact - Get in Touch with Bruklin"
        description="Contact Bruklin for bookings, press inquiries, collaborations, or fan messages. Based in New York, NY. Managed by MB Music Group LLC."
        keywords="contact Bruklin, booking inquiries, press contact, fan mail, collaboration requests, New York artist contact, music booking, MB Music Group"
        url="/contact"
        type="website"
      />
      <div className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3 sm:mb-4 lg:mb-6
                         tracking-wider leading-tight">
              Contact
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed px-2">
              Let's connect! Whether you're a fan, media, or looking to collaborate, I'd love to hear from you
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                          backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-105">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-1">24h</h3>
              <p className="text-white/80 text-xs sm:text-sm">Response Time</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-105">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 mb-1">79K+</h3>
              <p className="text-white/80 text-xs sm:text-sm">Social Followers</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 
                          backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transform hover:scale-105">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400 mb-1">NYC</h3>
              <p className="text-white/80 text-xs sm:text-sm">Based</p>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 
                          backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transform hover:scale-105">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-1">17</h3>
              <p className="text-white/80 text-xs sm:text-sm">Years Old</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10
                          hover:border-white/20 transition-all duration-300 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Send a Message</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-green-600/20 border border-green-500/30 flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-400 font-medium text-sm sm:text-base">Message sent successfully!</p>
                    <p className="text-green-300/80 text-xs sm:text-sm">Your message has been sent to management@mbmusicgroup.us. I'll get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-600/20 border border-red-500/30 flex items-start gap-3">
                  <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-medium text-sm sm:text-base">Message could not be sent</p>
                    <p className="text-red-300/80 text-xs sm:text-sm">Please try again or email directly to management@mbmusicgroup.us</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="inquiryType" className="block text-white font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    Type of Inquiry
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {inquiryTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border cursor-pointer transition-all duration-300
                                   ${formData.inquiryType === type.value 
                                     ? 'bg-blue-600/20 border-blue-500/50 text-blue-400' 
                                     : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:border-white/30'
                                   }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <type.icon size={14} className="sm:w-4 sm:h-4" />
                        <span className="text-xs sm:text-sm font-medium">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl
                               text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                               transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl
                               text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                               transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl
                               text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                               transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl
                               text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                               transition-all duration-300 hover:bg-white/15 text-sm sm:text-base"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl
                             text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                             transition-all duration-300 resize-vertical hover:bg-white/15 text-sm sm:text-base"
                    placeholder="Tell me more about your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600
                           hover:from-blue-700 hover:to-purple-700
                           disabled:from-gray-600 disabled:to-gray-700
                           text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl
                           flex items-center justify-center gap-2 sm:gap-3
                           transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl disabled:transform-none
                           disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                            backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">Get in Touch</h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      <div className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10
                                     border border-white/10 hover:border-white/20 transition-all duration-300
                                     hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${info.color} bg-opacity-20 
                                       flex items-center justify-center flex-shrink-0 group-hover:scale-110
                                       transition-transform duration-300`}>
                          <info.icon size={16} className="text-white sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-cyan-300 hover:text-cyan-200 font-medium mb-1 block
                                       transition-colors duration-300 text-sm sm:text-base break-all"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-emerald-300 font-medium mb-1 text-sm sm:text-base">{info.details}</p>
                          )}
                          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 
                            backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Clock size={20} className="text-green-400 sm:w-6 sm:h-6" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Response Time</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  I typically respond to messages within 24-48 hours. For urgent press or business inquiries, 
                  please mention "URGENT" in your subject line for faster response.
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                            backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-gradient-to-br ${social.color}
                                 rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 sm:gap-3
                                 transition-all duration-300 transform hover:scale-105
                                 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
                                 border border-white/20 hover:border-white/40`}
                      aria-label={`Follow Bruklin on ${social.label}`}
                    >
                      <social.icon 
                        size={20} 
                        className="text-white transition-transform duration-300 
                                 group-hover:scale-110 sm:w-6 sm:h-6" 
                      />
                      <div className="text-center">
                        <div className="text-white font-medium text-xs sm:text-sm">{social.label}</div>
                        <div className="text-white/70 text-xs">{social.followers}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-8 sm:mt-12 lg:mt-20">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">Can I request a song or cover?</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  I love hearing from fans! While I can't fulfill every request, I do read all messages and 
                  appreciate your suggestions for future projects.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">Do you do collaborations?</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  I'm always open to creative collaborations with other artists, producers, and creators. 
                  Please reach out via email to discuss opportunities.
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">How can I get updates?</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Follow me on social media for the latest updates, or check my website for news and releases. 
                  I'm most active on Instagram and TikTok!
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">Can I use your music?</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  For licensing or usage rights, please contact management with details 
                  of your project and intended use.
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