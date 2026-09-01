import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Instagram, Facebook, Mail, MapPin, Phone, Sprout } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/data/site';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Meal Mizaaj — home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <Sprout className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight">Meal Mizaaj</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Personalized nutrition consultations, therapeutic meal planning, and coaching —
              built around the food your home already loves.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.8} />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Care</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li><Link to="/services" className="transition-colors hover:text-primary-foreground">Consultations</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-foreground">Therapeutic meal plans</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary-foreground">Nutrition coaching</Link></li>
              <li><Link to="/conditions" className="transition-colors hover:text-primary-foreground">Conditions I support</Link></li>
              <li><Link to="/packages" className="transition-colors hover:text-primary-foreground">Packages &amp; pricing</Link></li>
              <li><Link to="/book" className="transition-colors hover:text-primary-foreground">Book a free call</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-primary-foreground">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Meal Mizaaj. All rights reserved.</p>
          <p className="max-w-md">
            Nutrition guidance complements medical care — it never replaces your doctor’s advice.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="transition-colors hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="transition-colors hover:text-primary-foreground">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
