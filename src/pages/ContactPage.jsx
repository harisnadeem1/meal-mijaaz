import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  ArrowUpRight,
  CalendarCheck,
  Clock3,
  Globe2,
  Instagram,
  Mail,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import InquiryForm from '@/components/site/InquiryForm';
import { CONTACT } from '@/data/site';

const ContactMethod = ({ icon: Icon, title, value, note, href, external = false }) => {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-botanical">
          {title}
        </p>

        <p className="mt-1 break-all text-sm font-semibold leading-relaxed text-primary">
          {value}
        </p>

        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{note}</p>
      </div>

      {href && (
        <ArrowUpRight className="h-4 w-4 shrink-0 self-start text-muted-foreground transition-colors group-hover:text-botanical" />
      )}
    </>
  );

  const className =
    'group flex min-h-[104px] min-w-0 items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-botanical/40 hover:shadow-md hover:shadow-primary/[0.04]';

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={className}
    >
      {content}
    </a>
  );
};

const ContactPage = () => {
  const whatsappNumber = CONTACT.whatsapp.replace(/[^0-9]/g, '');

  return (
    <>
      <Helmet>
        <title>Contact — Meal Mizaaj</title>
        <meta
          name="description"
          content="Contact Meal Mizaaj to ask about personalised nutrition support, book a free discovery call, or share your nutrition goals. Online consultations are available worldwide."
        />
      </Helmet>

      <PageHero
        eyebrow="Contact"
        title="Let’s talk about what support could look like."
        lead="Whether you have a question, want to understand the next step, or are ready to book a free call, you are welcome to get in touch."
      />

   

      {/* Contact choices and form */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-botanical">
                Other ways to connect
              </p>

              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-primary md:text-4xl">
                Choose what feels easiest.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                WhatsApp is ideal for a quick question. Email works well for more detailed
                enquiries. You can also send a message through the form and receive a personal
                response.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Reveal delay={0.04}>
                <ContactMethod
                  icon={MessageCircle}
                  title="WhatsApp"
                  value={CONTACT.whatsapp}
                  note="Best for quick questions"
                  href={`https://wa.me/${whatsappNumber}`}
                  external
                />
              </Reveal>

              <Reveal delay={0.08}>
                <ContactMethod
                  icon={Mail}
                  title="Email"
                  value={CONTACT.email}
                  note="For detailed questions or enquiries"
                  href={`mailto:${CONTACT.email}`}
                />
              </Reveal>

              <Reveal delay={0.12}>
                <ContactMethod
                  icon={Instagram}
                  title="Instagram"
                  value={CONTACT.instagram}
                  note="Recipes, practical tips, and updates"
                  href={CONTACT.instagramUrl}
                  external
                />
              </Reveal>

              <Reveal delay={0.16}>
                <ContactMethod
                  icon={CalendarCheck}
                  title="Availability"
                  value={CONTACT.hours}
                  note={CONTACT.onlineAvailability || 'Online consultations available worldwide'}
                />
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-6 rounded-2xl border border-botanical/20 bg-sage/35 p-5">
                <div className="flex items-start gap-3">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-botanical" strokeWidth={1.7} />
                  <div>
                    <p className="text-sm font-semibold text-primary">Online, wherever you are.</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Consultations are held online, so you can receive personalised nutrition
                      support from home, work, or anywhere that feels comfortable.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 rounded-2xl border border-destructive/20 bg-destructive/5 p-5 text-sm leading-relaxed text-foreground">
                <span className="font-semibold text-primary">Important: </span>
                Meal Mizaaj does not provide emergency or urgent medical care. If you are
                experiencing a medical emergency, contact your physician or local emergency
                services immediately.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm shadow-primary/[0.03] md:p-9">
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sage/55 blur-3xl"
              />

              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-botanical">
                  Send a message
                </p>

                <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-primary">
                  Tell me a little about what you need.
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Share your question, goal, or the kind of support you are looking for. You will
                  receive a personal reply within one working day.
                </p>

                <div className="mt-8">
                  <InquiryForm type="contact" />
                </div>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                  By sending this form, you agree that Meal Mizaaj may use your details to respond
                  to your enquiry. Please avoid including urgent or highly sensitive medical
                  information. Read the{' '}
                  <Link
                    to="/privacy"
                    className="font-medium text-primary underline underline-offset-2 hover:text-botanical"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

         {/* Primary contact options */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground md:px-10 md:py-12">
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-botanical/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
            />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  A gentle first step
                </p>

                <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                  Start with a free 15-minute discovery call.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                  Share what you would like support with, ask your questions, and explore the most
                  suitable next step together. There is no pressure and no obligation to continue.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-primary-foreground/70">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-gold" strokeWidth={1.8} />
                    15 minutes
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Globe2 className="h-4 w-4 text-gold" strokeWidth={1.8} />
                    Online worldwide
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.8} />
                    No obligation
                  </span>
                </div>
              </div>

              <Link
                to="/book"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-cream px-8 text-sm font-semibold text-primary transition-all hover:bg-white active:scale-[0.98]"
              >
                Book a Free Call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default ContactPage;