import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'dark' | 'accent';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-cream text-roast',
  dark: 'bg-espresso text-cream',
  accent: 'bg-caramel text-charcoal',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

function Badge({ variant = 'default', size = 'sm', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Badge;
