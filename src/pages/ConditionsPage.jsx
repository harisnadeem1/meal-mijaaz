import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, ShieldAlert } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { CONDITIONS } from '@/data/site';

const ConditionsPage = () => (
  <>
    <Helmet>
      <title>Conditions I Support — Meal Mizaaj</title>
      <meta
        name="description"
        content="Nutrition support for weight concerns, prediabetes and type 2 diabetes, hypertension, cholesterol, fatty liver, PCOS, digestive concerns, nutrient adequacy, pregnancy and postpartum, sports nutrition, vegetarian nutrition, and general wellness — always alongside your doctor."
      />
    </Helmet>

    <PageHero
      eyebrow="Conditions I support"
      title="Nutrition support for the health concerns real people face"
      lead="Calm, practical nutrition guidance for everyday conditions — adapted to Pakistani plates, and always designed to work alongside your doctor and healthcare team."
    />

    {/* Conditions grid */}
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CONDITIONS.map((condition, i) => (
          <Reveal key={condition.name} delay={(i % 3) * 0.06}>
            <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-botanical/40 hover:shadow-lg hover:shadow-primary/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-primary transition-colors group-hover:bg-botanical group-hover:text-primary-foreground">
                <condition.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h2 className="mt-5 font-serif text-xl font-semibold text-primary">
                {condition.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {condition.blurb}
              </p>
              <Link
                to="/book"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-botanical"
              >
                Ask about this
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Safety note */}
    <section className="bg-sage/35 border-y border-border/60">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-card text-botanical ring-1 ring-botanical/25">
              <ShieldAlert className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h2 className="mt-6 font-serif text-2xl font-medium leading-tight text-primary text-balance md:text-3xl">
              An important note on how nutrition counselling fits your care
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Nutrition counselling supports your overall care and does not replace medical
              diagnosis, treatment, or emergency care. For complex conditions, Meal Mizaaj works
              best alongside your doctor and healthcare team.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
              Meal Mizaaj does not offer cures, disease reversal claims, or advice on medication.
              Always consult your physician for medical decisions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* CTA */}
    <section className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Not sure where you fit?"
        title="Tell me what you’re navigating"
        lead="If your concern isn’t listed here, write to me about it. If it’s within my scope, we’ll build a plan together; if it isn’t, I’ll point you toward the right care."
      />
      <Reveal className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          to="/book"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
        >
          Book a Free Call
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </Link>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full border border-primary/25 bg-card px-8 text-sm font-semibold text-primary transition-all hover:border-botanical hover:text-botanical active:scale-[0.98]"
        >
          Send a Message
        </Link>
      </Reveal>
    </section>
  </>
);

export default ConditionsPage;
