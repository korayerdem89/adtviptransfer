import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
}

const defaultSEO = {
  title: 'ADT VIP Transfer | İzmir VIP Araç Transfer Hizmetleri',
  description: 'İzmir Adnan Menderes Havalimanı VIP transfer, şehir içi ve şehir dışı lüks araç kiralama hizmetleri. Profesyonel şoförler, son model araçlar, 7/24 hizmet.',
  keywords: 'VIP transfer, İzmir havalimanı transfer, lüks araç kiralama, şoförlü araç, Adnan Menderes transfer, Çeşme transfer, Alaçatı transfer, Kıbrıs transfer, kurumsal transfer',
  ogImage: 'https://adtviptransfer.com.tr/og-image.jpg',
  ogType: 'website',
};

export default function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  ogImage = defaultSEO.ogImage,
  ogType = defaultSEO.ogType,
  schema,
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = `https://adtviptransfer.com.tr${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'author': 'ADT VIP Transfer',
      'robots': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      'googlebot': 'index, follow',
      'bingbot': 'index, follow',
      // Open Graph
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:url': canonicalUrl,
      'og:image': ogImage,
      'og:site_name': 'ADT VIP Transfer',
      'og:locale': 'tr_TR',
      // Twitter Cards
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
      'twitter:site': '@adtviptransfer',
      // Additional SEO
      'viewport': 'width=device-width, initial-scale=1.0',
      'theme-color': '#0a0a0a',
      'msapplication-TileColor': '#d4af37',
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Add structured data if provided
    if (schema) {
      let script = document.querySelector('#structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'structured-data');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    // Add default LocalBusiness schema if no schema provided
    if (!schema) {
      const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://adtviptransfer.com.tr',
        name: 'ADT VIP Transfer',
        description: 'İzmir\'de VIP transfer hizmetleri. Havalimanı transferi, şehir içi ve şehir dışı lüks araç kiralama.',
        url: 'https://adtviptransfer.com.tr',
        telephone: '+90-543-380-66-49',
        email: 'info@adtviptransfer.com.tr',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Abdülhamit Yavuz Caddesi, Atıfbey Mahallesi No: 21/1B',
          addressLocality: 'Gaziemir',
          addressRegion: 'İzmir',
          postalCode: '35410',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '38.3230',
          longitude: '27.1295',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: '₺₺₺',
        currenciesAccepted: 'TRY, EUR, USD',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '38.3230',
            longitude: '27.1295',
          },
          geoRadius: '50000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'VIP Transfer Hizmetleri',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Havalimanı Transferi',
                description: 'Adnan Menderes Havalimanı VIP transfer hizmeti',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Şehir İçi Transfer',
                description: 'İzmir şehir içi lüks araç transferi',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kıbrıs Transfer',
                description: 'Kıbrıs VIP transfer ve ulaşım hizmetleri',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Ahmet Yılmaz',
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
            },
            reviewBody: 'Mükemmel hizmet, çok profesyonel şoförler. Kesinlikle tavsiye ederim.',
          },
        ],
        sameAs: [
          'https://www.instagram.com/adtviptransfer',
          'https://www.facebook.com/adtviptransfer',
          'https://twitter.com/adtviptransfer',
        ],
      };

      let script = document.querySelector('#structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'structured-data');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(localBusinessSchema);
    }

    return () => {
      // Cleanup handled by next render
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, schema]);

  return null;
}
