import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Clock3,
  Globe2,
  Instagram,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { CONTACT } from '@/data/site';

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-1 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
  >
    <span>{children}</span>
    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
  </Link>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-botanical/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.9fr_1.15fr] lg:gap-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center" aria-label="Meal Mizaaj home">
              <img
                src="/logo/logo-white.png"
                alt="Meal Mizaaj"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Personalised nutrition support shaped around your goals, routine, food preferences,
              and the meals you already enjoy.
            </p>

            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Meal Mizaaj on Instagram"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-all hover:border-gold hover:bg-primary-foreground/5 hover:text-gold"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>

          {/* Support links */}
          <nav aria-label="Nutrition support">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Nutrition support
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <FooterLink to="/services">Explore services</FooterLink>
              </li>
              <li>
                <FooterLink to="/conditions">Conditions I support</FooterLink>
              </li>
              <li>
                <FooterLink to="/packages">How we work</FooterLink>
              </li>
              <li>
                <FooterLink to="/recipes">Recipes &amp; resources</FooterLink>
              </li>
              <li>
                <FooterLink to="/reviews">Client experiences</FooterLink>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-start gap-3 transition-colors hover:text-primary-foreground"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/45">
                    Email
                  </span>
                  <span className="mt-1 block break-all">{CONTACT.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold">
                  <Globe2 className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/45">
                    Consultations
                  </span>
                  <span className="mt-1 block">Online worldwide</span>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 text-gold">
                  <Clock3 className="h-3.5 w-3.5" strokeWidth={1.8} />
                </span>

                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/45">
                    Availability
                  </span>
                  <span className="mt-1 block">{CONTACT.hours}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} Meal Mizaaj. All rights reserved.</p>

          <div className="flex max-w-md items-start gap-2 lg:items-center">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold/80 lg:mt-0" strokeWidth={1.7} />
            <p className="leading-relaxed">
              Nutrition support complements medical care; it does not replace your physician.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy" className="transition-colors hover:text-primary-foreground">
              Privacy Policy
            </Link>

            <Link to="/disclaimer" className="transition-colors hover:text-primary-foreground">
              Disclaimer
            </Link>

            <Link to="/contact" className="transition-colors hover:text-primary-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;