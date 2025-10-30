# GitHub Pages Deployment Setup

Proyek ini sudah dikonfigurasi untuk deployment otomatis ke GitHub Pages.

## Konfigurasi yang Sudah Dilakukan

### 1. Vite Configuration (`vite.config.ts`)
- **Base path**: Diset ke `/` untuk repository user site (`rifkyyy635-lang.github.io`)
- **Server**: Berjalan di port 5000 dengan host `0.0.0.0` untuk development di Replit
- **Build output**: Folder `dist` dengan assets di `dist/assets`

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Workflow otomatis yang akan:
- Trigger saat ada push ke branch `main`
- Build project menggunakan `npm run build`
- Deploy ke GitHub Pages

## Cara Mengaktifkan GitHub Pages

1. **Buka repository di GitHub**: https://github.com/rifkyyy635-lang/rifkyyy635-lang.github.io

2. **Pergi ke Settings**:
   - Klik tab "Settings" di repository
   - Scroll ke bagian "Pages" di sidebar kiri

3. **Konfigurasi GitHub Pages**:
   - **Source**: Pilih "GitHub Actions"
   - Workflow akan otomatis detect file `.github/workflows/deploy.yml`

4. **Push perubahan ke GitHub**:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

5. **Cek deployment**:
   - Buka tab "Actions" di repository
   - Lihat workflow "Deploy to GitHub Pages" sedang berjalan
   - Setelah selesai (✓), website akan tersedia di: https://rifkyyy635-lang.github.io

## Development di Replit

- Jalankan `npm run dev` atau gunakan tombol Run
- Website development akan tersedia di preview Replit pada port 5000
- Setiap perubahan akan auto-reload

## Build Manual (Optional)

Untuk build manual tanpa deploy:
```bash
npm run build
```

Output akan tersimpan di folder `dist/`

## Catatan Penting

- **Base Path**: Karena ini adalah user site (`username.github.io`), base path adalah `/`
- **Branch**: Pastikan push ke branch `main` untuk trigger deployment
- **Node Version**: GitHub Actions menggunakan Node.js 20
- **Cache**: Workflow menggunakan npm cache untuk build lebih cepat

## Troubleshooting

### Deployment Gagal
1. Cek tab "Actions" di GitHub untuk error log
2. Pastikan `package.json` dan dependencies valid
3. Test build lokal dengan `npm run build`

### Website Tidak Update
1. Clear browser cache (Ctrl+F5 atau Cmd+Shift+R)
2. Tunggu beberapa menit untuk CDN GitHub refresh
3. Cek workflow Actions sudah complete (✓)

### 404 Error
1. Pastikan GitHub Pages source sudah diset ke "GitHub Actions"
2. Pastikan build berhasil di tab Actions
3. Cek base path di `vite.config.ts` adalah `/`
