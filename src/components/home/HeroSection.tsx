import React from 'react';
import { FaYoutube, FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: FaYoutube, url: 'https://www.youtube.com/@bruklin', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaSpotify, url: 'https://open.spotify.com/artist/bruklin', label: 'Spotify', color: 'hover:text-green-500' },
    { icon: FaApple, url: 'https://music.apple.com/artist/bruklin', label: 'Apple Music', color: 'hover:text-gray-300' },
    { icon: FaAmazon, url: 'https://music.amazon.com/artists/bruklin', label: 'Amazon Music', color: 'hover:text-orange-500' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-6
                     tracking-wider animate-fade-in
                     [text-shadow:_0_0_50px_rgba(59,130,246,0.5)]">
          BRUKLIN
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed
                     max-w-3xl mx-auto animate-fade-in-delay-1
                     font-light tracking-wide">
          At age 17, Bruklin is turning New York's heartbeat into pop magic—touching souls worldwide...
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 animate-fade-in-delay-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm
                         flex items-center justify-center group
                         transition-all duration-300 ease-out
                         hover:scale-110 hover:bg-white/20 ${social.color}
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]`}
              aria-label={social.label}
            >
              <social.icon 
                size={28} 
                className="text-white transition-colors duration-300" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;