import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { NAV_LINKS } from '../../lib/constants';
import { COPY } from '../../data/copy';

const BRAND_BASE = COPY.brand.name.replace(COPY.brand.nameAccent, '');

function Footer() {
  return (
    <footer className="bg-espresso text-cream mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div>
            <div className="flex items-baseline gap-1 font-serif text-2xl">
              <span className="text-cream">{BRAND_BASE}</span>
              <span className="text-caramel">{COPY.brand.nameAccent}</span>
              <span className="ml-1 text-[10px] tracking-widest text-cream/70 font-sans font-medium">
                DIGITAL
              </span>
            </div>
            <p className="mt-3 text-sm text-cream/80 max-w-xs">{COPY.brand.tagline}</p>
            <p className="mt-1 text-sm text-cream/60">{COPY.brand.location}</p>
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
            <h4 className="font-serif text-cream text-lg mb-3">{COPY.nav.contact}</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>{COPY.contact.addressText}</li>
              {COPY.contact.hours.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/15 py-6 text-xs text-cream/60">
          {COPY.footer.copyright}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
