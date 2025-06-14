import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSpotify, FaApple, FaAmazon } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: FaYoutube, url: 'https://www.youtube.com/@BruklinOfficial', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: FaSpotify, url: 'https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO', label: 'Spotify', color: 'hover:text-green-500' },
    { icon: FaApple, url: 'https://music.apple.com/us/artist/bruklin/1756535936', label: 'Apple Music', color: 'hover:text-gray-300' },
    { icon: FaAmazon, url: 'https://music.amazon.com/artists/B0DPLCQGNH/bruklin' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 z-0 parallax">
        <img 
          src="/profilephoto.jpg" 
          alt="Bruklin" 
          className="w-full h-full object-cover object-center scale-110 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Enhanced Logo with Glow Effect */}
        <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-6 sm:mb-8
                     tracking-wider transition-all duration-1000 transform
                     text-glow animate-gradient-shift
                     ${isVisible ? 'animate-scale-in' : 'scale-90 opacity-0'}`}>
          BRUKLIN
        </h1>

        {/* Enhanced Tagline with Better Mobile Typography */}
        <p className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed
                     max-w-3xl mx-auto font-light tracking-wide px-4
                     [text-shadow:_0_0_20px_rgba(0,0,0,0.8)]
                     transition-all duration-1000 delay-300 transform
                     ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'translate-y-8 opacity-0'}`}>
          At age 17, Bruklin is turning New York's heartbeat into pop magic—touching souls worldwide...
        </p>

        {/* Enhanced Social Media Icons with Staggered Animation */}
        <div className={`flex justify-center gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-600 transform
                       ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'translate-y-8 opacity-0'}`}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full 
                         bg-black/30 backdrop-blur-sm border border-white/20
                         flex items-center justify-center group
                         transition-all duration-500 ease-out transform
                         hover:scale-110 hover:bg-black/50 ${social.color}
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                         hover:border-white/40 hover-lift animate-pulse-glow
                         animate-scale-in`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              aria-label={social.label}
            >
              <social.icon 
                size={window.innerWidth < 640 ? 20 : window.innerWidth < 768 ? 24 : 28} 
                className="text-white transition-all duration-300 group-hover:scale-110" 
              />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000
                       ${isVisible ? 'animate-fade-in-up animate-delay-1000' : 'translate-y-8 opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;