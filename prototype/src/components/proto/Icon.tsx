import type { ElementType } from 'react';
import { HelpCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

function kebabToPascal(name: string): string {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/** Kebab-case aliases when the Lucide export name does not match the default kebab conversion. */
const ICON_ALIASES: Record<string, keyof typeof LucideIcons> = {
  /* e.g. 'git-branch': 'GitBranch', */
};

type IconProps = { name: string; className?: string } & Omit<LucideProps, 'ref'>;

export function ProtoIcon({ name, className, ...rest }: IconProps) {
  const alias = ICON_ALIASES[name];
  const key = (alias ?? (kebabToPascal(name) as keyof typeof LucideIcons)) as keyof typeof LucideIcons;
  const Cmp = LucideIcons[key] as ElementType<LucideProps> | undefined;
  /* lucide-react icons are forwardRef objects (typeof === 'object'), not plain functions */
  if (Cmp == null) {
    return (
      <HelpCircle
        className={className}
        aria-label={`Unknown icon: ${name}`}
        role="img"
        strokeWidth={1.75}
      />
    );
  }
  return <Cmp className={className} {...rest} />;
}
