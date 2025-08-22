import React from 'react';
import SEOHead from '../components/SEOHead';
import { Play, Award, Users, TrendingUp, Calendar, MapPin, Music, Star, Heart, ExternalLink } from 'lucide-react';
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok, FaApple } from 'react-icons/fa';
import LazyImage from '../components/LazyImage';

const HomePage: React.FC = () => {
  const achievements = [
    { number: '9.1M+', label: 'Spotify Streams', icon: FaSpotify, color: 'text-green-400' },
    { number: '22.3M+', label: 'YouTube Views', icon: FaYoutube, color: 'text-red-400' },
    { number: '105K+', label: 'Social Followers', icon: FaInstagram, color: 'text-pink-400' },
    { number: '10', label: 'Released Tracks', icon: Music, color: 'text-purple-400' }
  ];

  const featuredTracks = [
    {
      title: "Cry A Little Louder",
      status: "Latest Release",
      streams: "New Release",
      year: "2025",
      description: "A fierce pop breakup anthem that turns heartbreak into empowerment",
      spotifyUrl: "https://open.spotify.com/album/6VueSIGMnzOCJtWg3a2IWO",
      youtubeUrl: "http://youtube.com/watch?v=oYuoRJA4sPs",
      cover: "https://img.youtube.com/vi/oYuoRJA4sPs/0.jpg"
    },
    {
      title: "Under Your Skin",
      status: "Hit Single",
      streams: "466K",
      year: "2025",
      description: "A haunting pop ballad exploring emotional vulnerability",
      spotifyUrl: "https://open.spotify.com/album/1E0QjiMao6MMzZnExxv5NP",
      youtubeUrl: "https://www.youtube.com/watch?v=3fMx4F9cYVw",
      cover: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg"
    },
    {
      title: "Good Girl Bad Dreams",
      status: "Fan Favorite",
      streams: "736K",
      year: "2025",
      description: "An empowering anthem about breaking free from expectations",
      spotifyUrl: "https://open.spotify.com/album/48R9mXpiOmqdLzdqTOOXM6",
      youtubeUrl: "https://www.youtube.com/watch?v=G9hbM-tRnBo",
      cover: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg"
    }
  ];

  const pressHighlights = [
    {
      quote: "Bruklin's voice carries a raw, undeniable energy that pulls in fans from all over the world.",
      source: "Music Industry Review"
    },
    {
      quote: "At just 17, she's rewriting the rules of pop music with authentic storytelling.",
      source: "Pop Culture Weekly"
    },
    {
      quote: "A rising star with the talent and hustle to stand out in today's competitive landscape.",
      source: "Entertainment Today"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bruklin - Official Website | The Voice of a Generation"
        description="Official website of Bruklin, 17-year-old pop sensation from New York. 9.1M+ Spotify streams, 22.3M+ YouTube views. Listen to 'Cry A Little Louder' and explore her complete musical journey."
        keywords="Bruklin official website, pop music, New York artist, Cry A Little Louder, Under Your Skin, Good Girl Bad Dreams, teen pop star, rising artist"
        url="/home"
        type="website"
        musicData={{
          albumName: "Cry A Little Louder",
          artist: "Bruklin",
          releaseDate: "2025",
          genre: "Pop",
          duration: "PT3M"
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="/profilephoto.jpg"
              alt="Bruklin"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            {/* Artist Name */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-6
                         tracking-wider animate-fade-in
                         [text-shadow:_0_0_50px_rgba(59,130,246,0.5)]">
              BRUKLIN
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-4 leading-relaxed
                         max-w-4xl mx-auto animate-fade-in-delay-1
                         font-light tracking-wide
                         [text-shadow:_0_0_20px_rgba(0,0,0,0.8)]">
              The Voice of a Generation
            </p>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed
                         max-w-3xl mx-auto animate-fade-in-delay-2">
              17-year-old pop sensation from New York turning heartbreak into empowerment, 
              one song at a time
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delay-3">
              <a
                href="https://open.spotify.com/album/6VueSIGMnzOCJtWg3a2IWO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700
                         hover:from-green-700 hover:to-green-800 text-white font-semibold 
                         py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                <Play size={20} />
                Listen to "Cry A Little Louder"
              </a>
              <a
                href="/discography"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm
                         hover:bg-white/20 text-white font-semibold border border-white/20
                         hover:border-white/40 py-4 px-8 rounded-xl transition-all duration-300
                         transform hover:scale-105"
              >
                <Music size={20} />
                Explore Discography
              </a>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-delay-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10
                           hover:border-white/20 transition-all duration-300 group
                           hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transform hover:scale-105"
                >
                  <achievement.icon size={24} className={`${achievement.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-white/80 text-sm font-medium">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Music Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                           bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Music
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the songs that are defining my sound and connecting with fans worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTracks.map((track, index) => (
                <div
                  key={index}
                  className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                           border border-white/10 hover:border-white/20 
                           transition-all duration-300 transform hover:scale-[1.02]
                           hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <LazyImage
                      src={track.cover}
                      alt={`${track.title} by Bruklin`}
                      className="w-full h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play Button */}
                    <a
                      href={track.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                               transition-all duration-300"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm
                                    flex items-center justify-center transition-all duration-300
                                    transform hover:scale-110 border border-white/30">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </a>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                                     text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {track.status}
                      </span>
                    </div>
                    
                    {/* Streams */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm text-white text-xs 
                                    px-3 py-1 rounded-full font-medium border border-white/20 flex items-center gap-1">
                        <TrendingUp size={10} />
                        {track.streams}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-white/60">
                      <Calendar size={14} />
                      <span>{track.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400
                                 transition-colors duration-300">
                      {track.title}
                    </h3>

                    <p className="text-white/70 mb-4 leading-relaxed text-sm">
                      {track.description}
                    </p>

                    <div className="flex gap-2">
                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg
                                 bg-green-600/20 border border-green-500/30 hover:bg-green-600/30
                                 transition-all duration-300 flex-1 justify-center"
                      >
                        <FaSpotify size={14} className="text-green-400" />
                        <span className="text-green-400 text-sm font-medium">Spotify</span>
                      </a>
                      <a
                        href={track.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg
                                 bg-red-600/20 border border-red-500/30 hover:bg-red-600/30
                                 transition-all duration-300 flex-1 justify-center"
                      >
                        <FaYoutube size={14} className="text-red-400" />
                        <span className="text-red-400 text-sm font-medium">YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/discography"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600
                         hover:from-purple-700 hover:to-pink-700 text-white font-semibold 
                         py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                <Music size={20} />
                View Complete Discography
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <LazyImage
              src="/profilephoto.jpg"
              alt="Bruklin"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 
                                 border border-blue-400/30 rounded-full text-blue-400 font-medium
                                 backdrop-blur-sm">
                    About Bruklin
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Rising Pop Star from{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    New York
                  </span>
                </h2>
                
                <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                  <p>
                    At just 17, Bruklin is dominating the pop scene with a sound that's racked up{' '}
                    <span className="text-red-400 font-semibold">22.3 million YouTube views</span> and{' '}
                    <span className="text-green-400 font-semibold">9.1 million Spotify streams</span>.
                  </p>
                  
                  <p>
                    Her music carries a raw, undeniable energy that pulls in fans from all over the world. 
                    Teaming up with top producers like{' '}
                    <span className="text-blue-400 font-semibold">Oak Felder</span> and{' '}
                    <span className="text-cyan-400 font-semibold">Sebastian Cole</span>, 
                    Bruklin's got the talent and hustle to stand out.
                  </p>
                  
                  <p>
                    She's not just here to play—she's rewriting the rules of pop music with authentic 
                    storytelling and fierce independence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="/my-journey"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/30 to-cyan-500/30
                             hover:from-blue-600/50 hover:to-cyan-500/50
                             border border-blue-400/30 hover:border-blue-400/50
                             text-white font-semibold py-3 px-6 rounded-xl
                             transition-all duration-300 transform hover:scale-105
                             backdrop-blur-sm"
                  >
                    <Star size={20} />
                    My Journey
                  </a>
                  <a
                    href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm
                             hover:bg-white/20 text-white font-semibold border border-white/20
                             hover:border-white/40 py-3 px-6 rounded-xl transition-all duration-300
                             transform hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    Press Kit
                  </a>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10
                                  hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin size={20} className="text-blue-400" />
                        <span className="text-white font-semibold">Location</span>
                      </div>
                      <p className="text-white/80">New York, NY</p>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10
                                  hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Users size={20} className="text-purple-400" />
                        <span className="text-white font-semibold">Age</span>
                      </div>
                      <p className="text-white/80">17 years old</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10
                                  hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Music size={20} className="text-green-400" />
                        <span className="text-white font-semibold">Genre</span>
                      </div>
                      <p className="text-white/80">Pop</p>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10
                                  hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Award size={20} className="text-yellow-400" />
                        <span className="text-white font-semibold">Tracks</span>
                      </div>
                      <p className="text-white/80">10 Released</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Press & Recognition Section */}
        <section className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                           bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Press & Recognition
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                What the industry is saying about Bruklin's rise to stardom
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pressHighlights.map((press, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10
                           hover:border-white/20 transition-all duration-300 group
                           hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] transform hover:scale-[1.02]"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500
                                  flex items-center justify-center mb-4 group-hover:scale-110
                                  transition-transform duration-300">
                      <span className="text-black text-2xl font-bold">"</span>
                    </div>
                  </div>
                  
                  <blockquote className="text-white/90 text-lg leading-relaxed mb-6 italic">
                    {press.quote}
                  </blockquote>
                  
                  <cite className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                    — {press.source}
                  </cite>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://bruklin.us/wp-content/uploads/2025/05/Electronic-Press-Kit-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600
                         hover:from-yellow-700 hover:to-orange-700 text-white font-semibold 
                         py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                <ExternalLink size={20} />
                Download Full Press Kit
              </a>
            </div>
          </div>
        </section>

        {/* Social Media & Connect Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6
                           bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Stay Connected
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Follow my journey and get exclusive content across all platforms
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <a
                href="https://www.instagram.com/bruklin"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500
                         rounded-2xl p-8 transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]
                         border border-white/20 hover:border-white/40 text-center"
              >
                <FaInstagram size={40} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">Instagram</h3>
                <p className="text-white/90 text-sm mb-2">51.7K followers</p>
                <p className="text-white/70 text-xs">Daily updates & stories</p>
              </a>

              <a
                href="https://www.tiktok.com/@bruklin"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-900 to-gray-800
                         rounded-2xl p-8 transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(75,85,99,0.4)]
                         border border-white/20 hover:border-white/40 text-center"
              >
                <FaTiktok size={40} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">TikTok</h3>
                <p className="text-white/90 text-sm mb-2">17.6K followers</p>
                <p className="text-white/70 text-xs">Viral content & trends</p>
              </a>

              <a
                href="https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-600 to-green-700
                         rounded-2xl p-8 transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]
                         border border-white/20 hover:border-white/40 text-center"
              >
                <FaSpotify size={40} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">Spotify</h3>
                <p className="text-white/90 text-sm mb-2">9.1M+ streams</p>
                <p className="text-white/70 text-xs">Latest releases</p>
              </a>

              <a
                href="https://www.youtube.com/@BruklinOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600 to-red-700
                         rounded-2xl p-8 transition-all duration-300 transform hover:scale-105
                         hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]
                         border border-white/20 hover:border-white/40 text-center"
              >
                <FaYoutube size={40} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg mb-2">YouTube</h3>
                <p className="text-white/90 text-sm mb-2">22.3M+ views</p>
                <p className="text-white/70 text-xs">Music videos & more</p>
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                            backdrop-blur-sm rounded-2xl p-8 border border-white/10
                            hover:border-white/20 transition-all duration-300">
                <Heart size={32} className="text-pink-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Join the Community</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  Be part of my journey and get exclusive access to new music, live sessions, 
                  and personal updates across all platforms.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600
                           hover:from-purple-700 hover:to-pink-700 text-white font-semibold 
                           py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105
                           shadow-lg hover:shadow-xl"
                >
                  <Heart size={20} />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;