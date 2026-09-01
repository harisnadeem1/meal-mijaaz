import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowUpRight,
  Clock,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import InquiryForm from '@/components/site/InquiryForm';
import { CONTACT } from '@/data/site';

const CONTACT_CARDS = [
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: 'Replies within one working day',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: CONTACT.whatsapp,
    href: `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, '')}`,
    note: 'Quickest for quick questions',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: CONTACT.instagram,
    href: CONTACT.instagramUrl,
    note: 'Recipes & daily nutrition notes',
  },
  {
    icon: Globe,
    title: 'Online consultations',
    value: 'Worldwide',
    note: CONTACT.onlineAvailability,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: CONTACT.location,
    note: 'In-person available in Lahore',
  },
  {
    icon: Clock,
    title: 'Clinic hours',
    value: CONTACT.hours,
    note: 'Evenings by appointment',
  },
];

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact — Meal Mizaaj</title>
      <meta
        name="description"
        content="Get in touch with Meal Mizaaj — questions about consultations, packages, recipes, or working together. Based in Lahore, Pakistan, with online consultations worldwide."
      />
    </Helmet>

    <PageHero
      eyebrow="Contact"
      title="I’d love to hear from you"
      lead="Questions about consultations, packages, or whether nutrition support is right for you — write anytime."
    />

    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-primary md:text-3xl">
            Ways to reach me
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CONTACT_CARDS.map((card) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-primary">
                    <card.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-botanical">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-foreground">{card.value}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{card.note}</p>
                  </div>
                </>
              );
              const classes =
                'flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-botanical/40 hover:shadow-md hover:shadow-primary/5';
              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={classes}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.title} className={classes}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-botanical/25 bg-sage/40 p-5 text-sm leading-relaxed text-foreground">
            <p className="font-semibold text-primary">Prefer to talk it through?</p>
            <p className="mt-1 text-muted-foreground">
              A free 15-minute call is the easiest way to begin — no pressure, just an honest
              conversation about your goals.
            </p>
            <Link
              to="/book"
              className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
            >
              Book a Free Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>

          <p className="mt-6 rounded-2xl border border-destructive/30 bg-destructive/5 p-5 text-sm leading-relaxed text-foreground">
            For medical emergencies, please contact your doctor or local emergency services —
            nutrition care is never a substitute for urgent medical attention.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-9">
            <h2 className="font-serif text-2xl font-semibold text-primary">Send a message</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I read every message personally and reply within one working day.
            </p>
            <div className="mt-7">
              <InquiryForm type="contact" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ContactPage;
