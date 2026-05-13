import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import InfoCards from '../components/contact/InfoCards';
import MapEmbed from '../components/contact/MapEmbed';
import ContactForm from '../components/contact/ContactForm';
import { COPY } from '../data/copy';

function ContactPage() {
  return (
    <Section>
      <Container>
        <header className="max-w-2xl mb-10">
          <h1 className="font-serif text-espresso text-3xl sm:text-4xl lg:text-5xl">
            {COPY.contact.pageTitle}
          </h1>
          <p className="mt-3 text-roast text-base sm:text-lg">{COPY.contact.pageSubtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-10 items-start">
          <InfoCards />
          <div className="space-y-6">
            <MapEmbed />
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactPage;
