import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    // Close menu if open
    setIsMenuOpen(false);
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Force page refresh if already on latest song page (home)
    if (location.pathname === '/') {
      window.location.reload();
    }
  };

  const handleNavClick = () => {
    // Close menu
    setIsMenuOpen(false);
    // Scroll to top immediately
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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-md z-50 flex items-center px-4 shadow-lg">
      <div className="w-full max-w-7xl mx-auto flex justify-center items-center">
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="text-white font-extrabold text-2xl tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            Bruklin
          </span>
        </Link>

        <button
          ref={buttonRef}
          className="w-12 h-12 flex items-center justify-center text-white rounded-full 
                   hover:bg-white/10 active:bg-white/20 transition-all duration-200 z-50 ml-auto
                   touch-manipulation"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'menu'}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ rotate: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="fixed inset-0 bg-black/80 z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-[60px] left-0 right-0 bg-black z-50 max-h-[calc(100vh-60px)] overflow-y-auto"
            >
              <nav className="flex flex-col items-start pt-8 pb-12 px-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="w-full"
                  >
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="text-white text-lg font-semibold tracking-wide 
                                 hover:text-blue-400 transition-colors duration-300
                                 w-full py-2 block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path!}
                        onClick={handleNavClick}
                        className={`text-white text-lg font-semibold tracking-wide 
                                   hover:text-blue-400 transition-colors duration-300
                                   w-full py-2 block ${
                                     (location.pathname === link.path || 
                                      (link.path === '/' && location.pathname === '/')) ? 'text-blue-400' : ''
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