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

    
    </section>



    {/* Separate CTA section */}
<section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
  <Reveal>
    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground md:px-12 md:py-20">
      <div
        aria-hidden="true"
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-botanical/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
          Here when you are ready
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-balance md:text-5xl">
          Ready to take the first step?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75 md:text-base">
          Start with a free 15-minute discovery call. We will talk through your goals, your
          routine, and what kind of personalised nutrition support may feel right for you — with
          no pressure and no obligation.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/book"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 text-sm font-semibold text-primary transition-all hover:bg-sage active:scale-[0.98] sm:w-auto"
          >
            Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-primary-foreground/30 px-8 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60 active:scale-[0.98] sm:w-auto"
          >
            Send a Question
          </Link>
        </div>

        <p className="mt-5 text-xs text-primary-foreground/55">
          Free 15-minute discovery call · Online worldwide · No obligation
        </p>
      </div>
    </div>
  </Reveal>
</section>
  </>
);

export default LegalPage;
