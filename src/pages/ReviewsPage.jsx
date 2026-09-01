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

const ReviewsPage = () => (
  <>
    <Helmet>
      <title>Client Reviews — Meal Mizaaj</title>
      <meta
        name="description"
        content="Real words from Meal Mizaaj clients — weight loss, diabetes, PCOS, pregnancy nutrition, digestive health and more, across Pakistan and online worldwide."
      />
    </Helmet>

    <PageHero
      eyebrow="Client reviews"
      title="Quiet progress, in their own words"
      lead="Every review below is from a real client journey — shared with permission, names shortened for privacy."
    />

    {/* Summary band */}
    <section className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center sm:grid-cols-3 md:px-8">
        <Reveal>
          <p className="font-serif text-4xl font-medium text-primary">5.0</p>
          <div className="mt-2 flex justify-center">
            <Stars rating={5} />
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Average rating
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-serif text-4xl font-medium text-primary">500+</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Clients guided since 2017
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="font-serif text-4xl font-medium text-primary">96%</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Stay on track past 3 months
          </p>
        </Reveal>
      </div>
    </section>

    {/* Review wall */}
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={(i % 3) * 0.07} className="break-inside-avoid">
            <figure className="relative rounded-2xl border border-border bg-card p-7">
              <Quote
                aria-hidden="true"
                className="absolute right-6 top-6 h-6 w-6 text-sage"
                strokeWidth={1.5}
              />
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border/70 pt-4">
                <p className="text-sm font-semibold text-primary">{review.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {review.condition} · {review.location}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="rounded-3xl bg-primary px-6 py-12 text-center md:py-16">
          <h2 className="mx-auto max-w-xl font-serif text-3xl font-medium leading-tight text-primary-foreground text-balance">
            Your story could be next
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Every journey above began with the same small step — a free, unhurried conversation.
          </p>
          <Link
            to="/book"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-foreground px-8 text-sm font-semibold text-primary transition-all hover:bg-sage active:scale-[0.98]"
          >
            Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </Reveal>
    </section>
  </>
);

export default ReviewsPage;
