import Container from '../ui/Container';
import { COPY } from '../../data/copy';

function AboutHero() {
  return (
    <section className="bg-beige py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-espresso text-3xl sm:text-4xl lg:text-5xl leading-tight">
            {COPY.about.pageTitle}
          </h1>
          <p className="mt-5 text-roast text-base sm:text-lg leading-relaxed">
            {COPY.about.pageSubtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default AboutHero;
