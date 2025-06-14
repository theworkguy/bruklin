import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaSpotify, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/bruklin', 
      label: 'Instagram',
      color: 'hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]'
    },
    { 
      icon: FaSpotify, 
      url: 'https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO', 
      label: 'Spotify',
      color: 'hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]'
    },
    { 
      icon: FaYoutube, 
      url: 'https://www.youtube.com/@BruklinOfficial', 
      label: 'YouTube',
      color: 'hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]'
    },
    { 
      icon: FaFacebook, 
      url: 'https://www.facebook.com/profile.php?id=61565927709906', 
      label: 'Facebook',
      color: 'hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
    },
  ];

  const quickLinks = [
    { name: 'My Journey', path: '/my-journey' },
    { name: 'Discography', path: '/discography' },
    { name: 'Videos', path: '/videos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Photos', path: '/photos' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'management@mbmusicgroup.us',
      link: 'mailto:management@mbmusicgroup.us'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      link: null
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-t from-black via-gray-900/95 to-black/90 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                    BRUKLIN
                  </span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  The Voice of a Generation. 17-year-old pop sensation from New York with 7.8M+ Spotify streams 
                  and 17.3M+ YouTube views.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <contact.icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{contact.label}</p>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full bg-white/10 hover:bg-white/20
                             flex items-center justify-center group
                             transition-all duration-300 ease-out
                             hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon 
                      size={22} 
                      className="text-white transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors duration-300
                               hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Press Kit Download */}
              <a
                href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-gradient-to-r from-blue-600/20 to-cyan-500/20
                         border border-blue-400/30 hover:border-blue-400/50
                         text-blue-400 hover:text-cyan-300 font-medium
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <Mail size={16} />
                Press Kit
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm mb-1">
                © {new Date().getFullYear()} Bruklin. All rights reserved.
              </p>
              <p className="text-white/60 text-sm">
                Represented by{' '}
                <a 
                  href="https://mbmusicgroup.us" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  MB Music Group LLC
                </a>
              </p>
            </div>

            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>7.8M+ Spotify Streams</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                <span>17.3M+ YouTube Views</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;