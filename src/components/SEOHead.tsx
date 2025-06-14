import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  musicData?: {
    albumName?: string;
    artist?: string;
    releaseDate?: string;
    genre?: string;
    duration?: string;
  };
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "Bruklin, pop music, New York artist, new music 2025, Under Your Skin, Good Girl Bad Dreams",
  image = "https://i.scdn.co/image/ab6761610000e5eb0c3f94a644b9a3a4557ce384",
  url = "https://bruklin.us",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Bruklin",
  musicData
}) => {
  const fullTitle = title.includes('Bruklin') ? title : `${title} - Bruklin`;
  const canonicalUrl = url.startsWith('http') ? url : `https://bruklin.us${url}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bruklin",
    "alternateName": "Bruklin Official",
    "description": "17-year-old pop sensation from New York with 7.8M+ Spotify streams and 17.3M+ YouTube views",
    "url": "https://bruklin.us",
    "image": image,
    "sameAs": [
      "https://open.spotify.com/artist/4fjAtF6VmMxQHxKI5C3HPO",
      "https://www.youtube.com/@BruklinOfficial",
      "https://www.instagram.com/bruklin",
      "https://music.apple.com/us/artist/bruklin/1756535936",
      "https://www.tiktok.com/@bruklin",
      "https://www.facebook.com/profile.php?id=61565927709906",
      "https://twitter.com/bruklin"
    ],
    "jobTitle": "Singer-Songwriter",
    "genre": "Pop",
    "birthPlace": "New York, NY",
    "nationality": "American",
    "knowsAbout": ["Pop Music", "Songwriting", "Vocal Performance"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Singer-Songwriter",
      "occupationLocation": "New York, NY"
    }
  };

  const musicStructuredData = musicData ? {
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    "name": musicData.albumName,
    "byArtist": {
      "@type": "Person",
      "name": "Bruklin"
    },
    "datePublished": musicData.releaseDate,
    "genre": musicData.genre || "Pop",
    "duration": musicData.duration,
    "inLanguage": "en-US"
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Bruklin Official" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@bruklin" />
      <meta name="twitter:creator" content="@bruklin" />

      {/* Music-specific Meta Tags */}
      {musicData && (
        <>
          <meta property="music:musician" content="https://bruklin.us" />
          <meta property="music:album" content={musicData.albumName} />
          <meta property="music:release_date" content={musicData.releaseDate} />
          <meta property="music:duration" content={musicData.duration} />
        </>
      )}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Performance hints */}
      <link rel="preload" href="/profilephoto.jpg" as="image" fetchPriority="high" />
      <link rel="prefetch" href="https://img.youtube.com" />
      <link rel="prefetch" href="https://open.spotify.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {musicStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(musicStructuredData)}
        </script>
      )}

    </Helmet>
  );
};

export default SEOHead;