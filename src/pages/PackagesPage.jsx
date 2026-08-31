import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, Check, Minus, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PACKAGE_COMPARISON, PACKAGE_FAQS, PACKAGES } from '@/data/site';
import { cn } from '@/lib/utils';

const PackagesPage = () => (
  <>
    <Helmet>
      <title>Packages &amp; Pricing — Meal Mizaaj</title>
      <meta
        name="description"
        content="Transparent nutrition packages in PKR — from a one-time initial consultation to monthly weight management, diabetes & hypertension care, and premium transformation programs. Clear pricing, no surprises."
      />
    </Helmet>

    <PageHero
      eyebrow="Packages & pricing"
      title="Clear pricing, no surprises"
      lead="Choose the depth of support that fits your goals. Every package is built around your kitchen, your routine, and your health — never a template."
    />

    {/* Pricing cards */}
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="mb-10 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
          All sessions are held online over Google Meet or WhatsApp video. Prices are in Pakistani
          Rupees. Not sure which fits? Start with a free discovery call and we will decide together.
        </p>
      </Reveal>

      <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PACKAGES.map((pkg, i) => (
          <Reveal
            key={pkg.name}
            delay={i * 0.06}
            className={cn('h-full', pkg.featured && 'xl:row-span-1')}
          >
            <article
              className={cn(
                'relative flex h-full flex-col rounded-3xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5',
                pkg.featured
                  ? 'border-botanical/60 ring-1 ring-botanical/30'
                  : 'border-border',
              )}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  <Sparkles className="h-3 w-3" strokeWidth={2} />
                  Most Popular
                </span>
              )}

              <h2 className="font-serif text-xl font-semibold text-primary">{pkg.name}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{pkg.period}</p>

              <p className="mt-4 font-serif text-4xl font-medium text-primary">
                {pkg.price}
                {pkg.period.includes('month') && (
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                )}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-botanical">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {pkg.note && (
                <p className="mt-4 rounded-xl bg-sage/40 px-3.5 py-2.5 text-xs leading-relaxed text-botanical">
                  {pkg.note}
                </p>
              )}

              <div className="mt-7 flex flex-col gap-2.5">
                <Link
                  to="/book"
                  className={cn(
                    'inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all active:scale-[0.98]',
                    pkg.featured
                      ? 'bg-primary text-primary-foreground hover:bg-botanical'
                      : 'bg-primary text-primary-foreground hover:bg-botanical',
                  )}
                >
                  {pkg.cta}
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <Link
                  to="/book"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/25 bg-cream text-sm font-semibold text-primary transition-all hover:border-botanical hover:text-botanical active:scale-[0.98]"
                >
                  Book a Free Call
                </Link>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Free discovery call card */}
        <Reveal delay={PACKAGES.length * 0.06} className="h-full">
          <article className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-botanical/40 bg-sage/20 p-7">
            <div>
              <h2 className="font-serif text-xl font-semibold text-primary">Free Discovery Call</h2>
              <p className="mt-1 text-xs text-muted-foreground">15 minutes · no obligation</p>
              <p className="mt-4 font-serif text-4xl font-medium text-primary">Free</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A gentle first conversation to share your goals, understand how I work, and decide
                together which package fits — with zero pressure.
              </p>
            </div>
            <Link
              to="/book"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/30 bg-card text-sm font-semibold text-primary transition-all hover:border-botanical hover:text-botanical active:scale-[0.98]"
            >
              Book a Free Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </article>
        </Reveal>
      </div>
    </section>

    {/* What is included? comparison */}
    <section className="border-t border-border/60 bg-sage/30">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Compare"
          title="What is included?"
          lead="A side-by-side look at what each package covers, so you can choose with confidence."
        />

        <Reveal delay={0.1} className="mt-10">
          {/* Desktop / tablet table */}
          <div className="hidden overflow-hidden rounded-3xl border border-border bg-card md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-sage/30">
                  <th className="w-1/4 px-5 py-4 text-left font-serif text-base font-semibold text-primary">
                    Feature
                  </th>
                  {PACKAGES.map((pkg) => (
                    <th
                      key={pkg.name}
                      className={cn(
                        'px-3 py-4 text-center font-serif text-sm font-semibold',
                        pkg.featured ? 'text-botanical' : 'text-primary',
                      )}
                    >
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PACKAGE_COMPARISON.map((row, r) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      'border-b border-border/60 last:border-0',
                      r % 2 === 1 && 'bg-cream/40',
                    )}
                  >
                    <td className="px-5 py-3.5 text-left font-medium text-foreground">
                      {row.feature}
                    </td>
                    {row.values.map((val, c) => (
                      <td key={c} className="px-3 py-3.5 text-center">
                        {val === true ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sage text-botanical">
                            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </span>
                        ) : val === false ? (
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                            <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                          </span>
                        ) : (
                          <span className="text-xs font-medium text-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="space-y-5 md:hidden">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={cn(
                  'rounded-2xl border bg-card p-5',
                  pkg.featured ? 'border-botanical/50' : 'border-border',
                )}
              >
                <h3 className="font-serif text-base font-semibold text-primary">{pkg.name}</h3>
                <ul className="mt-3 space-y-2">
                  {PACKAGE_COMPARISON.map((row) => {
                    const val = row.values[PACKAGES.indexOf(pkg)];
                    return (
                      <li
                        key={row.feature}
                        className="flex items-center justify-between gap-3 border-b border-border/50 pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-muted-foreground">{row.feature}</span>
                        <span className="shrink-0 font-medium text-foreground">
                          {val === true ? (
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sage text-botanical">
                              <Check className="h-3 w-3" strokeWidth={2.5} />
                            </span>
                          ) : val === false ? (
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground">
                              <Minus className="h-3 w-3" strokeWidth={2} />
                            </span>
                          ) : (
                            val
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked"
          lead="The things almost everyone wonders before choosing a package."
        />
        <Reveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {PACKAGE_FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-botanical/40"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Link
            to="/book"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
          >
            Still unsure? Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  </>
);

export default PackagesPage;
