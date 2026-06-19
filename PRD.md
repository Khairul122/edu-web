# PRD — AmvaChem Website Revision
**Versi:** 1.0  
**Tanggal:** 19 Juni 2026  
**Repository:** https://github.com/Khairul122/edu-web  
**Live URL:** https://edu-web-alpha.vercel.app  
**Referensi Revisi:** `website.pdf` (13 halaman instruksi client)

---

## 1. RINGKASAN PROYEK

AmvaChem adalah platform edukasi kimia berbasis warisan kuliner Sabah. Revisi ini bertujuan untuk:
- Menambah halaman-halaman baru yang diminta client
- Memperluas konten Module 1 & 2
- Memperbaiki navigasi header
- Mengubah tampilan statis menjadi dinamis dengan reusable components
- Memastikan semua halaman responsive (mobile-first)
- **TIDAK mengubah tampilan yang sudah ada** — hanya menambah & memperbaiki

---

## 2. ANALISA CODEBASE EXISTING

### 2.1 Struktur File Saat Ini
```
edu-web/
├── index.html              ← Homepage (KEEP, minor nav update)
├── module-ambuyat.html     ← Module 1 (UPDATE: tambah sections, fix dash)
├── lab.html                ← Lab page (KEEP, no changes)
├── community.html          ← Community page (KEEP, no changes)
├── header.js               ← Custom <custom-header> component (UPDATE: +2 nav buttons)
├── footer.js               ← Custom <custom-footer> component (KEEP)
├── bottom-navbar.js        ← Mobile bottom nav (KEEP)
├── animations.js           ← Scroll animations (KEEP)
├── apply-animations.js     ← Animation apply helper (KEEP)
├── apply-footer.js         ← Footer apply helper (KEEP)
├── shared.css              ← Shared styles (KEEP, minor additions)
├── tailwind-config.js      ← Tailwind theme config (KEEP)
├── DESIGN.md               ← Design system reference (KEEP)
└── vercel.json             ← Deployment config (KEEP)
```

### 2.2 File Baru yang Harus Dibuat
```
edu-web/
├── lessons.html            ← NEW: Halaman Active Modules
├── module-hinava.html      ← NEW: Module 2 Hinavah & Protein Denaturation
├── sabah-food-heritage.html← NEW: Sabah Food Heritage page
├── knowledge-check.html    ← NEW: Knowledge Check standalone page
└── data/
    ├── modules.js          ← NEW: Reusable module data (DRY pattern)
    └── quiz.js             ← NEW: Reusable quiz data
```

### 2.3 Design System (dari DESIGN.md)
| Token | Value |
|-------|-------|
| Primary (Earth Brown) | `#442a22` |
| Secondary (Ocean Blue) | `#00639a` |
| Tertiary (Lime Green) | `#8ec64c` |
| Background (Sago Beige) | `#fbfbe2` |
| Font Headline | Montserrat 600–700 |
| Font Body | Inter 400 |
| Font Code/Label | JetBrains Mono 500 |
| Border Radius Card | `rounded-xl` (16px) |
| Glass Card | `rgba(255,255,255,0.7)` + `backdrop-blur-md` |
| Max Container | 1280px |

### 2.4 Komponen Reusable yang Sudah Ada
- `<custom-header active-page="home">` — header dengan nav links
- `<custom-footer>` — footer
- `<bottom-navbar active-page="home">` — mobile bottom navigation
- CSS classes: `.glass-card`, `.linangkit-divider`, `.pattern-overlay`
- Animasi: `data-animate="up|left|right"`, `data-delay="1|2|3"`

---

## 3. IMAGE SOURCES

Semua gambar menggunakan link dari Google AIDA public yang sudah ada di codebase.

| Fungsi | URL |
|--------|-----|
| Hero (Ambuyat viscous) | `https://lh3.googleusercontent.com/aida-public/AB6AXuA_e4eeOnuYMbD2tketZzEzDY1OEmcMXKFIqn8xexjoADHHLqfgvaQi_IP2E--emjHkCMnUnxQEYhgzmSWlnicoWL8KmGsyZzl1aQXZZyO5pMDkcgEdkW-diaO2CybxbUqQw3OO6UFp0ehMxBOo8ehiiGN41vezrEaXsY8oCMCjmwu4FCNBz9FzarPm51V3wUmBTpxF2EY5SwebqnZ443zBJp3JAFj0JNULrrECYCwuEQcStuiga1ayvlOrdg5m3wTAs3wM99Isf71H` |
| Module 1 Card (Ambuyat bowl) | `https://lh3.googleusercontent.com/aida-public/AB6AXuCTgcIEhXgdk_haQiEP8UZMpM0qUXWq4imavs8-3ml-UXvBjhWAVXB28AYCifnYkvKye9hOIaZRTyTW96KgilPnOD_BG-rgOn4nfDvmo3tXlqRMUVrAabOQaevyp5vsGQKU_u5hOK3eO73s0v3n7ojcXkTAUzPRefh6CSw-b2_9JIulUcAavlXBSHhHr84GxIy9Hcj3lDZq3F7SgFKBaG3FLFAM3_Ez1_f8Lc_FsmWfa-eUvb-E6mgo4Wrg249DkJmtd94TBGqBvHmY` |
| Module 2 Card (Hinava fish) | `https://lh3.googleusercontent.com/aida-public/AB6AXuDNKG-p5-rNi7L42H27SiTPUOx1t5N8RNHeOGsEIkfLwxKdNx4uJ-2N6unEgUeKdrrnzp6DiWfCQ3vwU4YIOYLrDNTe8RE6rmxrtzL9cSkYA9TS-SIPZsMlthh_ASZmlEYC398SWcGlQbh3K4z_XBNAtl9EIWIf22YURfnXOZonSjFnhGQJT21qMhIQCpXJmfMjLsCKCXyi7P49izQvK6jnkCoTjUJ6bk1ykwEISIi7JbfxZo6AlevdfC9jD5zEYE9IqE21unVO5nMn` |
| What is Ambuyat (module banner) | `https://lh3.googleusercontent.com/aida-public/AB6AXuDDbaR4iiv44h9CdkM_MhutL1FmpZhE-y8oO9TMNrnxuOR5P0hHWEai_pheaOpSfI_DFz-_J533w1Tbpx4WXcGiKdTCJoOUbGu7zeaoQfMVNziRiavspqSa50X4NR_A0P39-vcfFJhpfxGJPDwNh9XRp4q828F8w5QUPtUYlsd5xhtslFENee-lnm6D_IcJVOAdgs7g_paGFSD8kbky3f06_EWVP240AuooR_Jiooi9PgO2m1jWixt22PKyRAM4kVX_F4ihrJftAOf3` |
| Heritage Elder (Sabah gallery) | `https://lh3.googleusercontent.com/aida-public/AB6AXuBsymIpv8oKqcO3hLSG7nhERQ7-YLOw7B3rBxe4ZbTXwtXQEDgyVoYu5yZDbixckXfWqO2cQXnsQZVbzx69S3jGwcXb933DDrfDS5asR283w2SuEZ9oPa2N4s2-XgO8HL1Xfcxt_GGztdabQ91h_4zcJpQG27LmabUxejxdeALobWhtRaa-4AVn4g5PxPtfjG8ydd3nyBpAH3XL_nu6abdBqVCkmglMHVlr30OtQUumJQ5lGbop5tTV_BjxaV33_lIdKIvR_B4225qH` |
| Hinava Ingredients | `https://lh3.googleusercontent.com/aida-public/AB6AXuA5UbcX8S0XzcAShi2mvGXoT6k1x0Jk_9HAr1welLPbrS9WUJywdn7Hxk3ZlMXRyUuJ3G15HN7SQnWiAvb-SEtlrDv0MPTfSOvUtOkJkan8ebsL1YuevFeqfj-BBMuQMkxQHbSERqeR-AlKI1e6cfZP0cDFkZ2XFibqqCIRY4BWB16L0TgVzSaNPs189X-A9OKgcL1DYX5gzOZd5bw7hM_Mrs55EmthrU5TeTDTaj7DymjGWI39nHj2_p1ezNpo_AkUgHSndZxV2njV` |
| Traditional Kitchen Steam | `https://lh3.googleusercontent.com/aida-public/AB6AXuBoeGhjB-7yRi2iheQnlAFbWNUnTANg2pdP_ytLfoTDt1yYH439v3MzDynIxXDEOGPEpvmQ3NpOO4bCB5Sv4Nym99KDShcS84GOT8ZJC1U2jzzHvdro6zOx4aJPRN7y2Akh6lOs6CNHIKvKmS08ZdZPM_N5gviQPwg68TgbCPPweqVFQ-gUHkSUSQSjSICVh-vRakZs40O24XKrFdvqUJsRRU6-E93gDOZXTIOXs41CM7Qsgn1Na-ugMOh0vCJQ8Cc2z8pQ4nXDW-W4` |
| Virtual Lab | `https://lh3.googleusercontent.com/aida-public/AB6AXuA0bfrSerksqShAqVejWyZMhCjZWaDSKzUYIbZkKxuImvyDyvZPx_NQ-707kg97cry_Kj1enUCXsnGgjuZtZtZcFqD0jNgl_CHBHiz_iA6V4XdaUBvNUjRDmx886oIR-E_ttZsLzDPdFYWwz8He8lfBpN_dalFXffzWKpCWD87pljjp7mUiOP_JMHsxJGxK4ftyjTJlX-N7IkAQ7pbCTksUItzpEN0VX2yAZx8d_NG-2qzVmFaIDis0luO6zn5yQjCgiEPhFJ-pkT5M` |

---

## 4. PERUBAHAN DETAIL PER FILE

---

### 4.1 `header.js` — UPDATE NAVBAR

**Apa yang berubah:**
1. Logo + nama "AmvaChem" → geser ke posisi paling kiri (kurangi padding kiri)
2. Profile icon → geser ke posisi paling kanan (kurangi padding kanan)
3. Tambah 2 nav button baru di sisi kanan navbar, sebelum profile icon:
   - `Knowledge Check` → link ke `knowledge-check.html`
   - `Sabah Food Heritage` → link ke `sabah-food-heritage.html`

**Posisi navbar akhir (kiri → kanan):**
```
[Logo + AmvaChem]    [Home] [Lessons] [Lab]    [Search]  [Knowledge Check]  [Sabah Food Heritage]  [Profile]
```

**Spesifikasi teknis:**
- Tambah `active-page="knowledge-check"` dan `active-page="sabah-food-heritage"` support di komponen
- Mobile view: tombol "Knowledge Check" dan "Sabah Food Heritage" masuk ke hamburger menu atau bottom-navbar
- Gunakan class yang sama dengan nav link yang sudah ada untuk konsistensi

**Code snippet perubahan pada header.js:**
```javascript
// Tambah di dalam nav links array / render function
{ label: 'Knowledge Check', href: 'knowledge-check.html', page: 'knowledge-check' },
{ label: 'Sabah Food Heritage', href: 'sabah-food-heritage.html', page: 'sabah-food-heritage' },
```

---

### 4.2 `index.html` — UPDATE MINOR (Homepage)

**Apa yang berubah:**
1. Module 1 "Resume →" button: `onclick="window.alert(...)"` → `onclick="window.location.href='module-ambuyat.html'"`
2. Module 2 "Explore →" button: `onclick="window.alert(...)"` → `onclick="window.location.href='module-hinava.html'"`
3. Navbar "Lessons" link: sudah ada, pastikan href = `lessons.html`

**Yang TIDAK boleh diubah:** seluruh konten visual, layout, sections, gambar.

---

### 4.3 `module-ambuyat.html` — UPDATE MAJOR (Module 1)

#### 4.3.1 Fix Dash → Comma (PDF hal. 5)

Di dalam temperature slider labels, ganti:
```html
<!-- SEBELUM -->
<span>40°C</span>
<span id="temp-label">70°C (Critical)</span>
<span>100°C</span>

<!-- SESUDAH: Ganti dash dengan comma di teks label -->
<span>40°C,</span>
<span id="temp-label">70°C (Gelatinized),</span>
<span>100°C</span>
```

Juga di dalam JavaScript `tempSlider`, ganti semua `"°C (..."` dengan koma di awal bila ada dash:
```javascript
// SEBELUM
if(tempLabel) tempLabel.innerText = val + "°C (Solid)";
// SESUDAH (hilangkan atau ganti separator)
if(tempLabel) tempLabel.innerText = val + "°C (Solid)";
// Pastikan tidak ada karakter " - " pada display suhu
```

#### 4.3.2 Tambah Section Baru (scroll ke bawah) — PDF hal. 6, 7, 8

Tambah 3 section baru di bawah quiz section yang sudah ada:

---

**SECTION A: THE CHEMISTRY OF AMBUYAT** (PDF hal. 6)
```html
<!-- Layout: md:grid-cols-4, same as index.html "Science in Every Bite" -->
<section class="bg-surface-container-low py-stack-lg px-margin-mobile md:px-margin-desktop">
  <div class="max-w-container-max mx-auto">
    
    <!-- Title -->
    <div class="mb-stack-md text-center">
      <h2 class="font-headline-md text-headline-md text-primary mb-2">
        The Chemistry of Ambuyat
      </h2>
      <div class="linangkit-divider mx-auto w-48 mb-4"></div>
    </div>

    <!-- Bento Grid: col-span-2 + col-span-2 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
      
      <!-- INTRODUCTION OF AMBUYAT (md:col-span-2) -->
      <div class="md:col-span-2 glass-card p-8 rounded-xl flex flex-col justify-center">
        <span class="material-symbols-outlined text-4xl text-primary mb-4">restaurant</span>
        <h3 class="font-headline-sm text-headline-sm text-primary mb-4">
          Introduction of Ambuyat
        </h3>
        <p class="text-on-surface-variant mb-3">
          Ambuyat is a traditional food commonly consumed in Sabah and Sarawak. 
          It is made from sago starch extracted from the sago palm (Metroxylon sagu).
        </p>
        <p class="text-on-surface-variant">
          When mixed with hot water, the starch forms a sticky and elastic texture 
          known as Ambuyat.
        </p>
      </div>

      <!-- THE SAGO PALM (md:col-span-2, full remaining width) -->
      <div class="md:col-span-2 glass-card p-6 rounded-xl border-t-4 border-secondary">
        <div class="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
          <span class="material-symbols-outlined text-secondary">park</span>
        </div>
        <h4 class="font-bold text-primary mb-4">The Sago Palm</h4>
        
        <!-- About Sago -->
        <div class="mb-4">
          <h5 class="font-label-md text-label-md text-secondary mb-2">About Sago</h5>
          <ul class="space-y-1 text-sm text-on-surface-variant">
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-secondary">fiber_manual_record</span>
              Scientific name: <em>Metroxylon sagu</em>
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-secondary">fiber_manual_record</span>
              Rich source of carbohydrates
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-secondary">fiber_manual_record</span>
              Grows well in swampy areas
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-secondary">fiber_manual_record</span>
              Resistant to climate change
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined text-sm text-secondary">fiber_manual_record</span>
              Important for food security
            </li>
          </ul>
        </div>
        
        <!-- Cultural Importance -->
        <div class="bg-secondary/5 rounded-lg p-4">
          <h5 class="font-label-md text-label-md text-secondary mb-2">Cultural Importance</h5>
          <p class="text-sm text-on-surface-variant">
            Sago has been a staple food source for many communities in Sabah and 
            Sarawak for generations.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

**SECTION B: CHEMISTRY OF SAGO STARCH + NATURAL POLYMERS** (PDF hal. 7)
```html
<section class="py-stack-lg px-margin-mobile md:px-margin-desktop">
  <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
    
    <!-- CHEMISTRY OF SAGO STARCH -->
    <div class="glass-card p-6 rounded-xl border-t-4 border-primary">
      <h4 class="font-bold text-primary mb-2">Chemistry of Sago Starch</h4>
      <p class="text-sm text-on-surface-variant mb-4 font-semibold">What is Starch?</p>
      <p class="text-sm text-on-surface-variant mb-4">
        Starch is a natural carbohydrate composed of thousands of glucose molecules. 
        It consists of two major components:
      </p>
      
      <!-- Amylose -->
      <div class="bg-secondary/5 rounded-lg p-3 mb-3">
        <h5 class="font-label-md text-secondary mb-1">Amylose</h5>
        <ul class="text-sm text-on-surface-variant space-y-1">
          <li>• Linear structure</li>
          <li>• Contributes to firmer gel formation</li>
        </ul>
      </div>
      
      <!-- Amylopectin -->
      <div class="bg-tertiary-fixed-dim/10 rounded-lg p-3">
        <h5 class="font-label-md text-tertiary-fixed-dim mb-1">Amylopectin</h5>
        <ul class="text-sm text-on-surface-variant space-y-1">
          <li>• Branched structure</li>
          <li>• Provides viscosity and elasticity</li>
        </ul>
      </div>
    </div>

    <!-- NATURAL POLYMERS -->
    <div class="glass-card p-6 rounded-xl border-t-4 border-tertiary-fixed-dim">
      <h4 class="font-bold text-primary mb-2">Natural Polymers</h4>
      <p class="text-sm text-on-surface-variant mb-4 font-semibold">What is a Polymer?</p>
      <p class="text-sm text-on-surface-variant mb-4">
        A polymer is a large molecule made up of repeating smaller units called monomers.
      </p>
      
      <!-- In Ambuyat -->
      <div class="bg-primary/5 rounded-lg p-3 mb-3">
        <h5 class="font-label-md text-primary mb-1">In Ambuyat</h5>
        <ul class="text-sm text-on-surface-variant space-y-1">
          <li>• Monomer: Glucose</li>
          <li>• Polymer: Starch</li>
        </ul>
      </div>
      
      <!-- Applications -->
      <div class="bg-secondary/5 rounded-lg p-3">
        <h5 class="font-label-md text-secondary mb-1">Applications</h5>
        <ul class="text-sm text-on-surface-variant space-y-1">
          <li>• Food products</li>
          <li>• Biodegradable materials</li>
          <li>• Industrial applications</li>
        </ul>
      </div>
    </div>

  </div>
</section>
```

---

**SECTION C: STARCH GELATINIZATION + HYDROGEN BONDING** (PDF hal. 8)
```html
<section class="bg-surface-container-low py-stack-lg px-margin-mobile md:px-margin-desktop">
  <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter">
    
    <!-- STARCH GELATINIZATION -->
    <div class="glass-card p-6 rounded-xl border-t-4 border-secondary">
      <h4 class="font-bold text-primary mb-2">Starch Gelatinization</h4>
      <p class="text-sm text-on-surface-variant mb-1 font-semibold">What is Gelatinization?</p>
      <p class="text-sm text-on-surface-variant mb-4">
        Gelatinization is the process in which starch granules absorb water and swell when heated.
      </p>
      
      <p class="text-sm font-semibold text-primary mb-2">Gelatinization Process in Ambuyat</p>
      <!-- Step timeline compact -->
      <div class="space-y-2">
        <!-- Steps rendered dynamically via renderSteps() function -->
        <div class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
          <p class="text-sm text-on-surface-variant">Hot water is added to sago starch.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
          <p class="text-sm text-on-surface-variant">Starch granules absorb water.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
          <p class="text-sm text-on-surface-variant">Granules swell and expand.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
          <p class="text-sm text-on-surface-variant">Hydrogen bonds are disrupted.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
          <p class="text-sm text-on-surface-variant">A viscous paste is formed.</p>
        </div>
        <div class="flex items-start gap-3">
          <span class="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
          <p class="text-sm text-on-surface-variant font-semibold text-primary">Ambuyat is produced.</p>
        </div>
      </div>
    </div>

    <!-- HYDROGEN BONDING -->
    <div class="glass-card p-6 rounded-xl border-t-4 border-tertiary-fixed-dim">
      <h4 class="font-bold text-primary mb-4">Hydrogen Bonding</h4>
      
      <p class="text-sm font-semibold text-primary mb-2">What Happens During Gelatinization?</p>
      <ul class="space-y-2 mb-6">
        <li class="flex items-start gap-2 text-sm text-on-surface-variant">
          <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim mt-0.5">check_circle</span>
          Existing hydrogen bonds within starch molecules break.
        </li>
        <li class="flex items-start gap-2 text-sm text-on-surface-variant">
          <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim mt-0.5">check_circle</span>
          Water molecules interact with starch chains.
        </li>
        <li class="flex items-start gap-2 text-sm text-on-surface-variant">
          <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim mt-0.5">check_circle</span>
          New hydrogen bonds are formed.
        </li>
      </ul>
      
      <p class="text-sm font-semibold text-primary mb-2">Effects</p>
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-tertiary-fixed-dim/10 rounded-lg p-3 text-center">
          <span class="material-symbols-outlined text-tertiary-fixed-dim text-2xl mb-1">opacity</span>
          <p class="text-xs text-on-surface-variant font-medium">Increased Viscosity</p>
        </div>
        <div class="bg-secondary/10 rounded-lg p-3 text-center">
          <span class="material-symbols-outlined text-secondary text-2xl mb-1">water_drop</span>
          <p class="text-xs text-on-surface-variant font-medium">Sticky Texture</p>
        </div>
        <div class="bg-primary/10 rounded-lg p-3 text-center">
          <span class="material-symbols-outlined text-primary text-2xl mb-1">compress</span>
          <p class="text-xs text-on-surface-variant font-medium">Elastic Consistency</p>
        </div>
      </div>
    </div>

  </div>
</section>
```

---

### 4.4 `lessons.html` — NEW FILE (Halaman Active Modules)

**Trigger:** Click "Lessons" di navbar → buka halaman ini.

**Konten:**
- Navbar `active-page="lessons"`
- Section "Active Modules" dengan 2 module cards
- Module 1 card → link ke `module-ambuyat.html`
- Module 2 card → link ke `module-hinava.html`

**Layout spec:**
```html
<!DOCTYPE html>
<html class="light" lang="en">
<head>
  <!-- same head as index.html -->
  <title>AmvaChem — Lessons</title>
</head>
<body class="bg-background text-on-surface font-body-md">
  <custom-header active-page="lessons"></custom-header>
  
  <main class="pattern-overlay min-h-screen">
    <section class="py-stack-lg px-margin-mobile md:px-margin-desktop">
      <div class="max-w-container-max mx-auto">
        
        <!-- Header row -->
        <div class="flex justify-between items-end mb-stack-md">
          <div>
            <h2 class="font-headline-md text-headline-md text-primary">Active Modules</h2>
            <p class="text-on-surface-variant">Continue your chemical journey</p>
          </div>
          <div class="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
            <span class="material-symbols-outlined text-tertiary text-sm icon-filled">workspace_premium</span>
            <span class="text-xs font-bold text-tertiary">3 Badges</span>
          </div>
        </div>

        <!-- Module Cards Grid: flex-col md:flex-row -->
        <div class="flex flex-col md:flex-row gap-gutter">
          
          <!-- MODULE 1 -->
          <a href="module-ambuyat.html" 
             class="min-w-[320px] glass-card rounded-2xl overflow-hidden flex-1 group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div class="h-48 relative overflow-hidden">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   src="[MODULE_1_IMAGE_URL]"
                   alt="Ambuyat & Gelatinization" />
              <div class="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-lg text-xs font-bold">New</div>
            </div>
            <div class="p-6">
              <h3 class="font-headline-sm text-headline-sm text-primary mb-2">
                Module 1: Ambuyat &amp; Gelatinization
              </h3>
              <div class="w-full bg-outline-variant/30 h-2 rounded-full mb-4">
                <div class="bg-secondary h-full rounded-full w-[65%] transition-all duration-700"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-xs text-on-surface-variant font-label-md">65% Completed</span>
                <span class="text-secondary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Resume <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </a>

          <!-- MODULE 2 -->
          <a href="module-hinava.html"
             class="min-w-[320px] glass-card rounded-2xl overflow-hidden flex-1 group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div class="h-48 relative overflow-hidden">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   src="[MODULE_2_IMAGE_URL]"
                   alt="Hinava & Protein Denaturation" />
            </div>
            <div class="p-6">
              <h3 class="font-headline-sm text-headline-sm text-primary mb-2">
                Module 2: Hinava &amp; Protein Denaturation
              </h3>
              <div class="w-full bg-outline-variant/30 h-2 rounded-full mb-4">
                <div class="bg-tertiary-fixed-dim h-full rounded-full w-[20%] transition-all duration-700"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-xs text-on-surface-variant font-label-md">20% Completed</span>
                <span class="text-tertiary font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  </main>

  <custom-footer></custom-footer>
  <bottom-navbar active-page="lessons"></bottom-navbar>
  <script src="header.js"></script>
  <script src="bottom-navbar.js"></script>
  <script src="animations.js"></script>
  <script src="footer.js"></script>
</body>
</html>
```

---

### 4.5 `module-hinava.html` — NEW FILE (Module 2)

**Struktur halaman (meniru module-ambuyat.html):**

1. **Page 1 — What is Hinavah?** (PDF hal. 9)
   - Label: "Cultural Context"
   - Judul: "What is Hinavah?"
   - Gambar: foto Hinavah/ikan (image URL dari section 3)
   - Caption: "Hinavah is a traditional Kadazan-Dusun dish made from raw fish marinated with lime juice, ginger, onions, and other ingredients. Unlike cooked fish, Hinavah is prepared without heat."
   - Interactive pH Simulation (mirip temperature slider tapi pH-based)

2. **Scroll Down — THE CHEMISTRY OF HINAVAH** (PDF hal. 10)
   - Grid 4 cols:
     - Left (col-span-2): "Introduction to Hinavah" 
     - Middle: "Citric Acid" (mengganti Gelatinization card)
     - Right: "pH and Acidity" (mengganti Protein Denaturation card)

3. **Scroll Further — PROTEIN DENATURATION + WHY DOES FISH LOOK COOKED? + FOOD PRESERVATION** (PDF hal. 11)
   - 3 cards horizontal:
     - Card 1: "Protein Denaturation" (5 langkah)
     - Card 2: "Why Does the Fish Look Cooked?"
     - Card 3: "Food Preservation"

**Interactive Element untuk Module 2:**
```javascript
// pH Slider (mengganti temperature slider)
// Nilai pH 2-7
// pH rendah (2-3): tampil "Highly Acidic — Protein denaturation begins"
// pH sedang (4-5): tampil "Moderately Acidic — Fish texture changes"
// pH tinggi (6-7): tampil "Near Neutral — Minimal protein change"
```

**Section: Introduction to Hinavah (col-span-2)**
```
Content: What is Hinavah?
Hinavah is a traditional Kadazan-Dusun dish made from raw fish marinated with 
lime juice, ginger, onions, and other ingredients. Unlike cooked fish, Hinavah 
is prepared without heat. Instead, acid is used to alter the protein structure.
```

**Section: Citric Acid card**
```
Icon: science
Title: Citric Acid

What is Citric Acid?
Citric acid is an organic acid naturally found in citrus fruits.

Role in Hinavah:
• Lowers pH
• Changes protein structure
• Produces a sour taste
```

**Section: pH And Acidity card**
```
Icon: water_ph (atau biotech)
Title: pH and Acidity

What is pH?
pH is a measure of how acidic or basic a substance is.

In Hinavah:
The acidic environment created by lime juice initiates protein denaturation.
```

**Section: Protein Denaturation steps**
```
Step 1: Lime juice is added.
Step 2: pH decreases.
Step 3: Protein structure unfolds.
Step 4: Proteins coagulate.
Step 5: Fish becomes firm and opaque.
```

**Section: Why Does Fish Look Cooked?**
```
Although no heat is used:
• Protein structure changes
• Fish texture becomes firmer
• Fish color becomes opaque
This resembles the effects of thermal cooking.
```

**Section: Food Preservation**
```
Role of Acid:
• Slows bacterial growth
• Reduces spoilage

Role of Salt:
• Removes water from microbial cells
• Inhibits bacterial activity
```

---

### 4.6 `sabah-food-heritage.html` — NEW FILE

**Trigger:** Click "Sabah Food Heritage" button di navbar.

**Layout:** Menggunakan design yang sama dengan "Science in Every Bite" di index.html, tapi:
- Title: "Sabah Food Heritage"
- Hanya 2 cards (tidak ada Ethnoscience Learning card)
- Card 1: "Ambuyat as Cultural Heritage" (mengganti Gelatinization)
- Card 2: "Hinavah and Kadazan-Dusun Identity" (mengganti Protein Denaturation)

**Grid layout:**
```html
<!-- Full width 2-card grid (no left col-span-2 card) -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">

  <!-- AMBUYAT AS CULTURAL HERITAGE -->
  <div class="glass-card p-8 rounded-xl border-t-4 border-secondary">
    <div class="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
      <span class="material-symbols-outlined text-secondary">waves</span>
    </div>
    <h4 class="font-bold text-primary mb-2">Ambuyat as Cultural Heritage</h4>
    <p class="text-sm text-on-surface-variant mb-4">Ambuyat is more than just food.</p>
    <p class="text-sm font-semibold text-primary mb-2">It represents:</p>
    <ul class="space-y-2 text-sm text-on-surface-variant mb-4">
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-secondary">check_circle</span>
        Community identity
      </li>
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-secondary">check_circle</span>
        Social traditions
      </li>
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-secondary">check_circle</span>
        Cultural heritage
      </li>
    </ul>
    <div class="bg-secondary/5 rounded-lg p-3">
      <p class="text-sm text-on-surface-variant italic">
        It is commonly served during traditional gatherings and ceremonies.
      </p>
    </div>
  </div>

  <!-- HINAVAH AND KADAZAN-DUSUN IDENTITY -->
  <div class="glass-card p-8 rounded-xl border-t-4 border-tertiary-fixed-dim">
    <div class="w-12 h-12 rounded-lg bg-tertiary-fixed-dim/10 flex items-center justify-center mb-4">
      <span class="material-symbols-outlined text-tertiary-fixed-dim">biotech</span>
    </div>
    <h4 class="font-bold text-primary mb-2">Hinavah and Kadazan-Dusun Identity</h4>
    <p class="text-sm text-on-surface-variant mb-4">Hinavah is more than just food.</p>
    <p class="text-sm font-semibold text-primary mb-2">It reflects:</p>
    <ul class="space-y-2 text-sm text-on-surface-variant">
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">check_circle</span>
        Indigenous knowledge
      </li>
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">check_circle</span>
        Traditional food practices
      </li>
      <li class="flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">check_circle</span>
        The relationship between humans and nature
      </li>
    </ul>
  </div>

</div>
```

**Tambah hero section atas halaman:**
```html
<!-- Cultural gallery images sebagai header visual -->
<section class="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container">
  <div class="max-w-container-max mx-auto">
    <div class="flex items-center gap-4 mb-stack-md">
      <h2 class="font-headline-md text-headline-md text-primary">The Sabah Heritage</h2>
      <div class="h-[2px] flex-1 bg-outline-variant/30"></div>
    </div>
    <!-- 3 gambar gallery (sama dengan index.html) -->
    <div class="grid grid-cols-3 gap-4 mb-stack-lg">
      <img src="[ELDER_IMAGE]" class="rounded-xl w-full aspect-square object-cover" />
      <img src="[HINAVA_INGREDIENTS]" class="rounded-xl w-full aspect-square object-cover" />
      <img src="[KITCHEN_STEAM]" class="rounded-xl w-full aspect-square object-cover" />
    </div>
  </div>
</section>
```

---

### 4.7 `knowledge-check.html` — NEW FILE

**Trigger:** Click "Knowledge Check" di navbar.

**Layout:** Menggunakan design dari module-ambuyat.html (Knowledge Check section), tapi standalone.

**Soalan Quiz (total 3 questions):**

```javascript
const quizData = [
  {
    id: 1,
    question: "Why does sago starch thicken during heating?",
    options: [
      { text: "Water evaporation", correct: false },
      { text: "Starch granules swelling and bursting", correct: true },
      { text: "Cooling of the liquid", correct: false },
    ],
    explanation: "Gelatinization occurs when heat causes granules to swell with water until they rupture, creating a viscous gel network (Ambuyat)."
  },
  {
    id: 2,
    question: "Why does Ambuyat become viscous?",
    options: [
      { text: "Oxidation", correct: false },
      { text: "Fermentation", correct: false },
      { text: "Starch Gelatinization", correct: true },
      { text: "Neutralization", correct: false },
    ],
    explanation: "Starch gelatinization is the process where sago starch granules absorb water, swell, and burst when heated, releasing amylose and amylopectin to form a viscous gel."
  },
  {
    id: 3,
    question: "Which chemical process occurs during Hinavah preparation?",
    options: [
      { text: "Combustion", correct: false },
      { text: "Polymerization", correct: false },
      { text: "Protein Denaturation", correct: true },
      { text: "Electrolysis", correct: false },
    ],
    explanation: "Protein denaturation occurs when the acidic lime juice lowers the pH, causing the protein structure of the fish to unfold and coagulate — mimicking the effects of heat without cooking."
  }
];
```

**Dynamic Quiz Renderer (reusable function):**
```javascript
function renderQuiz(containerId, questions) {
  const container = document.getElementById(containerId);
  let currentQ = 0;
  let score = 0;
  
  function renderQuestion(index) {
    const q = questions[index];
    // render HTML dinamis berdasarkan data
    container.innerHTML = `
      <div class="mb-4">
        <div class="flex justify-between text-sm text-on-surface-variant mb-2">
          <span>Question ${index + 1} of ${questions.length}</span>
          <span>Score: ${score}/${index}</span>
        </div>
        <div class="w-full bg-outline-variant/30 h-2 rounded-full mb-4">
          <div class="bg-secondary h-full rounded-full transition-all" 
               style="width: ${(index/questions.length)*100}%"></div>
        </div>
      </div>
      <p class="font-headline-sm text-headline-sm text-primary mb-4">${q.question}</p>
      <div class="space-y-3" id="options-${index}">
        ${q.options.map((opt, i) => `
          <button onclick="checkAnswer(this, ${opt.correct}, '${opt.text}', ${index})"
            class="quiz-btn w-full p-4 text-left rounded-lg border border-outline-variant hover:bg-secondary/10 transition-colors flex items-center group">
            <span class="w-6 h-6 rounded-full border border-primary mr-3 flex items-center justify-center font-label-sm text-label-sm group-hover:bg-primary group-hover:text-white transition-colors">
              ${String.fromCharCode(65 + i)}
            </span>
            <span class="font-body-md">${opt.text}</span>
          </button>
        `).join('')}
      </div>
      <div id="feedback-${index}" class="mt-4 p-3 rounded-lg hidden">
        <p id="feedback-text-${index}" class="font-label-sm text-label-sm leading-relaxed"></p>
      </div>
    `;
  }
  
  renderQuestion(0);
}
```

---

## 5. REUSABLE FUNCTIONS & PATTERNS

### 5.1 Pattern: renderStepTimeline(steps, accentColor)
```javascript
// Reusable untuk module-ambuyat dan module-hinava
function renderStepTimeline(containerId, steps, accentColor = 'secondary') {
  const container = document.getElementById(containerId);
  container.innerHTML = steps.map((step, i) => `
    <div class="flex items-start gap-3">
      <span class="w-6 h-6 rounded-full bg-${accentColor} text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
        ${i + 1}
      </span>
      <p class="text-sm text-on-surface-variant">${step}</p>
    </div>
  `).join('');
}
```

### 5.2 Pattern: renderInfoCard(containerId, data)
```javascript
// Reusable untuk kartu-kartu konten
function renderInfoCard(containerId, { title, description, bullets, icon, accentColor }) {
  // render glass-card dengan data yang diberikan
}
```

### 5.3 Pattern: initInteractiveSlider(sliderId, config)
```javascript
// Generalize temperature slider menjadi reusable
// Digunakan di module-ambuyat (temperature) dan module-hinava (pH)
function initInteractiveSlider(sliderId, config) {
  const { min, max, unit, stages, onUpdate } = config;
  // setup event listener, update visuals berdasarkan config
}
```

### 5.4 Pattern: checkAnswer(btn, isCorrect, explanation)
```javascript
// Sudah ada di module-ambuyat.html, di-extract ke quiz.js
// Export sebagai fungsi global yang dipakai di module-ambuyat, module-hinava, dan knowledge-check
```

---

## 6. DATA FILES (DRY PRINCIPLE)

### 6.1 `data/modules.js`
```javascript
// Centralized module data
const MODULES_DATA = [
  {
    id: 1,
    title: "Module 1: Ambuyat & Gelatinization",
    href: "module-ambuyat.html",
    progress: 65,
    badge: "New",
    image: "[MODULE_1_IMAGE_URL]",
    progressColor: "secondary",
    actionText: "Resume",
    description: "The chemistry of sago starch and gelatinization process"
  },
  {
    id: 2,
    title: "Module 2: Hinava & Protein Denaturation",
    href: "module-hinava.html",
    progress: 20,
    badge: null,
    image: "[MODULE_2_IMAGE_URL]",
    progressColor: "tertiary-fixed-dim",
    actionText: "Explore",
    description: "Acid-induced protein denaturation in traditional Kadazan-Dusun cuisine"
  }
];
```

### 6.2 `data/quiz.js`
```javascript
// Semua soalan quiz (reusable di knowledge-check.html, module-ambuyat.html, module-hinava.html)
const QUIZ_DATA = { ... };
```

---

## 7. MOBILE RESPONSIVENESS REQUIREMENTS

Semua halaman baru HARUS:

| Breakpoint | Behaviour |
|------------|-----------|
| Mobile `<768px` | Single column, cards stack vertically |
| Tablet `768–1024px` | 2 columns grid |
| Desktop `>1024px` | Full layout sesuai design |

**Navbar Mobile:**
- "Knowledge Check" dan "Sabah Food Heritage" tambahkan ke dalam bottom-navbar.js atau hamburger menu
- Bottom navbar tetap menampilkan: Home, Lessons, Lab, (Search), (Profile)
- Dua tombol baru tampil di hamburger/drawer di mobile

**Cards Mobile:**
- Module cards: full width, stacked
- Section grids: 1 col → 2 col → 4 col

---

## 8. DYNAMIC & INTERACTIVE FEATURES

### 8.1 Module 1 (module-ambuyat.html)
- [x] Temperature slider sudah ada → fix comma display
- [ ] Animated step reveal on scroll (gunakan IntersectionObserver)
- [ ] Progress bar animation on page load
- [ ] Accordion toggle untuk sub-sections panjang (mobile)

### 8.2 Module 2 (module-hinava.html)
- [ ] pH Slider interaktif (mirip temperature slider)
  - Nilai: 2-7
  - Visual: molekul protein "melarut" atau "mengembang"
  - Label: "Highly Acidic", "Moderately Acidic", "Near Neutral"
- [ ] Animated step reveal
- [ ] Fish "texture change" visual indicator

### 8.3 Knowledge Check (knowledge-check.html)
- [ ] Progress bar per soalan
- [ ] Animated feedback (correct/incorrect)
- [ ] Score summary di akhir
- [ ] "Try Again" button
- [ ] Konfetti animation bila score 100%

### 8.4 Sabah Food Heritage (sabah-food-heritage.html)
- [ ] Parallax hero gallery images
- [ ] Cards with hover glow effect
- [ ] Smooth scroll anchor links

---

## 9. URUTAN IMPLEMENTASI (PRIORITAS)

```
FASE 1 — Foundation (Paling Penting)
├── 1a. Update header.js: +2 nav buttons, fix positioning
├── 1b. Update index.html: fix module card hrefs
└── 1c. Buat lessons.html

FASE 2 — Module Pages
├── 2a. Update module-ambuyat.html: fix comma, tambah 3 sections baru
└── 2b. Buat module-hinava.html (full page)

FASE 3 — New Pages
├── 3a. Buat sabah-food-heritage.html
└── 3b. Buat knowledge-check.html

FASE 4 — Data & Reusability
├── 4a. Buat data/modules.js
├── 4b. Buat data/quiz.js
└── 4c. Refactor duplicate code ke shared functions

FASE 5 — Polish & Mobile
├── 5a. Test semua breakpoints
├── 5b. Tambah interactive animations
└── 5c. Verify bottom-navbar update
```

---

## 10. CHECKLIST FILE BARU

| File | Status | Notes |
|------|--------|-------|
| `header.js` | 🔄 UPDATE | +2 nav links, fix position |
| `index.html` | 🔄 UPDATE | Fix module href, lessons href |
| `module-ambuyat.html` | 🔄 UPDATE | Fix comma, +3 new sections |
| `lessons.html` | ➕ NEW | Active Modules page |
| `module-hinava.html` | ➕ NEW | Full Module 2 page |
| `sabah-food-heritage.html` | ➕ NEW | Heritage cultural page |
| `knowledge-check.html` | ➕ NEW | Standalone quiz page |
| `data/modules.js` | ➕ NEW | Centralized module data |
| `data/quiz.js` | ➕ NEW | Centralized quiz data |
| `bottom-navbar.js` | 🔄 MINOR | Support new nav items mobile |

---

## 11. CATATAN PENTING

1. **Jangan ubah**: design system, warna, typography, index.html sections (hero, about, gallery, academic), lab.html, community.html
2. **Gunakan** class yang sudah ada: `.glass-card`, `.linangkit-divider`, `.pattern-overlay`, `data-animate`
3. **Semua gambar** gunakan URL dari section 3 di atas (sudah ada di codebase)
4. **Setiap file baru** harus include: `header.js`, `bottom-navbar.js`, `animations.js`, `footer.js`
5. **active-page attribute** pada `<custom-header>` harus sesuai dengan halaman yang aktif
6. **Vercel deployment**: tambahkan routes baru di `vercel.json` jika diperlukan

---

## 12. AGENT.md — PROGRESS TRACKING

Setelah selesai mengerjakan setiap task, update file `AGENT.md` di root repository dengan format berikut:

```markdown
# AGENT.md — AmvaChem Revision Progress

## Status: 🔄 In Progress

## Task Checklist

### FASE 1 — Foundation
- [ ] 1a. header.js: tambah Knowledge Check button
- [ ] 1a. header.js: tambah Sabah Food Heritage button
- [ ] 1a. header.js: fix logo ke far left
- [ ] 1a. header.js: fix profile icon ke far right
- [ ] 1b. index.html: Module 1 href → module-ambuyat.html
- [ ] 1b. index.html: Module 2 href → module-hinava.html
- [ ] 1c. Buat lessons.html ← full page

### FASE 2 — Module Pages
- [ ] 2a. module-ambuyat.html: fix dash → comma pada temp label
- [ ] 2a. module-ambuyat.html: tambah Section A (Chemistry of Ambuyat)
- [ ] 2a. module-ambuyat.html: tambah Section B (Sago Starch + Natural Polymers)
- [ ] 2a. module-ambuyat.html: tambah Section C (Starch Gelatinization + H-Bonding)
- [ ] 2b. Buat module-hinava.html: What is Hinavah section
- [ ] 2b. Buat module-hinava.html: Chemistry of Hinavah section
- [ ] 2b. Buat module-hinava.html: Protein Denaturation + Why Fish + Food Preservation

### FASE 3 — New Pages
- [ ] 3a. Buat sabah-food-heritage.html
- [ ] 3b. Buat knowledge-check.html: 3 soalan quiz

### FASE 4 — Reusability
- [ ] 4a. Buat data/modules.js
- [ ] 4b. Buat data/quiz.js
- [ ] 4c. Refactor quiz function ke shared file

### FASE 5 — Polish & Mobile
- [ ] 5a. Test mobile view semua halaman baru
- [ ] 5b. pH Slider interactive module-hinava.html
- [ ] 5c. bottom-navbar.js update untuk halaman baru
- [ ] 5d. knowledge-check.html: score summary + try again

## Progress Log
<!-- Isi setelah tiap task selesai -->
| Tanggal | Task | Status |
|---------|------|--------|
| - | - | - |

## Bugs & Issues
<!-- Catat bugs yang ditemukan selama development -->

## Notes
<!-- Catatan teknis penting -->
```
```

---

*PRD ini dibuat berdasarkan analisa `website.pdf` (13 halaman) dan codebase `https://github.com/Khairul122/edu-web`. Setiap perubahan tidak merusak tampilan yang sudah ada.*
