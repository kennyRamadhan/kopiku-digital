import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { NAV_LINKS } from '../../lib/constants';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div>
            <div className="flex items-baseline gap-1 font-serif text-2xl">
              <span className="text-cream">Kopi</span>
              <span className="text-caramel">Ku</span>
              <span className="ml-1 text-[10px] tracking-widest text-cream/70 font-sans font-medium">
                DIGITAL
              </span>
            </div>
            <p className="mt-3 text-sm text-cream/80 max-w-xs">
              Warung kopi digital di Cikarang Selatan. Pre-order via web, ambil di toko, no antrian.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-3">Tautan</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/80 hover:text-caramel transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>Jl. Kopi No. 17, Cikarang Selatan</li>
              <li>WhatsApp: 0812-3456-7890</li>
              <li>Buka: 07.00 – 22.00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/15 py-6 text-xs text-cream/60">
          © {year} KopiKu Digital. Dibuat dengan hati di Cikarang.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
