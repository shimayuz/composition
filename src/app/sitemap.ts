import type { MetadataRoute } from 'next';
import { siteConfig } from '../lib/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services/medical',
    '/services/dev',
    '/services/training',
    '/products',
    '/about',
    '/news',
    '/contact',
  ];
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date('2026-08-18'),
    changeFrequency: path === '/news' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
