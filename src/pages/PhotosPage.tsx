import React, { useState } from 'react';
import { Download, Eye, Calendar, Camera, Image as ImageIcon } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';

const PhotosPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      src: "/1.jpg",
      title: "Blue Hour Portrait",
      date: "March 2025",
      description: "Golden hour portrait session showcasing natural beauty and confidence"
    },
    {
      id: 2,
      src: "/WhatsApp Image 2025-03-27 at 9.11.59 PM.jpeg",
      title: "Red Statement",
      date: "March 2025",
      description: "Bold artistic concept with dramatic red styling and creative direction"
    },
    {
      id: 3,
      src: "/WhatsApp Image 2025-03-27 at 9.12.15 PM.jpeg",
      title: "Metallic Dreams",
      date: "March 2025",
      description: "High-fashion glamour shoot with metallic elements and luxury styling"
    },
    {
      id: 4,
      src: "/WhatsApp Image 2025-03-27 at 9.13.39 PM.jpeg",
      title: "Yacht Life",
      date: "March 2025",
      description: "Lifestyle photography capturing summer vibes and luxury moments"
    },
    {
      id: 5,
      src: "/Bruklin.jpg",
      title: "Magic Show Vibes",
      date: "March 2025",
      description: "Relaxed lifestyle moment with a touch of magic and personality"
    },
    {
      id: 6,
      src: "/profilephoto copy.jpg",
      title: "Blue Mood Portrait",
      date: "March 2025",
      description: "Stunning blue-toned portrait with dramatic lighting and artistic composition"
    }
  ];

  return (
    <>
      <SEOHead
        title="Photos - Studio Sessions, Portraits & Lifestyle Moments"
        description="Browse Bruklin's exclusive photo gallery featuring professional portraits, artistic concepts, glamour shots, and lifestyle moments. High-resolution photos showcasing her journey."
        keywords="Bruklin photos, portrait photography, glamour shots, lifestyle photography, artistic photos, high resolution photos, press photos"
        url="/photos"
        type="website"
      />
      <div className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4 sm:mb-6
                         tracking-wider leading-tight">
              Photos
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              A visual journey through my artistic expression - from intimate portraits to bold creative concepts
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-400 mb-1 sm:mb-2">
                {photos.length}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">Exclusive Photos</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">2025</h3>
              <p className="text-white/80 text-xs sm:text-sm">Latest Collection</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">HD</h3>
              <p className="text-white/80 text-xs sm:text-sm">Quality</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-green-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10
                          hover:border-white/20 transition-all duration-300 text-center
                          hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transform hover:scale-105">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">Pro</h3>
              <p className="text-white/80 text-xs sm:text-sm">Photography</p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-black/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-500 transform hover:scale-[1.02]
                         hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] cursor-pointer"
                onClick={() => setSelectedImage(photo.src)}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <LazyImage
                    src={photo.src}
                    alt={`${photo.title} - Bruklin`}
                    className="w-full h-full object-cover transition-transform duration-500
                             group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm
                                  flex items-center justify-center border border-white/30
                                  transform group-hover:scale-110 transition-transform duration-300">
                      <Eye size={24} className="text-white sm:w-7 sm:h-7" />
                    </div>
                  </div>

                  {/* Photo Number Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-pink-600/80 to-purple-600/80 backdrop-blur-sm
                                   text-white text-xs font-semibold px-3 py-1.5 rounded-full
                                   border border-white/20">
                      #{photo.id}
                    </span>
                  </div>
                </div>

                {/* Photo Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3 text-xs sm:text-sm text-white/60">
                    <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                    <time dateTime={photo.date}>{photo.date}</time>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-pink-400
                               transition-colors duration-300 leading-tight">
                    {photo.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 
                          backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10
                          hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <Download size={28} className="text-pink-400 sm:w-8 sm:h-8" />
                <h2 className="text-2xl sm:text-3xl font-bold text-white">High-Resolution Photos</h2>
              </div>
              <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Need high-resolution photos for press, promotional use, or media coverage? Download our complete photo package 
                featuring professional quality images.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600
                           hover:from-pink-700 hover:to-purple-700 text-white font-semibold 
                           py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                >
                  <Download size={20} />
                  Download Photo Package
                </a>
                <div className="text-white/60 text-sm">
                  Professional quality • Multiple formats • Press approved
                </div>
              </div>
            </div>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-5xl max-h-full">
                <img
                  src={selectedImage}
                  alt="Selected photo"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90
                           rounded-full flex items-center justify-center text-white text-2xl
                           transition-all duration-300 backdrop-blur-sm border border-white/20
                           hover:scale-110"
                >
                  ×
                </button>
                
                {/* Download Button in Modal */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <a
                    href={selectedImage}
                    download
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm
                             hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg
                             transition-all duration-300 border border-white/20"
                  >
                    <Download size={16} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotosPage;