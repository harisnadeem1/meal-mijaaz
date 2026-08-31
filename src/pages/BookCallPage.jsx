import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ChevronDown,
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
import { IMAGES } from '@/data/site';

const CALL_POINTS = [
  {
    icon: MessagesSquare,
    title: 'Discuss your goals',
    text: 'Share where you are now and what you’d like to change — at your pace, in your words.',
  },
  {
    icon: ListChecks,
    title: 'Understand the next steps',
    text: 'I’ll walk you through how nutrition support works and what realistic progress looks like.',
  },
  {
    icon: HeartHandshake,
    title: 'Choose the right support option',
    text: 'Together we’ll find the package or service that fits your needs — with no pressure to decide today.',
  },
];

const FAQS = [
  {
    q: 'Is the call really free?',
    a: 'Yes — completely free, with no obligation. The 15-minute discovery call is my way of understanding your goals and helping you decide whether nutrition support with Meal Mizaaj is right for you before you commit to anything.',
  },
  {
    q: 'What should I prepare?',
    a: 'A quiet space and a few minutes is enough. If you have recent lab reports or a list of medications, keep them handy — they’re helpful but not required. Come with any questions you’d like to ask; no question is too small.',
  },
  {
    q: 'Is this a full diet consultation?',
    a: 'No. The discovery call is a short, focused conversation to understand your needs and recommend a path forward. A full consultation — with a personalised assessment and written meal plan — happens separately, as part of a chosen package.',
  },
  {
    q: 'Can I reschedule?',
    a: 'Of course. Life happens. Just reply to your confirmation email or WhatsApp message at least 24 hours before your scheduled time, and we’ll find a new slot that works for you.',
  },
];

const FaqItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border/70 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-semibold text-primary">{q}</span>
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
      <title>Book Your Free Call — Meal Mizaaj</title>
      <meta
        name="description"
        content="Book a free 15-minute nutrition discovery call with Meal Mizaaj. Choose a date and time, share your goals, and find the right nutrition support — no obligation."
      />
    </Helmet>

    {/* Hero */}
    <section className="border-b border-border/60 bg-sage/35">
      <div className="mx-auto max-w-3xl px-5 pb-14 pt-32 text-center md:px-8 md:pb-20 md:pt-40">
        <Reveal>
          <Eyebrow className="justify-center">Let’s talk</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-primary text-balance md:text-5xl">
            Book your free 15-minute nutrition call.
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Tell me a little about your goals, ask your initial questions, and find out which type of
            nutrition support may suit you.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-botanical/30 bg-card px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4 text-botanical" strokeWidth={1.7} />
            Free — 15 minutes · No obligation
          </div>
        </Reveal>
      </div>
    </section>

    {/* Booking layout */}
    <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left — what to expect */}
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            What happens on the call
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A relaxed, one-to-one conversation — online, on Google Meet or WhatsApp video. We talk
            through where you are, what you’re hoping for, and how I can help. There’s no script, no
            pressure, and no expectation that you’ll book anything afterwards.
          </p>

          <div className="mt-8 space-y-7">
            {CALL_POINTS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-primary">
                  <item.icon className="h-5 w-5" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 hidden lg:block">
            <div aria-hidden="true" className="absolute -bottom-3 -right-3 h-full w-full rounded-3xl bg-sage" />
            <img
              src={IMAGES.flatlay}
              alt="A meal-planning notebook beside green tea and nuts"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover"
              loading="lazy"
            />
          </div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl border border-botanical/25 bg-sage/40 p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-botanical" strokeWidth={1.7} />
            <p className="text-sm leading-relaxed text-foreground">
              Your information is kept private and used only to respond to your enquiry.
            </p>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
            <Stethoscope className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.7} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Please note: this call does not provide a medical diagnosis, is not an emergency
              service, and does not include medication advice. For urgent or medical concerns,
              please contact your doctor or a local emergency service.
            </p>
          </div>
        </Reveal>

        {/* Right — booking interface */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-9">
            <h2 className="font-serif text-2xl font-semibold text-primary">Request your call</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Pick a date and time that suits you, share a few details, and I’ll confirm by email or
              WhatsApp within one working day.
            </p>
            <div className="mt-7">
              <BookingForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* FAQ */}
    <section className="border-t border-border/60 bg-cream/50">
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Good to know</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-primary md:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-10">
          <div className="rounded-3xl border border-border bg-card px-6 py-2 md:px-8">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default BookCallPage;
