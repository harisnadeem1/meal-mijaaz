import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowUpRight,
  Award,
  GraduationCap,
  HeartHandshake,
  Leaf,
  PencilLine,
  ScrollText,
  Stethoscope,
  Sprout,
  Scale,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import SectionHeading, { Eyebrow } from '@/components/site/SectionHeading';
import { IMAGES } from '@/data/site';

// Editable placeholder credentials — replace each bracketed field with your
// real qualifications before publishing. Nothing here is a claim until you do.
const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: 'Degree',
    placeholder: '[Your degree — e.g., BSc (Hons) Human Nutrition & Dietetics]',
    hint: 'Add the qualification you earned and the awarding institution.',
  },
  {
    icon: ScrollText,
    title: 'Training',
    placeholder: '[Clinical training / internship — e.g., dietetic internship at …]',
    hint: 'List supervised clinical training or relevant residencies.',
  },
  {
    icon: Stethoscope,
    title: 'Clinical experience',
    placeholder: '[Years and settings — e.g., X years across clinic and hospital practice]',
    hint: 'Describe where and how long you have practised.',
  },
  {
    icon: Award,
    title: 'Certifications',
    placeholder: '[Certifications — e.g., certified nutrition specialist, …]',
    hint: 'Add any additional certifications or specialisations.',
  },
  {
    icon: Scale,
    title: 'Professional registration',
    placeholder: '[Registration — e.g., registered with the Pakistan Nutrition & Dietetic Society]',
    hint: 'Name the professional body you are registered or licensed with.',
  },
];

const VALUES = [
  {
    icon: PencilLine,
    title: 'Personalised',
    text: 'No two bodies, routines, or kitchens are the same. Your plan is built around you — not a template.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate',
    text: 'No scolding, no shame. Honest conversations about habits, met with warmth and patience.',
  },
  {
    icon: Leaf,
    title: 'Practical',
    text: 'Advice that fits a real week — busy days, family meals, dawats, travel, and Ramzan included.',
  },
  {
    icon: Sprout,
    title: 'Culturally relevant',
    text: 'Desi home cooking is the starting point, not the problem. Roti, daal, sabzi, and chai all have a place.',
  },
  {
    icon: ScrollText,
    title: 'Sustainable',
    text: 'Slow, steady habits you can keep for years — never crash diets or rules that collapse by week three.',
  },
];

const AboutPage = () => (
  <>
    <Helmet>
      <title>About — Meal Mizaaj</title>
      <meta
        name="description"
        content="Meet the dietitian behind Meal Mizaaj — nutrition care rooted in real life, offering personalised, compassionate, practical, culturally relevant, and sustainable support."
      />
    </Helmet>

    <PageHero
      eyebrow="About"
      title="Nutrition care rooted in real life."
      lead="Meal Mizaaj offers evidence-informed, practical nutrition support — built around the food your home already loves and the life you actually live."
    />

    {/* Story */}
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute -left-4 -top-4 h-full w-full rounded-t-[9rem] rounded-b-3xl border border-botanical/25"
        />
        <img
          src={IMAGES.portrait}
          alt="Portrait of the Meal Mizaaj dietitian"
          className="relative aspect-[3/4] w-full rounded-t-[9rem] rounded-b-3xl object-cover"
          loading="lazy"
        />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          [Replace this photo with your professional portrait.]
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <Eyebrow>My story</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-primary text-balance md:text-4xl">
          Assalam-o-alaikum — I’m so glad you’re here
        </h2>
        <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            I grew up in a home where food was love — daal on quiet evenings, karahi on weekends,
            and chai that fixed everything. When I trained as a dietitian, I noticed something
            troubling: most nutrition advice asked people to abandon exactly those tables.
          </p>
          <p>
            Meal Mizaaj was born from a simple conviction — that Pakistani home cooking and good
            health are not enemies. My work supports people managing weight, blood sugar, blood
            pressure, cholesterol, fatty liver, PCOS, digestion, and pregnancy nutrition without
            giving up the food their families gather around.
          </p>
          <p>
            My approach is personal, unhurried, and honest. We look at your reports, your routine,
            your sleep and stress — and then we build a way of eating that your body and your
            household can actually keep.
          </p>
        </div>
        <Link
          to="/book"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
        >
          Book a Free Call
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </Link>
      </Reveal>
    </section>

    {/* Values */}
    <section className="border-y border-border/60 bg-sage/30">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="My approach"
          title="Five values behind every plan"
          lead="The principles that shape every consultation, meal plan, and follow-up message."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07} className="border-t-2 border-primary/15 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-botanical">
                <v.icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Credentials — editable placeholders */}
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Credentials"
        title="Qualifications &amp; registration"
        lead="These fields are ready for you to complete with your verified credentials before publishing."
      />
      <Reveal className="mx-auto mt-6 max-w-2xl">
        <div className="flex items-start gap-3 rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-foreground">
          <PencilLine className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.7} />
          <p>
            <span className="font-semibold text-primary">Placeholder fields.</span> The details
            below are editable placeholders — replace each one with your own verified
            qualifications. No credentials are claimed until you add them.
          </p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {CREDENTIALS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-dashed border-border bg-card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-primary">
                <c.icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 rounded-lg bg-cream/70 px-3 py-2 text-sm italic leading-relaxed text-muted-foreground">
                {c.placeholder}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.hint}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <Reveal>
        <div className="rounded-3xl border border-botanical/25 bg-sage/40 px-6 py-12 text-center md:py-16">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-medium leading-tight text-primary text-balance">
            Let’s talk about your table
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A free 15-minute call is the easiest way to begin — no forms, no pressure, just an
            honest conversation.
          </p>
          <Link
            to="/book"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
          >
            Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default AboutPage;
