import React, { useState } from 'react';
import { Play, Eye, Calendar } from 'lucide-react';

const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videos = [
    {
      title: "Under Your Skin",
      category: "music-video",
      year: "2024",
      views: "2.1M",
      duration: "3:00",
      description: "Official music video for the haunting ballad that explores emotional vulnerability.",
      thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeUrl: "https://www.youtube.com/watch?v=1a2b3c4d5e6f"
    },
    {
      title: "Good Girl Bad Dreams",
      category: "music-video",
      year: "2024",
      views: "3.8M",
      duration: "2:36",
      description: "Empowering visual story about breaking free from societal expectations.",
      thumbnail: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeUrl: "https://www.youtube.com/watch?v=2b3c4d5e6f7g"
    },
    {
      title: "Good Cry (Acoustic Session)",
      category: "acoustic",
      year: "2024",
      views: "1.5M",
      duration: "2:32",
      description: "Intimate acoustic performance showcasing raw vocal talent.",
      thumbnail: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeUrl: "https://www.youtube.com/watch?v=3c4d5e6f7g8h"
    },
    {
      title: "Behind the Scenes: Studio Life",
      category: "behind-scenes",
      year: "2024",
      views: "890K",
      duration: "8:45",
      description: "Get an exclusive look into my creative process and studio sessions.",
      thumbnail: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeUrl: "https://www.youtube.com/watch?v=4d5e6f7g8h9i"
    },
    {
      title: "Daydreaming (Live Performance)",
      category: "live",
      year: "2023",
      views: "2.7M",
      duration: "2:33",
      description: "Live performance from my first major venue show in New York.",
      thumbnail: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeUrl: "https://www.youtube.com/watch?v=5e6f7g8h9i0j"
    },
    {
      title: "No Contact (Lyric Video)",
      category: "lyric-video",
      year: "2023",
      views: "1.2M",
      duration: "2:08",
      description: "Animated lyric video with stunning visual storytelling.",
      thumbnail: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600",
      youtubeUrl: "https://www.youtube.com/watch?v=6f7g8h9i0j1a"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'music-video', name: 'Music Videos' },
    { id: 'acoustic', name: 'Acoustic' },
    { id: 'live', name: 'Live Performances' },
    { id: 'behind-scenes', name: 'Behind the Scenes' },
    { id: 'lyric-video', name: 'Lyric Videos' }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 mb-6
                       tracking-wider">
            Videos
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Watch my latest music videos, live performances, and behind-the-scenes content
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-red-400 mb-2">14M+</h3>
            <p className="text-white/80">Total Views</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-purple-400 mb-2">250K+</h3>
            <p className="text-white/80">Subscribers</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">15+</h3>
            <p className="text-white/80">Videos</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                         ${selectedCategory === category.id
                           ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                           : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                         }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <a
              key={index}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                       border border-white/10 hover:border-white/20 
                       transition-all duration-300 transform hover:scale-105
                       hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                              transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500
                                flex items-center justify-center transition-all duration-300
                                transform group-hover:scale-110">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                
                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm 
                              px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-sm text-white/60">
                  <Calendar size={14} />
                  <span>{video.year}</span>
                  <span>•</span>
                  <Eye size={14} />
                  <span>{video.views} views</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400
                             transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                        backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe for More</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Don't miss out on new music videos, live performances, and exclusive behind-the-scenes content.
            </p>
            <a
              href="https://www.youtube.com/@bruklin?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                       text-white font-semibold py-3 px-6 rounded-xl 
                       transition-all duration-300 transform hover:scale-105"
            >
              <Play size={20} />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;