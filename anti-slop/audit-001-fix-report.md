# Antislop Audit 001 Fix Report - 2026-11-09

Project: Progress Skaterpark
Scope: Perbaikan selektif sesuai instruksi pengguna (menjalankan nomor 1, 2, 3, 4, 7, 8, 10, 11, 19, 21, 23, 25; mempertahankan nomor 5, 6, 9, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24).

---

## Status Per Item

| No | Aturan | Status | Catatan |
|---|---|---|---|
| 1 | R-02 (Copywriting) | RESOLVED | Hapus 3 em dash (`—`) di `README.md`, ganti tanda baca standar. |
| 2 | R-24 (Navigation) | RESOLVED | Perbaiki tautan mati `#` di footer `index.html` dan `checkout.html`. |
| 3 | R-26 (Interactive Elements) | RESOLVED | Ganti tag `<a>` tanpa href pada penulis berita; ubah link Karir menjadi label jujur '(Segera Hadir)'. |
| 4 | R-32 (Keyboard Accessibility) | RESOLVED | Tambah `tabindex="0"`, `:focus`, `:focus-within`, dan kelas `.is-flipped` (via Enter/Space/Focus) pada kartu toko 3D & tombol beli. |
| 5 | R-32 (Keyboard Accessibility) | SKIPPED (User) | Sesuai instruksi: `.form-control:focus` dipertahankan apa adanya. |
| 6 | R-36 & R-38 (Content) | SKIPPED (User) | Sesuai instruksi: konten berita lama dipertahankan apa adanya. |
| 7 | R-39 (Accessible Semantics) | RESOLVED | Tambah landmark `<header>` dan `<main>`, rapikan hierarki heading sehingga hanya ada tepat satu `<h1>` di `index.html`. |
| 8 | R-39 (Accessible Semantics) | RESOLVED | Tambah landmark `<header>` dan satu `<h1>` utama di `checkout.html`. |
| 9 | R-39 (Accessible Semantics) | SKIPPED (User) | Sesuai instruksi: `body { -webkit-user-select: none; }` dipertahankan. |
| 10 | R-39 (Accessible Semantics) | RESOLVED | Tambah aturan global `cursor: pointer` pada seluruh kontrol interaktif aktif di `css/base.css`. |
| 11 | R-39 (Accessible Semantics) | RESOLVED | Tambah atribut `title="Peta Lokasi Progress Skatepark Tegal"` pada elemen `<iframe>`. |
| 12 | R-39 (Accessible Semantics) | SKIPPED (User) | Sesuai instruksi: animasi dan aturan motion dipertahankan apa adanya. |
| 13 | R-40 (Performance) | SKIPPED (User) | Sesuai instruksi: tag `<img>` dipertahankan tanpa penambahan width/height. |
| 14 | R-40 (Performance) | SKIPPED (User) | Sesuai instruksi: background hero CSS dipertahankan. |
| 15 | R-04 (Icons) | SKIPPED (User) | Sesuai instruksi: ikon bintang `ri-star-s-fill` / `★` pada judul section dipertahankan. |
| 16 | R-04 (Icons) | SKIPPED (User) | Sesuai instruksi: peluru kartu remi keriting (`♣`) pada kartu produk dipertahankan. |
| 17 | R-06 (Typography) | SKIPPED (User) | Sesuai instruksi: 4 font eksternal dipertahankan. |
| 18 | R-10 (Glassmorphism) | SKIPPED (User) | Sesuai instruksi: dosis backdrop-filter dipertahankan. |
| 19 | R-19 (Animations) | RESOLVED | Ganti trik `translateX(10000%)` pada menu navigasi desktop dengan transisi vertikal teratur. |
| 20 | R-22 (Illustrations) | SKIPPED (User) | Sesuai instruksi: GIF Tenor di belakang kartu produk dipertahankan. |
| 21 | R-03 / R-11 (Tap Target) | RESOLVED | Tingkatkan target sentuh item tabbar mobile menjadi minimal 48px (`min-height: 48px`). |
| 22 | R-15 (CTA) | SKIPPED (User) | Sesuai instruksi: teks tombol template ("Kirim", "Lihat selengkapnya", "Baca lebih lanjut") dipertahankan. |
| 23 | R-16 (Copywriting) | RESOLVED | Ganti slogan hero serba kapital menjadi tagline natural ("Fasilitas Bermain & Kursus Skateboard Kota Tegal"). |
| 24 | R-29 (Color Palette) | SKIPPED (User) | Sesuai instruksi: warna ikon sosial footer dipertahankan. |
| 25 | R-37 (Design Direction) | RESOLVED | Buat berkas `DESIGN.md` yang menetapkan identitas visual dan dial `ENERGY 2 / RHYTHM 2 / MOTION 2`. |
