import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Fleet from '../sections/Fleet';
import Gallery from '../sections/Gallery';
import About from '../sections/About';
import Process from '../sections/Process';
import Instagram from '../sections/Instagram';
import Contact from '../sections/Contact';

export default function HomePage() {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://adtviptransfer.com.tr/',
    name: 'ADT VIP Transfer | İzmir Havalimanı ve VIP Transfer Hizmetleri',
    description:
      'İzmir Adnan Menderes Havalimanı, Gaziemir, Konak, Bornova, Karşıyaka, Çeşme, Alaçatı ve Kuşadası için 7/24 VIP transfer hizmeti.',
    url: 'https://adtviptransfer.com.tr/',
    inLanguage: 'tr-TR',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://adtviptransfer.com.tr',
      name: 'ADT VIP Transfer',
      url: 'https://adtviptransfer.com.tr',
    },
    about: {
      '@type': 'LocalBusiness',
      name: 'ADT VIP Transfer',
      areaServed: ['Izmir', 'Gaziemir', 'Konak', 'Bornova', 'Karsiyaka', 'Cesme', 'Alacati', 'Kusadasi'],
    },
  };

  return (
    <>
      <SEO
        title="ADT VIP Transfer | İzmir Havalimanı ve VIP Transfer Hizmetleri"
        description="İzmir Adnan Menderes Havalimanı, Gaziemir, Konak, Bornova, Karşıyaka, Çeşme, Alaçatı ve Kuşadası için 7/24 VIP transfer ve şoförlü lüks araç hizmeti."
        keywords="izmir vip transfer, izmir havalimanı transfer, adnan menderes transfer, gaziemir vip transfer, konak transfer, bornova transfer, karşıyaka transfer, çeşme transfer, alaçatı transfer, kuşadası transfer, düğün transferi"
        schema={homePageSchema}
      />
      <Hero />
      <Services />
      <Fleet />
      <Gallery />
      <About />
      <Process />
      <Instagram />
      <Contact />
    </>
  );
}
