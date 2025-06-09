import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { Check } from 'lucide-react';

const TracklistSection: React.FC = () => {
  const tracks = [
    { title: "Under Your Skin", duration: "3:00", spotifyUrl: "https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j" },
    { title: "Good Girl Bad Dreams", duration: "2:36", spotifyUrl: "https://open.spotify.com/track/2b3c4d5e6f7g8h9i0j1a" },
    { title: "Good Cry (Acoustic)", duration: "2:32", spotifyUrl: "https://open.spotify.com/track/3c4d5e6f7g8h9i0j1a2b" },
    { title: "Good Cry", duration: "2:18", spotifyUrl: "https://open.spotify.com/track/4d5e6f7g8h9i0j1a2b3c" },
    { title: "Daydreaming", duration: "2:33", spotifyUrl: "https://open.spotify.com/track/5e6f7g8h9i0j1a2b3c4d" },
    { title: "No Contact", duration: "2:08", spotifyUrl: "https://open.spotify.com/track/6f7g8h9i0j1a2b3c4d5e" },
    { title: "Stay Friends", duration: "2:40", spotifyUrl: "https://open.spotify.com/track/7g8h9i0j1a2b3c4d5e6f" },
    { title: "Magic Show", duration: "2:40", spotifyUrl: "https://open.spotify.com/track/8h9i0j1a2b3c4d5e6f7g" },
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                       bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Tracklist
          </h2>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-300">
          <div className="space-y-4">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl
                         bg-white/5 hover:bg-white/10 transition-all duration-300
                         border border-white/5 hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{track.title}</h3>
                    <p className="text-white/60 text-sm">{track.duration}</p>
                  </div>
                </div>

                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-green-600 hover:bg-green-700 transition-all duration-300
                           transform hover:scale-105"
                >
                  <FaSpotify size={16} className="text-white" />
                  <span className="text-white font-medium text-sm">Listen</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracklistSection;