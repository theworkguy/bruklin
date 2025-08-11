import React from 'react';
import { Download, FileText } from 'lucide-react';
import LazyImage from '../LazyImage';

const BioSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <LazyImage
              src="/profilephoto.jpg" 
              alt="Bruklin" 
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rising Pop Star
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-8">
              BRUKLIN
            </h3>

            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed mb-6">
                At just 17, Bruklin is dominating the pop scene with a sound that's racked up{' '}
                <span className="text-red-400 font-semibold">17.3 million YouTube views</span> and{' '}
                <span className="text-green-400 font-semibold">7.8 million Spotify streams</span>.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Her music carries a raw, undeniable energy that pulls in fans from all over the world. 
                Teaming up with top producers like{' '}
                <span className="text-blue-400 font-semibold">Oak Felder</span> and{' '}
                <span className="text-cyan-400 font-semibold">Sebastian Cole</span>, 
                Bruklin's got the talent and hustle to stand out.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                She's not just here to play—she's rewriting the rules of what it means to be 
                an authentic artist in today's music industry.
              </p>
            </div>

            {/* Press Kit Download */}
            <a
              href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700
                       text-white font-semibold py-3 px-6 rounded-lg
                       transition-colors duration-200"
            >
              <FileText size={20} />
              Download Press Kit
              <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;