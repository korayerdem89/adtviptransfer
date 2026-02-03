import { useEffect, useRef } from 'react';
import { Award, Users, Shield, Clock, Target, Heart, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Güvenlik',
    description: 'Yolcularımızın güvenliği her zaman önceliğimizdir. Tüm şoförlerimiz sertifikalı ve deneyimlidir.',
  },
  {
    icon: Clock,
    title: 'Zamanında Hizmet',
    description: 'Rezervasyon saatinde hazırız. Gecikme durumunda ücretsiz bekleme süresi sunuyoruz.',
  },
  {
    icon: Target,
    title: 'Profesyonellik',
    description: 'Eğitimli şoförlerimiz ve profesyonel ekibimizle en yüksek hizmet kalitesini garanti ediyoruz.',
  },
  {
    icon: Heart,
    title: 'Müşteri Memnuniyeti',
    description: '%100 müşteri memnuniyeti hedefiyle çalışıyor, her yolculuğu özel kılıyoruz.',
  },
];

const stats = [
  { value: '10+', label: 'Yıllık Deneyim' },
  { value: '50K+', label: 'Başarılı Transfer' },
  { value: '25+', label: 'Lüks Araç' },
  { value: '99%', label: 'Müşteri Memnuniyeti' },
];

export default function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700 relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#d4af37]/30 rounded-2xl"></div>
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/about-team.jpg"
                  alt="ADT VIP Transfer Team"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-black p-6 rounded-xl shadow-2xl">
                <Award className="w-10 h-10 mb-2" />
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Yıllık Tecrübe</p>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            <div>
              <div
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6"
              >
                <Users className="w-4 h-4 text-[#d4af37]" />
                <span className="text-sm text-[#d4af37] tracking-wider uppercase">
                  Hakkımızda
                </span>
              </div>

              <h2
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
              >
                İzmir'in <span className="text-gradient-gold">VIP Transfer</span>{' '}
                Lideri
              </h2>

              <p
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 text-lg leading-relaxed"
              >
                ADT VIP Transfer olarak, İzmir Adnan Menderes Havalimanı'ndan
                başlayarak tüm Ege Bölgesi'ne premium transfer hizmeti sunuyoruz.
                10 yılı aşkın deneyimimizle, binlerce müşteriye güvenli, konforlu
                ve lüks yolculuk deneyimi yaşattık.
              </p>
            </div>

            {/* Features List */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 space-y-4"
            >
              {[
                'Profesyonel ve deneyimli şoför ekibi',
                'Son model lüks araç filosu',
                '7/24 rezervasyon ve destek hattı',
                'Uçuş takibi ve gecikme garantisi',
                'Uygun fiyatlar ve şeffaf tarife',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[#111] border border-gray-800 rounded-lg">
                  <p className="text-2xl font-bold text-[#d4af37]">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-2xl sm:text-3xl font-serif font-bold text-white"
            >
              Değerlerimiz
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 5) * 100} group`}
              >
                <div className="h-full p-6 bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-xl transition-all duration-500 hover:border-[#d4af37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                    <value.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
