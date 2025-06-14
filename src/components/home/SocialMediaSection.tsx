import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMediaSection: React.FC = () => {
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

  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/bruklin', label: 'Instagram', color: 'from-purple-600 via-pink-600 to-yellow-500' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@bruklin', label: 'TikTok', color: 'from-gray-900 to-gray-800' },
    { icon: FaFacebook, url: 'https://www.facebook.com/bruklin', label: 'Facebook', color: 'from-blue-600 to-blue-800' },
    { icon: FaTwitter, url: 'https://twitter.com/bruklin', label: 'Twitter', color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced Background Image with Parallax */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 parallax"
           style={{ backgroundImage: "url('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-pink-900/50 animate-gradient-shift"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 transform
                       ${isVisible ? 'animate-fade-in-up' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6
                       bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-glow">
            SOCIAL MEDIA
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${social.color}
                         rounded-2xl p-6 sm:p-8 aspect-square
                         flex flex-col items-center justify-center
                         transition-all duration-500 transform hover:scale-105
                         hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
                         border border-white/20 hover:border-white/40
                         glass-effect hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon 
                size={window.innerWidth < 640 ? 32 : 48} 
                className="text-white mb-2 sm:mb-4 transition-all duration-300 
                         group-hover:scale-110 animate-float" 
                style={{ animationDelay: `${index * 0.2}s` }}
              />
              <span className="text-white font-semibold text-sm sm:text-lg text-center">
                {social.label}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                            rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;