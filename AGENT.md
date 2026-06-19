# AGENT.md — AmvaChem Revision Progress Tracker
> File ini diupdate setiap kali satu task selesai dikerjakan.  
> Repository: https://github.com/Khairul122/edu-web  
> PRD Reference: PRD.md  
> Last Updated: 19 Juni 2026

---

## 🔄 Status: ✅ IMPLEMENTASI SELESAI (Fase 1–5)

---

## 📋 TASK CHECKLIST

### FASE 1 — Foundation
- [x] **1a.** `header.js` → Tambah tombol **Knowledge Check** (href: `knowledge-check.html`)
- [x] **1a.** `header.js` → Tambah tombol **Sabah Food Heritage** (href: `sabah-food-heritage.html`)
- [x] **1a.** `header.js` → Logo + "AmvaChem" geser ke far left (kurangi padding kiri)
- [x] **1a.** `header.js` → Profile icon geser ke far right (kurangi padding kanan)
- [x] **1a.** `header.js` → Support `active-page="knowledge-check"` dan `active-page="sabah-food-heritage"`
- [x] **1a.** `header.js` → Mobile dropdown menu untuk 2 nav button baru (hamburger toggle)
- [x] **1a.** `bottom-navbar.js` → Tambah item Quiz & Heritage, href Lessons diarahkan ke `lessons.html`
- [x] **1b.** `index.html` → Module 1 "Resume" button: `onclick="window.location.href='module-ambuyat.html'"`
- [x] **1b.** `index.html` → Module 2 "Explore" button: `onclick="window.location.href='module-hinava.html'"`
- [x] **1b.** `index.html` → Navbar "Lessons" link verify → `lessons.html` (via header.js)
- [x] **1c.** Buat `lessons.html` → Full Active Modules page, render via `MODULES_DATA`

### FASE 2 — Module Pages
- [x] **2a.** `module-ambuyat.html` → Fix dash " - " → comma " , " pada temperature label display (HTML + JS)
- [x] **2a.** `module-ambuyat.html` → Tambah Section A: **THE CHEMISTRY OF AMBUYAT** (Introduction + Sago Palm)
- [x] **2a.** `module-ambuyat.html` → Tambah Section B: **CHEMISTRY OF SAGO STARCH + NATURAL POLYMERS**
- [x] **2a.** `module-ambuyat.html` → Tambah Section C: **STARCH GELATINIZATION + HYDROGEN BONDING**
- [x] **2a.** Fix bug HTML lama: `</section>` ganda/orphan di section Knowledge Check
- [x] **2b.** Buat `module-hinava.html` → Page 1: What is Hinavah? + pH Slider interaktif (2–7)
- [x] **2b.** Buat `module-hinava.html` → Section: THE CHEMISTRY OF HINAVAH (Intro, Citric Acid, pH and Acidity)
- [x] **2b.** Buat `module-hinava.html` → Section: Protein Denaturation + Why Fish Look Cooked + Food Preservation
- [x] **2b.** Buat `module-hinava.html` → Knowledge Check quiz mini (1 soal, sama pola dengan module-ambuyat)

### FASE 3 — New Pages
- [x] **3a.** Buat `sabah-food-heritage.html` (hero gallery 3 gambar, grid 2 cards: Ambuyat Heritage + Hinavah Identity)
- [x] **3b.** Buat `knowledge-check.html` (3 soal dinamis, progress bar, score summary, Try Again, konfeti saat 3/3)

### FASE 4 — Reusability & DRY Code
- [x] **4a.** Buat `data/modules.js` → `MODULES_DATA` + `renderModuleCards()`
- [x] **4b.** Buat `data/quiz.js` → `QUIZ_DATA` + `renderQuiz()` dinamis dengan progress bar & feedback
- [x] **4c.** Buat `data/shared.js` → `renderStepTimeline()` dipakai module-ambuyat & module-hinava
- [x] **4d.** `lessons.html` → pakai `MODULES_DATA` via `renderModuleCards()`
- [x] **4e.** `knowledge-check.html` → pakai `QUIZ_DATA` via `renderQuiz()`

### FASE 5 — Polish & Mobile
- [x] **5a.** Static verification: semua halaman 200 OK saat diserve lokal (`http.server`)
- [x] **5b.** JS syntax check (`node --check`) untuk header.js, bottom-navbar.js, data/*.js — semua OK
- [x] **5c.** Inline `<script>` syntax check di semua halaman baru — semua OK
- [x] **5d.** HTML tag balance check (`<section>`/`</section>`) semua file — seimbang
- [x] **5e.** `bottom-navbar.js` → flex-1 width agar 5 item tidak overflow di 320–375px
- [x] **5f.** `module-hinava.html` → pH Slider animation (protein visual scale/opacity per stage)
- [x] **5g.** `knowledge-check.html` → Konfeti/celebration saat score 3/3
- [x] **5h.** Semua halaman baru pakai `data-animate` + load `animations.js`
- [x] **5i.** `vercel.json` diverifikasi — tidak perlu update (static HTML, tidak ada routing dinamis)
- [ ] **5j.** Verifikasi visual manual di browser nyata (mobile 320/375/768px + desktop 1280px) — **belum dilakukan**, chromium-cli/Playwright tidak tersedia di sandbox ini

---

## 📊 PROGRESS SUMMARY

| Fase | Total Tasks | Selesai | Progress |
|------|-------------|---------|---------|
| Fase 1 — Foundation | 11 | 11 | 100% |
| Fase 2 — Module Pages | 9 | 9 | 100% |
| Fase 3 — New Pages | 2 | 2 | 100% |
| Fase 4 — Reusability | 5 | 5 | 100% |
| Fase 5 — Polish | 10 | 9 | 90% |
| **TOTAL** | **37** | **36** | **97%** |

---

## 📝 PROGRESS LOG

| Tanggal | File | Task | Status | Notes |
|---------|------|------|--------|-------|
| 19 Jun 2026 | header.js, bottom-navbar.js | Fase 1a: nav restructure | Done | active-page baru + mobile dropdown |
| 19 Jun 2026 | index.html | Fase 1b: fix module hrefs | Done | |
| 19 Jun 2026 | lessons.html | Fase 1c: new page | Done | pakai MODULES_DATA |
| 19 Jun 2026 | module-ambuyat.html | Fase 2a: comma fix + 3 sections | Done | + fix orphan `</section>` lama |
| 19 Jun 2026 | module-hinava.html | Fase 2b: new page | Done | pH slider + denaturation flow |
| 19 Jun 2026 | sabah-food-heritage.html | Fase 3a: new page | Done | |
| 19 Jun 2026 | knowledge-check.html | Fase 3b: new page | Done | dynamic quiz + confetti |
| 19 Jun 2026 | data/modules.js, data/quiz.js, data/shared.js | Fase 4: DRY refactor | Done | |
| 19 Jun 2026 | semua file | Fase 5: verifikasi statis | Done (parsial) | browser visual test belum jalan |

---

## 🐛 BUGS & ISSUES

| # | File | Deskripsi Bug | Status | Fix |
|---|------|---------------|--------|-----|
| 1 | module-ambuyat.html | `</section>` Knowledge Check ditutup prematur, menyisakan `</section>` orphan di akhir blok `<script>` (bug lama, sebelum revisi ini) | Fixed | Hapus closing tag prematur agar `<section>` membungkus `<script>` dengan benar |

---

## 💡 TECHNICAL NOTES

### Pola Komponen Header
```javascript
// header.js menggunakan Custom Elements API
// Tag: <custom-header active-page="home">
// active-page yang didukung: home, lessons, lab, knowledge-check, sabah-food-heritage
// 2 nav button baru tampil di desktop nav kanan; di mobile masuk ke #header-mobile-menu (toggle via #header-menu-btn)
```

### Bottom Navbar
```javascript
// bottom-navbar.js sekarang punya 5 item: Home, Lessons, Lab, Quiz, Heritage
// Item pakai class "flex-1 max-w-[64px]" (bukan w-16 fixed) agar tidak overflow di viewport 320px
```

### Reusable Data & Functions
```
data/shared.js   → renderStepTimeline(containerId, steps, accentColor)
data/modules.js  → MODULES_DATA + renderModuleCards(containerId, modules)
data/quiz.js     → QUIZ_DATA + renderQuiz(containerId, questions, onComplete)
```

### Image URL Pattern
```
Semua gambar pakai: https://lh3.googleusercontent.com/aida-public/[HASH]
Jangan download/simpan lokal. Gunakan URL langsung.
```

### Tailwind Config
```javascript
// tailwind-config.js sudah define semua custom tokens
// Jangan tambah inline style untuk warna yang sudah ada di design system
// Contoh benar: class="text-primary bg-secondary/10"
// Contoh salah: style="color: #442a22"
```

### Animasi
```html
<!-- Pattern animasi yang dipakai di semua halaman -->
data-animate="up"     // slide dari bawah ke atas
data-animate="left"   // slide dari kiri
data-animate="right"  // slide dari kanan
data-delay="1"        // delay 100ms
data-delay="2"        // delay 200ms
data-delay="3"         // delay 300ms
```

### Script Loading Order
```html
<!-- Selalu load dengan urutan ini di bagian bawah <body> -->
<script src="header.js"></script>
<script src="bottom-navbar.js"></script>
<script src="animations.js"></script>
<script src="footer.js"></script>
<!-- Tambahan jika halaman butuh data terpusat: -->
<script src="data/shared.js"></script>   <!-- module-ambuyat, module-hinava -->
<script src="data/modules.js"></script>  <!-- lessons.html -->
<script src="data/quiz.js"></script>     <!-- knowledge-check.html -->
```

### Glass Card Pattern
```html
<!-- Gunakan class ini untuk semua cards baru -->
<div class="glass-card p-6 rounded-xl">
  <!-- content -->
</div>
<!-- glass-card didefinisikan di shared.css:
     backdrop-filter: blur(12px);
     background: rgba(255,255,255,0.7);
     border: 1px solid rgba(255,255,255,0.2);
-->
```

---

## ✅ DEFINITION OF DONE

Sebuah task dianggap **DONE** bila:
1. ✅ File tersimpan dan bisa diakses di browser
2. ⏳ Tampilan sesuai dengan screenshot di `website.pdf` — belum divalidasi visual (lihat 5j)
3. ⏳ Responsive di mobile (375px) dan desktop (1280px) — layout dibangun mobile-first, belum divalidasi visual
4. ✅ Semua link/navigation berfungsi (diverifikasi via HTTP 200 + cross-check href)
5. ✅ Animasi `data-animate` berjalan normal (pola konsisten, IntersectionObserver sama)
6. ✅ Header dan footer tampil dengan benar (custom elements dipakai konsisten)
7. ✅ Design system konsisten (warna, font, spacing dari tailwind-config.js / shared.css)

## ➡️ NEXT STEPS (rekomendasi)
- Lakukan QA visual manual di browser (desktop + mobile) untuk memastikan layout sesuai `website.pdf`, karena sandbox ini tidak punya Playwright/chromium-cli terpasang.
- Pertimbangkan menambah `data/modules.js` ke `index.html` juga jika ingin DRY penuh (saat ini index.html masih pakai card statis agar tampilan existing tidak berubah, sesuai constraint PRD §11 "Jangan ubah index.html sections").
