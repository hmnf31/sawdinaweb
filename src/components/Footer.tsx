import { Heart, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-10 py-8 bg-white border-t border-gray-100 flex flex-wrap justify-between items-center gap-6 mt-auto shrink-0">
      <div className="flex gap-10 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
        <div>WA: +62 812-1999-4575</div>
        <div>IG: @sawadina_wedding</div>
        <div>Email: sawadinawedding@gmail.com</div>
      </div>
      <div className="flex items-center gap-3 text-[10px] text-emerald-deep font-bold uppercase tracking-[0.15em]">
        <span>Lokasi: Garut, Jawa Barat</span>
        <div className="w-1.5 h-1.5 rounded-full bg-gold-metallic"></div>
        <span>Tersedia untuk Bandung & Sekitarnya</span>
      </div>
    </footer>
  );
}
