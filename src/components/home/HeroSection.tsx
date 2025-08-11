import React from 'react';
import { FaYoutube, FaSpotify, FaApple, FaInstagram } from 'react-icons/fa';
import LazyImage from '../LazyImage';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/bruklin', label: 'Instagram' },
    { icon: FaSpotify, url: 'https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO', label: 'Spotify' },
    { icon: FaYoutube, url: 'https://www.youtube.com/@BruklinOfficial', label: 'YouTube' },
    { icon: FaApple, url: 'https://music.apple.com/us/artist/bruklin/1756535936', label: 'Apple Music' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="/profilephoto.jpg" 
          alt="Bruklin" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          BRUKLIN
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
          17-year-old pop sensation from New York, touching souls worldwide with authentic music
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">7.8M+</div>
            <div className="text-gray-400 text-sm">Spotify Streams</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">17.3M+</div>
            <div className="text-gray-400 text-sm">YouTube Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">79K+</div>
            <div className="text-gray-400 text-sm">Social Followers</div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20
                       flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon size={20} className="text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;