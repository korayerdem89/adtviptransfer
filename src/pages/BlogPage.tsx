import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const blogPosts = [
  {
    id: 1,
    slug: 'izmir-havalimani-vip-transfer-rehberi',
    title: 'İzmir Havalimanı VIP Transfer Rehberi 2025',
    excerpt: 'Adnan Menderes Havalimanı\'nda VIP transfer hizmeti nedir, nasıl rezervasyon yapılır, fiyatlar ve tüm detaylar. Profesyonel şoförlü lüks araç transferi hakkında kapsamlı bilgi.',
    content: 'İzmir Adnan Menderes Havalimanı, Ege Bölgesi\'nin en işlek havalimanlarından biridir. VIP transfer hizmeti ile yolculuğunuzu konforlu ve stressiz hale getirebilirsiniz...',
    author: 'ADT VIP Transfer Ekibi',
    date: '15 Ocak 2025',
    readTime: '8 dk',
    category: 'Rehber',
    image: '/blog-havalimani.jpg',
    keywords: ['izmir havalimanı transfer', 'adnan menderes vip', 'havalimanı transfer fiyatları', 'izmir vip transfer'],
  },
  {
    id: 2,
    slug: 'cesme-alacati-transfer-onerileri',
    title: 'Çeşme ve Alaçatı Transfer: En İyi Rota Önerileri',
    excerpt: 'İzmir\'den Çeşme ve Alaçatı\'ya VIP transfer ile konforlu yolculuk. Rota seçenekleri, seyahat süreleri, görülmesi gereken yerler ve tatil önerileri.',
    content: 'Çeşme ve Alaçatı, Ege\'nin en popüler tatil destinasyonlarındandır. VIP transfer ile bu güzellikleri keşfetmek çok daha keyifli...',
    author: 'ADT VIP Transfer Ekibi',
    date: '10 Ocak 2025',
    readTime: '6 dk',
    category: 'Tatil',
    image: '/blog-cesme.jpg',
    keywords: ['çeşme transfer', 'alaçatı transfer', 'izmir çeşme arası', 'ege tatili'],
  },
  {
    id: 3,
    slug: 'kibris-transfer-vip-hizmetler',
    title: 'Kıbrıs Transfer: Feribot ve Havalimanı VIP Hizmetler',
    excerpt: 'Kıbrıs\'a seyahat edenler için özel VIP transfer çözümleri. Feribot iskelesi ve Ercan Havalimanı transferleri, şoförlü araç kiralama seçenekleri.',
    content: 'Kıbrıs, Türkiye\'nin en sevilen tatil adalarından biridir. Feribot veya uçakla adaya ulaşım sağlayanlar için VIP transfer hizmetleri...',
    author: 'ADT VIP Transfer Ekibi',
    date: '5 Ocak 2025',
    readTime: '7 dk',
    category: 'Kıbrıs',
    image: '/blog-kibris.jpg',
    keywords: ['kıbrıs transfer', 'ercan havalimanı', 'kıbrıs vip transfer', 'girne transfer'],
  },
  {
    id: 4,
    slug: 'kurumsal-vip-transfer-neden-onemli',
    title: 'Kurumsal VIP Transfer: İş Dünyasında Neden Önemli?',
    excerpt: 'Şirketler için profesyonel ulaşım çözümleri. Yönetici ve CEO transferleri, iş toplantıları için lüks araç kiralama, kurumsal avantajlar.',
    content: 'Kurumsal dünyada ilk izlenim çok önemlidir. VIP transfer hizmetleri şirket imajını güçlendirir ve iş ortaklarınıza değer verdiğinizi gösterir...',
    author: 'ADT VIP Transfer Ekibi',
    date: '1 Ocak 2025',
    readTime: '5 dk',
    category: 'Kurumsal',
    image: '/blog-kurumsal.jpg',
    keywords: ['kurumsal transfer', 'iş toplantısı ulaşım', 'ceo transfer', 'şirket araç kiralama'],
  },
  {
    id: 5,
    slug: 'vip-transfer-secme-kriterleri',
    title: 'VIP Transfer Firması Seçerken Dikkat Edilmesi Gerekenler',
    excerpt: 'Doğru VIP transfer firmasını nasıl seçersiniz? Şoför deneyimi, araç filosu, fiyatlandırma ve müşteri hizmetleri kriterleri.',
    content: 'VIP transfer hizmeti alırken dikkat edilmesi gereken önemli noktalar vardır. İşte doğru firmayı seçmenizi sağlayacak kriterler...',
    author: 'ADT VIP Transfer Ekibi',
    date: '28 Aralık 2024',
    readTime: '6 dk',
    category: 'Rehber',
    image: '/blog-secim.jpg',
    keywords: ['vip transfer seçimi', 'transfer firması', 'lüks araç kiralama', 'şoförlü araç'],
  },
  {
    id: 6,
    slug: 'kusadasi-efes-transfer-tatil',
    title: 'Kuşadası ve Efes Antik Kenti: VIP Transfer ile Tarih Turu',
    excerpt: 'Efes Antik Kenti ve Kuşadası için VIP transfer seçenekleri. Tarihi yerleri keşfetmek için konforlu ulaşım çözümleri.',
    content: 'Efes Antik Kenti, UNESCO Dünya Mirası Listesi\'nde yer alan önemli bir tarihi mekandır. VIP transfer ile bu tarihi yolculuğu konforlu hale getirin...',
    author: 'ADT VIP Transfer Ekibi',
    date: '20 Aralık 2024',
    readTime: '7 dk',
    category: 'Turizm',
    image: '/blog-efes.jpg',
    keywords: ['efes transfer', 'kuşadası transfer', 'tarihi tur', 'izmir turizm'],
  },
];

// Blog list schema for SEO
const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://adtviptransfer.com.tr/blog',
  name: 'ADT VIP Transfer Blog',
  description: 'VIP transfer, lüks araç kiralama ve seyahat ipuçları hakkında uzman içerikler.',
  url: 'https://adtviptransfer.com.tr/blog',
  publisher: {
    '@type': 'Organization',
    name: 'ADT VIP Transfer',
    logo: {
      '@type': 'ImageObject',
      url: 'https://adtviptransfer.com.tr/logo.png',
    },
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    '@id': `https://adtviptransfer.com.tr/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    url: `https://adtviptransfer.com.tr/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADT VIP Transfer',
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
  })),
};

export default function BlogPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="ADT VIP Transfer Blog | Seyahat ve Transfer Rehberi"
        description="VIP transfer, lüks araç kiralama ve seyahat ipuçları hakkında uzman içerikler. İzmir, Çeşme, Alaçatı ve Kıbrıs transfer rehberleri."
        keywords="vip transfer blog, seyahat rehberi, izmir transfer, çeşme transfer, kıbrıs transfer, lüks araç kiralama"
        schema={blogListSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-[#d4af37] tracking-wider uppercase">Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              VIP Transfer <span className="text-gradient-gold">Blog</span>
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Seyahat, transfer ve lüks yaşam hakkında uzman içerikler. 
              İzmir, Çeşme, Alaçatı ve Kıbrıs transfer rehberleri.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={sectionRef} className="relative py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 1) * 100} group`}
              >
                <Link to={`/blog/${post.slug}`} className="block h-full">
                  <div className="h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                      <BookOpen className="w-16 h-16 text-[#d4af37]/30" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1 text-[#d4af37] text-sm font-medium">
                          Devamını Oku
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 border border-[#d4af37]/30 rounded-2xl p-8 lg:p-12 text-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
                VIP Transfer Hizmeti mi Arıyorsunuz?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                İzmir ve çevresinde profesyonel VIP transfer hizmeti için 
                hemen bizimle iletişime geçin.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-sm hover:bg-[#c4a030] transition-all duration-300"
                >
                  Rezervasyon Yap
                </a>
                <a
                  href="tel:+905433806649"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-[#d4af37]/50 text-white font-semibold rounded-sm hover:bg-[#d4af37]/10 transition-all duration-300"
                >
                  0543 380 66 49
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
