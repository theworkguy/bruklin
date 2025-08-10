import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Latest Song', path: '/' },
  { name: 'My Journey', path: '/my-journey' },
  { name: 'Discography', path: '/discography' },
  { name: 'Videos', path: '/videos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Press Kit.PDF', url: 'https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf' },
  { name: 'Photos', path: '/photos' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  };

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
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] bg-gradient-to-r from-black/90 via-black/80 to-black/90 
                     backdrop-blur-xl z-50 flex items-center px-6 
                     shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-b border-white/10">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Enhanced Logo */}
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <Sparkles size={24} className="text-cyan-400 animate-pulse group-hover:animate-spin transition-all duration-500" />
            <div className="absolute inset-0 bg-cyan-400 blur-md opacity-30 animate-pulse"></div>
          </div>
          <span className="text-white font-extrabold text-2xl tracking-tight
                         bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent
                         group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300
                         transition-all duration-300">
            Bruklin
          </span>
        </Link>

        {/* Enhanced Menu Button */}
        <button
          ref={buttonRef}
          className="w-14 h-14 flex items-center justify-center text-white rounded-2xl 
                   bg-white/10 hover:bg-white/20 active:bg-white/30 
                   transition-all duration-300 z-50 
                   border border-white/20 hover:border-white/40
                   hover:scale-110 active:scale-95
                   backdrop-blur-xl shadow-lg hover:shadow-xl"
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
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Enhanced Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Enhanced Menu */}
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-[70px] left-0 right-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95 
                       backdrop-blur-xl z-50 max-h-[calc(100vh-70px)] overflow-y-auto
                       border-b border-white/10 shadow-2xl"
            >
              <nav className="flex flex-col items-start pt-8 pb-12 px-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="w-full"
                  >
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="group text-white text-xl font-semibold tracking-wide 
                                 hover:text-cyan-400 transition-all duration-300
                                 w-full py-4 px-6 block rounded-2xl
                                 hover:bg-white/10 hover:backdrop-blur-xl
                                 border border-transparent hover:border-white/20
                                 hover:shadow-lg transform hover:scale-[1.02]"
                      >
                        <span className="flex items-center gap-3">
                          {link.name}
                          <span className="text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            ↗
                          </span>
                        </span>
                      </a>
                    ) : (
                      <Link
                        to={link.path!}
                        onClick={handleNavClick}
                        className={`group text-white text-xl font-semibold tracking-wide 
                                   hover:text-cyan-400 transition-all duration-300
                                   w-full py-4 px-6 block rounded-2xl
                                   hover:bg-white/10 hover:backdrop-blur-xl
                                   border border-transparent hover:border-white/20
                                   hover:shadow-lg transform hover:scale-[1.02] ${
                                     (location.pathname === link.path || 
                                      (link.path === '/' && location.pathname === '/')) 
                                       ? 'text-cyan-400 bg-white/10 border-cyan-400/30' : ''
                                   }`}
                      >
                        <span className="flex items-center gap-3">
                          {link.name}
                          {(location.pathname === link.path || 
                            (link.path === '/' && location.pathname === '/')) && (
                            <span className="text-sm">●</span>
                          )}
                        </span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              
              {/* Menu Footer */}
              <div className="px-8 pb-8 border-t border-white/10 pt-6">
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-3">Follow the journey</p>
                  <div className="flex justify-center gap-4">
                    <a href="https://instagram.com/bruklin" target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-pink-400 transition-colors duration-300 text-sm">
                      Instagram
                    </a>
                    <a href="https://tiktok.com/@bruklin" target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                      TikTok
                    </a>
                    <a href="https://youtube.com/@BruklinOfficial" target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-red-400 transition-colors duration-300 text-sm">
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;