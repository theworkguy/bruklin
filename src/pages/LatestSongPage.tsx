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
        title="Bruklin - The Voice of a Generation | Official Website"
        description="17-year-old pop sensation Bruklin from New York with 7.8M+ Spotify streams and 17.3M+ YouTube views. Listen to 'Kinda Like' and 'Good Girl Bad Dreams' now."
        keywords="Kinda Like, Bruklin latest song, new music 2025, pop ballad, emotional vulnerability, Spotify, Apple Music"
        url="/"
        type="website"
        musicData={{
          albumName: "Kinda Like",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced Background with Animated Particles */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Content container with improved layout */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header Stats Bar */}
          <div className="w-full bg-black/20 backdrop-blur-md border-b border-white/10 py-3 px-6">
            <div className="max-w-4xl mx-auto flex justify-center items-center gap-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium">7.8M+ Spotify Streams</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="font-medium">17.3M+ YouTube Views</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="font-medium">79K+ Followers</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-4 py-8">
            <div className="max-w-md mx-auto w-full">
              {/* Enhanced Profile Section */}
              <div className="mb-8">
                <Profile 
                  name="Bruklin"
                  bio="The Voice of a Generation"
                  imageUrl="/profilephoto.jpg"
                />
              </div>
              
              {/* Enhanced Song Title Section */}
              <div className="relative mb-8">
                <div className="bg-gradient-to-r from-black/60 via-black/80 to-black/60 backdrop-blur-xl 
                              rounded-2xl p-6 border border-white/20 shadow-2xl
                              hover:border-cyan-400/50 transition-all duration-700 group
                              overflow-hidden">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Sparkle Effects */}
                  <div className="absolute top-4 right-4">
                    <Sparkles size={20} className="text-cyan-400 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Star size={16} className="text-blue-400 animate-ping" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-4">
                      <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text 
                                   bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400
                                   group-hover:from-cyan-200 group-hover:via-blue-300 group-hover:to-purple-300
                                   transition-all duration-700 leading-tight
                                   [text-shadow:_0_0_30px_rgba(0,191,255,0.5)]
                                   group-hover:[text-shadow:_0_0_40px_rgba(0,191,255,0.8)]">
                        Kinda Like
                      </h1>
                      
                      {/* Enhanced badges */}
                      <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                                       text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide
                                       shadow-lg border border-white/20 backdrop-blur-sm
                                       animate-pulse">
                          🔥 NEW
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                                       text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide
                                       shadow-lg border border-white/20 backdrop-blur-sm">
                          ✨ TRENDING
                        </span>
                      </div>
                    </div>
                    
                    {/* Song Info */}
                    <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
                      <div className="flex items-center gap-1">
                        <Music size={14} className="text-cyan-400" />
                        <span>Pop Ballad</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} className="text-pink-400" />
                        <span>2025</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] 
                                bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent
                                group-hover:via-cyan-400 transition-all duration-700"></div>
                </div>
              </div>
              
              {/* Enhanced Streaming Links */}
              <div className="space-y-4">
                <LinkItem 
                  title="Listen on Spotify" 
                  url="https://open.spotify.com/album/5uwHcTv2yXjrzTcCaGRUx8" 
                  icon={<FaSpotify size={28} />}
                  className="animate-fade-in bg-gradient-to-r from-green-600/30 to-emerald-500/30 
                            hover:from-green-500/50 hover:to-emerald-400/50
                            hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] 
                            border-2 border-green-500/30 hover:border-green-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[70px] group"
                />
                <LinkItem 
                  title="Listen on Apple Music" 
                  url="https://music.apple.com/us/album/kinda-like-single/1817292593" 
                  icon={<FaApple size={28} />}
                  className="animate-fade-in-delay-1 bg-gradient-to-r from-gray-700/30 to-gray-600/30 
                            hover:from-gray-600/50 hover:to-gray-500/50
                            hover:shadow-[0_0_40px_rgba(156,163,175,0.4)]
                            border-2 border-gray-500/30 hover:border-gray-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[70px] group"
                />
                <LinkItem 
                  title="Watch on YouTube" 
                  url="https://www.youtube.com/watch?v=CEwKFU3l1z0" 
                  icon={<FaYoutube size={28} />}
                  className="animate-fade-in-delay-2 bg-gradient-to-r from-red-600/30 to-red-500/30 
                            hover:from-red-500/50 hover:to-red-400/50
                            hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]
                            border-2 border-red-500/30 hover:border-red-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[70px] group"
                />
                <LinkItem 
                  title="Listen on Amazon Music" 
                  url="https://music.amazon.com/albums/B0FB4G1CY1?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_RebJq9dDgcn4ECDRDYL7ia3Nn" 
                  icon={<SiAmazonmusic size={28} />}
                  className="animate-fade-in-delay-3 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 
                            hover:from-blue-500/50 hover:to-cyan-400/50
                            hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]
                            border-2 border-blue-500/30 hover:border-cyan-400/60
                            transform hover:scale-[1.03] transition-all duration-500
                            backdrop-blur-xl min-h-[70px] group"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="w-full bg-black/20 backdrop-blur-md border-t border-white/10 py-4 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-white/60 text-sm mb-2">
                Follow the journey on social media
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://instagram.com/bruklin" target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-pink-400 transition-colors duration-300">
                  @bruklin
                </a>
                <span className="text-white/40">•</span>
                <a href="https://tiktok.com/@bruklin" target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-white transition-colors duration-300">
                  TikTok
                </a>
                <span className="text-white/40">•</span>
                <a href="https://youtube.com/@BruklinOfficial" target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-red-400 transition-colors duration-300">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  );
};

export default LatestSongPage;