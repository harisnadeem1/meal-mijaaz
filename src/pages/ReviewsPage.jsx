import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, Quote, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import { REVIEWS } from '@/data/site';

const Stars = ({ rating }) => (
  <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1.5} />
    ))}
  </div>
);
const ReviewCard = ({ review, index }) => (
  <Reveal delay={(index % 3) * 0.07}>
    <figure className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-sm shadow-primary/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-botanical/35 hover:shadow-lg hover:shadow-primary/[0.06] md:p-7">
      <div
        aria-hidden="true"
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <Stars rating={review.rating} />

        <Quote
          aria-hidden="true"
          className="h-7 w-7 shrink-0 text-gold/55"
          strokeWidth={1.4}
        />
      </div>

      <blockquote className="relative mt-5 text-sm leading-relaxed text-foreground md:text-[15px]">
        “{review.quote}”
      </blockquote>

      <figcaption className="relative mt-6 flex items-end justify-between gap-4 border-t border-border/60 pt-4">
  <div>
    <p className="text-sm font-semibold text-primary">Meal Mizaaj Client</p>

    {(review.condition || review.location) && (
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        {[review.condition, review.location].filter(Boolean).join(' · ')}
      </p>
    )}
  </div>

  <span
    aria-hidden="true"
    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage font-serif text-[11px] font-semibold tracking-wide text-primary"
  >
    MM
  </span>
</figcaption>
    </figure>
  </Reveal>
);
const ReviewsPage = () => (
  <>
    <Helmet>
      <title>Client Reviews — Meal Mizaaj</title>
      <meta
        name="description"
        content="Anonymous client experiences from Meal Mizaaj — reflecting personalised nutrition support for weight management, diabetes, PCOS, digestive health, pregnancy nutrition, and everyday wellbeing." />
    </Helmet>

    <PageHero
      eyebrow="Client reviews"
      title="Quiet progress, in their own words"
      lead="Every review below reflects a real client experience, shared with permission and presented anonymously to protect client privacy."
    />



    {/* Review wall */}
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-28 h-72 w-72 rounded-full bg-sage/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
          {/* Column 1: starts at the top */}
          <div className="space-y-5">
            {REVIEWS.filter((_, i) => i % 3 === 0).map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} index={i} />
            ))}
          </div>

          {/* Column 2: deliberately lower, fewer cards */}
          <div className="space-y-5 lg:pt-32">
            {REVIEWS.filter((_, i) => i % 3 === 1).map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} index={i + 1} />
            ))}
          </div>

          {/* Column 3: modest offset */}
          <div className="space-y-5 lg:pt-8">
            {REVIEWS.filter((_, i) => i % 3 === 2).map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} index={i + 2} />
            ))}
          </div>
        </div>

        <Reveal className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-botanical/40 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
            />

            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                Your next step
              </p>

              <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl font-medium leading-tight text-balance md:text-4xl">
                Your story could be next.
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                Every journey begins with one calm, practical conversation about what support could
                look like for you.
              </p>

              <Link
                to="/book"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cream px-8 text-sm font-semibold text-primary transition-all hover:bg-white active:scale-[0.98]"
              >
                Book a Free Call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>

              <p className="mt-5 text-xs text-primary-foreground/60">
                Free 15-minute discovery call · No obligation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default ReviewsPage;
