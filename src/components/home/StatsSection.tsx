import React from 'react';
import { TrendingUp, Eye, Music } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-gray-400 text-lg">
            Real achievements, real impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800 hover:border-gray-700 transition-colors duration-200">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-green-400 mb-2">7.8M+</h3>
            <p className="text-gray-400">Spotify Streams</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800 hover:border-gray-700 transition-colors duration-200">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-red-400 mb-2">17.3M+</h3>
            <p className="text-gray-400">YouTube Views</p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800 hover:border-gray-700 transition-colors duration-200">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Music size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-blue-400 mb-2">8</h3>
            <p className="text-gray-400">Released Tracks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;