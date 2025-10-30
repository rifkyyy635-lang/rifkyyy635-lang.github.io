# Haven & Home - Furniture E-Commerce Website

## Project Overview

Website e-commerce untuk furniture store dengan nama "Haven & Home". Proyek ini adalah React application dengan Vite, menggunakan TypeScript, Tailwind CSS, dan shadcn/ui components.

**Repository**: https://github.com/rifkyyy635-lang/rifkyyy635-lang.github.io

## Tech Stack

- **Frontend Framework**: React 18 dengan TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Package Manager**: npm/bun

## Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Footer.tsx     # Footer component
│   │   └── ProductCard.tsx # Product card component
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Homepage
│   │   ├── Shop.tsx       # Shop page
│   │   ├── ProductDetail.tsx
│   │   ├── About.tsx      # About page
│   │   └── Contact.tsx    # Contact page
│   ├── data/              # Mock data
│   │   └── products.ts    # Product data
│   ├── assets/            # Images and static assets
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml         # Auto-deploy to GitHub Pages
└── vite.config.ts         # Vite configuration

```

## Features

- **Multi-page website**: Home, Shop, Product Detail, About, Contact
- **Responsive design**: Mobile-first design dengan Tailwind CSS
- **Product catalog**: Display produk furniture dengan gambar dan detail
- **Navigation**: Sticky navbar dengan mobile menu
- **Shopping cart icon**: (siap untuk integrasi)
- **Search functionality**: (siap untuk integrasi)

## Development Setup

### Running on Replit

1. Click tombol **Run** atau gunakan command:
   ```bash
   npm run dev
   ```

2. Website akan tersedia di webview Replit pada port 5000

3. Hot reload aktif - perubahan akan langsung terlihat

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

### Konfigurasi Sudah Dilakukan

✅ Vite config sudah diset untuk GitHub Pages (base: '/')
✅ GitHub Actions workflow sudah dibuat
✅ Server development berjalan di port 5000 untuk Replit

### Cara Deploy ke GitHub Pages

1. **Aktifkan GitHub Pages**:
   - Buka https://github.com/rifkyyy635-lang/rifkyyy635-lang.github.io/settings/pages
   - Di "Source", pilih **GitHub Actions**

2. **Push code ke GitHub**:
   ```bash
   git add .
   git commit -m "Setup for GitHub Pages"
   git push origin main
   ```

3. **Cek deployment**:
   - Buka tab "Actions" di repository
   - Lihat workflow "Deploy to GitHub Pages"
   - Setelah selesai, website live di: **https://rifkyyy635-lang.github.io**

Untuk panduan lengkap, lihat file `GITHUB_PAGES_SETUP.md`

## Recent Changes

### October 30, 2025
- ✅ Migrated from Lovable to Replit environment
- ✅ Configured Vite for GitHub Pages deployment
- ✅ Created GitHub Actions workflow for auto-deployment
- ✅ Updated server configuration to port 5000 for Replit webview
- ✅ Added @assets alias for image imports
- ✅ Project verified and running successfully

## User Preferences

- **Language**: Indonesian (Bahasa Indonesia)
- **Deployment Target**: GitHub Pages (user site)
- **Development Environment**: Replit

## Product Categories

Current product categories in the app:
- Living Room (Sofa, Coffee Table, Accent Chair)
- Bedroom (Bed Frame)
- Dining (Dining Table)
- Lighting (Table Lamp)

## Next Steps / Ideas

Potential features untuk development selanjutnya:
- [ ] Shopping cart functionality
- [ ] Product search and filtering
- [ ] User authentication
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Backend API untuk product management
- [ ] Payment integration
- [ ] Order management system

## Notes

- Base path diset ke `/` karena ini adalah user GitHub Pages site
- Semua image assets ada di `src/assets/`
- Component UI menggunakan shadcn/ui dengan Radix UI primitives
- Dark mode support tersedia (via next-themes)
- Form validation menggunakan React Hook Form + Zod
