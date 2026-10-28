import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import commercial from "@/assets/commercial.jpg";
import { COMPANY, MAP_EMBED } from "@/lib/site";
import { LeadForm } from "@/components/site/LeadForm";
import { PageHero } from "@/components/site/Layout";

const TITLE = "Contact Us | Free Estimate – General Contractor Fayetteville AR";
const DESC = "Request a free estimate from White River Contractors Inc. Visit 1924 N Birch Ave, Fayetteville, AR 72703 or call (479) 409-4695.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request Your Free Estimate" intro="Tell us about your project and we'll respond within one business day. Prefer to talk? Give us a call." image={commercial} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-5">
        <div className="lg:col-span-3"><LeadForm source="contact" /></div>
        <aside className="space-y-6 lg:col-span-2">
          <div className="rounded-lg bg-primary p-7 text-primary-foreground">
            <h2 className="text-2xl font-black">{COMPANY.name}</h2>
            <p className="mt-4 flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-accent" /><span>{COMPANY.street}<br />{COMPANY.city}, {COMPANY.region} {COMPANY.zip}</span></p>
            <a href={COMPANY.phoneHref} className="mt-4 flex items-center gap-3 font-display text-xl font-bold hover:text-accent"><Phone className="h-5 w-5 text-accent" /> {COMPANY.phone}</a>
            <p className="mt-4 flex gap-3 text-primary-foreground/80"><Clock className="h-5 w-5 shrink-0 text-accent" /> Mon–Fri 7am–6pm · Sat by appointment</p>
            <a href={COMPANY.phoneHref} className="mt-6 block rounded bg-accent py-3 text-center font-bold text-accent-foreground">Tap to Call Now</a>
          </div>
          <div className="overflow-hidden rounded-lg border border-border shadow-card">
            <iframe title="Map to White River Contractors Inc" src={MAP_EMBED.replace("z=11", "z=15")} className="h-80 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </aside>
      </section>
    </>
  );
}
