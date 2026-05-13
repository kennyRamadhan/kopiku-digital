import Card from '../ui/Card';
import { COPY } from '../../data/copy';

function InfoCards() {
  return (
    <div className="space-y-4">
      <Card padding="md">
        <p className="text-xs tracking-[0.2em] font-medium text-caramelDeep">
          {COPY.contact.addressLabel}
        </p>
        <p className="mt-2 text-charcoal leading-relaxed">{COPY.contact.addressText}</p>
      </Card>

      <Card padding="md">
        <p className="text-xs tracking-[0.2em] font-medium text-caramelDeep">
          {COPY.contact.hoursLabel}
        </p>
        <dl className="mt-2 space-y-1.5">
          {COPY.contact.hours.map((row) => (
            <div key={row.day} className="flex items-center justify-between gap-3 text-sm">
              <dt className="text-charcoal">{row.day}</dt>
              <dd className="text-roast">{row.time}</dd>
            </div>
          ))}
        </dl>
      </Card>

      <Card padding="md">
        <p className="text-xs tracking-[0.2em] font-medium text-caramelDeep">
          {COPY.contact.socialLabel}
        </p>
        <dl className="mt-2 space-y-1.5">
          {COPY.contact.socials.map((row) => (
            <div key={row.platform} className="flex items-center justify-between gap-3 text-sm">
              <dt className="text-charcoal">{row.platform}</dt>
              <dd className="text-roast">{row.handle}</dd>
            </div>
          ))}
        </dl>
      </Card>
    </div>
  );
}

export default InfoCards;
