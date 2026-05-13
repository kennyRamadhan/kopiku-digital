# KopiKu Digital

> Static marketing + pre-order mock website for KopiKu Digital — a warung kopi modern di Cikarang Selatan.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Live demo:** TBD — deploy to Vercel and update this line

---

## About

KopiKu Digital adalah proyek tugas mata kuliah Technopreneurship, Program Studi Teknik Informatika, Universitas Pelita Bangsa, Semester Genap TA 2025/2026.

Website ini adalah implementasi front-end dari business proposal KopiKu Digital — sebuah konsep warung kopi modern berbasis teknologi yang menggabungkan pengalaman menikmati kopi berkualitas dengan kemudahan pemesanan digital.

## Features

- 🏠 **Home** — Hero, value props (skip antri, loyalty, coworking, harga jelas), dan menu favorit
- ☕ **Menu** — 24 menu items dengan kategori filter (Kopi, Non-Kopi, Cemilan, Bundle) dan add-to-cart
- 🛒 **Pre-Order** — Cart, pickup time selector, checkout form, dan payment method mock (QRIS, GoPay, OVO, Transfer)
- 📖 **Tentang** — Visi, misi, dan tim
- 📍 **Kontak** — Alamat, jam buka, sosial, embedded Google Maps, dan contact form

Pre-order flow adalah mock-only — tidak ada transaksi real, tidak ada backend, tidak ada payment gateway. Cart state persist di localStorage.

## Tech stack

| Layer      | Choice                                            |
| ---------- | ------------------------------------------------- |
| Build tool | Vite 6                                            |
| UI         | React 19                                          |
| Language   | TypeScript 5 (strict)                             |
| Styling    | Tailwind CSS 3                                    |
| Routing    | React Router 6                                    |
| State      | React Context API                                 |
| Icons      | lucide-react                                      |
| Fonts      | Fraunces (serif) + Inter (sans), via Google Fonts |
| Deploy     | Vercel                                            |

## Getting started

### Prerequisites

- Node.js 20 or later
- npm 10 or later

### Install & run

```bash
git clone https://github.com/kennyRamadhan/kopiku-digital.git
cd kopiku-digital
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Available scripts

| Script            | Purpose                                   |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR            |
| `npm run build`   | Type-check + production bundle to `dist/` |
| `npm run preview` | Preview production build locally          |
| `npm run lint`    | Run ESLint on all TS/TSX files            |
| `npm run format`  | Run Prettier on the repo                  |

## Project structure

```
src/
├── components/
│   ├── ui/              Reusable primitives (Button, Card, Input, Badge, etc.)
│   ├── layout/          Navbar, Footer, RootLayout
│   ├── home/            Hero, ValueProps, FeaturedMenu
│   ├── menu/            MenuFilter, MenuCard
│   ├── order/           CartItem, OrderSummary, CheckoutForm, etc.
│   ├── about/           AboutHero, VisionMission, TeamGrid
│   └── contact/         InfoCards, MapEmbed, ContactForm
├── context/             CartContext (localStorage-persisted)
├── data/                Static seed data (menu, team, photos, copy)
├── hooks/               useCart
├── lib/                 Utilities (cn, formatRupiah) and constants
├── pages/               5 route components (Home, Menu, Order, About, Contact)
├── types/               Domain types (MenuItem, CartItem, TeamMember)
└── router.tsx           React Router configuration
```

## Design system

**Palette** — warm & cozy coffee aesthetic:

| Token    | Hex       | Role                                      |
| -------- | --------- | ----------------------------------------- |
| Espresso | `#3D2817` | Primary text, button bg, headings         |
| Roast    | `#6F4E37` | Secondary text, subtle borders            |
| Caramel  | `#C68B59` | Accents, hover, badges, dark-section CTAs |
| Cream    | `#F5E6D3` | Text on dark bg, pill backgrounds         |
| Beige    | `#FAF6F0` | Page background                           |
| Charcoal | `#2C1810` | Body text                                 |

**Typography** — Fraunces (display serif) for headings, Inter for body and UI.

**Layout** — Mobile-first responsive. Breakpoints at 640px, 768px, 1024px, 1200px.

## Deployment

This is a static SPA. Deploy to Vercel, Netlify, GitHub Pages, or any static host.

For **Vercel**: the `vercel.json` at repo root configures SPA fallback rewrites. Just import the repo into Vercel — it auto-detects Vite. Zero config needed.

For other hosts: ensure your host serves `index.html` for all unknown routes (SPA fallback).

## Screenshots

> TBD — capture screenshots after deploy and link them here.

## Scope & non-goals

This is intentionally a **frontend-only mock**. Out of scope for v1:

- Real payment gateway integration
- Backend API / database
- User authentication
- Real-time order tracking
- Admin dashboard
- Native mobile app (proposal mentions one — separate project)
- Multi-language UI
- Dark mode
- Automated testing

These could be added as future iterations if the business validates and scales.

## Credits

- Business proposal: KopiKu Digital team, Universitas Pelita Bangsa, Semester Genap TA 2025/2026
- Dosen pengampu: Arif Tri Widiyatmoko, S.T., M.Sc.
- Website implementation: Kenny Ramadhan
- Stock photography: [Unsplash](https://unsplash.com/) — credit to individual photographers via their photo IDs

## License

Educational project. No commercial use without permission.

---

Built with ☕ in Cikarang.
