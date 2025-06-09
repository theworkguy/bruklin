import React from 'react';
import { Download, FileText } from 'lucide-react';
import MusicPlayer from '../MusicPlayer';

const EPKSection: React.FC = () => {
  const tracks = [
    { title: "Under Your Skin", url: "https://bruklin.us/wp-content/uploads/2025/05/Under-Your-Skin-KS-MIX-mastered.mp3" },
    { title: "Good Girl Bad Dreams", url: "https://bruklin.us/music/good-girl-bad-dreams.mp3" },
    { title: "Good Cry (Acoustic)", url: "https://bruklin.us/music/good-cry-acoustic.mp3" },
    { title: "Good Cry", url: "https://bruklin.us/music/good-cry.mp3" },
    { title: "Daydreaming", url: "https://bruklin.us/music/daydreaming.mp3" },
    { title: "No Contact", url: "https://bruklin.us/music/no-contact.mp3" },
    { title: "Stay Friends", url: "https://bruklin.us/music/stay-friends.mp3" },
    { title: "Magic Show", url: "https://bruklin.us/music/magic-show.mp3" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                       bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Electronic Press Kit (EPK)
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Check out Bruklin's electronic press kit—available for download as a digital PDF.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* EPK Visual */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                        backdrop-blur-sm rounded-2xl p-8 border border-white/10
                        hover:border-white/20 transition-all duration-300
                        hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]">
            <div className="flex items-center justify-center mb-6">
              <FileText size={80} className="text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Electronic Press Kit - Bruklin
            </h3>
            <p className="text-white/70 text-center mb-6">
              Complete press materials, bio, photos, and music samples
            </p>
            <a
              href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500
                       hover:from-blue-700 hover:to-cyan-600
                       text-white font-semibold py-4 px-6 rounded-xl
                       flex items-center justify-center gap-3
                       transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download EPK PDF
            </a>
          </div>

          {/* Music Player */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 
                        border border-white/10 hover:border-white/20 
                        transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Listen to the Music
            </h3>
            <MusicPlayer tracks={tracks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EPKSection;