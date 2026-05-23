import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const routes = ['/', '/za-nas', '/produkti', '/promocii', '/kontakti'];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
