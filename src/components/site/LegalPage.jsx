import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, PencilLine } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';

const LegalPage = ({ eyebrow, title, lead, updated, notice, sections }) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} lead={lead} />
    <section className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
      {updated && (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Last updated: {updated}
        </p>
      )}
      {notice && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-foreground">
          <PencilLine className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.7} />
          <p>{notice}</p>
        </div>
      )}
      <div className="mt-8 space-y-10">
        {sections.map((section, i) => (
          <Reveal key={section.heading} delay={Math.min(i * 0.04, 0.2)}>
            <h2 className="font-serif text-xl font-semibold text-primary md:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-muted-foreground">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* CTA — keep a clear next step on every page */}
      <Reveal className="mt-14">
        <div className="rounded-3xl border border-botanical/25 bg-sage/40 px-6 py-10 text-center md:py-12">
          <h2 className="font-serif text-2xl font-medium leading-tight text-primary text-balance md:text-3xl">
            Questions, or ready to begin?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            A free 15-minute call is the easiest way to ask anything or take the first step — no
            pressure, no obligation.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
          >
            Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default LegalPage;
