import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/lib/LanguageContext';

const FORM_SERVICE_ID = import.meta.env.VITE_FORM_SERVICE_ID;

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const { ts } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: ts('contact.address'),
      content: 'Abdülhamit Yavuz Caddesi\nAtıfbey Mahallesi No: 21/1B\nGaziemir, İzmir',
    },
    {
      icon: Phone,
      title: ts('contact.phone'),
      content: '0543 380 66 49',
      href: 'tel:+905433806649',
    },
    {
      icon: Mail,
      title: ts('contact.email'),
      content: 'info@adtviptransfer.com.tr',
      href: 'mailto:info@adtviptransfer.com.tr',
    },
    {
      icon: Clock,
      title: ts('contact.workingHours'),
      content: ts('contact.workingHoursValue'),
    },
  ];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: FORM_SERVICE_ID,
          from_name: ts('contact.formFromName'),
          subject: `${ts('contact.formSubjectPrefix')} ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || ts('contact.formNotSpecified'),
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(result.message || ts('contact.formError'));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : ts('contact.formError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#d4af37]/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
            <Mail className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">{ts('contact.badge')}</span>
          </div>

          <h2 className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {ts('contact.title')} <span className="text-gradient-gold">{ts('contact.titleHighlight')}</span>
          </h2>

          <p className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto text-lg">
            {ts('contact.subtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-gray-800 rounded-xl transition-all duration-300 hover:border-[#d4af37]/30">
                    <div className="w-11 h-11 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 text-sm">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-gray-400 hover:text-[#d4af37] transition-colors whitespace-pre-line text-sm">{info.content}</a>
                      ) : (
                        <p className="text-gray-400 whitespace-pre-line text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="mt-6">
              <p className="text-gray-500 text-sm mb-3">{ts('contact.quickContact')}</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+905433806649" className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] rounded-lg hover:bg-[#d4af37]/20 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{ts('contact.callNow')}</span>
                </a>
                <a href="https://wa.me/905433806649" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-500 rounded-lg hover:bg-green-500/20 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{ts('contact.formSuccess')}</h3>
                  <p className="text-gray-400">{ts('contact.formSuccessDesc')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">{ts('contact.formName')} <span className="text-[#d4af37]">*</span></Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={ts('contact.formNamePlaceholder')} required className="bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:ring-[#d4af37]/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">{ts('contact.formEmail')} <span className="text-[#d4af37]">*</span></Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={ts('contact.formEmailPlaceholder')} required className="bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:ring-[#d4af37]/20" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">{ts('contact.formPhone')}</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={ts('contact.formPhonePlaceholder')} className="bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:ring-[#d4af37]/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-300">{ts('contact.formSubject')} <span className="text-[#d4af37]">*</span></Label>
                      <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={ts('contact.formSubjectPlaceholder')} required className="bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:ring-[#d4af37]/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">{ts('contact.formMessage')} <span className="text-[#d4af37]">*</span></Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={ts('contact.formMessagePlaceholder')} required rows={5} className="bg-[#0a0a0a] border-gray-700 text-white placeholder:text-gray-600 focus:border-[#d4af37] focus:ring-[#d4af37]/20 resize-none" />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <Button type="submit" disabled={isLoading} className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-black font-semibold py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
                    {isLoading ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" />{ts('contact.formSending')}</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2" />{ts('contact.formSend')}</>
                    )}
                  </Button>

                  <p className="text-center text-gray-500 text-sm">{ts('contact.formRequired')}</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
