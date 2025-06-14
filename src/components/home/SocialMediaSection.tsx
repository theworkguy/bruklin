import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import { Users, Heart, TrendingUp, Star } from 'lucide-react';

const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    { 
      icon: FaInstagram, 
      url: 'https://www.instagram.com/bruklin', 
      label: 'Instagram', 
      color: 'from-purple-600 via-pink-600 to-yellow-500',
      followers: '45.2K',
      description: 'Daily updates & behind the scenes',
      stats: 'Stories • Reels • Photos'
    },
    { 
      icon: FaTiktok, 
      url: 'https://www.tiktok.com/@bruklin', 
      label: 'TikTok', 
      color: 'from-gray-900 to-gray-800',
      followers: '128K',
      description: 'Viral music content & trends',
      stats: 'Videos • Challenges • Duets'
    },
    { 
      icon: FaFacebook, 
      url: 'https://www.facebook.com/bruklin', 
      label: 'Facebook', 
      color: 'from-blue-600 to-blue-800',
      followers: '23.1K',
      description: 'Community & fan interactions',
      stats: 'Posts • Events • Live streams'
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
    <section className="py-20 px-6 relative overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart size={32} className="text-pink-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white
                         bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Connect With Me
            </h2>
          </div>
          
          {/* Global Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{formatTotalFollowers(totalFollowers)}+</div>
              <div className="text-white/60 text-sm">Total Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-white/60 text-sm">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Daily</div>
              <div className="text-white/60 text-sm">Updates</div>
            </div>
          </div>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Stay connected and get exclusive content, behind-the-scenes moments, and real-time updates from my musical journey
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${social.color}
                         rounded-3xl p-8 transition-all duration-500 transform hover:scale-105
                         hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]
                         border border-white/20 hover:border-white/40
                         overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm
                                  flex items-center justify-center group-hover:scale-110
                                  transition-transform duration-300 border border-white/30">
                      <social.icon 
                        size={32} 
                        className="text-white transition-transform duration-300 
                                 group-hover:scale-110" 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{social.label}</h3>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-white/70" />
                        <span className="text-white/90 font-semibold">{social.followers} followers</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trending Indicator */}
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full
                                bg-white/20 backdrop-blur-sm border border-white/30">
                    <TrendingUp size={14} className="text-white" />
                    <span className="text-white text-xs font-medium">Active</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/90 text-lg mb-4 leading-relaxed">
                  {social.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-2 mb-6">
                  <Star size={14} className="text-yellow-400" />
                  <span className="text-white/80 text-sm">{social.stats}</span>
                </div>

                {/* Call to Action */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold group-hover:text-white/90
                                 transition-colors duration-300">
                    Follow for updates
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30
                                flex items-center justify-center transition-all duration-300
                                transform group-hover:translate-x-1">
                    <span className="text-white text-lg">→</span>
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
                        backdrop-blur-sm rounded-3xl p-8 border border-white/20
                        hover:border-white/30 transition-all duration-300
                        shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart size={24} className="text-pink-400" />
              <h3 className="text-2xl font-bold text-white">Join the Community</h3>
            </div>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Be part of my journey and get exclusive access to new music, live sessions, and personal updates across all platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.slice(0, 2).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 bg-gradient-to-r ${social.color}
                             hover:shadow-lg text-white font-semibold 
                             py-3 px-6 rounded-xl transition-all duration-300 
                             transform hover:scale-105 border border-white/20`}
                >
                  <social.icon size={20} />
                  Follow on {social.label}
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