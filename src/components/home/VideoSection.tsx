import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videos = [
    { title: "Under Your Skin", youtubeUrl: "https://www.youtube.com/watch?v=1a2b3c4d5e6f", thumbnail: "https://img.youtube.com/vi/1a2b3c4d5e6f/maxresdefault.jpg" },
    { title: "Good Girl Bad Dreams", youtubeUrl: "https://www.youtube.com/watch?v=2b3c4d5e6f7g", thumbnail: "https://img.youtube.com/vi/2b3c4d5e6f7g/maxresdefault.jpg" },
    { title: "Good Cry (Acoustic)", youtubeUrl: "https://www.youtube.com/watch?v=3c4d5e6f7g8h", thumbnail: "https://img.youtube.com/vi/3c4d5e6f7g8h/maxresdefault.jpg" },
    { title: "Good Cry", youtubeUrl: "https://www.youtube.com/watch?v=4d5e6f7g8h9i", thumbnail: "https://img.youtube.com/vi/4d5e6f7g8h9i/maxresdefault.jpg" },
    { title: "Daydreaming", youtubeUrl: "https://www.youtube.com/watch?v=5e6f7g8h9i0j", thumbnail: "https://img.youtube.com/vi/5e6f7g8h9i0j/maxresdefault.jpg" },
    { title: "No Contact", youtubeUrl: "https://www.youtube.com/watch?v=6f7g8h9i0j1a", thumbnail: "https://img.youtube.com/vi/6f7g8h9i0j1a/maxresdefault.jpg" },
    { title: "Magic Show", youtubeUrl: "https://www.youtube.com/watch?v=7g8h9i0j1a2b", thumbnail: "https://img.youtube.com/vi/7g8h9i0j1a2b/maxresdefault.jpg" },
    { title: "Stay Friends", youtubeUrl: "https://www.youtube.com/watch?v=8h9i0j1a2b3c", thumbnail: "https://img.youtube.com/vi/8h9i0j1a2b3c/maxresdefault.jpg" },
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
          {videos.map((video, index) => (
            <a
              key={index}
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
                  src={`https://images.pexels.com/photos/${2000000 + index}/pexels-photo-${2000000 + index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=225&fit=crop`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;