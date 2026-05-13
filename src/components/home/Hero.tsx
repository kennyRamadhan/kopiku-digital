import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { buttonClasses } from '../ui/Button';
import Badge from '../ui/Badge';
import SafeImage from '../ui/SafeImage';
import { COPY } from '../../data/copy';
import { PHOTOS } from '../../data/photos';

function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="order-1 lg:order-none">
            <Badge variant="accent" size="md" className="mb-5">
              {COPY.home.heroBadge}
            </Badge>
            <h1 className="font-serif text-espresso leading-[1.05] text-[36px] sm:text-[44px] lg:text-[56px]">
              <span className="block">{COPY.home.heroHeadline1}</span>
              <span className="block">{COPY.home.heroHeadline2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-roast text-base sm:text-lg leading-relaxed">
              {COPY.home.heroSubtext}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to="/menu" className={buttonClasses('primary', 'lg')}>
                {COPY.home.heroCtaPrimary}
              </Link>
              <Link to="/menu" className={buttonClasses('secondary', 'lg')}>
                {COPY.home.heroCtaSecondary}
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-none">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-roast">
              <SafeImage
                src={PHOTOS.heroLatte}
                alt="Cafe latte with leaf rosetta art on a warm wooden surface"
                fallbackLabel="Cafe Latte"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
