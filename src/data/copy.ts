export const COPY = {
  brand: {
    name: 'KopiKu',
    nameAccent: 'Ku',
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
    heroSubtext:
      'Pesan dari HP, ambil di toko. Mulai Rp 8.000 — siap dalam 15 menit, WiFi 50Mbps gratis sambil nunggu.',
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
    successSubtitle:
      'Sampai ketemu di toko ya. Notifikasi bakal dikirim ke WhatsApp lu kalau pesanan udah siap.',
    successCta: 'Pesan lagi',
  },

  about: {
    pageTitle: 'Cerita di balik secangkir KopiKu.',
    pageSubtitle:
      'Lahir dari obsesi mahasiswa Cikarang yang males ngantri buat kopi enak. Sekarang jadi warung kopi digital pertama yang ngerti gimana ribetnya jadwal generasi muda.',
    visionLabel: 'VISI',
    visionText:
      'Jadi warung kopi digital pilihan utama generasi muda yang menggabungkan cita rasa Nusantara dengan teknologi terkini.',
    missionLabel: 'MISI',
    missionText:
      'Kopi berkualitas dengan harga terjangkau, ekosistem pemesanan digital yang seamless, dan kontribusi nyata untuk pemberdayaan petani kopi lokal.',
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
