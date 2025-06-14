import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import { Users, Heart, TrendingUp, Star } from 'lucide-react';

const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/bruklin', 
      label: 'Instagram', 
      username: '@bruklin',
      color: 'from-purple-600 via-pink-600 to-yellow-500',
      followers: '52.9K',
      description: 'Daily updates & behind the scenes',
      stats: 'Stories • Reels • Photos',
      verified: true
    },
    { 
      icon: FaTiktok, 
      url: 'https://www.tiktok.com/@bruklin', 
      label: 'TikTok', 
      username: '@bruklin',
      color: 'from-gray-900 to-gray-800',
      followers: '17.8K',
      description: 'Viral music content & trends',
      stats: 'Videos • Challenges • Duets',
      verified: true
    },
    { 
      icon: FaFacebook, 
      url: 'https://www.facebook.com/bruklin', 
      label: 'Facebook', 
      username: '@bruklin',
      color: 'from-blue-600 to-blue-800',
      followers: '8.7K',
      description: 'Community & fan interactions',
      stats: 'Posts • Events • Live streams',
      verified: true
    }
  ];

  const totalFollowers = socialLinks.reduce((sum, social) => {
    const count = parseFloat(social.followers.replace('K', '')) * 1000;
    return sum + count;
  }, 0);

  const formatTotalFollowers = (total: number) => {
    if (total >= 1000000) {
      return `${(total / 1000000).toFixed(1)}M`;
    }
    return `${Math.round(total / 1000)}K`;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background with Profile Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/profilephoto.jpg" 
          alt="Bruklin" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header with Stats */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Heart size={24} className="text-pink-400 sm:w-8 sm:h-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white
                         bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent
                         text-center leading-tight">
              Connect With Me
            </h2>
          </div>
          
          {/* Global Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-400">
                79.4K+
              </div>
              <div className="text-white/60 text-xs sm:text-sm">Total Followers</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">3</div>
              <div className="text-white/60 text-xs sm:text-sm">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">Daily</div>
              <div className="text-white/60 text-xs sm:text-sm">Updates</div>
            </div>
          </div>
          
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Stay connected and get exclusive content, behind-the-scenes moments, and real-time updates from my musical journey
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${social.color}
                         rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-500 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                         border border-white/20 hover:border-white/40
                         overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]
                         flex flex-col justify-between`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full bg-white/20 transform translate-x-8 sm:translate-x-12 lg:translate-x-16 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full bg-white/10 transform -translate-x-8 sm:-translate-x-10 lg:-translate-x-12 translate-y-8 sm:translate-y-10 lg:translate-y-12"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm
                                  flex items-center justify-center group-hover:scale-110
                                  transition-transform duration-300 border border-white/30 flex-shrink-0">
                      <social.icon 
                        size={24} 
                        className="text-white transition-transform duration-300 
                                 group-hover:scale-110 sm:w-7 sm:h-7 lg:w-8 lg:h-8" 
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 truncate">
                        {social.label}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white/70 text-xs sm:text-sm font-medium truncate">
                          {social.username}
                        </span>
                        {social.verified && (
                          <img 
                            src="/download.png" 
                            alt="Verified" 
                            className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 object-contain" 
                          />
                        )}
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Users size={12} className="text-white/70 sm:w-4 sm:h-4" />
                        <span className="text-white/90 font-semibold text-sm sm:text-base truncate">
                          {social.followers} followers
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trending Indicator */}
                  <div className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full
                                bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0">
                    <TrendingUp size={10} className="text-white sm:w-3.5 sm:h-3.5" />
                    <span className="text-white text-xs font-medium">Active</span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 mb-4">
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed">
                    {social.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star size={12} className="text-yellow-400 sm:w-3.5 sm:h-3.5" />
                    <span className="text-white/80 text-xs sm:text-sm">{social.stats}</span>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-white font-semibold group-hover:text-white/90
                                 transition-colors duration-300 text-sm sm:text-base">
                    Follow for updates
                  </span>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-white/30
                                flex items-center justify-center transition-all duration-300
                                transform group-hover:translate-x-1 flex-shrink-0">
                    <span className="text-white text-sm sm:text-lg">→</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            pointer-events-none"></div>
            </a>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 
                        backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20
                        hover:border-white/30 transition-all duration-300
                        shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Heart size={20} className="text-pink-400 sm:w-6 sm:h-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Join the Community</h3>
            </div>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
              Be part of my journey and get exclusive access to new music, live sessions, and personal updates across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              {socialLinks.slice(0, 2).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r ${social.color}
                             hover:shadow-lg text-white font-semibold 
                             py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 
                             transform hover:scale-105 border border-white/20 text-sm sm:text-base
                             w-full sm:w-auto`}
                >
                  <social.icon size={16} className="sm:w-5 sm:h-5" />
                  <span>Follow on {social.label}</span>
                  {social.verified && (
                    <img 
                      src="/download.png" 
                      alt="Verified" 
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" 
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;