import React from 'react';
import { FaYoutube, FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: FaYoutube, url: 'https://www.youtube.com/@BruklinOfficial', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaSpotify, url: 'https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO', label: 'Spotify', color: 'hover:text-green-500' },
    { icon: FaApple, url: 'https://music.apple.com/us/artist/bruklin/1756535936', label: 'Apple Music', color: 'hover:text-gray-300' },
    { icon: FaAmazon, url: 'https://music.amazon.com/artists/B0DPLCQGNH/bruklin' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/profilephoto.jpg" 
          alt="Bruklin" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
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
                     font-light tracking-wide
                     [text-shadow:_0_0_20px_rgba(0,0,0,0.8)]">
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
              className={`w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/20
                         flex items-center justify-center group
                         transition-all duration-300 ease-out
                         hover:scale-110 hover:bg-black/50 ${social.color}
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                         hover:border-white/40`}
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