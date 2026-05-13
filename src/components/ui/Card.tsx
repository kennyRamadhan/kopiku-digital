import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type CardPadding = 'sm' | 'md' | 'lg';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  children: ReactNode;
}

const paddingClasses: Record<CardPadding, string> = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

function Card({ padding = 'md', className, children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'bg-[#FFFCF7] border border-espresso/10 rounded-lg',
        paddingClasses[padding],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
