import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import kitchen from "@/assets/kitchen.jpg";
import { SERVICES } from "@/components/site/data";
import { PageHero, CtaBand } from "@/components/site/Layout";

const TITLE = "Services | Remodeling Contractor Fayetteville AR – White River Contractors";
const DESC = "General contracting, kitchen and bathroom remodeling, renovations, flooring, painting, repairs, commercial improvements and construction management in Fayetteville and Northwest Arkansas.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Residential & Commercial Contracting Services" intro="From quick repairs to complete remodels and commercial build-outs, we handle projects of every size across Northwest Arkansas." image={kitchen} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: I, title, desc, benefits }) => (
            <article key={title} className="flex flex-col rounded-lg border border-border bg-card p-7 transition hover:border-accent hover:shadow-card">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-primary text-accent"><I className="h-6 w-6" /></span>
              <h2 className="mt-5 text-xl font-bold text-primary">{title}</h2>
              <p className="mt-2 text-muted-foreground">{desc}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {benefits.map((b) => <li key={b} className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-accent" /> {b}</li>)}
              </ul>
              <Link to="/contact" className="mt-6 rounded bg-primary py-3 text-center text-sm font-bold text-primary-foreground hover:bg-primary/90">Get a Free Estimate</Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
