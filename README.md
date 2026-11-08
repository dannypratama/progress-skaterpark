# Progress Skaterpark★

Website landing page untuk **Progress Skatepark**, layanan kursus privat
skateboarding dan fasilitas taman bermain skateboard di Kota Tegal, Jawa
Tengah. Berisi profil skatepark, galeri foto, katalog deck skateboard,
berita, serta form pemesanan kursus dan kontak.

**Live:** https://progress-skaterpark.netlify.app/

## Teknologi

- HTML5 + CSS3 + JavaScript (vanilla, tanpa build step)
- [Bootstrap 5.3.2](https://getbootstrap.com/) via CDN (CSS & JS)
- Remix Icon 3.5.0
- Google Fonts: Montserrat, Rock Salt; cdnfonts: JETICK, Thoughts

## Struktur

```
├── index.html          # Halaman utama (home, about, gallery, shop, news, contact)
├── checkout.html       # Halaman kontak & channel pemesanan (Shopee, Instagram, WhatsApp)
├── css/
│   ├── base.css        # Design tokens, reset, gaya global
│   ├── layout.css      # Navbar, tab bar mobile, section home, footer
│   ├── components.css  # Galeri parallax, kartu flip 3D shop, berita
│   └── responsive.css  # Breakpoint tunggal 750px (mobile & desktop)
├── script.js           # Validasi form & interaksi (vanilla JS)
└── README.md
```

## Menjalankan

Statis: cukup buka `index.html` di browser, atau jalankan server lokal:

```bash
npx serve .
# atau
python -m http.server
```

## Catatan

- Form pemesanan dan kontak hanya melakukan validasi di browser; belum ada
  backend pengirim pesan (misal Netlify Forms).
- Gambar produk/logo di-host di i.ibb.co.com, foto di Unsplash.
- Deploy otomatis ke Netlify setiap push ke `main`.

## Author

Danny Pratama Firmansyah ([GitHub](https://github.com/dannypratama) · [Instagram](https://instagram.com/dannypratamaf))
