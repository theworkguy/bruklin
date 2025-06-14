import React from 'react';
import { Download, FileText } from 'lucide-react';
import MusicPlayer from '../MusicPlayer';

const EPKSection: React.FC = () => {
  const tracks = [
    { title: "Under Your Skin", url: "https://bruklin.us/wp-content/uploads/2025/05/Under-Your-Skin-KS-MIX-mastered.mp3" },
    { title: "Good Girl Bad Dreams", url: "https://od.lk/s/OTdfOTQwODg4Mzdf/Good-Girl-Bad-Dreams.mp3" },
    { title: "Good Cry (Acoustic)", url: "https://od.lk/s/OTdfOTQwODg4MzFf/goodcrya.mp3" },
    { title: "Good Cry", url: "https://od.lk/s/OTdfOTQwODg4MzJf/goodcry.mp3" },
    { title: "Daydreaming", url: "https://od.lk/s/OTdfOTQwODg4MzZf/daydreaming.mp3" },
    { title: "Magic Show", url: "https://od.lk/s/OTdfOTQwODg4MzNf/magicshow.mp3" },
    { title: "No Contact", url: "https://od.lk/s/OTdfOTQwODg4MzRf/nocontact.mp3" },
    { title: "Stay Friends", url: "https://od.lk/s/OTdfOTQwODg4MzVf/stayfriends.mp3" },
  ];

  return (
    <section className="pt-8 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* EPK Visual */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10
                        hover:border-white/20 transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            <div className="flex items-center justify-center mb-4 relative">
              <FileText size={60} className="text-blue-400" />
              {/* Profile Picture Overlay */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full overflow-hidden 
                            border-2 border-blue-400 bg-black">
                <img 
                  src="/profilephoto.jpg" 
                  alt="Bruklin" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Electronic Press Kit
            </h3>
            <a
              href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500
                       hover:from-blue-700 hover:to-cyan-600
                       text-white font-semibold py-3 px-4 rounded-xl
                       flex items-center justify-center gap-2
                       transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl text-sm"
            >
              <Download size={18} />
              Download EPK PDF
            </a>
          </div>

          {/* Music Player */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 
                        border border-white/10 hover:border-white/20 
                        transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
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