import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', className)} {...rest}>
      {children}
    </div>
  );
}

export default Container;
