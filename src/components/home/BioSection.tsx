import React, { useEffect, useRef, useState } from 'react';

const BioSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-black/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-shift"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 transition-all duration-1000 transform
                        ${isVisible ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}>
            Rising{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
              POP STAR
            </span>
          </h2>
          <h3 className={`text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-6 sm:mb-8
                       tracking-wider text-glow animate-gradient-shift transition-all duration-1000 delay-200 transform
                       ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'translate-y-8 opacity-0'}`}>
            BRUKLIN
          </h3>
        </div>

        <div className={`bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                      backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 
                      border border-white/10 hover:border-white/20 
                      transition-all duration-500 glass-effect hover-lift
                      hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]
                      transform ${isVisible ? 'animate-scale-in animate-delay-400' : 'scale-95 opacity-0'}`}>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed text-center
                       font-light tracking-wide">
            At just 17, Bruklin is dominating the pop scene with a sound that's racked up{' '}
            <span className="text-red-400 font-semibold animate-pulse-glow">14 million YouTube views</span> and{' '}
            <span className="text-green-400 font-semibold animate-pulse-glow">6 million Spotify streams</span>... 
            Her music carries a raw, undeniable energy that pulls in fans from all over the world. 
            Teaming up with top producers like{' '}
            <span className="text-blue-400 font-semibold">Oak Felder</span> and{' '}
            <span className="text-cyan-400 font-semibold">Tommy Brown</span>, 
            Bruklin's got the talent and hustle to stand out—she's not just here to play, 
            she's rewriting the rules.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 transition-all duration-1000 delay-600 transform
                       ${isVisible ? 'animate-fade-in-up animate-delay-600' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
            <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2 animate-pulse-glow">14M+</div>
            <div className="text-white/80 text-sm sm:text-base">YouTube Views</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2 animate-pulse-glow">6M+</div>
            <div className="text-white/80 text-sm sm:text-base">Spotify Streams</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover-lift">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2 animate-pulse-glow">17</div>
            <div className="text-white/80 text-sm sm:text-base">Years Old</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;