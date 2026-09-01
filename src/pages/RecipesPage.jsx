import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, Clock, ListChecks, Mail, Soup, Users } from 'lucide-react';
import { toast } from 'sonner';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/site/PageHero';
import SectionHeading from '@/components/site/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RECIPES, RESOURCES } from '@/data/site';

const CATEGORIES = [
  'All',
  'Weight Management',
  'Diabetes-Friendly',
  'Heart Health',
  'High Protein',
  'PCOS-Friendly',
  'Digestive Health',
  'Quick Meals',
  'Pakistani Food Swaps',
];

const RecipeCard = ({ recipe, index }) => (
  <Reveal delay={(index % 3) * 0.07} className="h-full">
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group block h-full w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-sage px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-3 font-serif text-lg font-semibold text-primary transition-colors group-hover:text-botanical">
              {recipe.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{recipe.intro}</p>
            <p className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                {recipe.time}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" strokeWidth={1.8} />
                {recipe.servings}
              </span>
              <span>{recipe.calories}</span>
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-botanical">
              Read more
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto rounded-3xl border-border bg-cream p-0">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="aspect-[16/9] w-full rounded-t-3xl object-cover"
          loading="lazy"
        />
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sage px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <DialogTitle className="mt-3 font-serif text-2xl font-semibold text-primary md:text-3xl">
            {recipe.title}
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {recipe.intro} · {recipe.time} · {recipe.servings} · {recipe.calories}
          </DialogDescription>

          <div className="mt-7 grid gap-8 md:grid-cols-[1fr_1.3fr]">
            <div>
              <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-botanical">
                <Soup className="h-4 w-4" strokeWidth={1.8} />
                Ingredients
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
                {recipe.ingredients.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-botanical">
                <ListChecks className="h-4 w-4" strokeWidth={1.8} />
                Method
              </h3>
              <ol className="mt-3 space-y-3">
                {recipe.steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage font-serif text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="mt-7 rounded-2xl border border-botanical/25 bg-sage/40 p-4 text-sm leading-relaxed text-foreground">
            <span className="font-semibold text-primary">Dietitian’s note: </span>
            {recipe.note}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  </Reveal>
);

const SignupBlock = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setStatus('sent');
    toast.success('You’re on the list — thank you!');
  };

  if (status === 'sent') {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl border border-botanical/25 bg-sage/40 px-6 py-12 text-center md:py-14">
        <h2 className="font-serif text-2xl font-medium text-primary md:text-3xl">
          You’re on the list
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Simple nutrition notes, recipes, and practical tips will land in your inbox. You can
          unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-botanical/25 bg-primary px-6 py-12 text-center text-primary-foreground md:py-14">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/15 text-gold">
        <Mail className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <h2 className="mt-5 font-serif text-2xl font-medium md:text-3xl">
        Simple nutrition notes, recipes, and practical tips.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/75">
        Join the Meal Mizaaj newsletter for the occasional, no-spam email — a recipe, a swap, or a
        small idea worth trying this week.
      </p>
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="h-12 rounded-full border-primary-foreground/20 bg-primary-foreground/10 px-5 text-sm text-primary-foreground placeholder:text-primary-foreground/55 focus-visible:ring-gold"
        />
        <Button
          type="submit"
          className="h-12 shrink-0 rounded-full bg-primary-foreground px-7 text-sm font-semibold text-primary transition-all hover:bg-cream active:scale-[0.98]"
        >
          Subscribe
        </Button>
      </form>
      <p className="mt-4 text-xs text-primary-foreground/55">
        No spam. Unsubscribe anytime. See the{' '}
        <Link to="/privacy" className="underline underline-offset-2 hover:text-gold">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

const RecipesPage = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () =>
      active === 'All' ? RECIPES : RECIPES.filter((r) => r.tags.includes(active)),
    [active],
  );

  return (
    <>
      <Helmet>
        <title>Recipes &amp; Resources — Meal Mizaaj</title>
        <meta
          name="description"
          content="Healthy Pakistani home-style recipes and practical nutrition guides — filter by weight management, diabetes-friendly, heart health, high protein, PCOS-friendly, digestive health, quick meals, and Pakistani food swaps."
        />
      </Helmet>

      <PageHero
        eyebrow="Recipes & resources"
        title="The food you love, cooked a little wiser"
        lead="Free, practical recipes and guides from the Meal Mizaaj kitchen — every one tested on real family tables."
      />

      {/* Category filter + grid */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={
                active === cat
                  ? 'rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground transition-colors'
                  : 'rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-botanical/40 hover:text-primary'
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe, i) => (
            <RecipeCard key={recipe.slug} recipe={recipe} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No recipes in this category yet — check back soon.
          </p>
        )}
      </section>

      {/* Email signup */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <SignupBlock />
      </section>

      {/* Resources */}
      <section className="border-t border-border/60 bg-sage/30">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Free guides"
            title="Notes from the practice"
            lead="Short, practical reads I share with clients — yours to keep."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={i * 0.07}>
                <div className="flex h-full gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-botanical/40 hover:shadow-lg hover:shadow-primary/5 md:p-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-primary">
                    <resource.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-primary">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
              Want guidance shaped around your own reports and routine? That’s what consultations
              are for.
            </p>
            <Link
              to="/book"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
            >
              Book a Free Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default RecipesPage;
