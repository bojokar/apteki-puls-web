import type { Metadata } from 'next';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bojokar.github.io/apteki-puls-next').replace(/\/$/, '');

export const siteConfig = {
  name: 'Денонощни аптеки Пулс',
  shortName: 'Аптеки Пулс',
  url: siteUrl,
  locale: 'bg_BG',
  description: 'Денонощни аптеки Пулс - аптеки в Бургас с грижа, продукти и промоции за цялото семейство.',
  image: `${siteUrl}/pharmacy-hero.png`,
  logo: `${siteUrl}/logo-puls-full.png`,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({ title, description, path = '/' }: PageMetadataInput): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: siteConfig.image,
          width: 1800,
          height: 1200,
          alt: 'Денонощни аптеки Пулс в Бургас',
        },
      ],
    },
  };
}
