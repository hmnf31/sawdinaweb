import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Sawadina WO', path: '/organizer' },
    { name: 'Hakuna Picture', path: '/documentation' },
  ];

  return (
    <nav className="bg-emerald-deep/95 backdrop-blur-md text-white px-6 md:px-12 py-4 flex justify-between items-center shrink-0 fixed top-0 left-0 w-full z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-3 group">
        <div className="w-10 h-10 border-2 border-gold-metallic flex items-center justify-center rotate-45 transition-transform group-hover:rotate-0">
          <span className="-rotate-45 font-bold text-gold-metallic text-xl group-hover:rotate-0">S</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold tracking-widest uppercase font-display leading-tight">Sawadina</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold-metallic">Premium Wedding Vendor Garut</span>
        </div>
      </Link>

      <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-light">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "hover:text-gold-metallic transition-colors pb-1",
              location.pathname === link.path ? "border-b-2 border-gold-metallic text-gold-metallic" : ""
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a 
          href={`https://wa.me/6281219994575?text=${encodeURIComponent('Halo Sawadina Wedding, saya ingin reservasi dan konsultasi mengenai paket pernikahan. Mohon informasinya.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block bg-gold-metallic text-emerald-deep px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity text-center"
        >
          Reservasi Sekarang
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gold-metallic">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-emerald-deep border-b border-gold-metallic/20 p-6 flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "hover:text-gold-metallic transition-colors",
                  location.pathname === link.path ? "text-gold-metallic" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
