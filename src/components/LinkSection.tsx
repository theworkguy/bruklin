import React from 'react';
import LinkItem from './LinkItem';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';

const LinkSection: React.FC = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-6 pb-24">
      <div className="relative bg-black
                    backdrop-blur-sm rounded-2xl px-4 py-4 mb-8
                    border-t border-white/10 shadow-[0_10px_50px_rgba(0,191,255,0.2)]
                    overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl text-white
                     tracking-wide animate-fade-in
                     bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500 
                     bg-clip-text text-transparent
                     group-hover:tracking-wider transition-all duration-700
                     [text-shadow:_2px_2px_20px_rgba(0,191,255,0.5)]
                     group-hover:[text-shadow:_2px_2px_30px_rgba(0,191,255,0.8)]
                     break-words text-center leading-tight">
          Under Your Skin
        </h1>
        <div className="absolute bottom-0 left-0 w-full h-[2px] 
                      bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="space-y-4">
        <LinkItem 
          title="Listen on Spotify" 
          url="https://open.spotify.com/album/1E0QjiMao6MMzZnExxv5NP" 
          icon={<FaSpotify size={28} />}
          className="animate-fade-in bg-gradient-to-r from-green-600/20 to-green-500/20 
                    hover:from-green-600/30 hover:to-green-500/30
                    hover:shadow-[0_0_30px_rgba(30,215,96,0.3)]"
        />
        <LinkItem 
          title="Listen on Apple Music" 
          url="https://music.apple.com/us/album/under-your-skin-single/1804158546" 
          icon={<FaApple size={28} />}
          className="animate-fade-in-delay-1 bg-gradient-to-r from-pink-600/20 to-purple-500/20 
                    hover:from-pink-600/30 hover:to-purple-500/30
                    hover:shadow-[0_0_30px_rgba(255,105,180,0.3)]"
        />
        <LinkItem 
          title="Watch on YouTube" 
          url="https://youtu.be/3fMx4F9cYVw" 
          icon={<FaYoutube size={28} />}
          className="animate-fade-in-delay-2 bg-gradient-to-r from-red-600/20 to-red-500/20 
                    hover:from-red-600/30 hover:to-red-500/30
                    hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
        />
      </div>
    </div>
  );
};

export default LinkSection;