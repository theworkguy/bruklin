import React, { useState } from 'react';
import { Download, Eye, Calendar } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const PhotosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "studio",
      title: "Studio Session",
      date: "January 2025",
      description: "Recording 'Under Your Skin' at Abbey Road Studios"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "performance",
      title: "Live Performance",
      date: "December 2024",
      description: "First major venue performance in New York"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "portrait",
      title: "Portrait Session",
      date: "November 2024",
      description: "Professional photoshoot for album artwork"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "behind-scenes",
      title: "Behind the Scenes",
      date: "October 2024",
      description: "Candid moments during music video production"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "studio",
      title: "Writing Session",
      date: "September 2024",
      description: "Collaborating with producers on new material"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "performance",
      title: "Acoustic Set",
      date: "August 2024",
      description: "Intimate acoustic performance for fans"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "portrait",
      title: "Editorial Shoot",
      date: "July 2024",
      description: "Fashion editorial for music magazine"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "behind-scenes",
      title: "Music Video Set",
      date: "June 2024",
      description: "On set filming 'Good Girl Bad Dreams' music video"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "studio",
      title: "Vocal Recording",
      date: "May 2024",
      description: "Laying down vocals for upcoming single"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "portrait",
      title: "Promo Photos",
      date: "April 2024",
      description: "Official promotional photography session"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "performance",
      title: "Festival Performance",
      date: "March 2024",
      description: "Debut festival performance at Summer Sounds"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "behind-scenes",
      title: "Rehearsal Time",
      date: "February 2024",
      description: "Preparing for upcoming live performances"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'studio', name: 'Studio' },
    { id: 'performance', name: 'Live Performance' },
    { id: 'portrait', name: 'Portraits' },
    { id: 'behind-scenes', name: 'Behind the Scenes' }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Photos - Studio Sessions, Live Performances & Behind the Scenes"
        description="Browse Bruklin's photo gallery featuring studio sessions, live performances, portraits, and behind-the-scenes moments. High-resolution photos available for download."
        keywords="Bruklin photos, studio sessions, live performance photos, portrait photography, behind the scenes, high resolution photos, press photos"
        url="/photos"
        type="website"
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-6
                         tracking-wider">
              Photos
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A visual journey through my music career - from studio sessions to live performances
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                           ${selectedCategory === category.id
                             ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
                             : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                           }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                         border border-white/10 hover:border-white/20 
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer"
                onClick={() => setSelectedImage(photo.src)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={`${photo.title} - Bruklin`}
                    className="w-full h-full object-cover transition-transform duration-300
                             group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 
                                transition-all duration-300 flex items-center justify-center
                                opacity-0 group-hover:opacity-100">
                    <Eye size={32} className="text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-sm text-white/60">
                    <Calendar size={14} />
                    <time dateTime={photo.date}>{photo.date}</time>
                  </div>
                  
                  <h3 className="text-white font-semibold mb-1 group-hover:text-pink-400
                               transition-colors duration-300">
                    {photo.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 
                          backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">High-Resolution Photos</h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Need high-resolution photos for press or promotional use? Download our complete photo package.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600
                         hover:from-pink-700 hover:to-purple-700 text-white font-semibold 
                         py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Download Photo Package
              </a>
            </div>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage}
                  alt="Selected photo"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70
                           rounded-full flex items-center justify-center text-white
                           transition-all duration-300"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PhotosPage;