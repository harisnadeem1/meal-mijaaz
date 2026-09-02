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
  BookOpenCheck,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import SectionHeading, { Eyebrow } from '@/components/site/SectionHeading';
import { IMAGES } from '@/data/site';

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Education",
    detail: "BS Human Nutrition & Dietetics",
    supportingText:
      "University of Management and Technology · 2022–2026",
  },
  {
    icon: Stethoscope,
    title: "Ittefaq Hospital",
    detail: "Nutrition & Dietetics Internship",
    supportingText:
      "Hospital-based exposure to nutrition assessment, diet planning, and patient-focused dietary interventions.",
  },
  {
    icon: HeartHandshake,
    title: "Al Noor Hospital",
    detail: "Nutrition & Dietetics Internship",
    supportingText:
      "Clinical nutrition learning and dietary planning experience under hospital supervision.",
  },
  {
    icon: ScrollText,
    title: "Hameed Latif Hospital",
    detail: "Nutrition & Dietetics Internship",
    supportingText:
      "Exposure to nutrition assessment, dietetics practice, and patient-centred nutrition support.",
  },
  {
    icon: Award,
    title: "Community Health Learning",
    detail: "Sehat Safar Program",
    supportingText:
      "Participated in a health and community-welfare programme focused on public health awareness.",
  },
  {
    icon: BookOpenCheck,
    title: "Continuing Learning",
    detail: "Nutrition & Food Science Conferences",
    supportingText:
      "Participant in professional conferences focused on food science, functional foods, and nutraceuticals.",
  },
];

const VALUES = [
  {
    icon: PencilLine,
    number: "01",
    title: "Personalised",
    text: "Your guidance begins with your goals, routines, preferences, and health needs—not a generic template.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Compassionate",
    text: "A supportive, judgement-free space to talk honestly about food, habits, and the changes that feel possible.",
  },
  {
    icon: Leaf,
    number: "03",
    title: "Practical",
    text: "Clear nutrition guidance built for everyday meals, busy schedules, social plans, travel, and family life.",
  },
  {
    icon: Sprout,
    number: "04",
    title: "Sustainable",
    text: "Small, realistic habits designed to support your health over time—without crash diets or rigid rules.",
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
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
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
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <Eyebrow>My story</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-primary text-balance md:text-4xl">
  I’m glad you’re here.
</h2>

<div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
  <p>
    I have always believed that food is about more than nutrition. It is comfort,
    connection, routine, culture, and the small everyday moments that make life feel like home.
    Yet so much nutrition advice still asks people to start over with unfamiliar foods,
    complicated rules, and plans that are difficult to maintain.
  </p>

  <p>
    Meal Mizaaj was created from a simple belief: healthy eating should work with your
    life, not against it. I support people with weight-management goals, blood sugar and
    blood-pressure concerns, cholesterol, fatty liver, PCOS, digestive health, pregnancy
    nutrition, and everyday wellbeing—without asking them to give up the foods and meals
    they genuinely enjoy.
  </p>

  <p>
    My approach is personal, practical, and unhurried. We look at your goals, lifestyle,
    food preferences, daily routine, and any relevant health information you choose to
    share. Then we build realistic nutrition habits that feel clear, supportive, and
    sustainable over time.
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
  <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
    <SectionHeading
      eyebrow="The Meal Mizaaj Way"
      title="Thoughtful support, built around real life"
      lead="A calmer, more practical approach to nutrition—designed around you, not a list of rules."
    />

    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {VALUES.map((value, i) => {
        const Icon = value.icon;

        return (
          <Reveal key={value.title} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-botanical/35 hover:shadow-lg hover:shadow-primary/5 md:p-8">
              {/* Small number in the top-right corner */}
              <span
                aria-hidden="true"
                className="absolute right-7 top-6 font-serif text-4xl italic leading-none text-primary/10 transition-colors duration-300 group-hover:text-botanical/20"
              >
                {value.number}
              </span>

              {/* Thin decorative line */}
              <span
                aria-hidden="true"
                className="absolute left-7 top-0 h-px w-12 bg-gold/80 transition-all duration-300 group-hover:w-20"
              />
<div className="flex items-center gap-4">
  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
    <Icon className="h-5 w-5" strokeWidth={1.7} />
  </span>

  <h3 className="font-serif text-2xl font-semibold text-primary">
    {value.title}
  </h3>
</div>

              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </article>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>

    {/* Credentials — editable placeholders */}
    {/* Background & Training */}
<section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
  <SectionHeading
    eyebrow="Background & Training"
    title="Education, clinical learning & continued development"
    lead="My approach is shaped by formal nutrition education, hospital-based internship exposure, and continued learning in nutrition and dietetics."
  />

  <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {CREDENTIALS.map((credential, i) => {
      const Icon = credential.icon;

      return (
        <Reveal key={credential.title} delay={i * 0.06}>
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-botanical/35 hover:shadow-lg hover:shadow-primary/5">
            <span
              aria-hidden="true"
              className="absolute left-7 top-0 h-px w-10 bg-gold/80 transition-all duration-300 group-hover:w-16"
            />

            <div className="flex items-center gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>

              <h3 className="font-serif text-lg font-semibold leading-tight text-primary">
                {credential.title}
              </h3>
            </div>

            <p className="mt-6 font-serif text-lg font-medium leading-snug text-primary">
              {credential.detail}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {credential.supportingText}
            </p>
          </article>
        </Reveal>
      );
    })}
  </div>

  <Reveal className="mx-auto mt-8 max-w-3xl">
    <div className="rounded-2xl border border-border bg-sage/35 px-5 py-4 text-center text-xs leading-relaxed text-muted-foreground">
      Meal Mizaaj provides personalised nutrition education and dietary guidance. It does not
      replace medical diagnosis, emergency care, medication advice, or treatment from a physician
      or healthcare team.
    </div>
  </Reveal>
</section>

    {/* CTA */}
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
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
