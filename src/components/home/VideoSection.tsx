import React, { useState } from 'react';
import { Play, Eye, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const VideoSection: React.FC = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);

  const videos = [
    { 
      title: "Under Your Skin", 
      youtubeUrl: "https://www.youtube.com/watch?v=3fMx4F9cYVw", 
      thumbnail: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg",
      views: "2M",
      duration: "3:00",
      releaseDate: "2025",
      isLatest: true,
      category: "Music Video"
    },
    { 
      title: "Good Girl Bad Dreams", 
      youtubeUrl: "https://www.youtube.com/watch?v=G9hbM-tRnBo", 
      thumbnail: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg",
      views: "1.6M",
      duration: "2:36",
      releaseDate: "2025",
      isLatest: false,
      category: "Music Video"
    },
    { 
      title: "Good Cry (Acoustic)", 
      youtubeUrl: "https://www.youtube.com/watch?v=GV8va3FTxIM", 
      thumbnail: "https://img.youtube.com/vi/GV8va3FTxIM/0.jpg",
      views: "316K",
      duration: "2:32",
      releaseDate: "2025",
      isLatest: false,
      category: "Acoustic"
    },
    { 
      title: "Good Cry", 
      youtubeUrl: "https://www.youtube.com/watch?v=FFwmasP0qRk", 
      thumbnail: "https://img.youtube.com/vi/FFwmasP0qRk/0.jpg",
      views: "1.8M",
      duration: "2:18",
      releaseDate: "2024",
      isLatest: false,
      category: "Music Video"
    },
    { 
      title: "Daydreaming", 
      youtubeUrl: "https://www.youtube.com/watch?v=-Ss_hxlRUM4", 
      thumbnail: "https://img.youtube.com/vi/-Ss_hxlRUM4/0.jpg",
      views: "2.3M",
      duration: "2:33",
      releaseDate: "2024",
      isLatest: false,
      category: "Music Video"
    },
    { 
      title: "No Contact", 
      youtubeUrl: "https://www.youtube.com/watch?v=9TZJqvSS994", 
      thumbnail: "https://img.youtube.com/vi/9TZJqvSS994/0.jpg",
      views: "1.6M",
      duration: "2:51",
      releaseDate: "2024",
      isLatest: false,
      category: "Music Video"
    },
    { 
      title: "Magic Show", 
      youtubeUrl: "https://www.youtube.com/watch?v=FMmNnxsuets", 
      thumbnail: "https://img.youtube.com/vi/FMmNnxsuets/0.jpg",
      views: "4M",
      duration: "2:40",
      releaseDate: "2024",
      isLatest: false,
      category: "Music Video"
    },
    { 
      title: "STAY FRIENDS", 
      youtubeUrl: "https://www.youtube.com/watch?v=AC3r8rQfPX8", 
      thumbnail: "https://img.youtube.com/vi/AC3r8rQfPX8/0.jpg",
      views: "3.2M",
      duration: "2:40",
      releaseDate: "2024",
      isLatest: false,
      category: "Music Video"
    },
  ];

  const totalViews = videos.reduce((sum, video) => {
    const viewCount = parseFloat(video.views.replace(/[KM]/g, ''));
    const multiplier = video.views.includes('M') ? 1000000 : 1000;
    return sum + (viewCount * multiplier);
  }, 0);

  const formatTotalViews = (total: number) => {
    if (total >= 1000000) {
      return `${(total / 1000000).toFixed(1)}M`;
    }
    return `${Math.round(total / 1000)}K`;
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaYoutube size={40} className="text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-white
                         bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              My Video Musics on YouTube
            </h2>
          </div>
          
          {/* Stats Row */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">17.3M+</div>
              <div className="text-white/60 text-sm">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">{videos.length}</div>
              <div className="text-white/60 text-sm">Music Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">16.8K+</div>
              <div className="text-white/60 text-sm">Subscribers</div>
            </div>
          </div>
        </div>

        {/* Featured Video - Always Visible */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={20} className="text-red-400" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">
              Latest Release
            </span>
          </div>
          
          <a
            href={videos[0].youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm 
                     rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 
                     transition-all duration-300 transform hover:scale-[1.02]
                     shadow-[0_0_50px_rgba(239,68,68,0.1)] hover:shadow-[0_0_80px_rgba(239,68,68,0.2)]"
          >
            <div className="md:flex">
              {/* Video Thumbnail */}
              <div className="md:w-2/3 relative aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={videos[0].thumbnail}
                  alt={`${videos[0].title} - Bruklin`}
                  className="w-full h-full object-cover transition-transform duration-300
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                              transition-all duration-300 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-500
                                flex items-center justify-center transition-all duration-300
                                transform group-hover:scale-110 shadow-2xl">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm 
                              px-3 py-1 rounded-full font-medium">
                  {videos[0].duration}
                </div>
                
                {/* Latest Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                                 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Latest
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="md:w-1/3 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-red-400 text-sm font-medium uppercase tracking-wide">
                    {videos[0].category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-400
                             transition-colors duration-300 leading-tight">
                  {videos[0].title}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-6 text-white/70">
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{videos[0].views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{videos[0].releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{videos[0].duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full
                               bg-red-600/20 border border-red-500/30">
                    <FaYoutube size={16} className="text-red-400" />
                    <span className="text-red-400 font-medium text-sm">Watch Now</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Hidden Videos Grid - Only Show When Expanded */}
        {showAllVideos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {videos.slice(1).map((video, index) => (
              <a
                key={index + 1}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} - Bruklin`}
                    className="w-full h-full object-cover transition-transform duration-300
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                                transition-all duration-300 flex items-center justify-center
                                opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500
                                  flex items-center justify-center transition-all duration-300
                                  transform group-hover:scale-110">
                      <Play size={16} className="text-white ml-0.5" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs 
                                px-2 py-1 rounded font-medium">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600/80 text-white text-xs font-medium 
                                   px-2 py-1 rounded uppercase">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400
                               transition-colors duration-300 line-clamp-2 leading-tight">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-white/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye size={12} />
                      <span>{video.views}</span>
                    </div>
                    <span>{video.releaseDate}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAllVideos(!showAllVideos)}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20
                     border border-white/10 hover:border-white/20 text-white
                     flex items-center justify-center gap-3 mx-auto transition-all duration-300
                     hover:bg-gradient-to-r hover:from-red-600/30 hover:to-pink-600/30
                     hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transform hover:scale-[1.02]
                     group"
          >
            <Eye size={18} className="group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">
              {showAllVideos ? 'Show Less' : `View All ${videos.length} Videos`}
            </span>
          </button>
        </div>

        {/* Subscribe CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                        backdrop-blur-sm rounded-3xl p-8 border border-white/10
                        hover:border-white/20 transition-all duration-300
                        shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaYoutube size={32} className="text-red-500" />
              <h3 className="text-2xl font-bold text-white">Subscribe for More</h3>
            </div>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Don't miss out on new music videos, live performances, and exclusive behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.youtube.com/@BruklinOfficial?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 
                         text-white font-semibold py-3 px-6 rounded-xl 
                         transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                <FaYoutube size={20} />
                Subscribe on YouTube
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <Users size={16} />
                <span className="text-sm">Join 16.8K+ subscribers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;