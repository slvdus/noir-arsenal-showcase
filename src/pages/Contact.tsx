import SEO from "@/components/SEO";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const FormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Nature\'s Arsenal',
    url: typeof window !== 'undefined' ? `${window.location.origin}/contact` : '',
    telephone: '269-804-2118',
    email: 'NaturesArsenalFFL@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '124 Ashlynn Dr',
      addressLocality: 'Hastings',
      addressRegion: 'MI',
      postalCode: '49058',
      addressCountry: 'US'
    },
    areaServed: ['Hastings MI','Wayland MI','Middleville MI']
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Simulate submit; could integrate Supabase or email in future
    console.log("Contact submission", data);
    toast({ title: "Message sent", description: "Thanks! We\'ll get back to you within 1 business day." });
    form.reset();
  }

  return (
    <>
      <SEO title="Contact Nature's Arsenal – Hastings, MI FFL & Bulk Ammo" description="By‑appointment transfers and bulk ammo orders. Reach us at 269‑804‑2118 or NaturesArsenalFFL@gmail.com." />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold">Contact us — Hastings, MI</h1>
        <p className="mt-3 text-muted-foreground">By‑appointment FFL transfers, bulk ammo (cases to pallets), and quick responses. We\'re here to help.</p>
      </header>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-xl border p-6 card-elevated">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea rows={6} placeholder="How can we help?" {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">Do not share sensitive information.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center gap-3">
              <Button type="submit" size="lg" variant="tactile" className="hover-scale">Send message</Button>
              <Button type="reset" variant="outline" onClick={() => form.reset()}>Reset</Button>
            </div>
          </form>
        </Form>

        <aside className="rounded-xl border p-6 bg-muted card-elevated">
          <h2 className="text-xl font-semibold">Other ways to reach us</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><span className="font-medium text-foreground">Email:</span> NaturesArsenalFFL@gmail.com</li>
            <li><span className="font-medium text-foreground">Phone:</span> 269‑804‑2118</li>
            <li><span className="font-medium text-foreground">Address:</span> 124 Ashlynn Dr, Hastings, MI 49058</li>
            <li><span className="font-medium text-foreground">Service area:</span> Hastings, Wayland, Middleville</li>
            <li><span className="font-medium text-foreground">Hours:</span> By appointment (flexible)</li>
          </ul>
          <div className="mt-6 rounded-lg border bg-background p-4">
            <p className="text-sm">We comply with all laws and regulations. Availability varies by jurisdiction.</p>
          </div>
        </aside>
      </section>
    </>
  );
};

export default Contact;
