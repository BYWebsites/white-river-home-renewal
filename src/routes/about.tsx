import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Hammer, Clock, Smile, Briefcase, Medal, Target } from "lucide-react";
import exterior from "@/assets/exterior.jpg";
import hero from "@/assets/hero.jpg";
import { PageHero, Eyebrow, CtaBand } from "@/components/site/Layout";

const TITLE = "About Us | Veteran-Owned Contractor Arkansas – White River Contractors";
const DESC = "Meet White River Contractors Inc, a Veteran-Owned and Latino-Owned general contractor in Fayetteville, AR delivering honest, high-quality workmanship across Northwest Arkansas.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: ShieldCheck, t: "Integrity", d: "Honest pricing, honest timelines and honest answers — always." },
  { icon: Hammer, t: "Quality Craftsmanship", d: "Careful work and quality materials that stand the test of time." },
  { icon: Clock, t: "Reliability", d: "We show up when we say we will and finish what we start." },
  { icon: Smile, t: "Customer Satisfaction", d: "Your goals guide every decision we make on your project." },
  { icon: Briefcase, t: "Professional Service", d: "Clear communication, clean job sites and respectful crews." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Fayetteville's Trusted Veteran-Owned Contractor" intro="Dependable, high-quality workmanship for residential and commercial clients throughout Northwest Arkansas." image={hero} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-2 text-4xl font-black text-primary">Local Roots. Honest Work.</h2>
          <p className="mt-5 text-lg text-foreground/85">White River Contractors Inc is a Fayetteville-based general contracting company dedicated to delivering dependable, high-quality workmanship for residential and commercial clients throughout Northwest Arkansas. As a Veteran-Owned and Latino-Owned business, we take pride in honest communication, attention to detail, and treating every project as if it were our own.</p>
          <div className="mt-8 rounded-lg border-l-4 border-accent bg-secondary p-6">
            <p className="flex items-center gap-2 font-display font-bold text-primary"><Target className="h-5 w-5 text-accent" /> Our Mission</p>
            <p className="mt-2 text-foreground/85">To build lasting value for the families and businesses of Northwest Arkansas through quality craftsmanship, transparent communication and service you can count on — on every project, of every size.</p>
          </div>
        </div>
        <img src={exterior} alt="Craftsman home exterior completed by White River Contractors" loading="lazy" width={1200} height={912} className="rounded-lg shadow-card" />
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Medal className="h-14 w-14 text-accent" />
            <h2 className="mt-4 text-4xl font-black">Our Veteran-Owned Story</h2>
          </div>
          <div className="space-y-4 text-lg text-primary-foreground/85 lg:col-span-2">
            <p>Military service taught us that the job isn't done until it's done right. That mindset — discipline, accountability, attention to detail and pride in the mission — is the foundation White River Contractors was built on.</p>
            <p>Combined with the strong family values and work ethic of our Latino heritage, we bring a commitment to our community that goes beyond the job site. We're your neighbors, and we build like it.</p>
            <p className="text-sm text-primary-foreground/60">(Placeholder story — replace with the owner's personal background and branch of service.)</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center"><Eyebrow>Core values</Eyebrow><h2 className="mt-2 text-4xl font-black text-primary">What We Stand For</h2></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-lg border border-border bg-card p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground"><I className="h-6 w-6" /></span>
              <h3 className="mt-4 text-lg font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
