export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-3xl border border-black/10 bg-white/80 p-8">
        <p className="text-slate text-xs font-semibold uppercase tracking-[0.3em]">
          Services
        </p>
        <h1 className="font-display text-stone mt-3 text-4xl md:text-5xl">
          Built to last. Managed end to end.
        </h1>
        <p className="text-slate mt-4 max-w-2xl text-base leading-7">
          We handle residential and light commercial projects with clear scopes,
          dependable timelines, and quality craftsmanship across every trade.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Remodeling",
            detail:
              "Kitchen, bath, and whole-home updates with clean finishes and tight scheduling.",
          },
          {
            title: "Roofing",
            detail:
              "Durable systems installed with weatherproofing and detail-focused flashing.",
          },
          {
            title: "Concrete",
            detail:
              "Foundations, flatwork, and hardscapes designed for long-term performance.",
          },
          {
            title: "Framing",
            detail:
              "Structural framing and additions built to code and engineered specs.",
          },
          {
            title: "Finishing",
            detail:
              "Drywall, paint, trim, and flooring that elevates the final presentation.",
          },
          {
            title: "Repairs",
            detail:
              "Fast response and reliable fixes for damage, wear, and safety issues.",
          },
        ].map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/10 bg-white/80 p-6"
          >
            <h2 className="font-display text-stone text-2xl">
              {service.title}
            </h2>
            <p className="text-slate mt-3 text-sm leading-6">
              {service.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white/80 p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-stone text-2xl">
              Service area
            </h2>
            <p className="text-slate mt-2 text-sm">
              Serving the Greater Metro Area with flexible scheduling.
            </p>
          </div>
          <button className="bg-stone rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
