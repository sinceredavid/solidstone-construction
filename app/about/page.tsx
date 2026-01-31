export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-slate text-xs font-semibold uppercase tracking-[0.3em]">
            About SolidStone
          </p>
          <h1 className="font-display text-stone text-3xl leading-tight md:text-5xl">
            Build or renovate your home with confidence.
          </h1>
          <p className="text-slate max-w-xl text-base leading-7 md:text-lg">
            Solidstone Construction helps homeowners plan, build, and finish
            projects with clear pricing, clean workmanship, and steady
            communication from day one.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="bg-stone rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              href="tel:+61212345678"
            >
              Get a Free Quote
            </a>
            <div className="text-slate text-sm">
              Call: (02) 1234 5678
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="bg-sand flex flex-col gap-5 rounded-2xl p-6">
            <h2 className="font-display text-stone text-2xl">
              A home build partner you can trust
            </h2>
            <p className="text-slate text-sm leading-6">
              We keep your home livable, your timeline realistic, and your
              updates consistent so there are no surprises.
            </p>
            <div className="grid gap-3 text-sm">
              {[
                "Clear scope and written estimates",
                "Respectful crews and tidy job sites",
                "Skilled trades and quality materials",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-stone text-2xl">Who we help</h2>
          <p className="text-slate mt-3 text-sm leading-6">
            Homeowners who want a stress-free build or renovation for kitchens,
            bathrooms, additions, whole-home updates, and exterior upgrades.
          </p>
        </div>
        <div
          className="rounded-2xl border border-black/10 p-6"
          style={{ backgroundColor: "var(--stone)", color: "#ffffff" }}
        >
          <h2 className="font-display text-2xl">What makes us different</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li>Clear, written estimates</li>
            <li>Honest timelines and weekly updates</li>
            <li>Respectful crews and clean job sites</li>
            <li>Quality materials and skilled trades</li>
            <li>Final walkthrough to make sure you’re happy</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-stone text-2xl">
            Our process
          </h2>
          <ol className="text-slate mt-4 space-y-4 text-sm">
            {[
              "Free consultation",
              "Site visit + estimate",
              "Plan + schedule",
              "Build + updates",
              "Final walkthrough",
            ].map((step, index) => (
              <li key={step}>
                <span className="text-stone font-semibold">
                  {index + 1}.
                </span>{" "}
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-stone text-2xl">Services</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate">
            {[
              "Home builds",
              "Additions",
              "Kitchen and bathroom remodels",
              "Basement finishing",
              "Exterior upgrades (siding, decks, roofing)",
            ].map((service) => (
              <div
                key={service}
                className="rounded-xl border border-black/10 bg-white px-4 py-3"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
