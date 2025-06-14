import React from 'react';
import { FaInstagram, FaTiktok, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, url: 'https://www.instagram.com/bruklin', label: 'Instagram', color: 'from-purple-600 via-pink-600 to-yellow-500' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@bruklin', label: 'TikTok', color: 'from-gray-900 to-gray-800' },
    { icon: FaFacebook, url: 'https://www.facebook.com/bruklin', label: 'Facebook', color: 'from-blue-600 to-blue-800' },
    { icon: FaTwitter, url: 'https://twitter.com/bruklin', label: 'Twitter', color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
           style={{ backgroundImage: "url('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <div className="absolute inset-0 bg-blue-900/50"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                       bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            SOCIAL MEDIA
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${social.color}
                         rounded-2xl p-8 aspect-square
                         flex flex-col items-center justify-center
                         transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]
                         border border-white/20`}
            >
              <social.icon 
                size={48} 
                className="text-white mb-4 transition-transform duration-300 
                         group-hover:scale-110" 
              />
              <span className="text-white font-semibold text-lg text-center">
                {social.label}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent 
                            rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;