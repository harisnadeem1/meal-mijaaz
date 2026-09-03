import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Globe2,
  HeartHandshake,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import BookingForm from '@/components/site/BookingForm';
import { Eyebrow } from '@/components/site/SectionHeading';

const CALL_POINTS = [
  {
    icon: MessagesSquare,
    step: '01',
    title: 'Share your goals',
    text: 'Tell me what you would like support with, in your own words and at your own pace.',
  },
  {
    icon: ListChecks,
    step: '02',
    title: 'Ask your questions',
    text: 'Understand how personalised nutrition support works and what the next step could look like.',
  },
  {
    icon: HeartHandshake,
    step: '03',
    title: 'Choose with clarity',
    text: 'Receive a clear recommendation for the level of support that may suit your goals and routine.',
  },
];

const FAQS = [
  {
    q: 'Is the discovery call really free?',
    a: 'Yes. Your 15-minute discovery call is completely free and comes with no obligation. It is simply a calm first conversation to understand your goals and help you decide whether Meal Mizaaj is the right fit.',
  },
  {
    q: 'What should I prepare for the call?',
    a: 'Nothing formal is required. A quiet space and a few minutes are enough. You are welcome to keep recent reports or a list of medications nearby if you would like to discuss them, but they are not required for this first call.',
  },
  {
    q: 'Is this a full nutrition consultation?',
    a: 'No. The discovery call is a short introductory conversation, not a detailed assessment or treatment session. If you decide to continue, a full consultation and personalised nutrition guidance are arranged separately.',
  },
  {
    q: 'How will my call be confirmed?',
    a: 'After you submit your preferred date and time, you will receive confirmation by email or WhatsApp within one working day. If your selected slot is unavailable, you will be offered the closest suitable alternative.',
  },
  {
    q: 'Can I reschedule?',
    a: 'Yes. If you need to change your appointment, please reply to your confirmation message with at least 24 hours’ notice where possible, and we will help you find another suitable time.',
  },
];

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/70 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-base font-semibold leading-snug text-primary md:text-lg">
          {q}
        </span>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-botanical transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          strokeWidth={1.8}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{a}</p>
      </div>
    </div>
  );
};

const BookCallPage = () => (
  <>
    <Helmet>
      <title>Book a Free Call — Meal Mizaaj</title>
      <meta
        name="description"
        content="Book a free 15-minute discovery call with Meal Mizaaj. Share your nutrition goals, ask your questions, and explore personalised nutrition support with no obligation."
      />
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden border-b border-border/60 bg-sage/35">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-botanical/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-28 text-center md:px-8 md:pb-16 md:pt-36">
        <Reveal>
          <Eyebrow className="justify-center">Free discovery call</Eyebrow>

          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-primary text-balance md:text-5xl">
            A calm first step towards feeling better with food.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Book a free 15-minute call to share your goals, ask your questions, and understand
            what kind of personalised nutrition support may fit your life.
          </p>

          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-botanical/20 bg-card/80 px-4 py-2.5 text-xs font-medium text-primary shadow-sm shadow-primary/[0.03]">
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4 text-botanical" strokeWidth={1.8} />
              Free · 15 minutes
            </span>

            <span className="hidden h-3 w-px bg-border sm:block" />

            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-botanical" strokeWidth={1.8} />
              Online worldwide
            </span>

            <span className="hidden h-3 w-px bg-border sm:block" />

            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-botanical" strokeWidth={1.8} />
              No obligation
            </span>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Booking form — primary page focus */}
    <section className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-xl shadow-primary/[0.06] sm:p-7 md:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sage/50 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-col gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <CalendarCheck className="h-5 w-5" strokeWidth={1.7} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-botanical">
                    Choose a date and time
                  </p>
                  <h2 className="mt-1 font-serif text-2xl font-semibold text-primary md:text-3xl">
                    Request your free call
                  </h2>
                </div>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sage px-3 py-1.5 text-xs font-semibold text-botanical">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
                Free · 15 minutes
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Choose a preferred date and time, then share a few details. Your appointment will be
              confirmed by email or WhatsApp within one working day.
            </p>

            <div className="mt-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </Reveal>

      {/* What happens next */}
      <div className="mt-14 md:mt-20">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">What to expect</Eyebrow>

          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-primary md:text-4xl">
            A simple, unhurried conversation.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            This is not a full consultation. It is a private first conversation to understand what
            you are navigating and whether Meal Mizaaj is the right support for you.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {CALL_POINTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="relative h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-botanical/35 hover:shadow-md hover:shadow-primary/[0.04]">
                <span className="absolute right-5 top-5 font-serif text-3xl font-medium text-gold/40">
                  {item.step}
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>

                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">{item.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Trust and safety notes */}
      <Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl border border-botanical/20 bg-sage/35 p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-botanical" strokeWidth={1.7} />
            <p className="text-sm leading-relaxed text-foreground">
              Your details are kept private and used only to arrange and respond to your booking
              enquiry.
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-border bg-cream/60 p-5">
            <Stethoscope
              className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
              strokeWidth={1.7}
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              This call does not provide medical diagnosis, emergency care, or medication advice.
              For urgent medical concerns, contact your physician or local emergency services.
            </p>
          </div>
        </div>
      </Reveal>
    </section>

    {/* FAQ */}
    <section className="border-t border-border/60 bg-sage/20">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Good to know</Eyebrow>

          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-primary md:text-4xl">
            Questions before you book?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A few helpful details about the free discovery call.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="rounded-3xl border border-border bg-card px-5 py-2 shadow-sm shadow-primary/[0.03] sm:px-7 md:px-8">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default BookCallPage;