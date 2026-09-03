import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { SERVICES, PERSONAL_FACTORS } from '@/data/site';

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services — Meal Mizaaj</title>
      <meta
        name="description"
        content="One-to-one online nutrition consultations, personalised meal plans, weight loss & gain support, diabetes and hypertension nutrition, follow-ups, healthy recipes, grocery guidance, and family nutrition — desi-food first."
      />
    </Helmet>

    <PageHero
      eyebrow="Services"
      title="Personalised nutrition care for real life."
      lead="One-to-one online nutrition consultations, tailored meal plans, recipe ideas, grocery guidance, and steady follow-up support — shaped around the way your household actually eats."
    />

    {/* Intro */}
    {/* <section className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-20">
      <Reveal>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Meal Mizaaj offers one-to-one online nutrition consultations, tailored meal plans, recipe
          ideas, grocery guidance, and follow-up support. Every service is unhurried and practical —
          built around your food, your routine, and your health goals, never a generic template.
        </p>
      </Reveal>
    </section> */}

    {/* Service cards */}
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:py-20">
      <div className="grid gap-6 md:grid-cols-2 md:gap-7">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 2) * 0.06}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-botanical/40 hover:shadow-lg hover:shadow-primary/5 md:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-primary">
                  <service.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <p className="font-serif text-sm italic text-botanical">{service.tagline}</p>
              </div>

              <h2 className="mt-5 font-serif text-2xl font-semibold leading-snug text-primary">
                {service.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-botanical">
                  What’s included
                </p>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-botanical">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/book"
                className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary transition-colors hover:text-botanical"
              >
                Book a Free Call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    {/* What makes your plan personal? */}
    {/* Personalisation section */}
    <section className="relative overflow-hidden border-y border-border/60 bg-sage/35">
      {/* Quiet decorative shapes */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-botanical/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Editorial introduction */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-botanical">
                Why it feels different
              </p>

              <h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight text-primary md:text-4xl">
                A plan shaped around your real life.
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Your nutrition support begins with listening. Before suggesting a single meal, we take
                time to understand the details that make your routine, health needs, and relationship
                with food entirely your own.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/10 bg-card/80 p-5 shadow-sm shadow-primary/[0.03] backdrop-blur-sm">
                <p className="font-serif text-lg leading-snug text-primary">
                  “No rigid templates. No separate meals for the whole household. Just practical food
                  guidance that can belong in your life.”
                </p>

                <div className="mt-5 h-px w-12 bg-gold/80" />

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The result is a flexible approach you can return to long after the consultation is
                  over.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Personal factors list */}
          {/* Personal factors list */}
          <div className="grid overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm shadow-primary/[0.03] sm:grid-cols-2">
            {PERSONAL_FACTORS.map((factor, i) => {
              const isLast = i === PERSONAL_FACTORS.length - 1;

              return (
                <Reveal
                  key={factor.title}
                  delay={(i % 2) * 0.06}
                  className={[
                    'border-border/70',
                    !isLast ? 'border-b' : '',
                    i % 2 === 0 && !isLast ? 'sm:border-r' : '',
                    isLast ? 'sm:col-span-2' : '',
                  ].join(' ')}
                >
                  <article
                    className={[
                      'group flex h-full gap-4 p-5 transition-colors duration-300 hover:bg-sage/30 md:p-6',
                      isLast ? 'sm:items-center sm:px-7 sm:py-6' : '',
                    ].join(' ')}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <factor.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold tracking-[0.16em] text-gold">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        <h3 className="font-serif text-lg font-semibold leading-snug text-primary">
                          {factor.title}
                        </h3>
                      </div>

                      <p
                        className={[
                          'mt-2 text-sm leading-relaxed text-muted-foreground',
                          isLast ? 'sm:max-w-lg' : '',
                        ].join(' ')}
                      >
                        {factor.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* CTA block */}
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <div className="rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
            Ready to build a plan that fits your life?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
            Start with a free discovery call, or explore the packages to see how we can work
            together over weeks and months.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/book"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cream px-8 text-sm font-semibold text-primary transition-all hover:bg-white active:scale-[0.98]"
            >
              Book a Free Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              to="/packages"
              className="inline-flex h-12 items-center justify-center rounded-full border border-primary-foreground/30 px-8 text-sm font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60 active:scale-[0.98]"
            >
              See Packages &amp; Pricing
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default ServicesPage;
