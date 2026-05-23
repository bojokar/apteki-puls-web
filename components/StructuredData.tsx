import { pharmacies } from '@/lib/data';
import { siteConfig } from '@/lib/site';

const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function StructuredData() {
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: 'bg-BG',
    },
    {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.logo,
    },
    ...pharmacies.map((pharmacy) => ({
      '@type': 'Pharmacy',
      '@id': `${siteConfig.url}/#${pharmacy.id}`,
      name: pharmacy.name,
      image: siteConfig.image,
      url: siteConfig.url,
      telephone: pharmacy.phones,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: pharmacy.address,
        addressLocality: 'Бургас',
        addressCountry: 'BG',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: allDays,
          opens: '00:00',
          closes: '23:59',
        },
      ],
      parentOrganization: {
        '@id': `${siteConfig.url}/#organization`,
      },
    })),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
