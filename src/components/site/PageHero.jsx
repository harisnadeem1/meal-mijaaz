import React from 'react';
import Reveal from '@/components/Reveal';
import { Eyebrow } from '@/components/site/SectionHeading';

const PageHero = ({ eyebrow, title, lead }) => (
  <section className="border-b border-border/60 bg-sage/35">
    <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 text-center md:px-8 md:pb-20 md:pt-40">
      <Reveal>
        {eyebrow && <Eyebrow className="justify-center">{eyebrow}</Eyebrow>}
        <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-primary text-balance md:text-5xl">
          {title}
        </h1>
        {lead && <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">{lead}</p>}
      </Reveal>
    </div>
  </section>
);

export default PageHero;
