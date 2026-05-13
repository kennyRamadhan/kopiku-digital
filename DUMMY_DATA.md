# KopiKu Digital — Dummy Data

All seed data for the website. Agent should transcribe these into the relevant `src/data/*.ts` files exactly as specified.

---

## Menu items (`src/data/menu.ts`)

24 items total: 10 kopi, 6 non-kopi, 6 cemilan, 2 bundle.

```ts
import type { MenuItem } from '../types';

export const MENU: MenuItem[] = [
  // ---------- KOPI ----------
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'kopi',
    description: 'Single shot 30ml, full-bodied dark roast house blend.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80',
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'kopi',
    description: 'Long black, 200ml. Pahit khas, mantap buat ngoding.',
    price: 13000,
    image: 'https://images.unsplash.com/photo-1494314671902-399b18174975?w=600&q=80',
  },
  {
    id: 'latte',
    name: 'Cafe Latte',
    category: 'kopi',
    description: 'Espresso + steamed milk + thin foam. Smooth, balanced.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=600&q=80',
    featured: true,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'kopi',
    description: 'Classic 1:1:1 — espresso, milk, foam. Foamy & rich.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
    featured: true,
  },
  {
    id: 'mocha',
    name: 'Cafe Mocha',
    category: 'kopi',
    description: 'Espresso + chocolate + steamed milk. Manis buat yang gak suka pahit.',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80',
  },
  {
    id: 'macchiato',
    name: 'Caramel Macchiato',
    category: 'kopi',
    description: 'Vanilla milk + espresso + caramel drizzle. Signature manis.',
    price: 23000,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&q=80',
  },
  {
    id: 'es-kopi-susu',
    name: 'Es Kopi Susu',
    category: 'kopi',
    description: 'Brown sugar kopi susu signature. Best seller wajib coba.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    featured: true,
    bestSeller: true,
  },
  {
    id: 'vietnam-drip',
    name: 'Vietnam Drip',
    category: 'kopi',
    description: 'Slow drip 5 menit + susu kental manis. Strong & sweet.',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&q=80',
  },
  {
    id: 'kopi-tubruk',
    name: 'Kopi Tubruk',
    category: 'kopi',
    description: 'Traditional Indonesia, ampas di bawah. Robusta Lampung asli.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    category: 'kopi',
    description: 'Diseduh 18 jam dingin. Smooth, low-acid, no sugar default.',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=600&q=80',
  },

  // ---------- NON-KOPI ----------
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'non-kopi',
    description: 'Matcha grade A Jepang + susu segar. Earthy & creamy.',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80',
  },
  {
    id: 'es-coklat',
    name: 'Es Coklat',
    category: 'non-kopi',
    description: 'Coklat Belgian + susu + es batu. Manis ala-ala.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1542990253-0b8be3b4d2ad?w=600&q=80',
  },
  {
    id: 'teh-tarik',
    name: 'Teh Tarik',
    category: 'non-kopi',
    description: 'Teh hitam premium + susu kental. Ditarik berbusa.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80',
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    category: 'non-kopi',
    description: 'Black tea + fresh lemon + honey. Segarrr.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
  },
  {
    id: 'es-jeruk',
    name: 'Es Jeruk Peras',
    category: 'non-kopi',
    description: 'Jeruk peras manis, no syrup, no concentrate. Real fruit.',
    price: 10000,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80',
  },
  {
    id: 'strawberry-squash',
    name: 'Strawberry Squash',
    category: 'non-kopi',
    description: 'Strawberry segar + soda + sirup. Mood booster pas siang.',
    price: 16000,
    image: 'https://images.unsplash.com/photo-1622597967599-7f10a44f7c7f?w=600&q=80',
  },

  // ---------- CEMILAN ----------
  {
    id: 'croissant',
    name: 'Butter Croissant',
    category: 'cemilan',
    description: 'Flaky, buttery, fresh from oven setiap pagi.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
  },
  {
    id: 'french-fries',
    name: 'French Fries',
    category: 'cemilan',
    description: 'Crispy outside, fluffy inside. Cocok temenin laptop session.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80',
  },
  {
    id: 'onion-ring',
    name: 'Onion Ring',
    category: 'cemilan',
    description: 'Bawang Bombay crispy 10 pcs + saus barbecue.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80',
  },
  {
    id: 'pisang-goreng',
    name: 'Pisang Goreng Madu',
    category: 'cemilan',
    description: 'Pisang kepok + madu + keju parut. Klasik Indonesia banget.',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1612809076400-d2db1bbb8a25?w=600&q=80',
  },
  {
    id: 'banana-bread',
    name: 'Banana Bread',
    category: 'cemilan',
    description: 'Roti pisang panggang homemade, moist & manis natural.',
    price: 17000,
    image: 'https://images.unsplash.com/photo-1605478582090-c5a32a07d7e2?w=600&q=80',
  },
  {
    id: 'roti-bakar',
    name: 'Roti Bakar Coklat Keju',
    category: 'cemilan',
    description: 'Roti gandum panggang + coklat + keju. Childhood favorite.',
    price: 16000,
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&q=80',
  },

  // ---------- BUNDLE ----------
  {
    id: 'combo-hemat',
    name: 'Combo Hemat',
    category: 'bundle',
    description: 'Cafe Latte + Butter Croissant. Hemat Rp 5.000 dari harga normal.',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    featured: true,
  },
  {
    id: 'studying-bundle',
    name: 'Studying Bundle',
    category: 'bundle',
    description: '2 Americano + French Fries + Roti Bakar. Buat session 4 jam.',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80',
  },
];
```

---

## Team data (`src/data/team.ts`)

```ts
import type { TeamMember } from '../types';

export const TEAM: TeamMember[] = [
  { id: 'ceo', name: 'Adi Wibowo', role: 'CEO / Direktur Utama', avatarColor: 'roast' },
  { id: 'ops', name: 'Rendi Saputra', role: 'Manajer Operasional', avatarColor: 'espresso' },
  { id: 'tech', name: 'Dimas Pratama', role: 'Manajer Teknologi', avatarColor: 'caramel' },
  { id: 'finance', name: 'Sari Lestari', role: 'Manajer Keuangan', avatarColor: 'roast' },
  { id: 'marketing', name: 'Naya Anggraini', role: 'Manajer Pemasaran', avatarColor: 'caramel' },
  { id: 'barista', name: 'Eka Putra', role: 'Head Barista', avatarColor: 'espresso' },
];
```

Note: Avatars use solid color blocks with initials (per design lock-in — no team photos).

---

## Photos for hero / sections (`src/data/photos.ts`)

```ts
export const PHOTOS = {
  // Home hero — large product shot
  heroLatte: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80',

  // About hero — interior / coffee scene
  aboutInterior: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80',

  // Generic backgrounds / accents
  beansClose: 'https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80',
  baristaPour: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80',
  cafeAmbience: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80',
} as const;
```

---

## Copy strings (`src/data/copy.ts`)

All marketing text in casual Bahasa Indonesia. Agent should use these verbatim where referenced in components.

```ts
export const COPY = {
  brand: {
    name: 'KopiKu',
    nameAccent: 'Ku',  // the "Ku" gets caramel color
    tagline: 'Modern coffee, brewed digitally',
    location: 'Cikarang Selatan, Bekasi',
  },

  nav: {
    menu: 'Menu',
    about: 'Tentang',
    location: 'Lokasi',
    contact: 'Kontak',
    preOrder: 'Pre-order',
    cart: 'Keranjang',
  },

  home: {
    heroBadge: 'Cikarang Selatan · Grand opening',
    heroHeadline1: 'Kopi enak,',
    heroHeadline2: 'tanpa antri.',
    heroSubtext: 'Pesan dari HP, ambil di toko. Mulai Rp 8.000 — siap dalam 15 menit, WiFi 50Mbps gratis sambil nunggu.',
    heroCtaPrimary: 'Mulai pesan',
    heroCtaSecondary: 'Lihat menu',
    valuePropsTitle: 'Kenapa KopiKu?',
    valueProps: [
      { icon: 'clock', title: 'Skip antrian', subtitle: 'Siap 15 menit' },
      { icon: 'star', title: 'Loyalty point', subtitle: '10 stamp = gratis' },
      { icon: 'wifi', title: 'Coworking ready', subtitle: 'WiFi 50Mbps' },
      { icon: 'tag', title: 'Harga jelas', subtitle: 'No hidden fee' },
    ],
    featuredTitle: 'Menu favorit',
    featuredSeeAll: 'Lihat semua',
  },

  menu: {
    pageTitle: 'Menu kami',
    pageSubtitle: 'Semua menu fresh, harga jelas, no tipu-tipu.',
    filters: [
      { id: 'all', label: 'Semua' },
      { id: 'kopi', label: 'Kopi' },
      { id: 'non-kopi', label: 'Non-kopi' },
      { id: 'cemilan', label: 'Cemilan' },
      { id: 'bundle', label: 'Bundle' },
    ],
    emptyCart: 'Belum ada pesanan. Yuk pilih menu favorit lu dulu.',
  },

  order: {
    steps: ['1. Keranjang', '2. Checkout', '3. Selesai'],
    cartTitle: 'Pesanan lu',
    pickupLabel: 'Jam pengambilan',
    pickupOptions: [
      { id: '15min', label: '15 menit' },
      { id: '30min', label: '30 menit' },
      { id: '1hour', label: '1 jam' },
      { id: 'custom', label: 'Custom' },
    ],
    summaryTitle: 'Ringkasan',
    summarySubtotal: 'Subtotal',
    summaryDiscount: 'Diskon member',
    summaryTotal: 'Total',
    proceedCheckout: 'Lanjut checkout',
    promoHint: 'Order Rp 50rb+ = free upgrade size',
    checkoutTitle: 'Detail & pembayaran',
    formName: 'Nama',
    formPhone: 'No. HP',
    formEmail: 'Email (opsional)',
    paymentLabel: 'Metode bayar (demo — bukan transaksi real)',
    paymentMethods: [
      { id: 'qris', label: 'QRIS', recommended: true },
      { id: 'gopay', label: 'GoPay' },
      { id: 'ovo', label: 'OVO' },
      { id: 'transfer', label: 'Transfer Bank' },
    ],
    confirmOrder: 'Konfirmasi pesanan',
    successTitle: 'Pesanan diterima!',
    successSubtitle: 'Sampai ketemu di toko ya. Notifikasi bakal dikirim ke WhatsApp lu kalau pesanan udah siap.',
    successCta: 'Pesan lagi',
  },

  about: {
    pageTitle: 'Cerita di balik secangkir KopiKu.',
    pageSubtitle: 'Lahir dari obsesi mahasiswa Cikarang yang males ngantri buat kopi enak. Sekarang jadi warung kopi digital pertama yang ngerti gimana ribetnya jadwal generasi muda.',
    visionLabel: 'VISI',
    visionText: 'Jadi warung kopi digital pilihan utama generasi muda yang menggabungkan cita rasa Nusantara dengan teknologi terkini.',
    missionLabel: 'MISI',
    missionText: 'Kopi berkualitas dengan harga terjangkau, ekosistem pemesanan digital yang seamless, dan kontribusi nyata untuk pemberdayaan petani kopi lokal.',
    teamTitle: 'Tim di balik KopiKu',
  },

  contact: {
    pageTitle: 'Mampir, yuk.',
    pageSubtitle: 'Kita buka 7 hari seminggu di Cikarang Selatan.',
    addressLabel: 'ALAMAT',
    addressText: 'Jl. Niaga Raya, Cikarang Selatan, Kab. Bekasi 17530',
    hoursLabel: 'JAM BUKA',
    hours: [
      { day: 'Senin–Jumat', time: '07.00 – 22.00' },
      { day: 'Sabtu–Minggu', time: '08.00 – 23.00' },
    ],
    socialLabel: 'SOSIAL',
    socials: [
      { platform: 'Instagram', handle: '@kopiku.digital' },
      { platform: 'TikTok', handle: '@kopikudigital' },
      { platform: 'WhatsApp', handle: '0812-3456-7890' },
    ],
    formTitle: 'KIRIM PESAN',
    formNamePlaceholder: 'Nama lu',
    formEmailPlaceholder: 'Email',
    formMessagePlaceholder: 'Pesan...',
    formSubmit: 'Kirim',
    formSuccess: 'Pesan lu udah kami terima. Bakal kami balas dalam 24 jam.',
  },

  footer: {
    copyright: '© 2026 KopiKu Digital. Tugas Technopreneurship Universitas Pelita Bangsa.',
  },
} as const;
```

---

## Map embed

For the Contact page map, use Google Maps embed iframe pointing to Cikarang Selatan area. Use this exact embed URL (already URL-encoded for the general area):

```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5567!2d107.1334!3d-6.3447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnNDAuOSJTIDEwN8KwMDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1700000000000`

Wrap in a responsive container:

```tsx
<div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
  <iframe
    src="..."
    className="absolute inset-0 w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Lokasi KopiKu Digital"
  />
</div>
```

---

## Photo URL stability note

All Unsplash URLs above use stable photo IDs in the format `images.unsplash.com/photo-{id}`. These are persistent CDN URLs that won't break. If any URL 404s during development, the agent should:

1. Search Unsplash for an equivalent (e.g. "espresso coffee cup")
2. Replace the URL in `menu.ts` / `photos.ts`
3. Note the replacement in the commit message under "Notes"

Do not silently substitute with placeholder services like `picsum.photos` — defeats the point of curated coffee aesthetic.
