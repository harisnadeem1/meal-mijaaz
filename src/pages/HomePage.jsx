import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Droplets,
  Flower2,
  HeartPulse,
  Leaf,
  NotebookPen,
  Sparkles,
  TrendingDown,
  Video,
  Wheat,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading, { Eyebrow } from '@/components/site/SectionHeading';
import { IMAGES, PACKAGES } from '@/data/site';

const TRUST_POINTS = [
  { icon: NotebookPen, label: 'Personalised meal plans' },
  { icon: Video, label: 'Online consultations' },
  { icon: Wheat, label: 'Pakistan-friendly food guidance' },
];


const MARQUEE_ITEMS = [
  'Weight Management',
  'Diabetes Care',
  'PCOS Support',
  'Heart Health',
  'Pregnancy Nutrition',
  'Digestive Wellness',
  'Fatty Liver',
  'Cholesterol Care',
];

const SUPPORT_AREAS = [
  {
    icon: TrendingDown,
    title: 'Weight Management',
    text: 'Sustainable, steady changes built around the food your household already cooks — no crash diets, no guilt.',
  },
  {
    icon: Droplets,
    title: 'Diabetes Support',
    text: 'Carbohydrate awareness, meal timing, and desi-friendly swaps that help steady blood sugar alongside your doctor’s care.',
  },
  {
    icon: HeartPulse,
    title: 'Hypertension & Heart Health',
    text: 'Salt-smart cooking and heart-friendly fats, adapted to the Pakistani plate and your everyday routine.',
  },
  {
    icon: Flower2,
    title: 'PCOS & Hormonal Health',
    text: 'Gentle, consistent nutrition that supports hormone balance, cycle regularity, and a calmer relationship with food.',
  },
  {
    icon: Leaf,
    title: 'Digestive Health',
    text: 'Relief-focused eating for bloating, acidity, and sluggish digestion — calm meals for a calmer gut.',
  },
  {
    icon: Sparkles,
    title: 'Everyday Wellness',
    text: 'For anyone who simply wants to feel better — steadier energy, better sleep, and sustainable everyday habits.',
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Book your free call',
    text: 'A relaxed 15-minute conversation about your health, your goals, and whether we’re the right fit — no obligation.',
  },
  {
    n: '02',
    title: 'Receive your personalised plan',
    text: 'A consultation and a therapeutic meal plan built around your condition, routine, and home cooking.',
  },
  {
    n: '03',
    title: 'Build sustainable habits',
    text: 'Gentle follow-ups and steady support help new habits take root — through busy weeks, dawats, and travel.',
  },
];

const PRACTICAL_POINTS = [
  'Medical needs & lab reports',
  'Food preferences & allergies',
  'Daily schedule & routine',
  'Budget & grocery access',
  'Culture & family meals',
  'Home cooking, not imported “diet food”',
];

const PLACEHOLDER_STORIES = [
  {
    initials: 'A.K.',
    context: 'PCOS & hormonal health · Lahore',
    quote:
      'The plan finally felt like it was written for my kitchen, not against it. The guidance was calm, practical, and easy to keep up with on busy weeks.',
  },
  {
    initials: 'B.R.',
    context: 'Diabetes support · Karachi',
    quote:
      'Meal timing and portion guidance made a real difference to how I felt day to day. I still eat roti every day — just in a way that works for me.',
  },
  {
    initials: 'M.T.',
    context: 'Everyday wellness · online',
    quote:
      'No judgement, no overwhelm — just clear, kind steps I could actually follow. It felt like having a guide rather than a rulebook.',
  },
];

const HomePage = () => (
  <>
    <Helmet>
      <title>Meal Mizaaj — Personalised Nutrition Care</title>
      <meta
        name="description"
        content="Evidence-informed, practical nutrition support for weight management, diabetes, hypertension, PCOS, digestive health, and everyday wellbeing. Book a free call with Meal Mizaaj."
      />
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-sage/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-botanical">
            Personalised Nutrition Care
          </p>
          <h1 className="mt-5 font-serif text-[2.6rem] font-medium leading-[1.08] tracking-tight text-primary text-balance md:text-6xl">
            Nutrition that suits your <em className="italic text-botanical">mizaaj</em>.
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Evidence-informed, practical nutrition support for weight management, diabetes,
            hypertension, PCOS, digestive health, and everyday wellbeing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/book"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
            >
              Book a Free Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-7 text-sm font-semibold text-primary transition-all hover:border-botanical hover:text-botanical active:scale-[0.98]"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        {/* Right: refined editorial collage */}
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative col-span-2">
              <div
                aria-hidden="true"
                className="absolute -left-3 -top-3 h-full w-full rounded-t-[9rem] rounded-b-3xl border border-botanical/25"
              />
              <img
                src={IMAGES.hero}
                alt="Preparing a fresh, healthy salad in a bright home kitchen"
                className="relative aspect-[16/10] w-full rounded-t-[9rem] rounded-b-3xl object-cover"
                loading="eager"
              />
            </div>
            <img
              src={IMAGES.flatlay}
              alt="Fresh whole ingredients laid out on a linen surface"
              className="aspect-square w-full rounded-2xl object-cover shadow-sm shadow-primary/10"
              loading="lazy"
            />
            <img
              src={IMAGES.consult}
              alt="A calm nutrition consultation setting with notes and green tea"
              className="aspect-square w-full rounded-2xl object-cover shadow-sm shadow-primary/10"
              loading="lazy"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-lg shadow-primary/10 backdrop-blur">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-primary">
              <Leaf className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <p className="text-sm font-medium leading-snug text-primary">
              Personalised plans • Real food • Ongoing support
            </p>
          </div>
        </Reveal>
      </div>
    </section>


      <section className="overflow-hidden border-y border-primary/10 bg-primary py-4" aria-label="Areas of support">
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {MARQUEE_ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-6 pr-6 font-serif text-sm italic tracking-wide text-primary-foreground/85"
              >
                {item}
                <Leaf className="h-3.5 w-3.5 text-gold" strokeWidth={1.8} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>



    {/* Trust strip */}
    <section className="border-y border-primary/10 bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-7 md:flex-row md:justify-between md:px-8">
        {TRUST_POINTS.map((point) => (
          <div key={point.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-botanical">
              <point.icon className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <p className="text-sm font-medium text-primary">{point.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Areas of Support */}
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Areas of Support"
        title="Nutrition care, shaped around your needs"
        lead="Each plan begins with your full picture — medical history, lifestyle, and the way your household actually eats."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SUPPORT_AREAS.map((area, i) => (
          <Reveal key={area.title} delay={i * 0.07}>
            <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-botanical/40 hover:shadow-lg hover:shadow-primary/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-primary transition-colors group-hover:bg-botanical group-hover:text-primary-foreground">
                <area.icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{area.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
              <Link
                to="/conditions"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-botanical"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* How it works */}
    <section className="border-y border-border/60 bg-sage/30">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Three clear steps to a healthier table"
          lead="No overwhelm, no overhaul. A calm process that meets you exactly where you are."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1} className="border-t-2 border-primary/15 pt-6">
              <p className="font-serif text-5xl font-light text-gold">{step.n}</p>
              <h3 className="mt-4 font-serif text-xl font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Featured: practical, not restrictive */}
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-sage" />
          <img
            src={IMAGES.consult}
            alt="Writing a personalised meal plan beside green tea and fresh ingredients"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <Eyebrow>The Meal Mizaaj way</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-primary text-balance md:text-4xl">
            Nutrition should feel practical, not restrictive.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Your plan is built around the things that actually shape how you eat — your medical
            needs, food preferences, schedule, budget, culture, and the meals your household shares.
            Healthy eating that fits your life, not the other way round.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {PRACTICAL_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-botanical">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-botanical"
          >
            More about my approach
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* Packages preview */}
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Packages & Pricing"
            title="Choose the level of support that suits you"
            lead="From a single consultation to months of guided coaching — every package is personal and practical."
            className="md:max-w-xl"
          />
          <Reveal delay={0.1}>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-botanical hover:text-botanical active:scale-[0.98]"
            >
              View full pricing
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PACKAGES.slice(1, 4).map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                  pkg.featured
                    ? 'border-botanical/50 bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground'
                }`}
              >
                <h3
                  className={`font-serif text-xl font-semibold ${
                    pkg.featured ? 'text-primary-foreground' : 'text-primary'
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-1 text-xs ${
                    pkg.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {pkg.period}
                </p>
                <p
                  className={`mt-4 font-serif text-3xl font-medium ${
                    pkg.featured ? 'text-primary-foreground' : 'text-primary'
                  }`}
                >
                  {pkg.price}
                </p>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    pkg.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {pkg.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${
                        pkg.featured ? 'text-primary-foreground/90' : 'text-foreground'
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          pkg.featured ? 'text-gold' : 'text-botanical'
                        }`}
                        strokeWidth={2.2}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link
            to="/book"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
          >
            Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>

    {/* Testimonials — placeholder client stories */}
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Client stories"
        title="Kind, practical guidance — in their own words"
        lead="These are placeholder client stories while real testimonials are gathered. No health outcomes or medical claims are implied."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {PLACEHOLDER_STORIES.map((story, i) => (
          <Reveal key={story.initials} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                Client story · placeholder
              </span>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                “{story.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border/70 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {story.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Client placeholder</p>
                  <p className="text-xs text-muted-foreground">{story.context}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          Real client testimonials will replace these placeholders once collected, with consent.
        </p>
      </Reveal>
    </section>

    {/* Final CTA */}
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center md:px-12 md:py-20">
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
              Begin gently
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-primary-foreground text-balance md:text-5xl">
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/75 md:text-base">
              Start with a free 15-minute call. We’ll talk about your health, your table, and what a
              kinder way forward could look like — no pressure, no obligation.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 text-sm font-semibold text-primary transition-all hover:bg-sage active:scale-[0.98]"
            >
              Book Your Free Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

export default HomePage;
