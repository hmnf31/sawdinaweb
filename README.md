# Sawadina Website

Proyek website resmi untuk **Sawadina Wedding** — vendor pernikahan premium berbasis di Garut, Jawa Barat. Mencakup layanan Wedding Organizer (Sawadina WO) dan Dokumentasi (Hakuna Picture).

Dibuat oleh **hmnf31**.

## Fitur

- Landing page dengan hero interaktif
- Halaman Wedding Organizer dengan daftar paket, vendor, dan venue
- Halaman Dokumentasi Hakuna Picture dengan paket dokumentasi dan galeri
- Navigasi responsif dengan mobile menu
- Integrasi WhatsApp untuk pemesanan dan konsultasi
- Animasi halus dengan Motion (Framer Motion)
- Desain modern dengan Tailwind CSS v4

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| **React 19** | Library UI |
| **TypeScript** | Bahasa pemrograman |
| **Vite 6** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **Motion** | Animasi (sebelumnya Framer Motion) |
| **React Router DOM v7** | Routing SPA |
| **Lucide React** | Ikon |
| **Vite** | Development & production build |

## Struktur Proyek

```
src/
├── main.tsx                  # Entry point React
├── App.tsx                   # Routing (/, /organizer, /documentation)
├── index.css                 # Tailwind CSS & custom theme
├── constants.ts              # Gambar & warna
├── components/
│   ├── Navbar.tsx            # Navigasi atas
│   └── Footer.tsx            # Footer
└── pages/
    ├── LandingPage.tsx       # Halaman utama
    ├── OrganizerPage.tsx     # Halaman Wedding Organizer
    └── DocumentationPage.tsx # Halaman Hakuna Picture
```

## Cara Penggunaan

**Prasyarat:** Node.js

1. Clone repositori:
   ```bash
   git clone https://github.com/hmnf31/sawdinaweb.git
   cd sawdinaweb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan dev server:
   ```bash
   npm run dev
   ```

4. Build untuk production:
   ```bash
   npm run build
   ```

5. Preview build:
   ```bash
   npm run preview
   ```

Akses di **http://localhost:3000**

## Deploy ke GitHub Pages

Proyek ini sudah terdeploy dan bisa diakses di:

**https://hmnf31.github.io/sawdinaweb/**

### Manual Deploy

1. Pastikan `base` di `vite.config.ts` sudah sesuai dengan nama repo:
   ```ts
   base: '/sawdinaweb/',
   ```

2. Pastikan `basename` di `src/App.tsx` sudah sesuai:
   ```tsx
   <Router basename="/sawdinaweb">
   ```

3. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

4. Jalankan deploy:
   ```bash
   npm run deploy
   ```

5. Di repo GitHub, buka **Settings > Pages > Branch** pilih `gh-pages` dan folder `/ (root)`.

### Catatan

- Setiap kali ada perubahan, jalankan `npm run deploy` untuk memperbarui halaman.
- Akses development lokal melalui `http://localhost:3000/sawdinaweb/`.

## Kredit

Seluruh gambar, desain, dan konten dalam proyek ini adalah hak milik **hmnf31**. Dilarang menggunakan tanpa izin.
