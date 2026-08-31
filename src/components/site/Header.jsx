import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, Sprout } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/data/site';
import { cn } from '@/lib/utils';

const Logo = ({ onClick }) => (
  <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label="Meal Mizaaj — home">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
      <Sprout className="h-4 w-4" strokeWidth={1.8} />
    </span>
    <span className="leading-tight">
      <span className="block font-serif text-lg font-semibold tracking-tight text-primary">
        Meal Mizaaj
      </span>
      <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        Dietitian · Nutrition
      </span>
    </span>
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                  isActive && 'font-semibold text-primary',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98] sm:inline-flex"
          >
            Book a Free Call
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" strokeWidth={1.8} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm border-border bg-cream p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col px-6 pb-8 pt-6">
                <Logo onClick={() => setOpen(false)} />
                <nav className="mt-10 flex flex-col" aria-label="Mobile">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            'border-b border-border/60 py-3.5 font-serif text-xl text-foreground transition-colors hover:text-botanical',
                            isActive && 'font-semibold text-botanical',
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <Link
                    to="/book"
                    className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-botanical active:scale-[0.98]"
                  >
                    Book a Free Call
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                </SheetClose>
                <p className="mt-auto pt-8 text-xs leading-relaxed text-muted-foreground">
                  Personalized nutrition, rooted in Pakistani home cooking.
                  <br />
                  Lahore · Online worldwide
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
