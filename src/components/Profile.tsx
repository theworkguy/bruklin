import React from 'react';
import { BadgeCheck, Sparkles, Music } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import LazyImage from './LazyImage';

interface ProfileProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ name, bio, imageUrl }) => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com/bruklin', color: 'from-purple-600 via-pink-600 to-yellow-500' },
    { icon: FaTiktok, url: 'https://tiktok.com/@bruklin', color: 'from-gray-900 to-gray-800' },
  ];

  return (
    <div className="flex flex-col items-center mb-8 px-4">
      {/* Enhanced Profile Image */}
      <div className="relative group mb-6">
        {/* Outer Glow Ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
                      rounded-full opacity-75 group-hover:opacity-100 blur-sm transition duration-1000 
                      group-hover:duration-200 animate-pulse"></div>
        
        {/* Middle Ring */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full 
                      opacity-60 group-hover:opacity-80 transition duration-700"></div>
        
        {/* Image Container */}
        <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full 
                      relative bg-black p-1 group-hover:p-0.5 transition-all duration-500">
          <div className="w-full h-full rounded-full overflow-hidden 
                        shadow-[0_0_60px_rgba(59,130,246,0.4)] relative
                        group-hover:shadow-[0_0_80px_rgba(59,130,246,0.6)]
                        transition-all duration-700">
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/20 
                          group-hover:from-blue-400/30 group-hover:to-cyan-300/30
                          transition-all duration-700 z-10 rounded-full"></div>
            
            {/* Sparkle Effects */}
            <div className="absolute top-4 right-4 z-20">
              <Sparkles size={16} className="text-cyan-300 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-6 left-4 z-20">
              <Music size={14} className="text-blue-300 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            <LazyImage
              src={imageUrl} 
              alt={`${name}'s profile`} 
              className="w-full h-full object-cover transform transition-all duration-700 
                       group-hover:scale-110 group-hover:rotate-2 relative z-0"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 
                      rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100
                      transition-all duration-500 animate-bounce">
          <span className="text-white text-xs">🎵</span>
        </div>
      </div>
      
      {/* Enhanced Name and Badge */}
      <div className="flex items-center justify-center mb-4 animate-fade-in-delay-1">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-white via-cyan-300 to-blue-400 mr-3
                     tracking-wide hover:tracking-wider transition-all duration-500
                     [text-shadow:_0_0_40px_rgba(59,130,246,0.4)]
                     hover:[text-shadow:_0_0_60px_rgba(59,130,246,0.6)]">
          {name}
        </h2>
        <div className="relative">
          <BadgeCheck size={36} className="text-cyan-400 fill-blue-500 animate-pulse 
                                        hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-30 animate-pulse"></div>
        </div>
      </div>
      
      {/* Enhanced Bio */}
      <div className="relative mb-6">
        <p className="text-base sm:text-lg font-medium text-center
                     px-6 py-3 rounded-2xl bg-gradient-to-r from-black/40 via-black/60 to-black/40
                     backdrop-blur-xl border border-white/20 hover:border-cyan-400/40
                     text-white/90 hover:text-white
                     transition-all duration-500 ease-out
                     [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]
                     transform hover:scale-[1.02] cursor-default
                     shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {bio}
        </p>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                      rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>

      {/* Enhanced Social Links */}
      <div className="flex justify-center gap-6 animate-fade-in-delay-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${social.color}
                       flex items-center justify-center group/icon
                       transition-all duration-500 ease-out
                       hover:scale-110 hover:rotate-6 active:scale-95 
                       hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
                       overflow-hidden border border-white/20 hover:border-white/40`}
            aria-label={`Follow on ${social.url.split('.com/')[0].split('://')[1]}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                          group-hover/icon:opacity-0 transition-opacity duration-500"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/icon:opacity-100 
                          transition-opacity duration-500 blur-sm"></div>
            
            {/* Icon */}
            <social.icon 
              size={26} 
              className="text-white relative z-10 transition-all duration-500 
                         group-hover/icon:scale-110 group-hover/icon:drop-shadow-lg" 
            />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent
                          opacity-0 group-hover/icon:opacity-100 transition-opacity duration-500
                          transform -translate-x-full group-hover/icon:translate-x-full
                          transition-transform duration-700"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;