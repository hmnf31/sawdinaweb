import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';
import { Calendar, Users, Music, Utensils, Home, Sparkles, CheckCircle2 } from 'lucide-react';

export default function OrganizerPage() {
  const packages = [
    {
      name: 'One Day Service',
      price: 'Rp 3.000.000',
      items: ['Crew 5-8 Orang', 'Wedding Checklist', 'Meeting Keluarga', 'Pendampingan Pre Wedding', 'Pendampingan Fitting', 'Meeting Vendor', 'Konsep Acara', 'Wedding Books', 'Balon Gas 30-35 pcs', 'Confetti 2 titik']
    },
    {
      name: 'WO + MC Wedding',
      price: 'Rp 4.000.000',
      items: ['MC Wedding (Akad & Resepsi)', 'Crew 5-8 Orang', 'Wedding Checklist', 'Meeting Keluarga', 'Meeting Vendor', 'Konsep Acara', 'Wedding Books', 'Balon Gas', 'Confetti']
    },
    {
       name: 'WO + MC + Wedding Effect',
       price: 'Rp 5.000.000',
       items: ['MC Wedding', 'Crew 5-8 Orang', 'Wedding Checklist', 'Meeting Vendor', 'Konsep Acara', 'Balon Gas', 'Confetti 2 titik', 'Firework 2 titik', 'Efek Asap']
    },
    {
      name: 'WO + MC + Dokumentasi',
      price: 'Rp 7.500.000',
      items: ['MC Wedding', 'Crew 5-8 Orang', 'Konsep Acara', 'Balon & Confetti', 'Album Magazine Premium', 'Album Magnetic Keluarga', 'Video Dokumentasi/Cinematic', 'File Edit & Backup FD/GDrive']
    },
    {
      name: 'Package Aquamarine',
      price: 'Rp 26.000.000',
      items: ['WO Crew 4-5 Orang', 'Decor Pelaminan 6-8m', 'Tenda 4 Lokal', 'Panggung Hiburan', 'Meja Akad Set', 'MUA & Attire (2x Ganti)', 'Dokumentasi & Entertainment']
    },
    {
      name: 'Package Emerald',
      price: 'Rp 35.000.000',
      items: ['WO Crew 6-7 Orang', 'Decor Pelaminan 8-10m', 'Tenda 5 Lokal', 'Catering/Prasmanan 150pax', 'Janur & Kotak Angpau', 'MUA & Attire Premium', 'Dokumentasi & Live Entertainment']
    },
    {
        name: 'Package Ruby',
        price: 'Rp 40.000.000',
        items: ['WO Crew 7-8 Orang', 'Decor Pelaminan Max 10m', 'Tenda 6 Lokal', 'Catering 200pax', 'Prewedding & Wedding Dokum', 'MUA Attire 3x Ganti', 'Entertaiment Dangdut/Pop Live']
    },
    {
      name: 'Premium 300 Pax',
      price: 'Rp 60.000.000',
      items: ['Excl. Venue', 'WO Crew 5-8 Orang', 'Decor Max 10m + Panggung', 'Full Entertainment & Sound', 'Catering 300 Pax + Stall', 'Upacara Adat Lengkap', 'MUA & Dokumentasi Lengkap']
    },
    {
      name: 'Premium 500 Pax',
      price: 'Rp 70.000.000',
      items: ['Excl. Venue', 'WO Crew 5-8 Orang', 'Decor Max 10m', 'Full Entertainment', 'Catering 500 Pax', 'Upacara Adat Lengkap', 'MUA & Dokumentasi Lengkap']
    },
    {
        name: 'Premium 1000 Pax',
        price: 'Rp 95.000.000',
        items: ['Excl. Venue', 'WO Crew 5-8 Orang', 'Decor Max 10m', 'Full Entertainment', 'Catering 1000 Pax', 'Upacara Adat Lengkap', 'MUA & Dokumentasi Lengkap']
    },
    {
      name: 'Exclusive 500 Pax',
      price: 'Rp 80.000.000',
      items: ['Incl. Venue (Indoor/Outdoor)', 'WO Crew 5-8 Orang', 'Decor Premium', 'Catering 500 Pax (Daging Sapi/Ayam)', 'Upacara Adat', 'MUA & Dokum Lengkap', 'Undangan & Bonus Hand Bucket']
    },
    {
      name: 'Exclusive 1000 Pax',
      price: 'Rp 100.000.000',
      items: ['Incl. Venue', 'WO Crew 5-8 Orang', 'Decor Premium', 'Catering 1000 Pax', 'Upacara Adat Lengkap', 'MUA & Dokum Lengkap', 'Undangan & Bonus Hand Bucket']
    }
  ];

  const vendors = {
    mua: ['Andri Makeup', 'Chiko Adrean', 'Ezhar MUA', 'Darmayanti', 'MUA Dessy', 'ByRekaa', 'Larin Wedding', 'Ratna Beauty', 'Fenti Salon', 'Sawadina Wedding'],
    decor: ['Aesthetic Decoration', 'Dekorasi Garut', 'Sawadina Florist', 'Mahogany Decoration', 'Plasma Dekorasi'],
    doc: ['Pictura Photography', 'BeardNation', 'Keen Pictures', 'Jihan Potret', 'Membumi std', 'Diollaz'],
    ent: ['Judith Music', 'Marvell Project', 'Wara Wiri Entertaiment', 'Seirama Entertaiment', 'Republik Koplo', 'Wiskul Entertaiment']
  };

  const venues = {
    indoor: ['Gd Graha Copong', 'Gd Graha Intan Balarea', 'Bale Paminton', 'Islamic Center', 'Gd Mutiara Cipanas', 'Alleyra Wedding Convention', 'Ballroom Santika'],
    outdoor: ['Rancabango Hotel & Resort', 'D Wisdom', 'Kopi Jaya', 'Joglo', 'Sampireun', 'Mustika', 'Cassacola', 'Kolaboraci']
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 group">
          <img src={IMAGES.wedding[0]} alt="WO Hero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/95 via-transparent to-transparent"></div>
        <div className="relative z-10 w-full px-4 lg:px-12 pb-12 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gold-metallic uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block"
            >
              Professional Planning & Service
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-6">Wedding Organizer</h1>
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              Sawadina Wedding Organizer menghadirkan profesionalisme dan kreativitas untuk memastikan setiap detail pernikahan Anda berjalan sempurna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center space-y-8">
        <Sparkles className="w-12 h-12 text-[#829460] mx-auto opacity-50" />
        <h2 className="text-4xl font-display font-bold text-[#829460]">Ketenangan di Hari Bahagia</h2>
        <p className="text-lg text-[#4B5563] leading-relaxed">
          Sawadina Wedding Organizer hadir untuk mengelola setiap detail pernikahan Anda. 
          Dari konsep hingga hari pelaksanaan, tim profesional kami memastikan Anda 
          dan keluarga dapat menikmati momen berharga tanpa rasa khawatir.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="py-24 px-4 bg-[#829460]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-[#829460] mb-4">Pricelist Sawadina Organizer</h2>
            <p className="text-[#4B5563]">Pilih paket yang paling sesuai dengan impian dan kebutuhan Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] border border-[#EED7C5]/30 shadow-sm flex flex-col h-full"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-body font-bold text-[#4B5563] mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-display font-bold text-[#829460]">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-[#4B5563]/80">
                      <CheckCircle2 className="w-5 h-5 text-[#829460] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://wa.me/6281219994575?text=${encodeURIComponent(`Halo Sawadina Wedding, saya tertarik dengan paket ${pkg.name} (${pkg.price}). Mohon informasi lebih lanjut mengenai paket ini. Terima kasih.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#829460] text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all text-center"
                >
                  Pesan via WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm italic text-[#4B5563]/60">*Harga dapat berubah sesuai update pricelist dari vendor</p>
        </div>
      </section>

      {/* Vendors & Venues */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Vendor List */}
          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-[#829460]" />
              <h2 className="text-3xl font-display font-bold text-[#829460]">Rekan Vendor Kami</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-[#4B5563] mb-4 border-b border-[#EED7C5] pb-2 uppercase text-xs tracking-widest">Makeup & Attire</h3>
                <ul className="text-sm space-y-2 text-[#4B5563]/70 font-sans">
                  {vendors.mua.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#4B5563] mb-4 border-b border-[#EED7C5] pb-2 uppercase text-xs tracking-widest">Decoration</h3>
                <ul className="text-sm space-y-2 text-[#4B5563]/70 font-sans">
                  {vendors.decor.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#4B5563] mb-4 border-b border-[#EED7C5] pb-2 uppercase text-xs tracking-widest">Documentation</h3>
                <ul className="text-sm space-y-2 text-[#4B5563]/70 font-sans">
                  {vendors.doc.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#4B5563] mb-4 border-b border-[#EED7C5] pb-2 uppercase text-xs tracking-widest">Entertainment</h3>
                <ul className="text-sm space-y-2 text-[#4B5563]/70 font-sans">
                  {vendors.ent.map((v, i) => <li key={i}>{v}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Venue List */}
          <div className="space-y-12">
            <div className="flex items-center space-x-4">
              <Home className="w-8 h-8 text-[#829460]" />
              <h2 className="text-3xl font-display font-bold text-[#829460]">Daftar Venue</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-[#829460]/5 p-8 rounded-3xl">
                <h3 className="font-bold text-[#829460] mb-4 text-xl">Garut</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-[#4B5563] uppercase mb-2">Indoor</h4>
                    <ul className="text-sm text-[#4B5563]/70 space-y-1">{venues.indoor.map((v, i) => <li key={i}>{v}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#4B5563] uppercase mb-2">Outdoor</h4>
                    <ul className="text-sm text-[#4B5563]/70 space-y-1">{venues.outdoor.map((v, i) => <li key={i}>{v}</li>)}</ul>
                  </div>
                </div>
              </div>
              <p className="text-sm italic text-[#4B5563]/60">Tersedia juga puluhan opsi venue di Bandung untuk area Indoor & Outdoor.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
