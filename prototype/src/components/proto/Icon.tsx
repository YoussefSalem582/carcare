import type { ComponentType } from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

function kebabToPascal(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

type IconProps = { name: string; className?: string } & Omit<LucideProps, 'ref'>;

export function ProtoIcon({ name, className, ...rest }: IconProps) {
  const key = kebabToPascal(name) as keyof typeof LucideIcons;
  const Cmp = LucideIcons[key] as ComponentType<LucideProps> | undefined;
  if (!Cmp || typeof Cmp !== 'function') {
    return <span className={className} aria-hidden />;
  }
  return <Cmp className={className} {...rest} />;
}
