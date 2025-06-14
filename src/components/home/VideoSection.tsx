import React, { useState } from 'react';
import { Play, Eye } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [showAllVideos, setShowAllVideos] = useState(false);

  const videos = [
    { title: "Under Your Skin", youtubeUrl: "https://www.youtube.com/watch?v=3fMx4F9cYVw", thumbnail: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg" },
    { title: "Good Girl Bad Dreams", youtubeUrl: "https://www.youtube.com/watch?v=G9hbM-tRnBo", thumbnail: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg" },
    { title: "Good Cry (Acoustic)", youtubeUrl: "https://www.youtube.com/watch?v=GV8va3FTxIM", thumbnail: "https://img.youtube.com/vi/GV8va3FTxIM/0.jpg" },
    { title: "Good Cry", youtubeUrl: "https://www.youtube.com/watch?v=FFwmasP0qRk", thumbnail: "https://img.youtube.com/vi/FFwmasP0qRk/0.jpg" },
    { title: "Daydreaming", youtubeUrl: "https://www.youtube.com/watch?v=-Ss_hxlRUM4", thumbnail: "https://img.youtube.com/vi/-Ss_hxlRUM4/0.jpg" },
    { title: "No Contact", youtubeUrl: "https://www.youtube.com/watch?v=9TZJqvSS994", thumbnail: "https://img.youtube.com/vi/9TZJqvSS994/0.jpg" },
    { title: "Magic Show", youtubeUrl: "https://www.youtube.com/watch?v=FMmNnxsuets", thumbnail: "https://img.youtube.com/vi/FMmNnxsuets/0.jpg" },
    { title: "Stay Friends", youtubeUrl: "https://www.youtube.com/watch?v=AC3r8rQfPX8", thumbnail: "https://img.youtube.com/vi/AC3r8rQfPX8/0.jpg" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                       bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            My Video Musics on YouTube
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Latest Video - Always Visible */}
          <a
            href={videos[0].youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
                     border border-white/10 hover:border-white/20 
                     transition-all duration-300 transform hover:scale-105
                     hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
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
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg group-hover:text-red-400
                           transition-colors duration-300 line-clamp-2">
                {videos[0].title}
              </h3>
            </div>
          </a>

          {/* Hidden Videos - Show When Expanded */}
          {showAllVideos && (
            videos.slice(1).map((video, index) => (
              <a
                key={index + 1}
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
              >
                <div className="aspect-video relative overflow-hidden">
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
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg group-hover:text-red-400
                               transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </a>
            ))
          )}
        </div>

        {/* View All Button */}
        {videos.length > 1 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllVideos(!showAllVideos)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600/20 to-pink-600/20
                       border border-white/10 hover:border-white/20 text-white
                       flex items-center justify-center gap-3 mx-auto transition-all duration-300
                       hover:bg-gradient-to-r hover:from-red-600/30 hover:to-pink-600/30
                       hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transform hover:scale-[1.02]"
            >
              <Eye size={18} />
              <span className="font-semibold">
                {showAllVideos ? 'Show Less' : `View All ${videos.length} Videos`}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;