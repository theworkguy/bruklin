import React from 'react';
import { ExternalLink } from 'lucide-react';

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
      className={`group w-full min-h-[60px] backdrop-blur-md 
                border border-white/10 rounded-xl p-4 
                flex items-center justify-between
                transition-all duration-500 ease-out transform 
                hover:scale-[1.02] active:scale-[0.98]
                hover:border-white/20 ${className}`}
    >
      <div className="flex items-center flex-1 min-w-0 gap-4">
        {icon && (
          <span className="text-white transform transition-transform duration-500 
                         group-hover:scale-110 group-hover:rotate-[360deg]">
            {icon}
          </span>
        )}
        <span className="text-white font-medium text-lg truncate 
                      tracking-wide transition-all duration-300
                      group-hover:tracking-wider">
          {title}
        </span>
      </div>
      <ExternalLink 
        size={20} 
        className="text-white opacity-70 group-hover:opacity-100 
                   transition-all duration-300 transform 
                   group-hover:translate-x-1" 
      />
    </a>
  );
};

export default LinkItem;