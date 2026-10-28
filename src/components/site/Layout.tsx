import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, MapPin, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import { COMPANY } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded bg-accent font-display text-lg font-black text-accent-foreground">WR</span>
      <span className={`font-display leading-tight ${light ? "text-primary-foreground" : "text-primary"}`}>
        <span className="block text-base font-extrabold uppercase tracking-wide">White River</span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">Contractors Inc</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Serving Fayetteville & Northwest Arkansas</span>
          <span className="font-semibold tracking-wide">Veteran-Owned · Latino-Owned</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary underline decoration-accent decoration-2 underline-offset-8" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={COMPANY.phoneHref} className="hidden items-center gap-2 font-display text-sm font-bold text-primary sm:flex">
            <Phone className="h-4 w-4 text-accent" /> {COMPANY.phone}
          </a>
          <Link to="/contact" className="hidden rounded bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground hover:bg-accent/90 md:inline-block">Free Estimate</Link>
          <button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded p-2 text-primary lg:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 font-semibold text-foreground">{n.label}</Link>
          ))}
          <a href={COMPANY.phoneHref} className="mt-3 flex items-center justify-center gap-2 rounded bg-primary py-3 font-bold text-primary-foreground"><Phone className="h-4 w-4" /> Call {COMPANY.phone}</a>
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded bg-accent py-3 text-center font-bold text-accent-foreground">Request a Free Estimate</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">Veteran-Owned and Latino-Owned general contractor delivering dependable, quality workmanship for residential and commercial clients across Northwest Arkansas.</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Star].map((I, i) => (
              <a key={i} href="#" aria-label="Social media (coming soon)" className="flex h-9 w-9 items-center justify-center rounded bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-accent">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Contact</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/80">
            <p>{COMPANY.name}<br />{COMPANY.street}<br />{COMPANY.city}, {COMPANY.region} {COMPANY.zip}</p>
            <a href={COMPANY.phoneHref} className="block font-bold text-primary-foreground hover:text-accent">{COMPANY.phone}</a>
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {COMPANY.name}. General Contractor in Fayetteville, AR · Licensed & Insured.
      </div>
    </footer>
  );
}

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
      <a href={COMPANY.phoneHref} className="flex items-center justify-center gap-2 bg-primary py-3.5 font-bold text-primary-foreground"><Phone className="h-4 w-4" /> Call Now</a>
      <Link to="/contact" className="bg-accent py-3.5 text-center font-bold text-accent-foreground">Free Estimate</Link>
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{intro}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-3xl font-black text-accent-foreground">Ready to start your project?</h2>
          <p className="mt-1 font-medium text-accent-foreground/80">Get a free, no-obligation estimate from a local contractor you can trust.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded bg-primary px-6 py-3.5 font-bold text-primary-foreground hover:bg-primary/90">Request a Free Estimate</Link>
          <a href={COMPANY.phoneHref} className="flex items-center gap-2 rounded border-2 border-primary px-6 py-3 font-bold text-primary"><Phone className="h-4 w-4" /> {COMPANY.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-sm font-bold uppercase tracking-[0.25em] text-accent">{children}</p>;
}
