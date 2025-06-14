import React, { useEffect, useRef, useState } from 'react';
import { Download, FileText } from 'lucide-react';
import MusicPlayer from '../MusicPlayer';

const EPKSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 animate-gradient-shift"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform
                       ${isVisible ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6
                       bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-glow">
            Electronic Press Kit (EPK)
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Check out Bruklin's electronic press kit—available for download as a digital PDF.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Enhanced EPK Visual */}
          <div className={`bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                        backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10
                        hover:border-white/20 transition-all duration-500 glass-effect
                        hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] hover-lift
                        transform ${isVisible ? 'animate-fade-in-left animate-delay-200' : 'translate-x-8 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <FileText size={60} className="text-blue-400 animate-float" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-4">
              Electronic Press Kit - Bruklin
            </h3>
            <p className="text-white/70 text-center mb-6 text-sm sm:text-base">
              Complete press materials, bio, photos, and music samples
            </p>
            <a
              href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500
                       hover:from-blue-700 hover:to-cyan-600
                       text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl
                       flex items-center justify-center gap-3
                       transition-all duration-300 transform hover:scale-105
                       shadow-lg hover:shadow-xl neon-glow text-sm sm:text-base"
            >
              <Download size={18} />
              Download EPK PDF
            </a>
          </div>

          {/* Enhanced Music Player */}
          <div className={`bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 
                        border border-white/10 hover:border-white/20 
                        transition-all duration-500 glass-effect hover-lift
                        transform ${isVisible ? 'animate-fade-in-right animate-delay-400' : 'translate-x-8 opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
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