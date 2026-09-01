import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

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
  <Link
    to="/"
    onClick={onClick}
    className="group inline-flex items-center rounded-xl outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-botanical focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    aria-label="Meal Mizaaj — home"
  >
    <img
      src="/logo/logo.png"
      alt="Meal Mizaaj"
      className="h-11 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-12 sm:max-w-[175px]"
    />
  </Link>
);

const DesktopNavLink = ({ link }) => (
  <NavLink
    to={link.to}
    className={({ isActive }) =>
      cn(
        'group relative py-2 text-sm font-semibold text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:text-primary',
        isActive && 'text-primary',
      )
    }
  >
    {({ isActive }) => (
      <>
        {link.label}

        <span
          className={cn(
            'absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#B89A62] opacity-0 transition-all duration-200',
            isActive
              ? 'opacity-100'
              : 'group-hover:w-4 group-hover:opacity-70',
          )}
        />
      </>
    )}
  </NavLink>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto max-w-7xl">
        {/* Mobile header */}
        <div className="grid h-[64px] grid-cols-3 items-center rounded-3xl border border-border/70 bg-cream/90 px-3 shadow-[0_10px_35px_rgba(22,61,50,0.10)] backdrop-blur-xl lg:hidden">
          <div className="flex justify-start">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-primary transition-all duration-200 hover:bg-[#DCE9DF] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                  aria-label="Open navigation menu"
                  aria-expanded={open}
                >
                  <Menu className="h-6 w-6" strokeWidth={1.7} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="bottom"
                className="max-h-[88vh] rounded-t-[28px] border-x-0 border-b-0 border-t border-border bg-cream p-0 shadow-[0_-16px_50px_rgba(22,61,50,0.18)] [&>button]:hidden"
              >
                <SheetTitle className="sr-only">
                  Navigation menu
                </SheetTitle>

                <div className="flex max-h-[88vh] flex-col overflow-y-auto px-5 pb-7 pt-3 sm:px-6">
                  <div className="mx-auto h-1.5 w-12 rounded-full bg-primary/15" />

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div className="pr-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Explore Meal Mizaaj
                      </p>

                      <p className="mt-1 font-serif text-xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl">
                        How can we support you?
                      </p>
                    </div>

                    <SheetClose asChild>
                      <button
                        type="button"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/10 bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:scale-105 hover:bg-botanical active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                        aria-label="Close navigation menu"
                      >
                        <X className="h-5 w-5" strokeWidth={2} />
                      </button>
                    </SheetClose>
                  </div>

                  <nav
                    className="mt-4 flex flex-col rounded-2xl border border-border/70 bg-card/70 px-4"
                    aria-label="Mobile navigation"
                  >
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.to}>
                        <NavLink
                          to={link.to}
                          className={({ isActive }) =>
                            cn(
                              'group flex min-h-[50px] items-center justify-between border-b border-border/65 py-3 text-sm font-medium text-foreground transition-colors last:border-b-0 hover:text-botanical focus-visible:outline-none focus-visible:text-botanical',
                              isActive && 'font-semibold text-botanical',
                            )
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span className="flex items-center gap-2.5">
                                <span
                                  className={cn(
                                    'h-1.5 w-1.5 shrink-0 rounded-full transition-colors',
                                    isActive
                                      ? 'bg-[#163c31]'
                                      : 'bg-transparent',
                                  )}
                                />

                                {link.label}
                              </span>

                              <ChevronRight
                                className={cn(
                                  'h-5 w-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:text-botanical',
                                  isActive && 'text-botanical',
                                )}
                              />
                            </>
                          )}
                        </NavLink>
                      </SheetClose>
                    ))}
                  </nav>

                  <SheetClose asChild>
                    <Link
                      to="/book"
                      className="group mt-5 rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-[0_10px_24px_rgba(22,61,50,0.18)] transition-all duration-200 hover:bg-botanical active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                    >
                     

                      <span className="mt-0 flex items-center justify-between gap-4">
                          <span className="block font-serif text-lg font-semibold">
                            Book a Free Call
                          </span>

                         

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                        </span>
                      </span>
                    </Link>
                  </SheetClose>

                 
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center column: the logo remains truly centered */}
          <div className="flex justify-center">
            <Logo />
          </div>

          {/* Empty right column balances the hamburger on the left */}
          <div aria-hidden="true" />
        </div>

        {/* Desktop header */}
        <div className="hidden h-[74px] items-center justify-between rounded-3xl border border-border/70 bg-cream/90 px-7 shadow-[0_10px_35px_rgba(22,61,50,0.10)] backdrop-blur-xl lg:flex">
          <Logo />

          <nav
            className="flex items-center gap-6 xl:gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <DesktopNavLink key={link.to} link={link} />
            ))}
          </nav>

          <Link
            to="/book"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-botanical hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-botanical focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Book a Free Call

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground/10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;