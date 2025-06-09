import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaSpotify, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Music } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/bruklin', label: 'Instagram' },
    { icon: FaSpotify, url: 'https://open.spotify.com/artist/bruklin', label: 'Spotify' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@bruklin', label: 'YouTube' },
    { icon: FaFacebook, url: 'https://www.facebook.com/bruklin', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com/bruklin', label: 'Twitter' },
  ];

  const footerLinks = [
    { name: 'Privacy policy', path: '/privacy' },
    { name: 'Terms and conditions', path: '/terms' },
    { name: 'Contact', path: '/contact' },
    { name: 'Credits', path: '/credits' },
  ];

  return (
    <footer className="w-full py-12 px-6 bg-black/90 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl font-bold text-white mr-2">BRUKLIN</h2>
          <Music className="text-blue-400" size={28} />
          <Music className="text-cyan-400 ml-1" size={24} />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20
                       flex items-center justify-center group
                       transition-all duration-300 ease-out
                       hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              aria-label={social.label}
            >
              <social.icon 
                size={20} 
                className="text-white group-hover:text-blue-400 transition-colors duration-300" 
              />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white/70 hover:text-white transition-colors duration-300
                       text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-2">The Voice of a Generation</p>
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Bruklin – Represented by{' '}
            <a 
              href="https://mbmusicgroup.us" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-400 transition-colors"
            >
              MB Music Group LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;