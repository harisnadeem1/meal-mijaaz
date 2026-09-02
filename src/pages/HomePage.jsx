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
    Activity,
  Apple,
  Baby,
  Heart,
  Stethoscope,
  Utensils,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading, { Eyebrow } from '@/components/site/SectionHeading';
import { IMAGES, PACKAGES } from '@/data/site';




const MARQUEE_ITEMS = [
  {
    label: "Healthy Weight Management",
    icon: Activity,
  },
  {
    label: "Diabetes Nutrition Support",
    icon: Apple,
  },
  {
    label: "PCOS Support",
    icon: Heart,
  },
  {
    label: "Digestive Health",
    icon: Utensils,
  },
  {
    label: "Real Food for Real Life",
    icon: Leaf,
  },
  {
    label: "Heart Health Guidance",
    icon: HeartPulse,
  },
  {
    label: "Cholesterol Support",
    icon: Stethoscope,
  },
  {
    label: "Fatty Liver Support",
    icon: Leaf,
  },
  {
    label: "Pregnancy Nutrition",
    icon: Baby,
  },
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
  title: "Hypertension & Heart Health",
  text: "Salt-smart cooking and heart-friendly food choices, adapted to your routine, preferences, and everyday meals.",
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

const CLIENT_STORIES = [
  {
    initials: "A.",
    context: "PCOS nutrition support · Pakistan",
    quote:
      "The advice felt realistic from the first conversation. I did not have to stop eating the meals I enjoy—I just learned how to make them work better for my routine.",
  },
  {
    initials: "R.",
    context: "Diabetes nutrition support · United Kingdom",
    quote:
      "Everything was explained in a simple way, without making me feel judged. The suggestions were practical and easy to think about when planning meals at home.",
  },
  {
    initials: "M.",
    context: "General wellness support · Dubai, UAE",
    quote:
      "I appreciated how calm and personal the guidance felt. It gave me a few clear things to focus on instead of making nutrition feel confusing or overwhelming.",
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
          Practical, evidence-informed nutrition guidance that fits your routine, your culture, and the foods you enjoy—so healthy habits can feel sustainable, not restrictive.
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

<section
  className="relative overflow-hidden border-y border-primary-foreground/10 bg-primary py-4 sm:py-5"
  aria-label="Areas of nutrition support"
>
  <p className="sr-only">
    Meal Mizaaj provides personalised nutrition support for healthy weight management,
    diabetes, PCOS, digestive health, heart health, cholesterol, fatty liver, and pregnancy nutrition.
  </p>

  <div className="flex w-max items-center animate-marquee">
    {[0, 1].map((copy) => (
      <div
        key={copy}
        className="flex shrink-0 items-center"
        aria-hidden={copy === 1}
      >
        {MARQUEE_ITEMS.map(({ label, icon: Icon }) => (
          <span
            key={`${copy}-${label}`}
            className="flex items-center gap-3 whitespace-nowrap px-5 font-serif text-sm font-semibold  tracking-wide text-primary-foreground/85 sm:px-7 sm:text-[15px]"
          >
            <Icon
              className="h-4 w-4 shrink-0 text-primary-foreground/85"
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span>{label}</span>

            <span
              aria-hidden="true"
              className="ml-2 h-1 w-1 rounded-full bg-primary-foreground/50"
            />
          </span>
        ))}
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
        lead="From a focused first consultation to ongoing personalised guidance—every package is practical, supportive, and shaped around you."
        className="md:max-w-xl"
      />

      <Reveal delay={0.1}>
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-botanical hover:text-botanical active:scale-[0.98]"
        >
          Explore support options
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </Reveal>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {PACKAGES.slice(1, 4).map((pkg, i) => (
        <Reveal key={pkg.name} delay={i * 0.08}>
         <div
  className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
    pkg.featured
      ? "border-botanical/50 bg-primary  text-primary-foreground"
      : "border-border bg-background text-foreground"
  }`}
>
  {pkg.featured && (
    <span className="absolute left-7 top-0 -translate-y-1/2 rounded-full border border-primary/15 bg-gold px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary shadow-sm shadow-primary/15">
      Most Popular
    </span>
  )}

            <h3
              className={`font-serif text-xl font-semibold ${
                pkg.featured ? "text-primary-foreground" : "text-primary"
              }`}
            >
              {pkg.name}
            </h3>

            <p
              className={`mt-1 text-xs ${
                pkg.featured
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground"
              }`}
            >
              {pkg.period}
            </p>

            <p
              className={`mt-5 flex-1 text-sm leading-relaxed ${
                pkg.featured
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              }`}
            >
              {pkg.description}
            </p>

            <ul className="mt-5 space-y-2.5">
              {pkg.features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className={`flex items-start gap-2.5 text-sm ${
                    pkg.featured
                      ? "text-primary-foreground/90"
                      : "text-foreground"
                  }`}
                >
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      pkg.featured ? "text-gold" : "text-botanical"
                    }`}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to={`/book?package=${encodeURIComponent(pkg.name)}`}
              className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                pkg.featured
                  ? "text-primary-foreground hover:text-gold"
                  : "text-primary hover:text-botanical"
              }`}
            >
              {pkg.cta || "Discuss This Option"}

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>

    <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
      Pricing is shared after your free discovery call, once we understand the level of
      support that best suits your goals.
    </p>

    <Reveal className="mt-6 text-center">
      <Link
        to="/book"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
      >
        Book a Free Call
        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
      </Link>

      <p className="mt-4 text-xs text-muted-foreground">
        Free 15-minute discovery call · No pressure to commit
      </p>
    </Reveal>
  </div>
</section>

    {/* Testimonials — placeholder client stories */}
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
  <SectionHeading
    eyebrow="Client stories"
    title="Kind, practical guidance — in their own words"
    lead="Shared with permission. Individual experiences vary."
  />

  <div className="mt-12 grid gap-5 md:grid-cols-3">
    {CLIENT_STORIES.map((story, i) => (
      <Reveal key={story.initials} delay={i * 0.08}>
        <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
            Client story
          </span>

          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
            “{story.quote}”
          </blockquote>

          <figcaption className="mt-5 flex items-center gap-3 border-t border-border/70 pt-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {story.initials}
            </span>

            <div>
              <p className="text-sm font-semibold text-primary">
                Meal Mizaaj client
              </p>

              <p className="text-xs text-muted-foreground">
                {story.context}
              </p>
            </div>
          </figcaption>
        </figure>
      </Reveal>
    ))}
  </div>

 
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
