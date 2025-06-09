import React from 'react';
import { ExternalLink, Calendar, Download, Quote } from 'lucide-react';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      title: "17-Year-Old Pop Sensation Bruklin Breaks 14 Million YouTube Views",
      date: "January 15, 2025",
      outlet: "Music Industry Weekly",
      excerpt: "Rising star Bruklin continues to dominate the pop scene with her latest single 'Under Your Skin' reaching unprecedented streaming numbers...",
      link: "#",
      featured: true
    },
    {
      title: "Bruklin Teams Up with Grammy-Winning Producers for New Album",
      date: "December 8, 2024",
      outlet: "Billboard",
      excerpt: "The young artist's collaboration with Oak Felder and Tommy Brown promises to deliver her most ambitious project yet...",
      link: "#",
      featured: true
    },
    {
      title: "New York's Rising Pop Star Makes Waves with 'Good Girl Bad Dreams'",
      date: "November 22, 2024",
      outlet: "Rolling Stone",
      excerpt: "Bruklin's empowering anthem resonates with Gen Z listeners worldwide, accumulating millions of streams in just weeks...",
      link: "#",
      featured: false
    },
    {
      title: "Teen Pop Artist Bruklin Signs Major Label Deal",
      date: "October 10, 2024",
      outlet: "Variety",
      excerpt: "The 17-year-old singer-songwriter's meteoric rise catches attention of major record labels...",
      link: "#",
      featured: false
    }
  ];

  const mediaKit = [
    {
      title: "High-Resolution Photos",
      description: "Professional photos for print and digital use",
      format: "ZIP (JPG)",
      size: "25 MB",
      link: "#"
    },
    {
      title: "Electronic Press Kit",
      description: "Complete press materials, bio, and music samples",
      format: "PDF",
      size: "8 MB",
      link: "https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
    },
    {
      title: "Artist Biography",
      description: "Official artist biography and fact sheet",
      format: "PDF",
      size: "2 MB",
      link: "#"
    },
    {
      title: "Logo Package",
      description: "Official logos in various formats",
      format: "ZIP (PNG, SVG)",
      size: "5 MB",
      link: "#"
    }
  ];

  const quotes = [
    {
      text: "Bruklin represents the future of pop music - authentic, powerful, and undeniably talented.",
      author: "Sarah Johnson",
      outlet: "Music Today",
      date: "January 2025"
    },
    {
      text: "At just 17, she's already mastered the art of emotional storytelling through music.",
      author: "Michael Chen",
      outlet: "Pop Culture Weekly",
      date: "December 2024"
    },
    {
      text: "Her voice carries a maturity that belies her age, with a sound that's both contemporary and timeless.",
      author: "Emma Rodriguez",
      outlet: "Entertainment Tonight",
      date: "November 2024"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6
                       tracking-wider">
            Press
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Latest news, press releases, and media coverage about Bruklin's musical journey
          </p>
        </div>

        {/* Featured Press */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Coverage</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {pressReleases.filter(item => item.featured).map((item, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                         backdrop-blur-sm rounded-2xl p-8 border border-white/10
                         hover:border-white/20 transition-all duration-300
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <div className="flex items-center gap-2 mb-4 text-sm text-white/60">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="text-blue-400 font-medium">{item.outlet}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300
                           font-medium transition-colors duration-300"
                >
                  Read Full Article
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* All Press Coverage */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">All Coverage</h2>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10">
            {pressReleases.map((item, index) => (
              <article
                key={index}
                className={`p-6 ${index !== pressReleases.length - 1 ? 'border-b border-white/10' : ''} 
                          hover:bg-white/5 transition-all duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 text-sm text-white/60">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="text-blue-400 font-medium">{item.outlet}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400
                                 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300
                             font-medium transition-colors duration-300 whitespace-nowrap"
                  >
                    Read More
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Media Kit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                         hover:border-white/20 transition-all duration-300 text-center
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <Download size={32} className="text-blue-400 mx-auto mb-4" />
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="text-white/60 text-xs mb-4">
                  {item.format} • {item.size}
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                           text-white font-medium py-2 px-4 rounded-lg
                           transition-all duration-300 transform hover:scale-105"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Press Quotes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">What They're Saying</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                         backdrop-blur-sm rounded-2xl p-6 border border-white/10
                         hover:border-white/20 transition-all duration-300"
              >
                <Quote size={32} className="text-purple-400 mb-4" />
                
                <blockquote className="text-white/90 text-lg mb-4 leading-relaxed italic">
                  "{quote.text}"
                </blockquote>
                
                <div className="text-white/70">
                  <div className="font-semibold">{quote.author}</div>
                  <div className="text-sm">{quote.outlet} • {quote.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Press */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                        backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Press Inquiries</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              For interviews, press releases, or media requests, please contact our press team.
            </p>
            <a
              href="mailto:press@bruklin.us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 
                       text-white font-semibold py-3 px-6 rounded-xl 
                       transition-all duration-300 transform hover:scale-105"
            >
              Contact Press Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;