import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import interior from "@/assets/interior.jpg";
import { PROJECTS, type Project } from "@/components/site/data";
import { PageHero, CtaBand, Eyebrow } from "@/components/site/Layout";

const TITLE = "Projects | Remodeling & Construction Portfolio – White River Contractors";
const DESC = "Browse before-and-after remodeling, renovation, residential and commercial projects completed by White River Contractors Inc across Fayetteville and Northwest Arkansas.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const FILTERS = ["All", "Residential", "Commercial", "Remodeling", "Renovation"] as const;

function BeforeAfter({ p }: { p: Project }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg select-none">
      <img src={p.image} alt={`${p.title} after`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <img src={p.before} alt={`${p.title} before`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
      <div className="pointer-events-none absolute inset-y-0 w-1 bg-accent" style={{ left: `${pos}%` }} />
      <span className="absolute left-3 top-3 rounded bg-navy-deep/80 px-2 py-1 text-xs font-bold uppercase text-primary-foreground">Before</span>
      <span className="absolute right-3 top-3 rounded bg-accent px-2 py-1 text-xs font-bold uppercase text-accent-foreground">After</span>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Before and after comparison" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const withBefore = PROJECTS.filter((p) => p.before);
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return (
    <>
      <PageHero eyebrow="Our work" title="Project Portfolio" intro="A look at recent residential, commercial, remodeling and renovation work across Northwest Arkansas." image={interior} />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Eyebrow>Before & after</Eyebrow>
        <h2 className="mt-2 text-4xl font-black text-primary">See the Transformation</h2>
        <p className="mt-2 text-muted-foreground">Drag the slider to compare.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {withBefore.map((p) => (
            <div key={p.title}>
              <BeforeAfter p={p} />
              <h3 className="mt-4 text-xl font-bold text-primary">{p.title}</h3>
              <p className="text-muted-foreground">{p.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black text-primary">Project Gallery</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-5 py-2 text-sm font-bold transition ${filter === f ? "bg-primary text-primary-foreground" : "bg-card text-primary hover:bg-accent hover:text-accent-foreground"}`}>{f}</button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article key={p.title} className="overflow-hidden rounded-lg bg-card shadow-card">
                <img src={p.image} alt={p.title} loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">{p.category}</p>
                  <h3 className="mt-1 text-lg font-bold text-primary">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.summary}</p>
                  <p className="mt-3 flex items-center gap-1 text-sm font-medium"><MapPin className="h-4 w-4 text-accent" /> {p.location}</p>
                </div>
              </article>
            ))}
          </div>
          {list.length === 0 && <p className="mt-8 text-muted-foreground">More projects coming soon.</p>}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
