import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matsource.io';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/blog',
    '/case-studies',
    '/solutions/voice',
    '/solutions/customer-service',
    '/solutions/search',
    '/get-started',
    '/signin',
    '/signup',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // return [...routes, ...blogRoutes];
  return routes;
} 