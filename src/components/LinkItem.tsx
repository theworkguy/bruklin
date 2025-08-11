import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface LinkItemProps {
  title: string;
  url: string;
  icon?: React.ReactNode;
  className?: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, url, icon, className }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative w-full backdrop-blur-xl 
                rounded-xl sm:rounded-2xl p-4 sm:p-6 
                flex items-center justify-between
                transition-all duration-500 ease-out
                hover:scale-[1.02] active:scale-[0.98]
                overflow-hidden ${className}`}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="flex items-center flex-1 min-w-0 gap-3 sm:gap-4 relative z-10">
        {icon && (
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 
                        flex items-center justify-center
                        group-hover:bg-white/20 group-hover:scale-110 
                        transition-all duration-500 border border-white/20
                        group-hover:border-white/40">
            <span className="transform transition-transform duration-500 
                           group-hover:scale-110 group-hover:rotate-[5deg]">
              {icon}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="text-white font-semibold text-base sm:text-lg block
                         tracking-wide transition-all duration-300
                         group-hover:tracking-wider group-hover:text-white/90">
            {title}
          </span>
          <div className="flex items-center gap-2 mt-1 opacity-0 sm:group-hover:opacity-100 
                        transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Play size={10} className="text-white/60 sm:w-3 sm:h-3" />
            <span className="text-white/60 text-xs sm:text-sm">Click to listen</span>
          </div>
        </div>
      </div>
      
      {/* Arrow Icon */}
      <div className="flex-shrink-0 ml-3 sm:ml-4 relative z-10">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 
                      flex items-center justify-center
                      group-hover:bg-white/20 transition-all duration-300
                      border border-white/20 group-hover:border-white/40">
          <ExternalLink 
            size={14} 
            className="text-white/70 group-hover:text-white 
                     transition-all duration-300 transform 
                     group-hover:translate-x-1 group-hover:scale-110 sm:w-4.5 sm:h-4.5" 
          />
        </div>
      </div>
      
      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-transparent 
                    group-hover:border-white/20 transition-all duration-500"></div>
      
      {/* Bottom Shine Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-transparent via-white/30 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </a>
  );
};

export default LinkItem;