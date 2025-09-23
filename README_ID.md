# Portfolio CV - Ghazi Rasyid Surya Bara

Website portfolio profesional yang dibangun menggunakan React, TypeScript, Vite, dan Lightswind UI Library.

## 📋 Persyaratan Sistem

Sebelum memulai, pastikan Anda telah menginstall:
- **Node.js** versi 16.0.0 atau lebih tinggi
- **npm** atau **yarn** package manager

## 🚀 Cara Instalasi

### 1. Clone atau Download Project

Jika sudah memiliki folder project, lewati langkah ini. Jika belum:
```bash
git clone <repository-url>
cd portfolio-cv-lightswind
```

### 2. Install Dependencies

Buka terminal di folder project dan jalankan:

```bash
npm install
```

atau jika menggunakan yarn:

```bash
yarn install
```

### 3. Menjalankan Development Server

Untuk menjalankan website di lokal komputer Anda:

```bash
npm run dev
```

atau dengan yarn:

```bash
yarn dev
```

Website akan berjalan di `http://localhost:5173`

## 🖼️ Cara Mengganti Foto Profil

Ada 2 cara untuk mengganti foto profil:

### Cara 1: Mengganti File Foto (Rekomendasi)
1. Siapkan foto baru Anda (format JPG, PNG, atau WebP)
2. Rename foto Anda menjadi `profile.jpg`
3. Copy dan replace file di folder `public/profile.jpg`

### Cara 2: Menggunakan File Config
1. Letakkan foto baru di folder `public` (misal: `public/foto-baru.jpg`)
2. Buka file `src/config/profile.ts`
3. Ubah nilai `profileImage`:
   ```typescript
   profileImage: "/foto-baru.jpg"
   ```

### Cara 3: Menggunakan URL External
1. Buka file `src/config/profile.ts`
2. Ubah nilai `profileImage` dengan URL foto:
   ```typescript
   profileImage: "https://example.com/foto-anda.jpg"
   ```

## 📝 Cara Mengubah Informasi Profile

Edit file `src/config/profile.ts` untuk mengubah:
- Nama
- Title/Jabatan
- Lokasi
- Email
- Nomor Telepon
- Alamat

## 🏗️ Build untuk Production

Untuk membuat versi production yang siap deploy:

```bash
npm run build
```

atau dengan yarn:

```bash
yarn build
```

Hasil build akan tersimpan di folder `dist/`

### Preview Build Lokal

Untuk melihat hasil build di lokal:

```bash
npm run preview
```

## 📦 Deployment

### Deploy ke Vercel (Rekomendasi - GRATIS)

#### Cara 1: Deploy via CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login ke Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Ikuti instruksi di terminal

#### Cara 2: Deploy via GitHub
1. Push project ke GitHub
2. Buka https://vercel.com
3. Klik "Import Project"
4. Connect dengan GitHub repository Anda
5. Klik "Deploy"

### Deploy ke Netlify (GRATIS)

#### Cara 1: Drag & Drop
1. Build project: `npm run build`
2. Buka https://app.netlify.com
3. Drag folder `dist` ke area drop

#### Cara 2: Via Git
1. Push ke GitHub
2. Login ke Netlify
3. Klik "New site from Git"
4. Pilih repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

### Deploy ke GitHub Pages (GRATIS)

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Tambahkan di `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Tambahkan di `vite.config.ts`:
   ```typescript
   base: '/<nama-repository>/'
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Deploy ke Hosting Traditional (cPanel/FTP)

1. Build project:
   ```bash
   npm run build
   ```

2. Upload semua isi folder `dist/` ke public_html atau folder root hosting Anda

### Deploy ke Firebase Hosting (GRATIS dengan limit)

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize:
   ```bash
   firebase init hosting
   ```

4. Pilih/buat project
5. Set public directory ke: `dist`
6. Configure as SPA: `Yes`

7. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 🛠️ Troubleshooting

### Error: Module not found
```bash
npm install
```

### Port 5173 sudah digunakan
Edit `vite.config.ts` dan tambahkan:
```typescript
server: {
  port: 3000 // atau port lain yang tersedia
}
```

### Build error
1. Hapus node_modules dan package-lock.json
2. Install ulang:
   ```bash
   npm install
   ```

## 📱 Responsive Design

Website ini sudah responsive dan akan otomatis menyesuaikan dengan:
- 📱 Mobile (320px - 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1024px+)

## 🎨 Customisasi Warna

Untuk mengubah warna tema, edit file `src/App.css` atau file CSS component yang relevan.

## 📄 Lisensi

Project ini menggunakan template dari Lightswind UI Library.

## 🤝 Dukungan

Jika ada pertanyaan atau butuh bantuan:
- Email: ghazirasyidsuryabara12@gmail.com
- Phone: 088224632037

---

**Dibuat dengan ❤️ menggunakan React + Vite + Lightswind UI**