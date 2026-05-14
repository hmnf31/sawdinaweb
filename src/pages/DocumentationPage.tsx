import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';
import { Camera, CheckCircle2, Instagram, Mail, MapPin } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function DocumentationPage() {
  const features = [
    { title: 'Unlimited Photo', desc: 'Momen berharga diabadikan tanpa batas untuk semua paket.' },
    { title: 'Soft File Edit', desc: 'Pengeditan berkualitas tinggi yang menonjolkan keindahan frame.' },
    { title: 'Backup Aman', desc: 'Via Flashdisk atau Google Drive, aman dan mudah diakses.' },
    { title: 'Teaser Instagram', desc: 'Video Reels/Story siap upload untuk dibagikan berkala.' },
  ];

  const packages = [
    {
      category: 'Engagement',
      name: 'Silver',
      price: 'Rp 2.000.000',
      items: ['Unlimited Photo', 'Soft File Edit', 'Backup FD/GDrive', 'Teaser Video Story IG']
    },
    {
      category: 'Engagement',
      name: 'Gold',
      price: 'Rp 3.000.000',
      items: ['Unlimited Photo', 'Soft File Edit', 'Video Cinematic 1-3 Min', 'Backup FD/GDrive', 'Teaser Video Story IG']
    },
    {
      category: 'Pre-wedding',
      name: 'Silver',
      price: 'Rp 3.000.000',
      items: ['Unlimited Photo', 'Soft File Edit', '5x Cetak 5R + Frame', '1x Cetak 16RP + Frame', 'Backup FD/GDrive', 'Teaser Video Story IG']
    },
    {
      category: 'Pre-wedding',
      name: 'Gold',
      price: 'Rp 4.000.000',
      items: ['Unlimited Photo', 'Soft File Edit', '5x Cetak 5R + Frame', '2x Cetak 16RP + Frame', 'Video Cinematic 1-3 Min', 'Backup FD/GDrive', 'Teaser Video Story IG']
    },
    {
      category: 'Wedding',
      name: 'Silver',
      price: 'Rp 3.000.000',
      items: ['1 Fotografer', '1 Videografer', '1 Album Magnetic', 'Output Cinematic / Roll', 'Backup FD/GDrive', 'Teaser Video Story IG']
    },
    {
      category: 'Wedding',
      name: 'Gold',
      price: 'Rp 4.000.000',
      items: ['2 Fotografer', '1 Videografer', '1 Album Magazine + Box', '1 Album Magnetic', 'Output Cinematic / Roll', 'Backup FD/GDrive', 'Teaser Video Story IG']
    },
    {
      category: 'Wedding',
      name: 'Diamond',
      price: 'Rp 5.000.000',
      items: ['2 Fotografer', '2 Videografer', 'Album Magazine + Box', '1 Album Magnetic', 'Output Cinematic & Roll Video', 'Backup FD/GDrive', 'Bonus Footage Drone']
    },
    {
      category: 'Bundling',
      name: 'Silver',
      price: 'Rp 5.000.000',
      items: ['Gabungan Prewedding & Wedding', '1 Fotografer & 1 Videografer', 'Cetak 5R & 16RP', 'Album Magnetic']
    },
    {
      category: 'Bundling',
      name: 'Gold',
      price: 'Rp 7.000.000',
      items: ['Gabungan Prewedding & Wedding', '2 Fotografer & 1 Videografer', 'Cetak 5R & 16RP', 'Album Magazine + Box & Magnetic']
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.wedding[3]} alt="Hakuna Hero" className="w-full h-full object-cover brightness-75" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-display font-medium mb-6">Hakuna Picture</h1>
            <p className="text-xl md:text-2xl font-body mb-8 tracking-widest opacity-90 uppercase">A Picture-Perfect Day</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10">
              Mengabadikan keindahan momen Engagement, Pre-wedding, hingga Pernikahan Anda dengan sentuhan profesional.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#paket" className="bg-[#829460] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all inline-block">Lihat Paket</a>
              <a 
                href={`https://wa.me/6281284915958?text=${encodeURIComponent('Halo Kak, saya tertarik dengan layanan dokumentasi Hakuna Picture. Mohon informasi lebih lanjut. Terima kasih.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#829460] px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all inline-block"
              >
                Hubungi WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-display font-bold text-[#829460]">Tentang Kami</h2>
            <p className="text-3xl font-display italic text-[#4B5563]">“Setiap jepretan adalah cerita yang abadi.”</p>
            <p className="text-[#4B5563] leading-relaxed text-lg">
              Hakuna Picture adalah studio dokumentasi yang berdedikasi mengabadikan momen paling istimewa dalam hidup Anda. 
              Dengan pendekatan sinematik dan sentuhan elegan, kami menangkap nuansa, emosi, dan keindahan 
              dari setiap sesi — dari prosesi lamaran hingga pernikahan yang sakral.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMAGES.engagement[0]} className="rounded-2xl h-64 w-full object-cover mt-8" alt="Doc 1" />
            <img src={IMAGES.prewed[1]} className="rounded-2xl h-64 w-full object-cover" alt="Doc 2" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-[#829460]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[#829460] mb-4">Standar Profesional</h2>
            <p className="text-[#4B5563]">Kualitas dan kemudahan yang konsisten di setiap paket layanan kami.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#EED7C5]/30">
                <CheckCircle2 className="w-10 h-10 text-[#829460] mb-6" />
                <h3 className="text-xl font-bold text-[#4B5563] mb-2">{f.title}</h3>
                <p className="text-sm text-[#4B5563]/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section id="paket" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[#829460] mb-4">Paket Harga Dokumentasi</h2>
            <p className="text-[#4B5563]">Investasi untuk momen abadi Anda</p>
          </div>

          <div className="space-y-20">
            {['Engagement', 'Pre-wedding', 'Wedding', 'Bundling'].map((cat) => (
              <div key={cat} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <h3 className="text-3xl font-display font-bold text-[#829460]">{cat}</h3>
                  <div className="h-px flex-1 bg-[#EED7C5]/30"></div>
                </div>
                {cat === 'Bundling' && (
                  <p className="text-[#4B5563] italic -mt-4">Gabungkan sesi Pre-wedding & Wedding dalam satu paket eksklusif dengan harga lebih hemat.</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {packages.filter(p => p.category === cat).map((p, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-white border border-[#EED7C5]/30 p-8 rounded-[2rem] flex flex-col h-full shadow-sm"
                    >
                      <div className="mb-6">
                        <span className="text-[#829460] font-bold text-sm tracking-widest uppercase mb-1 block">{p.name}</span>
                        <h4 className="text-3xl font-bold text-[#4B5563]">{p.price}</h4>
                      </div>
                      <ul className="space-y-4 mb-8 flex-1">
                        {p.items.map((item, id) => (
                          <li key={id} className="flex items-center space-x-3 text-sm text-[#4B5563]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#EED7C5]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={`https://wa.me/6281284915958?text=${encodeURIComponent(`Halo Kak, saya tertarik dengan paket ${p.category} ${p.name} (${p.price}) dari Hakuna Picture. Mohon informasi lebih lanjut. Terima kasih.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#829460] text-white py-4 rounded-2xl font-bold hover:bg-[#6c7b50] transition-colors text-center"
                      >
                        Pesan Paket Ini
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[#829460] mb-4">Galeri Dokumentasi</h2>
            <p className="text-[#4B5563]">Momen yang telah kami abadikan</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...IMAGES.wedding, ...IMAGES.prewed, ...IMAGES.engagement].map((img, i) => (
              <img key={i} src={img} className="rounded-2xl w-full h-64 object-cover" alt={`Gallery ${i}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-[#829460]/5">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-white overflow-hidden shadow-xl flex flex-col md:flex-row border border-[#EED7C5]/20">
          <div className="flex-1 p-12 md:p-20 space-y-8">
            <h2 className="text-4xl font-display font-bold text-[#829460]">Hubungi Kami</h2>
            <p className="text-[#4B5563] leading-relaxed">
              Sampaikan kebutuhan Anda dan tim kami akan segera menghubungi melalui WhatsApp. 
              Mari kita wujudkan hari sempurna Anda bersama Hakuna Picture.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <WhatsAppIcon />
                <span className="text-[#4B5563]">+62 812-8491-5958</span>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="w-5 h-5 text-[#829460]" />
                <span className="text-[#4B5563]">@hakunapicture</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-[#829460]" />
                <span className="text-[#4B5563]">hakunapict@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#829460] p-12 md:p-20 flex items-center justify-center">
            <div className="w-full max-w-sm space-y-6">
              <h3 className="text-2xl font-display font-bold text-white text-center">Formulir Reservasi</h3>
              <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50" />
              <input type="text" placeholder="Jenis Acara (Wedding/Prewed)" className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50" />
              <textarea placeholder="Pesan Tambahan" rows={4} className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/50" />
              <a 
                href={`https://wa.me/6281284915958?text=${encodeURIComponent('Halo Kak dari Hakuna Picture, saya ingin reservasi dan konsultasi mengenai paket dokumentasi. Berikut data saya:\n\nNama: [Nama Lengkap]\nJenis Acara: [Wedding/Prewed/Engagement]\nPesan Tambahan: [Pesan]')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-[#829460] py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <span>Kirim ke WhatsApp</span>
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
