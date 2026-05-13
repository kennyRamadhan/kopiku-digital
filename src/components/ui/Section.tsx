import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type SectionBg = 'beige' | 'cream' | 'espresso';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: SectionBg;
  children: ReactNode;
}

const bgClasses: Record<SectionBg, string> = {
  beige: 'bg-beige',
  cream: 'bg-cream',
  espresso: 'bg-espresso text-cream',
};

function Section({ bg = 'beige', className, children, ...rest }: SectionProps) {
  return (
    <section className={cn('py-12 md:py-16 lg:py-20', bgClasses[bg], className)} {...rest}>
      {children}
    </section>
  );
}

export default Section;
