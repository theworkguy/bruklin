import React from 'react';
import { Calendar, User, ArrowRight, Heart, MessageCircle } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Story Behind 'Under Your Skin'",
      excerpt: "Dive deep into the creative process and emotional journey that led to my latest single. From late-night writing sessions to the final recording...",
      date: "January 20, 2025",
      author: "Bruklin",
      category: "Music",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 234,
      comments: 18,
      featured: true
    },
    {
      title: "Working with Grammy-Winning Producers: My Experience",
      excerpt: "What it's like collaborating with industry legends Oak Felder and Tommy Brown, and how they've shaped my sound...",
      date: "January 15, 2025",
      author: "Bruklin",
      category: "Behind the Scenes",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 189,
      comments: 25,
      featured: true
    },
    {
      title: "17 and Rising: Navigating Fame as a Teenager",
      excerpt: "The challenges and joys of building a music career while still in high school. Here's how I balance it all...",
      date: "January 10, 2025",
      author: "Bruklin",
      category: "Personal",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 312,
      comments: 42,
      featured: false
    },
    {
      title: "My Songwriting Process: From Idea to Hit",
      excerpt: "Take a peek into my creative world and discover how I turn everyday emotions into songs that connect with millions...",
      date: "January 5, 2025",
      author: "Bruklin",
      category: "Music",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 156,
      comments: 31,
      featured: false
    },
    {
      title: "New York Inspiration: How My City Shapes My Music",
      excerpt: "From the bustling streets to quiet moments in Central Park, discover how New York City influences every note I write...",
      date: "December 28, 2024",
      author: "Bruklin",
      category: "Inspiration",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 203,
      comments: 19,
      featured: false
    },
    {
      title: "The Power of Vulnerability in Pop Music",
      excerpt: "Why I believe showing your true self through music creates the deepest connections with fans around the world...",
      date: "December 20, 2024",
      author: "Bruklin",
      category: "Music",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 278,
      comments: 37,
      featured: false
    }
  ];

  const categories = ["All", "Music", "Behind the Scenes", "Personal", "Inspiration"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
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
            My thoughts, stories, and behind-the-scenes moments from my musical journey
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
            <h2 className="text-3xl font-bold text-white mb-8">Featured Posts</h2>
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
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white text-xs font-semibold 
                                     px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
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
                        Read More
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
            {selectedCategory === "All" ? "Latest Posts" : `${selectedCategory} Posts`}
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
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs font-semibold 
                                   px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-white/60">
                    <Calendar size={14} />
                    <span>{post.date}</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest blog posts, music updates, and exclusive behind-the-scenes content.
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
  );
};

export default BlogPage;