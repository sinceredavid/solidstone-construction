import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-slate text-xs font-semibold uppercase tracking-[0.3em]">
            Contact
          </p>
          <h1 className="font-display text-stone text-4xl leading-tight md:text-6xl">
            Request a free quote.
          </h1>
          <p className="text-slate max-w-xl text-base leading-7 md:text-lg">
            Tell us about your project and we will respond within one business
            day.
          </p>
          <a
            className="bg-stone w-fit rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
            href="tel:+61212345678"
          >
            Call (02) 1234 5678
          </a>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="bg-sand flex flex-col gap-4 rounded-2xl p-6">
            <h2 className="font-display text-stone text-2xl">
              Direct contact
            </h2>
            <div className="text-slate text-sm leading-6">
              <p>Phone: (02) 1234 5678</p>
              <p>Email: hello@solidstonebuild.com</p>
              <p>Fast response during business hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-stone text-2xl">
            Get a free quote
          </h2>
          <p className="text-slate mt-2 text-sm">
            Share scope, address, and ideal timeline.
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
            <h2 className="font-display text-stone text-2xl">
              Service area
            </h2>
            <p className="text-slate mt-3 text-sm leading-6">
              Serving the Greater Metro Area and surrounding neighborhoods.
              Ask about projects outside the core area.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
            <h2 className="font-display text-stone text-2xl">
              Business hours
            </h2>
            <div className="text-slate mt-3 text-sm leading-6">
              <p>Mon–Fri: 8:00am–6:00pm</p>
              <p>Sat: By appointment</p>
              <p>Sun: Closed</p>
            </div>
          </div>
          <div
            className="rounded-2xl border border-black/10 p-6"
            style={{ backgroundColor: "var(--stone)", color: "#ffffff" }}
          >
            <h2 className="font-display text-2xl">Trust &amp; credentials</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>Licensed and insured</li>
              <li>20+ years of experience</li>
              <li>Warranty-backed workmanship</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
