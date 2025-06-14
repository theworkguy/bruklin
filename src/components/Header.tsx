import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'My Journey', path: '/my-journey' },
  { name: 'Discography', path: '/discography' },
  { name: 'Videos', path: '/videos' },
  { name: 'Press', path: '/press' },
  { name: 'Blog', path: '/blog' },
  { name: 'Press Kit.PDF', url: 'https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf' },
  { name: 'Photos', path: '/photos' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full h-[60px] z-50 flex items-center px-4 
                      transition-all duration-500 backdrop-blur-md
                      ${scrolled 
                        ? 'bg-black/90 shadow-lg border-b border-white/10' 
                        : 'bg-gradient-to-r from-black/60 via-black/40 to-black/60'
                      }`}>
      <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
        <Link 
          to="/" 
          className={`text-white font-extrabold text-xl sm:text-2xl tracking-tight transition-all duration-300
                     hover:scale-105 ${scrolled ? 'animate-pulse-glow' : ''}`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 animate-gradient-shift">
            Bruklin
          </span>
        </Link>

        <button
          ref={buttonRef}
          className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white rounded-full 
                   hover:bg-white/10 active:bg-white/20 transition-all duration-300 z-50 ml-auto
                   touch-manipulation hover:scale-110 ${isMenuOpen ? 'bg-white/10' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'menu'}
              initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 360, opacity: 1, scale: 1 }}
              exit={{ rotate: 0, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="fixed top-[60px] left-0 right-0 bg-black/95 backdrop-blur-md z-50 
                       max-h-[calc(100vh-60px)] overflow-y-auto border-b border-white/10"
            >
              <nav className="flex flex-col items-start pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-6 space-y-2 sm:space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-base sm:text-lg font-semibold tracking-wide 
                                 hover:text-blue-400 transition-all duration-300
                                 w-full py-2 sm:py-3 px-4 block rounded-lg hover:bg-white/5
                                 transform hover:translate-x-2"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path!}
                        className={`text-white text-base sm:text-lg font-semibold tracking-wide 
                                   hover:text-blue-400 transition-all duration-300
                                   w-full py-2 sm:py-3 px-4 block rounded-lg hover:bg-white/5
                                   transform hover:translate-x-2 ${
                                     location.pathname === link.path ? 'text-blue-400 bg-white/5' : ''
                                   }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;