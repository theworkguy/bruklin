import React from 'react';
import { Calendar, User, ArrowRight, Heart, MessageCircle, Music, Play } from 'lucide-react';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';

const BlogPage: React.FC = () => {
  const songArticles = [
    {
      title: "The Story Behind 'Under Your Skin'",
      excerpt: "Dive deep into the creative process and emotional journey that led to my latest single. From late-night writing sessions to the final recording, discover how vulnerability became my greatest strength...",
      date: "January 20, 2025",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "5 min read",
      image: "https://img.youtube.com/vi/3fMx4F9cYVw/0.jpg",
      likes: 234,
      comments: 18,
      featured: true,
      songData: {
        title: "Under Your Skin",
        duration: "3:00",
        streams: "186K",
        spotifyUrl: "https://open.spotify.com/track/1a2b3c4d5e6f7g8h9i0j",
        youtubeUrl: "https://www.youtube.com/watch?v=3fMx4F9cYVw"
      }
    },
    {
      title: "Breaking Free: The Making of 'Good Girl Bad Dreams'",
      excerpt: "An empowering anthem about shattering expectations and embracing authenticity. Learn how this song became a rallying cry for self-acceptance and the courage to be different...",
      date: "January 15, 2025",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "6 min read",
      image: "https://img.youtube.com/vi/G9hbM-tRnBo/0.jpg",
      likes: 189,
      comments: 25,
      featured: true,
      songData: {
        title: "Good Girl Bad Dreams",
        duration: "2:36",
        streams: "434K",
        spotifyUrl: "https://open.spotify.com/track/2b3c4d5e6f7g8h9i0j1a",
        youtubeUrl: "https://www.youtube.com/watch?v=G9hbM-tRnBo"
      }
    },
    {
      title: "Stripped Down: The Acoustic Version of 'Good Cry'",
      excerpt: "Sometimes the most powerful moments come from simplicity. Discover why I decided to create an acoustic version and how it revealed new layers of emotion in the song...",
      date: "January 10, 2025",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "4 min read",
      image: "https://img.youtube.com/vi/GV8va3FTxIM/0.jpg",
      likes: 156,
      comments: 31,
      featured: false,
      songData: {
        title: "Good Cry (Acoustic)",
        duration: "2:32",
        streams: "48K",
        spotifyUrl: "https://open.spotify.com/track/3c4d5e6f7g8h9i0j1a2b",
        youtubeUrl: "https://www.youtube.com/watch?v=GV8va3FTxIM"
      }
    },
    {
      title: "Finding Strength in Vulnerability: 'Good Cry' Origins",
      excerpt: "The cathartic journey of creating a song about healing and emotional release. How sometimes the best thing you can do is let yourself feel everything...",
      date: "December 28, 2024",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "5 min read",
      image: "https://img.youtube.com/vi/FFwmasP0qRk/0.jpg",
      likes: 312,
      comments: 42,
      featured: false,
      songData: {
        title: "Good Cry",
        duration: "2:18",
        streams: "1.0M",
        spotifyUrl: "https://open.spotify.com/track/4d5e6f7g8h9i0j1a2b3c",
        youtubeUrl: "https://www.youtube.com/watch?v=FFwmasP0qRk"
      }
    },
    {
      title: "Lost in Wonder: The Dreamy World of 'Daydreaming'",
      excerpt: "Step into the ethereal soundscape that captures youthful imagination and hope. How a simple afternoon daydream turned into one of my most beloved tracks...",
      date: "December 20, 2024",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "5 min read",
      image: "https://img.youtube.com/vi/-Ss_hxlRUM4/0.jpg",
      likes: 278,
      comments: 37,
      featured: false,
      songData: {
        title: "Daydreaming",
        duration: "2:33",
        streams: "1.5M",
        spotifyUrl: "https://open.spotify.com/track/5e6f7g8h9i0j1a2b3c4d",
        youtubeUrl: "https://www.youtube.com/watch?v=-Ss_hxlRUM4"
      }
    },
    {
      title: "Setting Boundaries: The Bold Message of 'No Contact'",
      excerpt: "A powerful statement about self-worth and the courage to walk away. Learn how this song became an anthem for anyone learning to prioritize their own well-being...",
      date: "December 15, 2024",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "6 min read",
      image: "https://img.youtube.com/vi/9TZJqvSS994/0.jpg",
      likes: 203,
      comments: 19,
      featured: false,
      songData: {
        title: "No Contact",
        duration: "2:51",
        streams: "878K",
        spotifyUrl: "https://open.spotify.com/track/6f7g8h9i0j1a2b3c4d5e",
        youtubeUrl: "https://www.youtube.com/watch?v=9TZJqvSS994"
      }
    },
    {
      title: "Creating Magic: The Enchanting Story of 'Magic Show'",
      excerpt: "Blending pop sensibilities with mystical storytelling elements. Discover how this track became a journey into wonder and the magic we create in our everyday lives...",
      date: "December 10, 2024",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "5 min read",
      image: "https://img.youtube.com/vi/FMmNnxsuets/0.jpg",
      likes: 245,
      comments: 28,
      featured: false,
      songData: {
        title: "Magic Show",
        duration: "2:40",
        streams: "1.8M",
        spotifyUrl: "https://open.spotify.com/track/8h9i0j1a2b3c4d5e6f7g",
        youtubeUrl: "https://www.youtube.com/watch?v=FMmNnxsuets"
      }
    },
    {
      title: "Complex Hearts: The Emotional Depth of 'STAY FRIENDS'",
      excerpt: "Exploring the complicated boundaries of friendship and love. How this heartfelt track captures the bittersweet reality of relationships that exist in the in-between...",
      date: "December 5, 2024",
      author: "Bruklin",
      category: "Song Stories",
      readTime: "6 min read",
      image: "https://img.youtube.com/vi/AC3r8rQfPX8/0.jpg",
      likes: 289,
      comments: 34,
      featured: false,
      songData: {
        title: "STAY FRIENDS",
        duration: "2:40",
        streams: "1.9M",
        spotifyUrl: "https://open.spotify.com/track/7g8h9i0j1a2b3c4d5e6f",
        youtubeUrl: "https://www.youtube.com/watch?v=AC3r8rQfPX8"
      }
    }
  ];

  const categories = ["All", "Song Stories"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? songArticles 
    : songArticles.filter(post => post.category === selectedCategory);

  const featuredPosts = songArticles.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead
        title="Blog - Behind the Music, Stories & Inspiration"
        description="Read Bruklin's personal blog featuring behind-the-scenes stories, songwriting insights, and inspiration from her musical journey. Get exclusive access to her creative process."
        keywords="Bruklin blog, music stories, songwriting process, behind the scenes, music inspiration, teen artist blog, pop music insights"
        url="/blog"
        type="website"
      />
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6
                         tracking-wider">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              The stories behind every song - my thoughts, inspiration, and creative journey
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                           ${selectedCategory === category
                             ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                             : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                           }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          {selectedCategory === "All" && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Stories</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <article
                    key={index}
                    className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                             border border-white/10 hover:border-white/20 
                             transition-all duration-300 transform hover:scale-[1.02]
                             hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300
                                 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-purple-600 text-white text-xs font-semibold 
                                       px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-medium 
                                       px-3 py-1 rounded-full border border-white/20">
                          Featured
                        </span>
                      </div>
                      
                      {/* Song Info Overlay */}
                      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm 
                                    text-white text-xs px-3 py-2 rounded-lg border border-white/20">
                        <div className="flex items-center gap-2">
                          <Music size={12} />
                          <span>{post.songData.title}</span>
                          <span>•</span>
                          <span>{post.songData.streams}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <time dateTime={post.date}>{post.date}</time>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400
                                   transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Song Links */}
                      <div className="flex items-center gap-3 mb-4">
                        <a
                          href={post.songData.spotifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full
                                   bg-green-600/20 border border-green-500/30 hover:bg-green-600/30
                                   transition-all duration-300"
                          aria-label={`Listen to ${post.songData.title} on Spotify`}
                        >
                          <FaSpotify size={14} className="text-green-400" />
                          <span className="text-green-400 text-sm font-medium">Listen</span>
                        </a>
                        <a
                          href={post.songData.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full
                                   bg-red-600/20 border border-red-500/30 hover:bg-red-600/30
                                   transition-all duration-300"
                          aria-label={`Watch ${post.songData.title} on YouTube`}
                        >
                          <FaYoutube size={14} className="text-red-400" />
                          <span className="text-red-400 text-sm font-medium">Watch</span>
                        </a>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-white/60">
                          <div className="flex items-center gap-1">
                            <Heart size={16} />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle size={16} />
                            <span>{post.comments}</span>
                          </div>
                        </div>

                        <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300
                                         font-medium transition-colors duration-300">
                          Read Story
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              {selectedCategory === "All" ? "All Song Stories" : `${selectedCategory} Posts`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
                <article
                  key={index}
                  className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden
                           border border-white/10 hover:border-white/20 
                           transition-all duration-300 transform hover:scale-[1.02]
                           hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white text-xs font-semibold 
                                     px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Song Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm 
                                  text-white text-xs px-2 py-1 rounded font-medium">
                      {post.songData.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-sm text-white/60">
                      <Calendar size={14} />
                      <time dateTime={post.date}>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400
                                 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-white/70 mb-4 leading-relaxed line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    {/* Song Info */}
                    <div className="flex items-center gap-2 mb-4 text-white/60 text-sm">
                      <Music size={14} className="text-purple-400" />
                      <span className="text-purple-400 font-medium">{post.songData.title}</span>
                      <span>•</span>
                      <span>{post.songData.streams} streams</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-white/60 text-sm">
                        <div className="flex items-center gap-1">
                          <Heart size={14} />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          <span>{post.comments}</span>
                        </div>
                      </div>

                      <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300
                                       font-medium transition-colors duration-300 text-sm">
                        Read
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                          backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Music size={32} className="text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Stay Connected</h2>
              </div>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Get notified when I share new song stories, behind-the-scenes content, and exclusive insights into my creative process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-white placeholder-white/50 focus:outline-none focus:border-purple-400
                           transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600
                                 hover:from-purple-700 hover:to-pink-700
                                 text-white font-semibold py-3 px-6 rounded-xl
                                 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;