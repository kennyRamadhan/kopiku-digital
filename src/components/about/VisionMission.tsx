import Container from '../ui/Container';
import Section from '../ui/Section';
import { COPY } from '../../data/copy';

function VisionMission() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          <article className="bg-surface border border-espresso/10 border-l-4 border-l-caramel rounded-r-lg p-6 lg:p-8">
            <p className="text-xs tracking-[0.2em] font-medium text-caramelDeep">
              {COPY.about.visionLabel}
            </p>
            <p className="mt-3 text-charcoal leading-relaxed">{COPY.about.visionText}</p>
          </article>
          <article className="bg-surface border border-espresso/10 border-l-4 border-l-roast rounded-r-lg p-6 lg:p-8">
            <p className="text-xs tracking-[0.2em] font-medium text-roast">
              {COPY.about.missionLabel}
            </p>
            <p className="mt-3 text-charcoal leading-relaxed">{COPY.about.missionText}</p>
          </article>
        </div>
      </Container>
    </Section>
  );
}

export default VisionMission;
