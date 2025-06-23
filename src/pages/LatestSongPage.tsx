import React from 'react';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import { SiAmazonmusic } from 'react-icons/si';
import SEOHead from '../components/SEOHead';
import Profile from '../components/Profile';
import LinkItem from '../components/LinkItem';

const LatestSongPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Bruklin - The Voice of a Generation | Official Website"
        description="17-year-old pop sensation Bruklin from New York with 7.8M+ Spotify streams and 17.3M+ YouTube views. Listen to 'ECHO' and 'Good Girl Bad Dreams' now."
        keywords="ECHO, Bruklin latest song, new music 2025, pop ballad, emotional vulnerability, Spotify, Apple Music"
        url="/"
        type="website"
        musicData={{
          albumName: "ECHO",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-20">
        {/* Background with overlay */}
        <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-music-overlay"></div>
        </div>
        
        {/* Content container */}
        <div className="relative z-10 w-full max-w-md mx-auto flex flex-col min-h-screen justify-center">
          {/* Profile Section */}
          <div className="flex-shrink-0 mb-4">
            <Profile 
              name="Bruklin"
              bio="The Voice of a Generation"
              imageUrl="/profilephoto.jpg"
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full max-w-[700px] mx-auto px-6 flex-1 flex flex-col justify-center">
            {/* Song Title Header */}
            <div className="relative bg-black backdrop-blur-sm rounded-xl px-4 py-3 mb-6
                          border-t border-white/10 shadow-[0_10px_50px_rgba(0,191,255,0.2)]
                          overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h1 className="font-display text-xl xs:text-2xl sm:text-3xl text-white
                           tracking-wide animate-fade-in
                           bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500 
                           bg-clip-text text-transparent
                           group-hover:tracking-wider transition-all duration-700
                           [text-shadow:_2px_2px_20px_rgba(0,191,255,0.5)]
                           group-hover:[text-shadow:_2px_2px_30px_rgba(0,191,255,0.8)]
                           break-words text-center leading-tight">
                ECHO
              </h1>
              
              {/* Compact NEW badge */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                               text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide
                               shadow-sm border border-white/20 backdrop-blur-sm">
                  NEW
                </span>
                <span className="text-white/60 text-xs font-medium">
                  2025
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-[2px] 
                            bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            
            {/* Streaming Platform Links */}
            <div className="flex-shrink-0">
              <div className="space-y-3">
                <LinkItem 
                  title="Listen on Spotify" 
                  url="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO" 
                  icon={<FaSpotify size={24} />}
                  className="animate-fade-in bg-gradient-to-r from-green-600/20 to-green-500/20 
                            hover:from-green-600/30 hover:to-green-500/30
                            hover:shadow-[0_0_30px_rgba(30,215,96,0.3)] min-h-[50px]"
                />
                <LinkItem 
                  title="Listen on Apple Music" 
                  url="https://music.apple.com/us/artist/bruklin/1756535936" 
                  icon={<FaApple size={24} />}
                  className="animate-fade-in-delay-1 bg-gradient-to-r from-pink-600/20 to-purple-500/20 
                            hover:from-pink-600/30 hover:to-purple-500/30
                            hover:shadow-[0_0_30px_rgba(255,105,180,0.3)] min-h-[50px]"
                />
                <LinkItem 
                  title="Watch on YouTube" 
                  url="https://www.youtube.com/@BruklinOfficial" 
                  icon={<FaYoutube size={24} />}
                  className="animate-fade-in-delay-2 bg-gradient-to-r from-red-600/20 to-red-500/20 
                            hover:from-red-600/30 hover:to-red-500/30
                            hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] min-h-[50px]"
                />
                <LinkItem 
                  title="Listen on Amazon Music" 
                  url="https://music.amazon.com/artists/B0DPLCQGNH/bruklin" 
                  icon={<SiAmazonmusic size={24} />}
                  className="animate-fade-in-delay-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 
                            hover:from-blue-600/30 hover:to-blue-500/30
                            hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] min-h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestSongPage;