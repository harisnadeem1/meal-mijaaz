import React from 'react';
import Reveal from '@/components/Reveal';
import { cn } from '@/lib/utils';

export const Eyebrow = ({ children, className }) => (
  <p
    className={cn(
      'inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-botanical',
      className,
    )}
  >
    <span className="h-px w-6 bg-gold" aria-hidden="true" />
    {children}
  </p>
);

const SectionHeading = ({ eyebrow, title, lead, align = 'center', className }) => (
  <Reveal
    className={cn(
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
      className,
    )}
  >
    {eyebrow && <Eyebrow className={align === 'center' ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
    <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-primary text-balance md:text-4xl">
      {title}
    </h2>
    {lead && <p className="mt-4 leading-relaxed text-muted-foreground">{lead}</p>}
  </Reveal>
);

export default SectionHeading;
