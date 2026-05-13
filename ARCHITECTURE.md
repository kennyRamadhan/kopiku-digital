# KopiKu Digital — Architecture

Reference document for all tech decisions, folder structure, naming, and styling conventions.

---

## Stack

| Layer | Choice | Version | Rationale |
|---|---|---|---|
| Build tool | Vite | ^6.0.0 | Fast HMR, simple config, no SSR overhead |
| UI lib | React | ^19.0.0 | Latest stable, consistent with portfolio standards |
| Language | TypeScript | ^5.6.0 | Type safety for cart/menu domain, strict mode |
| Styling | Tailwind CSS | ^3.4.0 | Utility-first, fast iteration, theme via config |
| Routing | React Router | ^6.28.0 | Industry standard, declarative routes |
| State | React Context | (built-in) | Cart-only state; no Zustand/Redux needed |
| Icons | lucide-react | ^0.460.0 | Tree-shakeable, clean line icons matching cozy aesthetic |
| Fonts | Google Fonts | (CDN) | Fraunces + Inter, loaded via `<link>` in `index.html` |
| Linter | ESLint + typescript-eslint | latest | Default Vite React-TS template config |
| Formatter | Prettier | ^3.4.0 | Single source of code style truth |
| Deploy | Vercel | — | Zero-config static SPA hosting |

**Explicitly NOT used (and why):**
- Next.js — overkill, no SSR/API needed
- shadcn/ui — adds CVA + radix overhead; 6 simple components are easier hand-rolled
- Zustand / Redux — cart state fits Context API perfectly
- Framer Motion — no complex animations needed; CSS transitions suffice
- Vitest / Jest — out of scope for v1; add as Phase 10 if desired
- Storybook — overkill for 6 UI primitives

---

## Folder structure

```
kopiku-digital/
├── .git/
├── .githooks/
│   └── commit-msg                   # AI attribution rejection hook
├── public/
│   └── favicon.svg                  # KopiKu coffee bean mark
├── src/
│   ├── assets/                      # local SVG illustrations if any
│   ├── components/
│   │   ├── ui/                      # primitives (Button, Card, Input, Badge, Container, Section)
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Section.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # includes mobile hamburger
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ValueProps.tsx
│   │   │   └── FeaturedMenu.tsx
│   │   ├── menu/
│   │   │   ├── MenuFilter.tsx
│   │   │   └── MenuCard.tsx
│   │   ├── order/
│   │   │   ├── CartItem.tsx
│   │   │   ├── PickupTimeSelector.tsx
│   │   │   ├── OrderSummary.tsx
│   │   │   ├── CheckoutForm.tsx
│   │   │   ├── PaymentMethodSelector.tsx
│   │   │   └── OrderSuccess.tsx
│   │   ├── about/
│   │   │   ├── AboutHero.tsx
│   │   │   ├── VisionMission.tsx
│   │   │   └── TeamGrid.tsx
│   │   └── contact/
│   │       ├── InfoCards.tsx
│   │       ├── MapEmbed.tsx
│   │       └── ContactForm.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── data/
│   │   ├── menu.ts                  # MenuItem[]
│   │   ├── team.ts                  # TeamMember[]
│   │   ├── photos.ts                # Unsplash URL constants
│   │   └── copy.ts                  # marketing copy strings (Bahasa Indonesia)
│   ├── hooks/
│   │   └── useCart.ts               # consumer hook for CartContext
│   ├── lib/
│   │   ├── utils.ts                 # cn() helper, formatRupiah()
│   │   └── constants.ts             # NAV_LINKS, PICKUP_OPTIONS, PAYMENT_METHODS
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── MenuPage.tsx
│   │   ├── OrderPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── types/
│   │   └── index.ts                 # MenuItem, CartItem, TeamMember, Category
│   ├── App.tsx                      # router + CartProvider wrapping
│   ├── main.tsx                     # React root
│   ├── router.tsx                   # routes definition
│   ├── index.css                    # Tailwind directives + font imports + base styles
│   └── vite-env.d.ts
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json                      # SPA fallback rewrite
├── CLAUDE.md                        # agent behavioral rules
├── AGENTS.md                        # implementation patterns
└── README.md                        # public-facing
```

---

## Tailwind theme

`tailwind.config.ts` extends with brand tokens:

```ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#3D2817',
        roast: '#6F4E37',
        caramel: '#C68B59',
        cream: '#F5E6D3',
        beige: '#FAF6F0',
        charcoal: '#2C1810',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
```

`src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-beige text-charcoal font-sans antialiased; }
  h1, h2, h3, h4 { @apply font-serif text-espresso; }
}
```

---

## Type contracts

`src/types/index.ts`:

```ts
export type Category = 'kopi' | 'non-kopi' | 'cemilan' | 'bundle';

export interface MenuItem {
  id: string;              // slug e.g. 'es-kopi-susu'
  name: string;
  category: Category;
  description: string;
  price: number;           // rupiah, integer
  image: string;           // Unsplash URL
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarColor: 'espresso' | 'roast' | 'caramel';
  // photo intentionally omitted — using initials/color blocks per design
}

export type PickupTimeOption = '15min' | '30min' | '1hour' | 'custom';
export type PaymentMethod = 'qris' | 'gopay' | 'ovo' | 'transfer';
```

---

## Routing

`src/router.tsx`:

```ts
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RootLayout from './components/layout/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'tentang', element: <AboutPage /> },
      { path: 'kontak', element: <ContactPage /> },
    ],
  },
]);
```

`RootLayout` renders `<Navbar />` + `<Outlet />` + `<Footer />` and wraps the tree in `<CartProvider>`.

---

## Cart state contract

`src/context/CartContext.tsx` exposes:

```ts
interface CartContextValue {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;          // computed
  totalItems: number;        // computed
}
```

Cart persists to `localStorage` under key `kopiku-cart-v1`. Hydrate on mount.

---

## Naming conventions

- **Components:** PascalCase, one component per file, match filename (`MenuCard.tsx` exports `MenuCard`)
- **Hooks:** camelCase, `use` prefix, one hook per file
- **Utilities:** camelCase functions
- **Constants:** UPPER_SNAKE_CASE inside `lib/constants.ts`
- **Types/interfaces:** PascalCase, no `I` prefix
- **CSS classes:** Tailwind utilities only; no custom CSS modules
- **Files:** All TS files `.tsx` if they return JSX, `.ts` otherwise

---

## Responsive breakpoint strategy

Mobile-first. Default styles target ~360px width. Breakpoints:

- `sm:` ≥ 640px — large phone landscape, small tablet
- `md:` ≥ 768px — tablet portrait
- `lg:` ≥ 1024px — desktop
- `xl:` ≥ 1200px — wide desktop

**Per-page layout rules:**

| Page | Mobile (default) | Tablet (md:) | Desktop (lg:) |
|---|---|---|---|
| Home — hero | Stacked, image below text | Stacked | Side-by-side (text left, image right) |
| Home — value props | 2-col grid | 4-col grid | 4-col grid |
| Home — featured menu | 1-col | 2-col | 3-col |
| Menu — grid | 2-col | 3-col | 3-col |
| Order — cart + summary | Stacked, summary below | Stacked | Side-by-side (cart left, summary right) |
| About — vision/mission | Stacked | 2-col | 2-col |
| About — team | 2-col | 4-col | 4-col |
| Contact — info + map | Stacked, map below | Stacked | Side-by-side |

**Navbar mobile behavior:** Below `md:`, collapse nav links into a hamburger menu (slide-down panel from top). The Pre-order CTA stays visible in the bar.

---

## Image handling

All photos are external Unsplash URLs (see `DUMMY_DATA.md` for the curated list). No image uploads, no local files. Pattern:

```tsx
<img
  src={item.image}
  alt={item.name}
  loading="lazy"
  className="w-full aspect-square object-cover rounded-lg"
/>
```

Always include `loading="lazy"` except for above-the-fold hero. Always set `alt`.

---

## Accessibility minimums

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- All interactive elements keyboard-accessible
- Focus rings visible (don't override Tailwind defaults without replacement)
- Form inputs have associated `<label>` elements
- Color contrast: cream-on-espresso passes AA; caramel-on-beige does not for body text — caramel reserved for accents only
- `prefers-reduced-motion` respected for any future animations

---

## Vercel deploy config

`vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This ensures client-side routes (`/menu`, `/order`, etc.) work on direct URL access.

---

## Out of scope (do not implement)

- Server-side rendering
- API routes
- Authentication
- Real payment gateway
- Order status backend
- Admin dashboard
- Multi-language (English version of marketing copy)
- Dark mode
- Internationalization (i18n)
- E2E or unit tests
- Analytics / tracking
- Cookie consent banner
