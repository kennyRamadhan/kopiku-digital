import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SafeImage from '../ui/SafeImage';
import { COPY } from '../../data/copy';
import { MENU } from '../../data/menu';
import { formatRupiah } from '../../lib/utils';

function FeaturedMenu() {
  const featured = MENU.filter((item) => item.featured).slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between mb-6 gap-4">
          <h2 className="font-serif text-espresso text-2xl sm:text-3xl">
            {COPY.home.featuredTitle}
          </h2>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1 text-sm text-roast hover:text-espresso transition-colors"
          >
            {COPY.home.featuredSeeAll}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {featured.map((item) => (
            <Card key={item.id} padding="sm" className="overflow-hidden flex flex-col">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-roast/10 mb-3">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  fallbackLabel={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-espresso text-lg">{item.name}</h3>
              <p className="mt-1 text-sm text-roast line-clamp-2">{item.description}</p>
              <p className="mt-3 font-medium text-espresso">{formatRupiah(item.price)}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedMenu;
