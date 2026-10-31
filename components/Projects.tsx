const projects = [
  {
    title: "MovieHub",
    description:
      "A movie discovery website built with Next.js and the TMDB API.",
    stack: ["Next.js", "TypeScript", "TMDB API"],
  },
  {
    title: "AniWorld",
    description:
      "An anime discovery platform for browsing and exploring anime titles.",
    stack: ["Next.js", "TypeScript", "API"],
  },
  {
    title: "Inventory Management System",
    description:
      "A system for managing products, inventory, reports, and business data.",
    stack: ["Next.js", "Laravel", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Selected projects
        </p>

        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A few things I&apos;ve built
          </h2>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            Personal projects where I explore ideas and put new skills into practice.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-white/[0.08] bg-zinc-950/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E2F13C]/40 hover:bg-zinc-900/80 sm:p-6"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl border border-white/[0.05] bg-gradient-to-br from-zinc-800/80 via-zinc-900 to-black">
                <span aria-hidden="true" className="absolute -right-5 -top-12 text-9xl font-semibold tracking-tighter text-white/[0.035] transition-transform duration-500 group-hover:scale-110">
                  0{index + 1}
                </span>
                <span className="relative rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-zinc-300">
                  {project.stack[0]}
                </span>
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">0{index + 1} / Project</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a href="#contact" className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors hover:text-[#E2F13C]">
                Ask me about this project
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform group-hover/link:translate-x-1">
                  <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}