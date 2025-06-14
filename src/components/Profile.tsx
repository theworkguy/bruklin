import React from 'react';
import { BadgeCheck } from 'lucide-react';
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
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full 
                      opacity-75 group-hover:opacity-100 blur transition duration-1000 
                      group-hover:duration-200 animate-tilt"></div>
        <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full 
                      relative bg-black p-1">
          <div className="w-full h-full rounded-full overflow-hidden 
                        shadow-[0_0_40px_rgba(59,130,246,0.3)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 
                          group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
            <LazyImage
              src={imageUrl} 
              alt={`${name}'s profile`} 
              className="w-full h-full object-cover transform transition-all duration-700 
                       group-hover:scale-110 group-hover:rotate-3"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center mt-6 mb-2 animate-fade-in-delay-1">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text 
                     bg-gradient-to-r from-white via-blue-400 to-cyan-300 mr-3
                     tracking-wide hover:tracking-wider transition-all duration-300
                     [text-shadow:_0_0_30px_rgba(59,130,246,0.3)]">{name}</h2>
        <BadgeCheck size={32} className="text-white fill-[#1DA1F2] animate-pulse" />
      </div>
      
      <p className="text-sm sm:text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis
                   px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm
                   border border-white/10 hover:border-white/20
                   text-white/80 hover:text-white/90
                   transition-all duration-300 ease-out
                   [text-shadow:_0_0_15px_rgba(255,255,255,0.2)]
                   transform hover:scale-[1.02] mb-6">
        {bio}
      </p>

      <div className="flex justify-center gap-4 animate-fade-in-delay-2">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color}
                       flex items-center justify-center group/icon
                       transition-all duration-300 ease-out
                       hover:scale-110 hover:rotate-6 active:scale-95 
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                       relative overflow-hidden`}
            aria-label={`Follow on ${social.url.split('.com/')[0].split('://')[1]}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                          group-hover/icon:opacity-0 transition-opacity duration-300"></div>
            <social.icon 
              size={24} 
              className="text-white relative z-10 transition-transform duration-300 
                         group-hover/icon:scale-110" 
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;