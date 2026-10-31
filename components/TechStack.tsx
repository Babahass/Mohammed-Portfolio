const technologies = [
  {
    name: "Next.js",
    description: "React framework for building modern web applications.",
  },
  {
    name: "Laravel",
    description: "PHP framework for building backend applications and APIs.",
  },
  {
    name: "TypeScript",
    description: "JavaScript with static typing for safer code.",
  },
  {
    name: "PHP",
    description: "Programming language I use mainly with Laravel.",
  },
  {
    name: "Flutter",
    description: "Framework for building mobile applications.",
  },
  {
    name: "PostgreSQL",
    description: "Relational database for storing application data.",
  },
  {
    name: "Python",
    description: "Programming language for scripting and automation.",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 border-y border-white/[0.06] bg-zinc-950/40 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Tools of the trade
        </p>

        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technologies I use
          </h2>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            The tools I use to bring ideas from a first sketch to a working product.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology, index) => (
            <div
              key={technology.name}
              className="group rounded-2xl border border-white/[0.07] bg-black/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#E2F13C]/30 hover:bg-zinc-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-xl border border-white/[0.07] bg-zinc-900 text-xs font-semibold text-[#E2F13C] transition-colors group-hover:border-[#E2F13C]/30">
                  {technology.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-xs tabular-nums text-zinc-600">0{index + 1}</span>
              </div>
              <h3 className="mt-5 font-semibold text-zinc-100">
                {technology.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {technology.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}