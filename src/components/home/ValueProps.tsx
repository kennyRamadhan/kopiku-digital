import { Clock, Star, Wifi, Tag, type LucideIcon } from 'lucide-react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { COPY } from '../../data/copy';

const ICON_MAP: Record<string, LucideIcon> = {
  clock: Clock,
  star: Star,
  wifi: Wifi,
  tag: Tag,
};

function ValueProps() {
  return (
    <Section className="bg-cream/40">
      <Container>
        <h2 className="font-serif text-espresso text-2xl sm:text-3xl text-center mb-8">
          {COPY.home.valuePropsTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {COPY.home.valueProps.map((prop) => {
            const Icon = ICON_MAP[prop.icon] ?? Star;
            return (
              <Card key={prop.title} padding="md" className="flex flex-col gap-2">
                <Icon className="w-6 h-6 text-caramel" aria-hidden="true" />
                <h3 className="font-serif text-espresso text-lg leading-snug">{prop.title}</h3>
                <p className="text-roast text-sm">{prop.subtitle}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default ValueProps;
