import React from 'react';
import { Download, FileText } from 'lucide-react';

const BioSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/profilephoto.jpg" 
          alt="Bruklin" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Rising{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              POP STAR
            </span>
          </h2>
          <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-8
                       tracking-wider">
            BRUKLIN
          </h3>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                      backdrop-blur-sm rounded-2xl p-8 md:p-12 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-300
                      hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center
                       font-light tracking-wide mb-8">
            At just 17, Bruklin is dominating the pop scene with a sound that's racked up{' '}
            <span className="text-red-400 font-semibold">14 million YouTube views</span> and{' '}
            <span className="text-green-400 font-semibold">6 million Spotify streams</span>... 
            Her music carries a raw, undeniable energy that pulls in fans from all over the world. 
            Teaming up with top producers like{' '}
            <span className="text-blue-400 font-semibold">Oak Felder</span> and{' '}
            <span className="text-cyan-400 font-semibold">Tommy Brown</span>, 
            Bruklin's got the talent and hustle to stand out—she's not just here to play, 
            she's rewriting the rules.
          </p>

          {/* Integrated EPK Download Button */}
          <div className="flex justify-center">
            <a
              href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/30 to-cyan-500/30
                       hover:from-blue-600/50 hover:to-cyan-500/50
                       border border-blue-400/30 hover:border-blue-400/50
                       text-white font-semibold py-3 px-6 rounded-xl
                       transition-all duration-300 transform hover:scale-105
                       backdrop-blur-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
                       group"
            >
              <FileText size={20} className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <span className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                Download EPK
              </span>
              <Download size={16} className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;