# AGENT.md — AmvaChem Revision Progress Tracker
> File ini diupdate setiap kali satu task selesai dikerjakan.  
> Repository: https://github.com/Khairul122/edu-web  
> PRD Reference: PRD_AmvaChem_Revision.md  
> Last Updated: 19 Juni 2026

---

## 🔄 Status: PLANNING — Belum mulai implementasi

---

## 📋 TASK CHECKLIST

### FASE 1 — Foundation (Mulai di sini dulu)
- [ ] **1a.** `header.js` → Tambah tombol **Knowledge Check** (href: `knowledge-check.html`)
- [ ] **1a.** `header.js` → Tambah tombol **Sabah Food Heritage** (href: `sabah-food-heritage.html`)
- [ ] **1a.** `header.js` → Logo + "AmvaChem" geser ke far left (kurangi padding kiri)
- [ ] **1a.** `header.js` → Profile icon geser ke far right (kurangi padding kanan)
- [ ] **1a.** `header.js` → Support `active-page="knowledge-check"` dan `active-page="sabah-food-heritage"`
- [ ] **1b.** `index.html` → Module 1 "Resume" button: `href="module-ambuyat.html"`
- [ ] **1b.** `index.html` → Module 2 "Explore" button: `href="module-hinava.html"`
- [ ] **1b.** `index.html` → Navbar "Lessons" link verify → `lessons.html`
- [ ] **1c.** Buat `lessons.html` → Full Active Modules page dengan 2 module cards

---

### FASE 2 — Module Pages
- [ ] **2a.** `module-ambuyat.html` → Fix dash " - " → comma " , " pada temperature label display
- [ ] **2a.** `module-ambuyat.html` → Tambah Section A: **THE CHEMISTRY OF AMBUYAT**
  - [ ] Card: Introduction of Ambuyat (md:col-span-2)
  - [ ] Card: The Sago Palm (md:col-span-2, full right)
- [ ] **2a.** `module-ambuyat.html` → Tambah Section B: **CHEMISTRY OF SAGO STARCH + NATURAL POLYMERS**
  - [ ] Card kiri: Chemistry of Sago Starch (Amylose + Amylopectin)
  - [ ] Card kanan: Natural Polymers (Polymer definition + Applications)
- [ ] **2a.** `module-ambuyat.html` → Tambah Section C: **STARCH GELATINIZATION + HYDROGEN BONDING**
  - [ ] Card kiri: Starch Gelatinization (6 steps)
  - [ ] Card kanan: Hydrogen Bonding (3 points + Effects visual cards)
- [ ] **2b.** Buat `module-hinava.html` → Page 1: **What is Hinavah?**
  - [ ] Cultural Context label
  - [ ] Gambar Hinavah (fish image)
  - [ ] Caption/description text
  - [ ] pH Slider interactive element
- [ ] **2b.** Buat `module-hinava.html` → Scroll Section: **THE CHEMISTRY OF HINAVAH**
  - [ ] Card: Introduction to Hinavah (md:col-span-2)
  - [ ] Card: Citric Acid
  - [ ] Card: pH and Acidity
- [ ] **2b.** Buat `module-hinava.html` → Scroll Section: **DENATURATION + WHY FISH + PRESERVATION**
  - [ ] Card: Protein Denaturation (5 steps)
  - [ ] Card: Why Does Fish Look Cooked?
  - [ ] Card: Food Preservation (Acid + Salt roles)

---

### FASE 3 — New Pages
- [ ] **3a.** Buat `sabah-food-heritage.html`
  - [ ] Hero/gallery section (3 gambar)
  - [ ] Title: "Sabah Food Heritage"
  - [ ] Grid 2 cards (no Ethnoscience Learning card)
  - [ ] Card: Ambuyat as Cultural Heritage
  - [ ] Card: Hinavah and Kadazan-Dusun Identity
- [ ] **3b.** Buat `knowledge-check.html`
  - [ ] Q1: "Why does sago starch thicken during heating?" → B. Starch granules swelling ✅
  - [ ] Q2: "Why does Ambuyat become viscous?" → C. Starch Gelatinization ✅
  - [ ] Q3: "Which chemical process occurs during Hinavah?" → C. Protein Denaturation ✅
  - [ ] Dynamic quiz renderer dengan progress bar
  - [ ] Score summary halaman akhir
  - [ ] "Try Again" button

---

### FASE 4 — Reusability & DRY Code
- [ ] **4a.** Buat `data/modules.js` → Centralized module data array
- [ ] **4b.** Buat `data/quiz.js` → Centralized quiz questions array
- [ ] **4c.** Extract `checkAnswer()` function ke `data/quiz.js` (shared antara halaman)
- [ ] **4d.** Extract `renderStepTimeline()` sebagai reusable function
- [ ] **4e.** `lessons.html` → pakai `MODULES_DATA` dari `data/modules.js`
- [ ] **4f.** `knowledge-check.html` → pakai `QUIZ_DATA` dari `data/quiz.js`

---

### FASE 5 — Polish & Mobile
- [ ] **5a.** Test mobile view `lessons.html` (320px, 375px, 768px)
- [ ] **5b.** Test mobile view `module-hinava.html` (320px, 375px, 768px)
- [ ] **5c.** Test mobile view `sabah-food-heritage.html`
- [ ] **5d.** Test mobile view `knowledge-check.html`
- [ ] **5e.** `bottom-navbar.js` → Tambah support navigasi halaman baru
- [ ] **5f.** `module-hinava.html` → pH Slider animation (protein visual)
- [ ] **5g.** `knowledge-check.html` → Konfetti/celebration saat score 3/3
- [ ] **5h.** Semua halaman baru → verify `data-animate` berfungsi
- [ ] **5i.** Verify `vercel.json` tidak perlu update (static HTML tidak butuh routing)

---

## 📊 PROGRESS SUMMARY

| Fase | Total Tasks | Selesai | Progress |
|------|-------------|---------|---------|
| Fase 1 — Foundation | 9 | 0 | 0% |
| Fase 2 — Module Pages | 17 | 0 | 0% |
| Fase 3 — New Pages | 10 | 0 | 0% |
| Fase 4 — Reusability | 6 | 0 | 0% |
| Fase 5 — Polish | 9 | 0 | 0% |
| **TOTAL** | **51** | **0** | **0%** |

---

## 📝 PROGRESS LOG

| Tanggal | File | Task | Status | Notes |
|---------|------|------|--------|-------|
| - | - | Belum mulai | - | - |

---

## 🐛 BUGS & ISSUES

| # | File | Deskripsi Bug | Status | Fix |
|---|------|---------------|--------|-----|
| - | - | - | - | - |

---

## 💡 TECHNICAL NOTES

### Pola Komponen Header
```javascript
// header.js menggunakan Custom Elements API
// Tag: <custom-header active-page="home">
// Tambah support active-page baru: "knowledge-check", "sabah-food-heritage", "lessons"
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
data-delay="3"        // delay 300ms
```

### Script Loading Order
```html
<!-- Selalu load dengan urutan ini di bagian bawah <body> -->
<script src="header.js"></script>
<script src="bottom-navbar.js"></script>
<script src="animations.js"></script>
<script src="footer.js"></script>
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
2. ✅ Tampilan sesuai dengan screenshot di `website.pdf`
3. ✅ Responsive di mobile (375px) dan desktop (1280px)
4. ✅ Semua link/navigation berfungsi
5. ✅ Animasi `data-animate` berjalan normal
6. ✅ Header dan footer tampil dengan benar
7. ✅ Design system konsisten (warna, font, spacing dari DESIGN.md)
