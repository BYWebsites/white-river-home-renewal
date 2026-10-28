import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { COMPANY } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30).regex(/^[0-9()+\-.\s]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  description: z.string().trim().min(1, "Tell us a bit about your project").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function LeadForm({ source = "website" }: { source?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[i.path[0] as keyof Errors] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const { error } = await supabase.from("leads").insert({ ...parsed.data, source });
    setLoading(false);
    if (error) {
      toast.error(`Something went wrong. Please call us at ${COMPANY.phone}.`);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg bg-card p-10 text-center text-card-foreground">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="text-2xl font-bold">Thank you!</h3>
        <p className="text-muted-foreground">We received your request and will contact you shortly. Need us sooner? Call <a className="font-semibold text-primary underline" href={COMPANY.phoneHref}>{COMPANY.phone}</a>.</p>
      </div>
    );
  }

  const field = (id: keyof Errors, label: string, input: React.ReactNode) => (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {input}
      {errors[id] && <p className="text-sm text-destructive">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-lg bg-card p-6 text-card-foreground shadow-card sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Full name", <Input id="name" name="name" autoComplete="name" maxLength={100} />)}
        {field("phone", "Phone", <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />)}
      </div>
      {field("email", "Email", <Input id="email" name="email" type="email" autoComplete="email" maxLength={255} />)}
      {field("description", "Project description", <Textarea id="description" name="description" rows={5} maxLength={2000} placeholder="Tell us about your project, timeline and location…" />)}
      <Button type="submit" size="lg" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
        {loading && <Loader2 className="h-4 w-4 animate-spin" />} Request My Free Estimate
      </Button>
      <p className="text-center text-xs text-muted-foreground">No obligation. We respond within one business day.</p>
    </form>
  );
}
