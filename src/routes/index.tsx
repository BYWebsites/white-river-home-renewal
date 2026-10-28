import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Medal, Clock, Handshake, Star, CheckCircle2, ArrowRight, MapPin, Award, Users } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { COMPANY, MAP_EMBED, SEO_DESCRIPTION, SERVICE_AREAS } from "@/lib/site";
import { SERVICES, PROJECTS, TESTIMONIALS } from "@/components/site/data";
import { LeadForm } from "@/components/site/LeadForm";
import { Eyebrow, CtaBand } from "@/components/site/Layout";

const TITLE = "General Contractor Fayetteville AR | White River Contractors Inc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: SEO_DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

export function OwnershipBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <span className="flex items-center gap-2 rounded-full border border-accent/60 bg-navy-deep/60 px-4 py-2 text-sm font-bold text-primary-foreground backdrop-blur">
        <Medal className="h-4 w-4 text-accent" /> Veteran-Owned
      </span>
      <span className="flex items-center gap-2 rounded-full border border-accent/60 bg-navy-deep/60 px-4 py-2 text-sm font-bold text-primary-foreground backdrop-blur">
        <Users className="h-4 w-4 text-accent" /> Latino-Owned
      </span>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={hero} alt="White River Contractors crew framing a new home in Northwest Arkansas" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <OwnershipBadges />
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">Quality Contracting You Can Trust</h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 md:text-xl">Veteran-Owned and Latino-Owned General Contracting Services Serving Fayetteville and Northwest Arkansas.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded bg-accent px-7 py-4 font-bold text-accent-foreground shadow-card hover:bg-accent/90">Request a Free Estimate</Link>
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 rounded border-2 border-primary-foreground/70 px-7 py-3.5 font-bold hover:bg-primary-foreground hover:text-primary"><Phone className="h-5 w-5" /> Call {COMPANY.phone}</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Licensed & Insured", d: "Protected, compliant work" },
            { icon: Medal, t: "Veteran-Owned", d: "Discipline & integrity" },
            { icon: Award, t: "Quality Guaranteed", d: "Craftsmanship that lasts" },
            { icon: Clock, t: "Fast Free Estimates", d: "Response in 1 business day" },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="flex items-center gap-3">
              <I className="h-9 w-9 shrink-0 text-accent" />
              <div><p className="font-display font-bold text-primary">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-2 text-4xl font-black text-primary">Full-Service Contracting, Any Size Project</h2>
          </div>
          <Link to="/services" className="flex items-center gap-1 font-bold text-primary hover:text-accent">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map(({ icon: I, title, desc }) => (
            <Link key={title} to="/services" className="group rounded-lg border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-primary text-accent"><I className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="mt-2 text-4xl font-black">Built on Service. Backed by Integrity.</h2>
            <p className="mt-4 text-primary-foreground/80">As a Veteran-Owned and Latino-Owned business rooted in Fayetteville, we treat every project as if it were our own — with honest communication, careful planning and work we're proud to put our name on.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Upfront, transparent pricing", "Clear communication every step", "Clean, respectful job sites", "On-time, on-budget delivery", "Residential & commercial expertise", "Bilingual team — English & Spanish"].map((x) => (
                <li key={x} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{ n: "100%", l: "Free estimates" }, { n: "NWA", l: "Locally owned & operated" }, { n: "5★", l: "Customer focused" }, { n: "All", l: "Project sizes welcome" }].map((s) => (
              <div key={s.l} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                <p className="font-display text-4xl font-black text-accent">{s.n}</p>
                <p className="mt-1 text-primary-foreground/80">{s.l}</p>
              </div>
            ))}
            <div className="col-span-2 flex items-center gap-3 rounded-lg bg-accent p-5 text-accent-foreground">
              <Handshake className="h-8 w-8" /><p className="font-bold">Every project, treated as if it were our own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><Eyebrow>Featured work</Eyebrow><h2 className="mt-2 text-4xl font-black text-primary">Recent Projects Across NWA</h2></div>
          <Link to="/projects" className="flex items-center gap-1 font-bold text-primary hover:text-accent">View portfolio <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <figure key={p.title} className={`group relative overflow-hidden rounded-lg ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={p.image} alt={p.title} loading="lazy" width={1200} height={912} className="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep to-transparent p-5 text-primary-foreground">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{p.category} · {p.location}</p>
                <p className="font-display text-lg font-bold">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Testimonials / Google reviews */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <Eyebrow>Google reviews</Eyebrow>
            <h2 className="mt-2 text-4xl font-black text-primary">What Our Customers Say</h2>
            <div className="mt-3 flex items-center justify-center gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}<span className="ml-2 font-semibold text-foreground">5.0 average rating</span></div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="rounded-lg bg-card p-7 shadow-card">
                <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-foreground">"{t.text}"</p>
                <footer className="mt-5 font-display font-bold text-primary">{t.name} <span className="font-sans text-sm font-normal text-muted-foreground">· {t.place}, AR</span></footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={`https://www.google.com/maps/search/${encodeURIComponent(COMPANY.name + " " + COMPANY.mapQuery)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded border-2 border-primary px-6 py-3 font-bold text-primary hover:bg-primary hover:text-primary-foreground">Read & leave a Google review</a>
          </div>
        </div>
      </section>

      {/* Contact + map */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <Eyebrow>Free estimate</Eyebrow>
          <h2 className="mt-2 text-4xl font-black text-primary">Tell Us About Your Project</h2>
          <p className="mt-3 text-muted-foreground">Fill out the form and we'll get back to you within one business day — or call us now at <a href={COMPANY.phoneHref} className="font-bold text-primary">{COMPANY.phone}</a>.</p>
          <div className="mt-8"><LeadForm source="home" /></div>
        </div>
        <div>
          <Eyebrow>Service area</Eyebrow>
          <h2 className="mt-2 text-4xl font-black text-primary">Proudly Serving Northwest Arkansas</h2>
          <p className="mt-3 flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> Based at {COMPANY.street}, {COMPANY.city}, {COMPANY.region}</p>
          <div className="mt-6 overflow-hidden rounded-lg border border-border shadow-card">
            <iframe title="White River Contractors service area map" src={MAP_EMBED} className="h-80 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {SERVICE_AREAS.map((a) => <li key={a} className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary">{a}</li>)}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
