import { useState } from 'react';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import MenuFilter, { type FilterValue } from '../components/menu/MenuFilter';
import MenuCard from '../components/menu/MenuCard';
import { MENU } from '../data/menu';
import { COPY } from '../data/copy';

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all');

  const visibleItems =
    activeCategory === 'all' ? MENU : MENU.filter((item) => item.category === activeCategory);

  return (
    <Section>
      <Container>
        <header className="mb-6">
          <h1 className="font-serif text-espresso text-3xl sm:text-4xl">{COPY.menu.pageTitle}</h1>
          <p className="mt-2 text-roast">{COPY.menu.pageSubtitle}</p>
        </header>

        <div className="mb-6">
          <MenuFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>

        {visibleItems.length === 0 ? (
          <Card padding="lg" className="text-center">
            <p className="text-roast">Belum ada menu di kategori ini.</p>
            <Button
              variant="secondary"
              size="md"
              className="mt-4"
              onClick={() => setActiveCategory('all')}
            >
              Lihat semua menu
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {visibleItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}

export default MenuPage;
