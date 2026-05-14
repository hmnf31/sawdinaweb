import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IMAGES } from '../constants';
import { ArrowRight, Star, Heart, Camera, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-warm-ivory flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-6 pt-24">
        {/* Immersive Dashboard Hero */}
        <div className="grid grid-cols-12 gap-6 lg:h-[85vh] h-auto mb-24">
          {/* Main Hero Column */}
          <section className="col-span-12 lg:col-span-7 flex flex-col h-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative flex-1 rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src={IMAGES.wedding[0]} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Premium Wedding" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/95 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 lg:p-12 w-full">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gold-metallic uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block"
                >
                  Exclusive Experience
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-4xl lg:text-6xl mb-6 font-display leading-tight"
                >
                  Wujudkan Pernikahan<br />
                  <span className="italic font-light">Impian Anda di Garut</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 max-w-lg text-sm leading-relaxed mb-8 font-light"
                >
                  Sawadina Wedding hadir sebagai partner terpercaya untuk merancang setiap detail hari bahagia Anda dengan sentuhan mewah, elegan, dan tak terlupakan.
                </motion.p>
                <div className="flex flex-wrap gap-6 items-center">
                  <Link to="/organizer" className="bg-white text-emerald-deep px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gold-metallic hover:text-white transition-all shadow-lg inline-block">
                    Lihat Layanan
                  </Link>
                  <div className="flex items-center gap-4 text-white border-l border-gold-metallic/50 pl-6 h-12">
                    <div className="text-3xl font-bold font-display">5★</div>
                    <div className="text-[9px] leading-tight opacity-70 uppercase tracking-widest font-semibold">
                      Rating Profesional<br />Vendor Terbaik Garut
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Info Columns */}
          <section className="col-span-12 lg:col-span-5 flex flex-col gap-6 h-full">
            {/* Organizer Card (Now on top) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dusty-rose rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden h-1/2 group shadow-xl"
            >
              <div className="flex justify-between items-start relative z-10 mb-6">
                <div className="bg-cool-slate/10 p-4 rounded-2xl backdrop-blur-md border border-cool-slate/10">
                  <Calendar className="w-6 h-6 text-cool-slate" />
                </div>
                <span className="text-cool-slate/60 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Wedding Organizer</span>
              </div>
              <h2 className="text-cool-slate text-3xl lg:text-4xl font-display mb-2">Sawadina Organizer</h2>
              <p className="text-cool-slate/80 text-[11px] mb-8 font-medium tracking-wide">Professional Planner & On-the-day Service</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-cool-slate text-[11px] font-medium uppercase tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-gold-metallic"></div>
                  One Day Service (5-8 Crew)
                </div>
                <div className="flex items-center gap-3 text-cool-slate text-[11px] font-medium uppercase tracking-wider">
                  <div className="w-2 h-2 rounded-full bg-gold-metallic"></div>
                  Premium Package Include Venue
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center bg-white px-8 py-4 rounded-2xl shadow-sm border border-cool-slate/5 relative z-10">
                <div className="text-cool-slate font-bold text-sm tracking-tight">Mulai Rp 3.000.000</div>
                <Link 
                  to="/organizer" 
                  className="bg-cool-slate text-white text-[10px] px-6 py-2.5 rounded-full uppercase font-bold tracking-widest hover:bg-emerald-deep transition-colors"
                >
                  Cek Katalog
                </Link>
              </div>
              <img 
                src={IMAGES.wedding[4]} 
                className="absolute -right-12 -top-12 w-48 h-48 object-cover rounded-full opacity-10 grayscale-0 mix-blend-multiply group-hover:scale-110 transition-transform" 
                alt="Organizer Decor"
              />
            </motion.div>

            {/* Documentation Card (Now on bottom) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-sage-green rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative overflow-hidden h-1/2 group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start relative z-10 mb-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md border border-white/20">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Dokumentasi</span>
              </div>
              <h2 className="text-white text-3xl lg:text-4xl font-display mb-2">Hakuna Picture</h2>
              <p className="text-white/80 text-xs mb-8 italic font-light tracking-wide">"Setiap jepretan adalah cerita yang abadi."</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <div className="text-[10px] uppercase opacity-60 text-white tracking-widest mb-2 font-bold">Silver Package</div>
                  <div className="text-2xl font-bold font-display text-white">Rp 2.0jt</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                  <div className="text-[10px] uppercase opacity-60 text-white tracking-widest mb-2 font-bold">Gold Wedding</div>
                  <div className="text-2xl font-bold font-display text-white">Rp 4.0jt</div>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-center bg-white px-8 py-4 rounded-2xl shadow-sm border border-emerald-deep/5 relative z-10">
                <div className="text-emerald-deep font-bold text-sm tracking-tight">Mulai Rp 2.000.000</div>
                <Link 
                  to="/documentation" 
                  className="bg-emerald-deep text-white text-[10px] px-6 py-2.5 rounded-full uppercase font-bold tracking-widest hover:bg-gold-metallic transition-colors"
                >
                  Cek Katalog
                </Link>
              </div>
              <img 
                src={IMAGES.prewed[0]} 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-36 h-36 object-cover rounded-full opacity-20 mix-blend-overlay grayscale group-hover:opacity-40 transition-opacity" 
                alt="Documentation Preview"
              />
            </motion.div>
          </section>
        </div>

        {/* Restore Informational Sections */}
        {/* Intro Section */}
        <section className="py-24 px-4 bg-white rounded-[3rem] shadow-sm mb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-emerald-deep">
                Vendor Wedding Terbaik dari <span className="text-gold-metallic">Garut</span>
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed font-body">
                Sawadina Wedding adalah solusi lengkap untuk kebutuhan hari bahagia Anda. 
                Berbasis di Garut, kami menghadirkan profesionalisme dan kreativitas 
                untuk memastikan setiap detail pernikahan Anda berjalan sempurna.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2 border-l-2 border-gold-metallic pl-6">
                  <span className="text-4xl font-display font-bold text-emerald-deep">500+</span>
                  <p className="text-cool-slate text-sm font-bold uppercase tracking-wider">Momen Terabadikan</p>
                </div>
                <div className="space-y-2 border-l-2 border-gold-metallic pl-6">
                  <span className="text-4xl font-display font-bold text-emerald-deep">10+</span>
                  <p className="text-cool-slate text-sm font-bold uppercase tracking-wider">Tahun Pengalaman</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mt-12 lg:mt-0"
            >
              <img 
                src={IMAGES.wedding[1]} 
                alt="Sawadina Team" 
                className="rounded-[2.5rem] shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gold-metallic rounded-[2.5rem] z-0"></div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Highlight */}
        <section className="py-24 px-4 mb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-display font-bold text-emerald-deep mb-2">Momen Terindah</h2>
                <p className="text-cool-slate italic">Setiap detik berharga, terabadikan dengan sempurna.</p>
              </div>
              <Link to="/documentation" className="text-emerald-deep font-bold underline underline-offset-8 decoration-gold-metallic">
                Lihat Galeri Lengkap
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...IMAGES.wedding, ...IMAGES.prewed, ...IMAGES.engagement].map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg"
                >
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 px-4 bg-emerald-deep rounded-[3rem] text-center mb-12">
          <div className="max-w-3xl mx-auto space-y-10">
            <Star className="w-12 h-12 text-gold-metallic mx-auto opacity-50" />
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
              "Your journey to forever starts with a single, perfectly planned moment."
            </h2>
            <div className="flex items-center justify-center space-x-6">
              <div className="h-px w-16 bg-gold-metallic/50"></div>
              <span className="font-display font-bold text-gold-metallic tracking-widest text-lg uppercase">SAWADINA TEAM</span>
              <div className="h-px w-16 bg-gold-metallic/50"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
