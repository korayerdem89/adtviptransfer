import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from 'lucide-react';
import SEO from '../components/SEO';

const blogPosts = [
  {
    id: 1,
    slug: 'izmir-havalimani-vip-transfer-rehberi',
    title: 'İzmir Havalimanı VIP Transfer Rehberi 2025',
    excerpt: 'Adnan Menderes Havalimanı\'nda VIP transfer hizmeti nedir, nasıl rezervasyon yapılır, fiyatlar ve tüm detaylar.',
    content: `
      <h2>İzmir Havalimanı VIP Transfer Nedir?</h2>
      <p>İzmir Adnan Menderes Havalimanı, Ege Bölgesi'nin en işlek havalimanlarından biridir. Yılda milyonlarca yolcuya ev sahipliği yapan bu havalimanında, VIP transfer hizmeti ile yolculuğunuzu konforlu ve stressiz hale getirebilirsiniz.</p>
      
      <p>VIP transfer hizmeti, havalimanından alınarak istediğiniz noktaya lüks araçlarla ulaşım sağlayan premium bir ulaşım çözümüdür. Profesyonel şoförler, son model araçlar ve kişiselleştirilmiş hizmet ile fark yaratır.</p>

      <h2>VIP Transfer Avantajları</h2>
      <ul>
        <li><strong>Zaman Tasarrufu:</strong> Taksi beklemek veya toplu taşıma ile uğraşmak zorunda kalmazsınız.</li>
        <li><strong>Konfor:</strong> Lüks araçlarda geniş koltuklar, klima ve WiFi hizmeti.</li>
        <li><strong>Güvenlik:</strong> Deneyimli ve profesyonel şoförler güvenli bir yolculuk garantisi verir.</li>
        <li><strong>Uçuş Takibi:</strong> Gecikme durumlarında ücretsiz bekleme süresi.</li>
        <li><strong>Bavul Yardımı:</strong> Şoförünüz bagajlarınızla ilgilenir.</li>
      </ul>

      <h2>Rezervasyon Nasıl Yapılır?</h2>
      <p>ADT VIP Transfer olarak 7/24 rezervasyon hizmeti sunuyoruz. Rezervasyon yapmanın üç yolu var:</p>
      
      <ol>
        <li><strong>Online Rezervasyon:</strong> Web sitemizden hızlı ve kolay rezervasyon yapabilirsiniz.</li>
        <li><strong>Telefon:</strong> 0543 380 66 49 numaralı hattımızdan bize ulaşabilirsiniz.</li>
        <li><strong>WhatsApp:</strong> WhatsApp üzerinden yazarak rezervasyon oluşturabilirsiniz.</li>
      </ol>

      <h2>Fiyatlandırma</h2>
      <p>VIP transfer fiyatları, mesafe, araç tipi ve hizmet içeriğine göre değişiklik gösterir. İzmir şehir merkezi transferleri 1.500 TL'den başlayan fiyatlarla sunulmaktadır. Çeşme, Alaçatı ve diğer bölgeler için özel fiyat teklifi alabilirsiniz.</p>

      <h2>Sıkça Sorulan Sorular</h2>
      
      <h3>Uçuşum gecikirse ne olur?</h3>
      <p>Uçuş takip sistemi sayesinde uçuşunuzun geciktiğini otomatik olarak görüyoruz. Gecikme durumunda 60 dakika ücretsiz bekleme süresi sunuyoruz.</p>

      <h3>Hangi bölgelere hizmet veriyorsunuz?</h3>
      <p>İzmir şehir merkezi, Çeşme, Alaçatı, Kuşadası, Didim, Manisa ve tüm Ege Bölgesi'ne hizmet vermekteyiz.</p>

      <h3>Ödeme seçenekleri nelerdir?</h3>
      <p>Nakit, kredi kartı ve havale/EFT ile ödeme yapabilirsiniz. Kurumsal müşterilerimiz için fatura kesimi yapılmaktadır.</p>
    `,
    author: 'ADT VIP Transfer Ekibi',
    date: '2025-01-15',
    readTime: '8 dk',
    category: 'Rehber',
    image: '/blog-havalimani.jpg',
    keywords: ['izmir havalimanı transfer', 'adnan menderes vip', 'havalimanı transfer fiyatları', 'izmir vip transfer'],
    tags: ['İzmir', 'Havalimanı Transferi', 'VIP', 'Rehber'],
  },
  {
    id: 2,
    slug: 'cesme-alacati-transfer-onerileri',
    title: 'Çeşme ve Alaçatı Transfer: En İyi Rota Önerileri',
    excerpt: 'İzmir\'den Çeşme ve Alaçatı\'ya VIP transfer ile konforlu yolculuk. Rota seçenekleri ve tatil önerileri.',
    content: `
      <h2>Çeşme ve Alaçatı: Ege'nin İncileri</h2>
      <p>Çeşme ve Alaçatı, İzmir'e sadece 1 saat mesafede olan, Ege Bölgesi'nin en popüler tatil destinasyonlarındandır. VIP transfer ile bu güzellikleri keşfetmek çok daha keyifli ve konforlu.</p>

      <h2>İzmir'den Çeşme'ye Ulaşım</h2>
      <p>İzmir Adnan Menderes Havalimanı'ndan Çeşme'ye mesafe yaklaşık 95 kilometredir. VIP transfer ile bu mesafe ortalama 60-75 dakikada kat edilmektedir.</p>

      <h2>VIP Transfer ile Çeşme Turu</h2>
      <p>Çeşme yarımadasını keşfetmek için VIP transfer hizmetimizden günlük kiralama seçeneğiyle de yararlanabilirsiniz. İşte rotanıza ekleyebileceğiniz duraklar:</p>

      <ul>
        <li><strong>Alaçatı:</strong> Rüzgar sörfü ve taş evleriyle ünlü bu tatil beldesi mutlaka görülmeli.</li>
        <li><strong>Ilıca Plajı:</strong> Sıcak termal sularıyla ünlü bu plaj eşsiz bir deneyim sunar.</li>
        <li><strong>Çeşme Kalesi:</strong> Tarihi kale ve çevresindeki restoranlar.</li>
        <li><strong>Altınkum:</strong> Altın sarısı kumuyla ünlü plaj.</li>
        <li><strong>Sakız Adası Feribotu:</strong> Yunanistan'ın Sakız Adası'na günübirlik gezi imkanı.</li>
      </ul>

      <h2>Alaçatı'da Yapılacaklar</h2>
      <p>Alaçatı, son yılların en trend tatil noktalarından biri. İşte Alaçatı'da yapabileceğiniz aktiviteler:</p>

      <ol>
        <li>Rüzgar sörfü dersi alın</li>
        <li>Tarihi taş evleri gezin</li>
        <li>Alaçatı Pazarı'nda alışveriş yapın</li>
        <li>Restoranlarında Ege mutfağının lezzetlerini tadın</li>
        <li>Gece hayatının keyfini çıkarın</li>
      </ol>

      <h2>VIP Transfer Fiyatları</h2>
      <p>İzmir Havalimanı - Çeşme/Alaçatı VIP transfer fiyatları araç tipine göre değişmektedir:</p>
      <ul>
        <li>Mercedes E-Class: 2.500 TL</li>
        <li>Mercedes V-Class: 3.500 TL</li>
        <li>Mercedes S-Class: 4.500 TL</li>
      </ul>

      <h2>Rezervasyon İçin İletişim</h2>
      <p>Çeşme ve Alaçatı transferleri için 7/24 rezervasyon hattımızdan bize ulaşabilirsiniz: 0543 380 66 49</p>
    `,
    author: 'ADT VIP Transfer Ekibi',
    date: '2025-01-10',
    readTime: '6 dk',
    category: 'Tatil',
    image: '/blog-cesme.jpg',
    keywords: ['çeşme transfer', 'alaçatı transfer', 'izmir çeşme arası', 'ege tatili'],
    tags: ['Çeşme', 'Alaçatı', 'Tatil', 'Ege'],
  },
  {
    id: 3,
    slug: 'kibris-transfer-vip-hizmetler',
    title: 'Kıbrıs Transfer: Feribot ve Havalimanı VIP Hizmetler',
    excerpt: 'Kıbrıs\'a seyahat edenler için özel VIP transfer çözümleri. Feribot iskelesi ve Ercan Havalimanı transferleri.',
    content: `
      <h2>Kıbrıs VIP Transfer Hizmetleri</h2>
      <p>Kıbrıs, Türkiye'nin en sevilen tatil adalarından biridir. İster feribotla ister uçakla adaya ulaşın, ADT VIP Transfer olarak Kıbrıs'ta da hizmetinizdeyiz.</p>

      <h2>Ercan Havalimanı VIP Transfer</h2>
      <p>Ercan Havalimanı, Kuzey Kıbrıs Türk Cumhuriyeti'nin ana havalimanıdır. Havalimanından Girne, Lefkoşa, Gazimağusa ve diğer bölgelere VIP transfer hizmeti sunmaktayız.</p>

      <h3>Ercan Havalimanı Transfer Bölgeleri</h3>
      <ul>
        <li><strong>Girne:</strong> Adanın en popüler tatil bölgesi (45 dk)</li>
        <li><strong>Lefkoşa:</strong> Başkent ve tarihi dokusuyla öne çıkar (30 dk)</li>
        <li><strong>Gazimağusa:</strong> Tarihi surlarıyla ünlü şehir (50 dk)</li>
        <li><strong>Güzelyurt:</strong> Narenciye bahçeleriyle meşhur (40 dk)</li>
        <li><strong>İskele:</strong> Plajlarıyla ünlü bölge (55 dk)</li>
      </ul>

      <h2>Taşucu Feribot İskelesi Transfer</h2>
      <p>Mersin Taşucu'ndan Kıbrıs'a feribot ile seyahat edenler için de VIP transfer hizmetimiz bulunmaktadır. Feribot iskelesinden alınarak otelinize veya adresinize konforlu ulaşım sağlıyoruz.</p>

      <h2>Kıbrıs'ta VIP Araç Filosu</h2>
      <p>Kıbrıs'ta kullanılan araç filomuz son model ve lüks donanımlıdır:</p>
      <ul>
        <li>Mercedes S-Class (VIP sedan)</li>
        <li>Mercedes V-Class (VIP minivan)</li>
        <li>Mercedes E-Class (Executive sedan)</li>
        <li>Range Rover (SUV)</li>
      </ul>

      <h2>Kıbrıs Transfer Fiyatları</h2>
      <p>Ercan Havalimanı transfer fiyatları:</p>
      <ul>
        <li>Girne: €80 - €120</li>
        <li>Lefkoşa: €50 - €80</li>
        <li>Gazimağusa: €90 - €130</li>
        <li>Güzelyurt: €70 - €100</li>
      </ul>

      <h2>Kıbrıs'ta Günlük Şoförlü Araç Kiralama</h2>
      <p>Adada gezmek için günlük şoförlü araç kiralama hizmetimizden de yararlanabilirsiniz. Profesyonel şoförlerimizle Kıbrıs'ı keşfedin.</p>

      <h3>Günlük Kiralama Paketleri</h3>
      <ul>
        <li>8 Saat: €200 - €350</li>
        <li>12 Saat: €300 - €500</li>
        <li>Ekstra saat: €30 - €50</li>
      </ul>

      <h2>Rezervasyon</h2>
      <p>Kıbrıs transfer rezervasyonları için bize ulaşın: 0543 380 66 49</p>
    `,
    author: 'ADT VIP Transfer Ekibi',
    date: '2025-01-05',
    readTime: '7 dk',
    category: 'Kıbrıs',
    image: '/blog-kibris.jpg',
    keywords: ['kıbrıs transfer', 'ercan havalimanı', 'kıbrıs vip transfer', 'girne transfer'],
    tags: ['Kıbrıs', 'Ercan', 'Girne', 'Feribot'],
  },
  {
    id: 4,
    slug: 'kurumsal-vip-transfer-neden-onemli',
    title: 'Kurumsal VIP Transfer: İş Dünyasında Neden Önemli?',
    excerpt: 'Şirketler için profesyonel ulaşım çözümleri. Yönetici ve CEO transferleri, iş toplantıları için lüks araç kiralama.',
    content: `
      <h2>Kurumsal VIP Transfer Nedir?</h2>
      <p>Kurumsal VIP transfer, şirketlerin yöneticileri, iş ortakları ve önemli misafirleri için sağladığı premium ulaşım hizmetidir. İş dünyasında ilk izlenim çok önemlidir ve VIP transfer bu izlenimi güçlendirir.</p>

      <h2>Neden Kurumsal VIP Transfer?</h2>

      <h3>1. Profesyonel İmaj</h3>
      <p>İş ortaklarınızı veya potansiyel müşterilerinizi lüks bir araçla karşılamak, şirketinizin profesyonelliğini ve ciddiyetini gösterir. Bu, iş görüşmelerine olumlu bir başlangıç yapmanızı sağlar.</p>

      <h3>2. Zaman Verimliliği</h3>
      <p>Yoğun iş temposunda zaman en değerli kaynaktır. VIP transfer ile trafik, park yeri arama gibi sorunlarla uğraşmadan toplantılarınıza odaklanabilirsiniz.</p>

      <h3>3. Konfor ve Verimlilik</h3>
      <p>Lüks araçlarda seyahat ederken, toplantı öncesi son hazırlıklarınızı yapabilir, e-postalarınızı kontrol edebilir veya dinlenebilirsiniz.</p>

      <h3>4. Güvenlik</h3>
      <p>Deneyimli ve güvenlik eğitimi almış şoförlerimiz, yöneticilerinizin güvenliğini öncelikli tutar.</p>

      <h2>Kurumsal VIP Transfer Hizmetlerimiz</h2>

      <ul>
        <li><strong>CEO ve Yönetici Transferleri:</strong> Üst düzey yöneticileriniz için özel hizmet</li>
        <li><strong>Havalimanı Karşılama:</strong> İş ortaklarınızın karşılanması ve uğurlanması</li>
        <li><strong>İş Toplantıları:</strong> Toplantılara zamanında ve prestijli varış</li>
        <li><strong>Konferans ve Etkinlikler:</strong> Kurumsal etkinlikler için toplu transfer</li>
        <li><strong>Şehir Dışı Seyahatler:</strong> İş seyahatleri için konforlu ulaşım</li>
      </ul>

      <h2>Kurumsal Avantajlar</h2>

      <h3>Özel Fiyatlandırma</h3>
      <p>Kurumsal müşterilerimize özel fiyatlandırma ve ödeme koşulları sunuyoruz. Uzun vadeli anlaşmalarla daha avantajlı fiyatlar elde edebilirsiniz.</p>

      <h3>Fatura ve Raporlama</h3>
      <p>Tüm hizmetlerimiz için resmi fatura kesiyor, aylık detaylı raporlar sunuyoruz.</p>

      <h3>7/24 Destek</h3>
      <p>Kurumsal müşterilerimize özel 7/24 destek hattı ile her an yanınızdayız.</p>

      <h3>Özel Şoför Ataması</h3>
      <p>İsteğe bağlı olarak aynı şoförün sürekli hizmet vermesini sağlayabiliriz.</p>

      <h2>Kurumsal Referanslarımız</h2>
      <p>İzmir ve Ege Bölgesi'ndeki birçok kurumsal firmaya hizmet vermekteyiz. Bankalar, holdingler, turizm şirketleri ve daha fazlası...</p>

      <h2>Kurumsal Teklif Alın</h2>
      <p>Şirketiniz için özel kurumsal teklif almak için bize ulaşın: 0543 380 66 49</p>
    `,
    author: 'ADT VIP Transfer Ekibi',
    date: '2025-01-01',
    readTime: '5 dk',
    category: 'Kurumsal',
    image: '/blog-kurumsal.jpg',
    keywords: ['kurumsal transfer', 'iş toplantısı ulaşım', 'ceo transfer', 'şirket araç kiralama'],
    tags: ['Kurumsal', 'İş Dünyası', 'CEO', 'Yönetici'],
  },
  {
    id: 5,
    slug: 'vip-transfer-secme-kriterleri',
    title: 'VIP Transfer Firması Seçerken Dikkat Edilmesi Gerekenler',
    excerpt: 'Doğru VIP transfer firmasını nasıl seçersiniz? Şoför deneyimi, araç filosu, fiyatlandırma ve müşteri hizmetleri kriterleri.',
    content: `
      <h2>Doğru VIP Transfer Firmasını Seçmek</h2>
      <p>VIP transfer hizmeti alırken dikkat edilmesi gereken önemli noktalar vardır. İşte doğru firmayı seçmenizi sağlayacak kriterler:</p>

      <h2>1. Şoför Deneyimi ve Profesyonellik</h2>
      <p>Şoförlerin deneyimi ve profesyonelliği en önemli kriterdir. İdeal bir VIP transfer şoförü:</p>
      <ul>
        <li>En az 5 yıl profesyonel şoförlük deneyimine sahip olmalı</li>
        <li>Psikoteknik ve güvenlik eğitimlerini tamamlamış olmalı</li>
        <li>İngilizce ve tercihen diğer yabancı dilleri bilmeli</li>
        <li>Profesyonel giyim ve davranış standartlarına sahip olmalı</li>
        <li>Yerel coğrafyayı çok iyi bilmeli</li>
      </ul>

      <h2>2. Araç Filosu Kalitesi</h2>
      <p>VIP transfer firmasının araç filosu incelenmelidir:</p>
      <ul>
        <li>Araçların model yılı (tercihen 3 yaşın altında)</li>
        <li>Düzenli bakım ve temizlik standartları</li>
        <li>Sigorta ve kasko durumu</li>
        <li>Araç içi donanım (WiFi, içecek, şarj ünitesi vb.)</li>
        <li>Farklı ihtiyaçlara uygun araç seçenekleri</li>
      </ul>

      <h2>3. Fiyatlandırma ve Şeffaflık</h2>
      <p>Fiyatlandırma konusunda dikkat edilmesi gerekenler:</p>
      <ul>
        <li>Net ve şeffaf fiyat politikası</li>
        <li>Gizli maliyet olmaması</li>
        <li>Ödeme seçenekleri esnekliği</li>
        <li>İptal ve değişiklik koşulları</li>
      </ul>

      <h2>4. Müşteri Hizmetleri Kalitesi</h2>
      <p>Müşteri hizmetleri değerlendirme kriterleri:</p>
      <ul>
        <li>7/24 ulaşılabilirlik</li>
        <li>Hızlı yanıt süresi</li>
        <li>Profesyonel ve nazik iletişim</li>
        <li>Şikayet yönetimi süreci</li>
      </ul>

      <h2>5. Referanslar ve Yorumlar</h2>
      <p>Firmanın geçmişi ve müşteri memnuniyeti:</p>
      <ul>
        <li>Google ve sosyal medya yorumları</li>
        <li>Referans müşteriler</li>
        <li>Sektördeki deneyim süresi</li>
        <li>Ödül ve sertifikalar</li>
      </ul>

      <h2>6. Hizmet Kapsamı</h2>
      <p>Sunulan hizmetlerin çeşitliliği:</p>
      <ul>
        <li>Havalimanı transferi</li>
        <li>Şehir içi ve şehir dışı transfer</li>
        <li>Günlük şoförlü kiralama</li>
        <li>Özel etkinlik organizasyonu</li>
        <li>Acil durum desteği</li>
      </ul>

      <h2>7. Teknolojik Altyapı</h2>
      <p>Modern teknoloji kullanımı:</p>
      <ul>
        <li>Online rezervasyon sistemi</li>
        <li>Uçuş takip entegrasyonu</li>
        <li>GPS araç takibi</li>
        <li>Dijital fatura sistemi</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Bu kriterleri değerlendirerek doğru VIP transfer firmasını seçebilirsiniz. ADT VIP Transfer olarak tüm bu kriterleri karşılıyor ve müşterilerimize en iyi hizmeti sunuyoruz.</p>
    `,
    author: 'ADT VIP Transfer Ekibi',
    date: '2024-12-28',
    readTime: '6 dk',
    category: 'Rehber',
    image: '/blog-secim.jpg',
    keywords: ['vip transfer seçimi', 'transfer firması', 'lüks araç kiralama', 'şoförlü araç'],
    tags: ['Rehber', 'Seçim', 'Kriterler', 'Öneriler'],
  },
  {
    id: 6,
    slug: 'kusadasi-efes-transfer-tatil',
    title: 'Kuşadası ve Efes Antik Kenti: VIP Transfer ile Tarih Turu',
    excerpt: 'Efes Antik Kenti ve Kuşadası için VIP transfer seçenekleri. Tarihi yerleri keşfetmek için konforlu ulaşım çözümleri.',
    content: `
      <h2>Efes Antik Kenti ve Kuşadası</h2>
      <p>Efes Antik Kenti, UNESCO Dünya Mirası Listesi'nde yer alan, dünyanın en iyi korunmuş antik kentlerinden biridir. Kuşadası ise bu tarihi hazinenin kapısı konumundadır. VIP transfer ile bu tarihi yolculuğu konforlu hale getirin.</p>

      <h2>Efes Antik Kenti Hakkında</h2>
      <p>Efes, yaklaşık 3000 yıllık tarihiyle Anadolu'nun en önemli antik kentlerinden biridir. Eski çağlarda Asya'nın en büyük kenti olan Efes, şimdi dünyanın her yerinden ziyaretçileri ağırlamaktadır.</p>

      <h3>Efes'te Görülmesi Gerekenler</h3>
      <ul>
        <li><strong>Celsus Kütüphanesi:</strong> Efes'in en ikonik yapısı</li>
        <li><strong>Büyük Tiyatro:</strong> 25.000 kişi kapasiteli antik tiyatro</li>
        <li><strong>Mermerli Yol:</strong> Antik çağın alışveriş merkezi</li>
        <li><strong>Hadrian Tapınağı:</strong> Roma İmparatoru Hadrian'a adanmış tapınak</li>
        <li><strong>Meryem Ana Evi:</strong> Hristiyanlığın kutsal mekanlarından</li>
      </ul>

      <h2>VIP Transfer ile Efes Turu</h2>
      <p>ADT VIP Transfer olarak Efes ve çevresi için özel tur paketleri sunuyoruz:</p>

      <h3>Yarım Gün Efes Turu</h3>
      <ul>
        <li>Efes Antik Kenti gezisi (3-4 saat)</li>
        <li>Profesyonel rehber seçeneği</li>
        <li>Mercedes V-Class veya benzeri araç</li>
        <li>Fiyat: 3.500 TL (grup başına)</li>
      </ul>

      <h3>Tam Gün Efes ve Çevre Turu</h3>
      <ul>
        <li>Efes Antik Kenti</li>
        <li>Meryem Ana Evi</li>
        <li>Yedi Uyurlar Mağarası</li>
        <li>Şirince Köyü</li>
        <li>Öğle yemeği molası</li>
        <li>Fiyat: 5.500 TL (grup başına)</li>
      </ul>

      <h2>Kuşadası'nda Konaklama ve Transfer</h2>
      <p>Kuşadası, Efes'i ziyaret edenler için ideal bir konaklama noktasıdır. Otellerinizden alınarak Efes'e VIP transfer hizmeti sunuyoruz.</p>

      <h3>Kuşadası Popüler Otelleri</h3>
      <ul>
        <li>Le Méridien Kuşadası</li>
        <li>DoubleTree by Hilton</li>
        <li>Richmond Ephesus Resort</li>
        <li>Pine Bay Holiday Resort</li>
      </ul>

      <h2>Transfer Fiyatları</h2>
      <p>İzmir Havalimanı - Kuşadası/Efes VIP transfer fiyatları:</p>
      <ul>
        <li>Mercedes E-Class: 2.000 TL</li>
        <li>Mercedes V-Class: 3.000 TL</li>
        <li>Mercedes S-Class: 3.500 TL</li>
      </ul>

      <h2>En İyi Ziyaret Zamanı</h2>
      <p>Efes Antik Kenti'ni ziyaret etmek için en ideal dönemler:</p>
      <ul>
        <li><strong>İlkbahar (Nisan-Mayıs):</strong> Hafif serin hava ve az kalabalık</li>
        <li><strong>Sonbahar (Eylül-Ekim):</strong> Güzel hava ve az kalabalık</li>
        <li>Yaz aylarında sabah erken veya akşam geç saatler tercih edilmeli</li>
      </ul>

      <h2>Rezervasyon</h2>
      <p>Efes ve Kuşadası transferleri için bize ulaşın: 0543 380 66 49</p>
    `,
    author: 'ADT VIP Transfer Ekibi',
    date: '2024-12-20',
    readTime: '7 dk',
    category: 'Turizm',
    image: '/blog-efes.jpg',
    keywords: ['efes transfer', 'kuşadası transfer', 'tarihi tur', 'izmir turizm'],
    tags: ['Efes', 'Kuşadası', 'Tarih', 'Turizm'],
  },
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  // Blog post schema for SEO
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://adtviptransfer.com.tr/blog/${post.slug}`,
    headline: post.title,
    description: post.excerpt,
    url: `https://adtviptransfer.com.tr/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://adtviptransfer.com.tr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADT VIP Transfer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://adtviptransfer.com.tr/logo.png',
      },
    },
    keywords: post.keywords.join(', '),
    articleSection: post.category,
    tags: post.tags,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://adtviptransfer.com.tr/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={`${post.title} | ADT VIP Transfer Blog`}
        description={post.excerpt}
        keywords={post.keywords.join(', ')}
        ogType="article"
        schema={blogPostSchema}
      />

      {/* Article Header */}
      <article className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Blog'a Dön</span>
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6">
            <Tag className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] tracking-wider uppercase">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} okuma
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Featured Image Placeholder */}
          <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl flex items-center justify-center mb-12">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
            <Tag className="w-24 h-24 text-[#d4af37]/20" />
          </div>
        </div>
      </article>

      {/* Article Content */}
      <section ref={contentRef} className="relative py-12 bg-[#050505]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-li:text-gray-400 prose-a:text-[#d4af37] prose-a:no-underline hover:prose-a:underline prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-ul:my-6 prose-ol:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Paylaş
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://adtviptransfer.com.tr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://adtviptransfer.com.tr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#4267B2] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://adtviptransfer.com.tr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-white mb-8">Benzer Yazılar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-[#d4af37]/50">
                    <span className="text-xs text-[#d4af37] uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#050505]">
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
                  href="/#contact"
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
