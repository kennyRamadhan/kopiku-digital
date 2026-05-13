import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_LINKS } from '../../lib/constants';
import { cn } from '../../lib/utils';
import { COPY } from '../../data/copy';

const BRAND_BASE = COPY.brand.name.replace(COPY.brand.nameAccent, '');

function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // TODO: wire useCart() in Phase 4
  const cartCount = 0;

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-40 bg-beige/95 backdrop-blur border-b border-espresso/10">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-baseline gap-1 font-serif text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-espresso">{BRAND_BASE}</span>
            <span className="text-caramel">{COPY.brand.nameAccent}</span>
            <span className="ml-1 text-[10px] tracking-widest text-roast font-sans font-medium">
              DIGITAL
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm transition-colors',
                  isActive(link.to)
                    ? 'text-espresso font-medium'
                    : 'text-roast hover:text-espresso',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/order"
              aria-label={`${COPY.nav.cart}${cartCount > 0 ? `, ${cartCount} item` : ''}`}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-espresso" aria-hidden="true" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center bg-caramel text-charcoal text-[10px] font-semibold rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/order" className="hidden md:inline-flex">
              <Button variant="primary" size="sm">
                {COPY.nav.preOrder}
              </Button>
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-cream transition-colors"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-espresso" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-espresso" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-espresso/10 bg-beige"
        >
          <Container>
            <nav className="flex flex-col py-4 gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-2 py-2 rounded-md text-base transition-colors',
                    isActive(link.to)
                      ? 'text-espresso font-medium bg-cream'
                      : 'text-roast hover:text-espresso',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/order" onClick={() => setMobileOpen(false)} className="mt-2">
                <Button variant="primary" size="md" className="w-full">
                  {COPY.nav.preOrder}
                </Button>
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;
