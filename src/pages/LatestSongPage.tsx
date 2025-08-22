import React from 'react';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import { SiAmazonmusic } from 'react-icons/si';
import { Play, Music, Sparkles, Heart, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Profile from '../components/Profile';
import LinkItem from '../components/LinkItem';

const LatestSongPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cry A Little Louder - Bruklin | Official Website"
        description="17-year-old pop sensation Bruklin from New York with 9.1M+ Spotify streams and 22.3M+ YouTube views. Listen to 'Cry A Little Louder' - a fierce pop breakup anthem now."
        keywords="Cry A Little Louder, Bruklin latest song, new music 2025, pop breakup anthem, empowerment, Spotify, Apple Music"
        url="/"
        type="website"
        musicData={{
          albumName: "Cry A Little Louder",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced Background with Animated Particles */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-black"></div>
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-8 sm:top-40 sm:right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-24 left-8 sm:bottom-32 sm:left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute bottom-16 right-4 sm:bottom-20 sm:right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Content container with improved layout */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header Stats Bar */}
          <div className="w-full bg-black/30 backdrop-blur-md border-b border-white/10 py-2 sm:py-3 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto flex justify-center items-center gap-4 sm:gap-8 text-xs">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">9.1M+ Spotify</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-medium">22.3M+ YouTube</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="font-medium">105K+ Social</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-4 py-4 sm:py-8">
            <div className="max-w-sm sm:max-w-md mx-auto w-full">
              {/* Enhanced Profile Section */}
              <div className="mb-6 sm:mb-8">
                <Profile 
                  name="Bruklin"
                  bio="The Voice of a Generation"
                  imageUrl="/profilephoto.jpg"
                />
              </div>
              
              {/* Enhanced Song Title Section */}
              <div className="relative mb-6 sm:mb-8">
                <div className="relative bg-gradient-to-br from-black/80 via-gray-900/90 to-black/80 
                              backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10
                              hover:border-gradient-to-r hover:from-pink-500/50 hover:via-purple-500/50 hover:to-blue-500/50
                              transition-all duration-500 group overflow-hidden
                              shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_80px_rgba(168,85,247,0.4)]">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 via-purple-600/10 to-blue-600/5 
                                opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2">
                      <Sparkles size={18} className="text-pink-400 animate-pulse" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Song Title */}
                    <div className="text-center mb-6">
                      <div className="mb-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text 
                                     bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400
                                     group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-blue-300
                                     transition-all duration-700 leading-tight tracking-wide
                                     drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]
                                     group-hover:drop-shadow-[0_0_50px_rgba(168,85,247,0.8)]">
                          Cry A Little Louder
                        </h1>
                      </div>
                      
                      {/* Status Badges */}
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="relative">
                          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                                         text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider
                                         shadow-lg border border-white/20 backdrop-blur-sm
                                         animate-pulse hover:animate-none transition-all duration-300
                                         hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                            🔥 Latest Drop
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full 
                                        blur-md opacity-30 animate-pulse"></div>
                        </div>
                        
                        <div className="relative">
                          <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white 
                                         text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider
                                         shadow-lg border border-white/20 backdrop-blur-sm
                                         hover:scale-110 transition-all duration-300
                                         hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                            📈 Growing
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full 
                                        blur-md opacity-20"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Song Details */}
                    <div className="flex items-center justify-center gap-6 text-white/80">
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-white/10
                                    hover:bg-white/10 transition-all duration-300">
                        <Music size={14} className="text-pink-400" />
                        <span className="text-sm font-medium">Breakup Anthem</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-white/10
                                    hover:bg-white/10 transition-all duration-300">
                        <Heart size={14} className="text-purple-400" />
                        <span className="text-sm font-medium">August 2025</span>
                      </div>
                      
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-white/10
                                    hover:bg-white/10 transition-all duration-300">
                        <Play size={14} className="text-blue-400" />
                        <span className="text-sm font-medium">3:03</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 
                                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                                opacity-60 group-hover:opacity-100 transition-all duration-700
                                group-hover:h-2"></div>
                  
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-transparent 
                                rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent 
                                rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
              
              {/* Enhanced Streaming Links */}
              <div className="space-y-3 sm:space-y-4">
                <LinkItem 
                  title="Listen on Spotify" 
                  url="https://open.spotify.com/album/6VueSIGMnzOCJtWg3a2IWO" 
                  icon={<FaSpotify size={28} />}
                  className="animate-fade-in bg-gradient-to-r from-green-600/30 to-emerald-500/30 
                            hover:from-green-500/50 hover:to-emerald-400/50
                            hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] 
                            border border-green-500/30 hover:border-green-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[60px] sm:min-h-[70px] group"
                />
                <LinkItem 
                  title="Listen on Apple Music" 
                  url="https://music.apple.com/us/album/cry-a-little-louder-single/1817292469" 
                  icon={<FaApple size={28} />}
                  className="animate-fade-in-delay-1 bg-gradient-to-r from-gray-700/30 to-gray-600/30 
                            hover:from-gray-600/50 hover:to-gray-500/50
                            hover:shadow-[0_0_40px_rgba(156,163,175,0.4)]
                            border border-gray-500/30 hover:border-gray-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[60px] sm:min-h-[70px] group"
                />
                <LinkItem 
                  title="Watch on YouTube" 
                  url="http://youtube.com/watch?v=oYuoRJA4sPs" 
                  icon={<FaYoutube size={28} />}
                  className="animate-fade-in-delay-2 bg-gradient-to-r from-red-600/30 to-red-500/30 
                            hover:from-red-500/50 hover:to-red-400/50
                            hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]
                            border border-red-500/30 hover:border-red-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[60px] sm:min-h-[70px] group"
                />
                <LinkItem 
                  title="Listen on Amazon Music" 
                  url="https://music.amazon.com/albums/B0FB51J7RP" 
                  icon={<SiAmazonmusic size={28} />}
                  className="animate-fade-in-delay-3 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 
                            hover:from-blue-500/50 hover:to-cyan-400/50
                            hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
                            border border-blue-500/30 hover:border-cyan-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[60px] sm:min-h-[70px] group"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
        </div>
      </div>
    </>
  );
};

export default LatestSongPage;