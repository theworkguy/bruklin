import React from 'react';
import { Star, Play, TrendingUp, Award } from 'lucide-react';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import LazyImage from '../LazyImage';
import MusicVisualizer from '../MusicVisualizer';

const FeaturedSection: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "Grammy-Winning Producers",
      description: "Collaborating with Oak Felder & Tommy Brown",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Viral Success",
      description: "17.3M+ YouTube views across all videos",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Rising Star",
      description: "Featured in major music publications",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover what makes Bruklin the voice of a generation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Featured Track */}
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm 
                        rounded-3xl p-8 border border-white/10 hover:border-white/20
                        transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            
            <div className="flex items-center gap-3 mb-6">
              <Star size={24} className="text-yellow-400" />
              <span className="text-yellow-400 font-semibold uppercase tracking-wide">
                Featured Track
              </span>
            </div>

            <div className="aspect-video relative overflow-hidden rounded-2xl mb-6">
              <LazyImage
                src="https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg"
                alt="Under Your Skin - Bruklin"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-500
                              flex items-center justify-center transition-all duration-300
                              transform hover:scale-110 shadow-2xl cursor-pointer">
                  <Play size={32} className="text-white ml-1" />
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">Under Your Skin</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              A haunting pop ballad that explores emotional vulnerability and connection. 
              This track showcases Bruklin's incredible vocal range and songwriting maturity.
            </p>

            {/* Music Visualizer */}
            <div className="mb-6">
              <MusicVisualizer isPlaying={true} className="w-full opacity-60" />
            </div>

            <div className="flex gap-4">
              <a
                href="https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                         bg-green-600 hover:bg-green-700 transition-all duration-300"
              >
                <FaSpotify size={16} className="text-white" />
                <span className="text-white font-medium">Listen</span>
              </a>
              <a
                href="https://www.youtube.com/watch?v=3fMx4F9cYVw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                         bg-red-600 hover:bg-red-700 transition-all duration-300"
              >
                <FaYoutube size={16} className="text-white" />
                <span className="text-white font-medium">Watch</span>
              </a>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm 
                         rounded-2xl p-6 border border-white/10 hover:border-white/20
                         transition-all duration-300 transform hover:scale-[1.02]
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color}
                                 flex items-center justify-center shadow-lg`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-white/70">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                        backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Experience the Journey
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              From bedroom songwriter to rising pop star - discover the story behind the music
            </p>
            <a
              href="/my-journey"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600
                       hover:from-purple-700 hover:to-pink-700 text-white font-semibold 
                       py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <Star size={20} />
              Explore My Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;