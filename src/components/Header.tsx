import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/home' },
  { name: 'Latest Song', path: '/' },
  { name: 'My Journey', path: '/my-journey' },
  { name: 'Discography', path: '/discography' },
  { name: 'Videos', path: '/videos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Press Kit', url: 'https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf' },
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
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
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          onClick={handleLogoClick}
          className="text-white font-bold text-xl tracking-tight hover:text-gray-300 transition-colors duration-200"
        >
          BRUKLIN
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.url ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path!}
                onClick={handleNavClick}
                className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium ${
                  location.pathname === link.path ? 'text-white' : ''
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          type="button"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            ref={menuRef}
            className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md z-50 lg:hidden border-b border-white/10"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                link.url ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                    className="px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path!}
                    onClick={handleNavClick}
                    className={`px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 ${
                      location.pathname === link.path ? 'text-white bg-white/5' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;