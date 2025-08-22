import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  path: string;
  name: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Define a mapping for URL segments to display names
  // This is crucial for user-friendly breadcrumbs
  const breadcrumbNameMap: { [key: string]: string } = {
    'home': 'Home',
    'my-journey': 'My Journey',
    'discography': 'Discography',
    'videos': 'Videos',
    'blog': 'Blog',
    'photos': 'Photos',
    'contact': 'Contact',
    'under-your-skin': 'Under Your Skin',
    'good-girl-bad-dreams': 'Good Girl Bad Dreams',
    'cry-a-little-louder': 'Cry A Little Louder',
    // Add more mappings for other articles or dynamic segments as needed
  };

  const breadcrumbs: BreadcrumbItem[] = [];

  // Add the root/home breadcrumb
  if (location.pathname === '/') {
    // If on the root, no breadcrumbs needed beyond the current page
    return null;
  } else if (location.pathname === '/home') {
    breadcrumbs.push({ path: '/home', name: 'Home' });
  } else {
    breadcrumbs.push({ path: '/', name: 'Latest Song' }); // Default root
  }

  pathnames.forEach((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const displayName = breadcrumbNameMap[name] || name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
    breadcrumbs.push({ path: routeTo, name: displayName });
  });

  // Filter out the "Latest Song" breadcrumb if the current page is /home
  const finalBreadcrumbs = breadcrumbs.filter(item => !(item.path === '/' && location.pathname === '/home'));

  // Don't render if there's only one breadcrumb (current page)
  if (finalBreadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 text-white/70 text-sm flex items-center flex-wrap
                 bg-black/20 backdrop-blur-sm border-b border-white/10"
      aria-label="Breadcrumb navigation"
    >
      <ol className="flex items-center flex-wrap gap-1 sm:gap-2">
        {finalBreadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight 
                size={14} 
                className="text-white/40 mx-1 sm:mx-2 flex-shrink-0" 
                aria-hidden="true"
              />
            )}
            {index === finalBreadcrumbs.length - 1 ? (
              <span 
                className="text-white font-medium truncate max-w-[200px] sm:max-w-none"
                aria-current="page"
              >
                {crumb.name}
              </span>
            ) : (
              <Link 
                to={crumb.path} 
                className="hover:text-white transition-colors duration-200 truncate max-w-[150px] sm:max-w-none
                         hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 
                         rounded px-1 py-0.5"
                title={crumb.name}
              >
                {index === 0 && crumb.path === '/' ? (
                  <span className="flex items-center gap-1">
                    <Home size={14} aria-hidden="true" />
                    <span className="hidden sm:inline">{crumb.name}</span>
                  </span>
                ) : (
                  crumb.name
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;