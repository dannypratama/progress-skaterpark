## Konteks

**Repo:** `dannypratama/progress-skaterpark` — project pertama (landing page skatepark, Tegal). 1 commit, 5 file, live di `https://progress-skaterpark.netlify.app/`.

**Hasil audit (via GitHub, belum clone karena plan mode):**

**Bug nyata:**
1. `script.js` kosong (isinya cuma `// script.js`) dan **tidak pernah di-load** di HTML — semua interaksi & form mati.
2. **Bootstrap mismatch** di `index.html`: CSS **5.3.2** tapi JS **4.6.2** + jQuery slim + Popper 1.x → komponen BS5 (carousel, dsb) tidak berfungsi benar.
3. `checkout.html` load `../assets/dist/js/bootstrap.bundle.min.js` → **404** (folder `assets/` tidak ada di repo).
4. Nav mati: link menuju `./` / `#`, `navbar-expand-sm` tanpa tombol hamburger → mobile nav rusak (hanya tabbar bawah yang jalan).
5. **Google Maps embed menunjuk "Progress Services Inc." di Cleveland, Ohio** — padahal alamat di Tegal, Indonesia.
6. Email tidak konsisten: tampilan `info@progressskatepark.com`, mailto ke `dannypratamaf@gmail.com`.
7. `checkout.html` tidak punya form checkout sama sekali — cuma 3 thumbnail link (Shopee/IG/WA) + 3 heading kosong.
8. Ikon dobel (Remix 3.5.0 + Tabler `@latest` unpinned), `alt="..."` placeholder.

**Kode berantakan:**
9. `index.html` ~2000 baris dengan markup Gallery & Shop **diduplikasi utuh** untuk desktop vs mobile.
10. `style.css` ~890 baris monolitik: CSS variables dideklarasi tapi sering dilewati (hardcode warna), float+flex campur, hack `translateX(10000%)` & gallery di-`rotate(-90deg)`, magic numbers, kelas kriptik (`.slower1`, `.faster`), rule duplikat, breakpoint tunggal 750px, ada rule mati (`@keyframes fadeIn` tak terpakai).
11. Repo hygiene: README 3 baris, tanpa `.gitignore`, tanpa LICENSE.

**Yang sudah bagus (dipertahankan):** nol `!important`, ada `:root` variables, SRI hash di Bootstrap CSS, konsep 3D flip-card & gallery scroll kreatif.

**Keputusan user:** fix + refactor menyeluruh, **visual tetap 100% identik**, form pakai validasi JS saja (tanpa backend), **commit lokal saja** (user push sendiri belakangan).

---

## Langkah Eksekusi

### 0. Clone
`git clone https://github.com/dannypratama/progress-skaterpark.git C:\Users\Danny\Music\progress-skaterpark` (folder kosong yang sudah disiapkan). Tidak menyentuh folder lain — termasuk repo git tak sengaja di `C:\Users\Danny`.

### 1. Repo hygiene
- Rewrite `README.md`: deskripsi, fitur, struktur file, cara menjalankan (`open index.html` atau `npx serve`), link live, credit.
- Tambah `.gitignore` + `LICENSE` (MIT).

### 2. Fix bug (perilaku dipertahankan)
- `index.html`: ganti trio JS Bootstrap 4 (jQuery+Popper+bundle) → satu `bootstrap@5.3.2` bundle (match CSS).
- `checkout.html`: ganti path `../assets/...` → CDN yang sama.
- Rapikan nav: link ke `index.html#home` dst, footer link yang mati dihapus/dipointing.
- Ganti Maps embed → lokasi skatepark Tegal; samakan email.
- Isi `alt` yang kosong; hapus/pindahkan `onfocus`/`onblur` inline ke `script.js`.

### 3. Refactor HTML
- Dedupe markup Gallery & Shop desktop vs mobile **sejauh bisa tanpa mengubah visual** (markup sama, presentasi via CSS). Jika ternyata DOM-nya terlalu beda, fallback: pertahankan duplikasi tapi rapi. *Visual parity > dedup.*
- Semantik & a11y: `<nav>`/`<section>` proper, label untuk semua input, aria-label, struktur heading.

### 4. Refactor CSS
- Pecah `style.css` (~890 baris) jadi modul: `css/base.css` (tokens/reset), `layout.css`, `components.css` (navbar/cards/flip), `responsive.css` — di-link berurutan.
- Terapkan `:root` tokens konsisten (warna/shadow), normalisasi sintaks media query, hapus rule mati, dedupe deklarasi.
- **Jangan mengubah** transform magic (`rotate(-90deg)`, `10000%`, dsb) — itu yang menghasilkan visual sekarang; cukup diberi komentar penjelas. Breakpoint 750px dipertahankan (bukan diganti ke 768 Bootstrap) demi visual parity.

### 5. Isi `script.js` (vanilla, tanpa dependency)
- Validasi form booking + contact: required, format email/telepon, tanggal tidak lampau, tampilkan Bootstrap `invalid-feedback` + alert sukses, `preventDefault` (tanpa submit backend).
- Pindahkan date/time type-swap dari inline handler.
- Cek semua komponen yang butuh JS jalan normal di BS5.

### 6. Verifikasi
- Buka `index.html` & `checkout.html` via browser automation (desktop + mobile viewport), bandingkan visual dengan live site `progress-skaterpark.netlify.app` di section kunci (navbar, home, gallery, shop, news, contact, footer) — parity check.
- Cek console: tidak ada 404/error, form validation muncul, carousel berjalan (sebelumnya mati karena mismatch BS4/BS5).

### 7. Commit lokal (berurutan, konvensional)
1. `fix: align Bootstrap JS to v5, repair 404 script path, dead nav links, wrong map embed`
2. `refactor(html): dedupe responsive markup, semantic + a11y fixes`
3. `refactor(css): split into modules, consistent tokens, remove dead rules`
4. `feat(js): form validation & interaction handling`
5. `docs: expand README, add .gitignore and LICENSE`

Tidak push — user yang push ke GitHub belakangan (Netlify baru update setelah push, jadi live site aman selama pengerjaan).

---

## Di luar scope (catatan ke depan)
- Rename `checkout.html` → `contact.html` (menjaga link lama yang mengarah ke `checkout.html`).
- Re-host gambar dari `i.ibb.co.com` ke repo/CDN sendiri.
- Backend form (Netlify Forms) — bisa diaktifkan kapan saja nanti.
