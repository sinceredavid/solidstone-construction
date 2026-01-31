export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-3xl border border-black/10 bg-white/80 p-8">
        <p className="text-slate text-xs font-semibold uppercase tracking-[0.3em]">
          Projects
        </p>
        <h1 className="font-display text-stone mt-3 text-4xl md:text-5xl">
          Real work. Real results.
        </h1>
        <p className="text-slate mt-4 max-w-2xl text-base leading-7">
          A few recent builds that show our range across residential and light
          commercial work.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Northwood Kitchen Remodel",
            type: "Residential Remodel",
            location: "Northwood",
            image:
              "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Riverside Concrete Patio",
            type: "Concrete + Hardscape",
            location: "Riverside",
            image:
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Oakridge Roof Replacement",
            type: "Roofing",
            location: "Oakridge",
            image:
              "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Summit Office Buildout",
            type: "Light Commercial",
            location: "Summit District",
            image:
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Maple Street Addition",
            type: "Framing + Finish",
            location: "Maple Street",
            image:
              "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Lakeside Bathroom Refresh",
            type: "Interior Update",
            location: "Lakeside",
            image:
              "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Cedar Valley Foundation",
            type: "Structural Concrete",
            location: "Cedar Valley",
            image:
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Union Park Exterior",
            type: "Siding + Paint",
            location: "Union Park",
            image:
              "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80",
          },
          {
            name: "Brookline Repair Program",
            type: "Maintenance",
            location: "Brookline",
            image:
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
          },
        ].map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/80 p-5"
          >
            <img
              alt={`${project.name} photo`}
              className="h-36 w-full rounded-xl object-cover"
              src={project.image}
            />
            <div>
              <h2 className="font-display text-stone text-xl">
                {project.name}
              </h2>
              <p className="text-slate mt-2 text-sm">{project.type}</p>
              <p className="text-slate text-xs uppercase tracking-[0.2em]">
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white/80 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-stone text-2xl">
              Want to see more?
            </h2>
            <p className="text-slate mt-2 text-sm">
              Request a portfolio tailored to your project type.
            </p>
          </div>
          <a
            className="bg-stone rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
            href="tel:+15550192244"
          >
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
