import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                        hover:border-white/20 transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transform hover:scale-105">
            <h3 className="text-3xl font-bold text-green-400 mb-2">7.8M+</h3>
            <p className="text-white/80">Spotify Streams</p>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                        hover:border-white/20 transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transform hover:scale-105">
            <h3 className="text-3xl font-bold text-red-400 mb-2">17.3M+</h3>
            <p className="text-white/80">YouTube Views</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                        backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center
                        hover:border-white/20 transition-all duration-300
                        hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-105">
            <h3 className="text-3xl font-bold text-purple-400 mb-2">8</h3>
            <p className="text-white/80">Released Tracks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;