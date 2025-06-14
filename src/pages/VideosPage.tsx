import React, { useState } from 'react';
import { Play, Eye, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const VideosPage: React.FC = () => {
  const videos = [
    {
      title: "Under Your Skin",
      category: "music-video",
      year: "2025",
      views: "2M",
      duration: "3:00",
      description: "A haunting pop ballad that explores the depths of emotional connection and vulnerability.",
      thumbnail: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=3fMx4F9cYVw",
      isLatest: true
    },
    {
      title: "Good Girl Bad Dreams",
      category: "music-video",
      year: "2025",
      views: "1.6M",
      duration: "2:36",
      description: "An empowering anthem about breaking free from expectations and embracing your true self.",
      thumbnail: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=G9hbM-tRnBo",
      isLatest: false
    },
    {
      title: "Good Cry (Acoustic)",
      category: "acoustic",
      year: "2025",
      views: "316K",
      duration: "2:32",
      description: "A stripped-down, emotional version of the original that showcases raw vocal talent.",
      thumbnail: "https://img.youtube.com/vi/GV8va3FTxIM/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=GV8va3FTxIM",
      isLatest: false
    },
    {
      title: "Good Cry",
      category: "music-video",
      year: "2024",
      views: "1.8M",
      duration: "2:18",
      description: "A cathartic pop track about healing and finding strength through emotional release.",
      thumbnail: "https://img.youtube.com/vi/FFwmasP0qRk/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=FFwmasP0qRk",
      isLatest: false
    },
    {
      title: "Daydreaming",
      category: "music-video",
      year: "2024",
      views: "2.3M",
      duration: "2:33",
      description: "A dreamy, ethereal track that captures the essence of youthful imagination and hope.",
      thumbnail: "https://img.youtube.com/vi/-Ss_hxlRUM4/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=-Ss_hxlRUM4",
      isLatest: false
    },
    {
      title: "No Contact",
      category: "music-video",
      year: "2024",
      views: "1.6M",
      duration: "2:51",
      description: "A bold statement about setting boundaries and prioritizing self-worth in relationships.",
      thumbnail: "https://img.youtube.com/vi/9TZJqvSS994/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=9TZJqvSS994",
      isLatest: false
    },
    {
      title: "Magic Show",
      category: "music-video",
      year: "2024",
      views: "4M",
      duration: "2:40",
      description: "An enchanting track that blends pop sensibilities with mystical storytelling elements.",
      thumbnail: "https://img.youtube.com/vi/FMmNnxsuets/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=FMmNnxsuets",
      isLatest: false
    },
    {
      title: "STAY FRIENDS",
      category: "music-video",
      year: "2024",
      views: "3.2M",
      duration: "2:40",
      description: "A heartfelt exploration of complex relationships and the boundaries of friendship.",
      thumbnail: "https://img.youtube.com/vi/AC3r8rQfPX8/0.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=AC3r8rQfPX8",
      isLatest: false
    }
  ];

  return (
    <>
      <SEOHead
        title="Videos - Music Videos, Live Performances & Behind the Scenes"
        description="Watch Bruklin's latest music videos, live performances, and behind-the-scenes content. 17.3M+ YouTube views featuring hits like 'Under Your Skin' and 'Good Girl Bad Dreams'."
        keywords="Bruklin videos, music videos, Under Your Skin video, Good Girl Bad Dreams video, live performances, acoustic sessions, YouTube"
        url="/videos"
        type="website"
      />
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

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transform hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-2">17.3M+</h3>
              <p className="text-white/80 text-sm">Total Views</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">16.8K+</h3>
              <p className="text-white/80 text-sm">Subscribers</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{videos.length}</h3>
              <p className="text-white/80 text-sm">Videos</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 
                          backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                          hover:border-white/20 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transform hover:scale-105">
              <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">4M+</h3>
              <p className="text-white/80 text-sm">Top Video</p>
            </div>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={24} className="text-red-500" />
              <span className="text-red-400 font-semibold text-lg uppercase tracking-wide">
                Latest Release
              </span>
            </div>
            
            <a
              href={videos[0].youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm 
                       rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/30 
                       transition-all duration-500 transform hover:scale-[1.02]
                       shadow-[0_0_50px_rgba(239,68,68,0.1)] hover:shadow-[0_0_80px_rgba(239,68,68,0.3)]"
            >
              <div className="lg:flex">
                {/* Video Thumbnail */}
                <div className="lg:w-2/3 relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={videos[0].thumbnail}
                    alt={`${videos[0].title} - Bruklin`}
                    className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                                group-hover:from-black/40 transition-all duration-500 
                                flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-red-600 group-hover:bg-red-500
                                  flex items-center justify-center transition-all duration-500
                                  transform group-hover:scale-125 shadow-2xl
                                  border-4 border-white/20 group-hover:border-white/40">
                      <Play size={36} className="text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Enhanced Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white 
                                   text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wide
                                   shadow-lg backdrop-blur-sm border border-white/20">
                      🔥 Latest
                    </span>
                    <span className="bg-black/80 backdrop-blur-sm text-white 
                                   text-sm font-medium px-3 py-1 rounded-full border border-white/20">
                      Music Video
                    </span>
                  </div>
                  
                  {/* Duration & Views */}
                  <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                    <div className="bg-black/80 backdrop-blur-sm text-white text-sm 
                                  px-3 py-1 rounded-full font-medium border border-white/20">
                      {videos[0].duration}
                    </div>
                    <div className="bg-red-600/80 backdrop-blur-sm text-white text-sm 
                                  px-3 py-1 rounded-full font-medium border border-white/20">
                      {videos[0].views} views
                    </div>
                  </div>
                </div>

                {/* Enhanced Video Info */}
                <div className="lg:w-1/3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-red-400 text-sm font-semibold uppercase tracking-wider
                                   bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
                      Music Video
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-red-400
                               transition-colors duration-300 leading-tight">
                    {videos[0].title}
                  </h3>
                  
                  <p className="text-white/80 mb-8 leading-relaxed text-lg">
                    {videos[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 mb-8 text-white/70">
                    <div className="flex items-center gap-2">
                      <Eye size={18} className="text-red-400" />
                      <span className="font-medium">{videos[0].views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-red-400" />
                      <span className="font-medium">{videos[0].year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-red-400" />
                      <span className="font-medium">{videos[0].duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full
                                 bg-gradient-to-r from-red-600/30 to-pink-600/30 
                                 border border-red-500/30 group-hover:border-red-400/50
                                 transition-all duration-300">
                      <FaYoutube size={20} className="text-red-400" />
                      <span className="text-red-400 font-semibold">Watch Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {videos.slice(1).map((video, index) => (
              <a
                key={index + 1}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                         border border-white/10 hover:border-red-500/30 
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                aria-label={`Watch ${video.title} on YouTube`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} by Bruklin`}
                    className="w-full h-full object-cover transition-transform duration-300
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                                transition-all duration-300 flex items-center justify-center
                                opacity-0 group-hover:opacity-100">
                    <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500
                                  flex items-center justify-center transition-all duration-300
                                  transform group-hover:scale-110 shadow-lg">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm 
                                px-2 py-1 rounded font-medium">
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600/80 text-white text-xs font-medium 
                                   px-2 py-1 rounded uppercase">
                      {video.category === 'music-video' ? 'Music Video' : 
                       video.category === 'acoustic' ? 'Acoustic' : 
                       video.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-white/60">
                    <Calendar size={14} />
                    <span>{video.year}</span>
                    <span>•</span>
                    <Eye size={14} />
                    <span>{video.views} views</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400
                               transition-colors duration-300 line-clamp-2 leading-tight">
                    {video.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-3xl p-10 border border-white/10
                          hover:border-red-500/30 transition-all duration-300
                          shadow-[0_0_50px_rgba(239,68,68,0.1)]">
              <div className="flex items-center justify-center gap-4 mb-6">
                <FaYoutube size={40} className="text-red-500" />
                <h2 className="text-4xl font-bold text-white">Subscribe for More</h2>
              </div>
              <p className="text-white/80 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Don't miss out on new music videos, live performances, and exclusive behind-the-scenes content. 
                Join the community of music lovers!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://www.youtube.com/@BruklinOfficial?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700
                           hover:from-red-700 hover:to-red-800 text-white font-bold 
                           py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl text-lg"
                >
                  <FaYoutube size={24} />
                  Subscribe on YouTube
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <Users size={20} />
                  <span className="text-lg">Join 16.8K+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideosPage;