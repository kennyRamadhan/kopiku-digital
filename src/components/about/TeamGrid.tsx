import Container from '../ui/Container';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { COPY } from '../../data/copy';
import { TEAM } from '../../data/team';
import type { TeamMember } from '../../types';
import { cn } from '../../lib/utils';

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');
}

const avatarBgClass: Record<TeamMember['avatarColor'], string> = {
  espresso: 'bg-espresso text-cream',
  roast: 'bg-roast text-cream',
  caramel: 'bg-caramel text-charcoal',
};

function TeamGrid() {
  return (
    <Section className="bg-cream/40">
      <Container>
        <h2 className="font-serif text-espresso text-2xl sm:text-3xl text-center mb-8">
          {COPY.about.teamTitle}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {TEAM.map((member) => (
            <Card key={member.id} padding="md" className="flex items-center gap-3">
              <div
                className={cn(
                  'w-12 h-12 shrink-0 rounded-full inline-flex items-center justify-center font-medium text-sm',
                  avatarBgClass[member.avatarColor],
                )}
                aria-hidden="true"
              >
                {getInitials(member.name)}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-espresso truncate">{member.name}</p>
                <p className="text-xs text-roast truncate">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TeamGrid;
