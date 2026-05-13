import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel: string;
}

function SafeImage({ fallbackLabel, className, alt, ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt ?? fallbackLabel}
        className={cn(
          'bg-roast text-cream dark:bg-espresso dark:text-cream flex items-center justify-center text-center px-3 font-serif',
          className,
        )}
      >
        <span className="text-sm sm:text-base">{fallbackLabel}</span>
      </div>
    );
  }

  return <img alt={alt} className={className} onError={() => setFailed(true)} {...rest} />;
}

export default SafeImage;
