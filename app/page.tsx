export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-slate text-xs font-semibold uppercase tracking-[0.3em]">
            SolidStone Construction
          </p>
          <h1 className="font-display text-stone text-4xl leading-tight md:text-6xl">
            Build with confidence. We manage every detail.
          </h1>
          <p className="text-slate max-w-xl text-base leading-7 md:text-lg">
            Licensed and insured general contracting for residential and light
            commercial projects. Clear communication, on-time delivery, and a
            clean jobsite from start to finish.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="bg-stone rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              href="tel:+15550192244"
            >
              Get a Free Quote
            </a>
            <div className="text-slate text-sm">
              Call: (555) 019-2244
            </div>
          </div>
          <div className="text-slate flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em]">
            <span>Licensed</span>
            <span>Insured</span>
            <span>Free Estimates</span>
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="bg-sand flex flex-col gap-6 rounded-2xl p-6">
            <h2 className="font-display text-stone text-2xl">
              20+ years of reliable builds
            </h2>
            <p className="text-slate text-sm leading-6">
              From concrete and framing to finishing, we coordinate every trade
              and deliver a consistent, high-quality experience.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white px-4 py-3">
                <p className="text-slate text-xs uppercase tracking-[0.2em]">
                  Projects
                </p>
                <p className="font-display text-stone text-2xl">
                  320+
                </p>
              </div>
              <div className="rounded-xl bg-white px-4 py-3">
                <p className="text-slate text-xs uppercase tracking-[0.2em]">
                  Average
                </p>
                <p className="font-display text-stone text-2xl">
                  4.9/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Remodeling",
            detail: "Kitchens, bathrooms, and full-home updates.",
          },
          { title: "Concrete", detail: "Foundations, flatwork, and hardscapes." },
          { title: "Roofing", detail: "Durable systems with clean finishes." },
          { title: "Framing", detail: "Structural builds done right the first time." },
          { title: "Finishing", detail: "Drywall, paint, trim, and flooring." },
          { title: "Repairs", detail: "Fast response and long-term fixes." },
        ].map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/10 bg-white/80 p-5 shadow-sm"
          >
            <h3 className="font-display text-stone text-xl">
              {service.title}
            </h3>
            <p className="text-slate mt-2 text-sm">
              {service.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-stone text-2xl">
            Our process
          </h2>
          <ol className="text-slate mt-4 space-y-4 text-sm">
            <li>
              <span className="text-stone font-semibold">
                1. Consult
              </span>{" "}
              - Share goals, scope, and timeline.
            </li>
            <li>
              <span className="text-stone font-semibold">
                2. Estimate
              </span>{" "}
              - Transparent pricing and clear deliverables.
            </li>
            <li>
              <span className="text-stone font-semibold">
                3. Build
              </span>{" "}
              - On-site coordination with daily updates.
            </li>
          </ol>
        </div>
        <div
          className="rounded-2xl border border-black/10 p-6"
          style={{ backgroundColor: "var(--stone)", color: "#ffffff" }}
        >
          <h2 className="font-display text-2xl">Proof that holds up</h2>
          <div className="mt-6 grid gap-4 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              “Clean crew, clear timeline, and solid craftsmanship.”
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              “They kept us informed every day and finished early.”
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              “The final result looks better than the drawings.”
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand rounded-3xl border border-black/10 p-8 text-center">
        <h2 className="font-display text-stone text-3xl">
          Ready to plan your next build?
        </h2>
        <p className="text-slate mt-3 text-sm">
          Tell us about your project and we will follow up within one business
          day.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            className="bg-clay rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
            href="tel:+15550192244"
          >
            Get a Free Quote
          </a>
          <span className="text-slate text-sm">
            (555) 019-2244
          </span>
        </div>
      </section>

      <footer className="text-slate flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs uppercase tracking-[0.2em]">
        <span>Serving the Greater Metro Area</span>
        <span>Mon - Sat, 8am - 6pm</span>
        <span>hello@solidstonebuild.com</span>
      </footer>
    </div>
  );
}
