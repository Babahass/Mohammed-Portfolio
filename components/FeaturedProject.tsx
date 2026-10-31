import Image from "next/image";

const project = {
  name: "Inventory Management System",

  problem:
    "Businesses often rely on manual inventory tracking, making it difficult to monitor stock levels, manage products, and prevent shortages or overstocking.",

  decisions:
    "Built a centralized inventory platform using Laravel for the backend and Next.js for the frontend, with MySQL for data storage.",

  result:
    "Created a platform for managing products, tracking stock levels, and organizing inventory operations from one place.",

  role: "Solo Project",

  stack: ["Laravel", "Next.js", "MySQL", "TypeScript"],
};

export default function FeaturedProject() {
  return (
    <section id="work" className="scroll-mt-24 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Featured project
        </p>

        <div className="mt-7 grid gap-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-4 shadow-2xl shadow-black/20 transition duration-300 hover:border-white/[0.14] sm:p-6 md:grid-cols-2 md:gap-10 md:p-8">
          <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-zinc-900 sm:min-h-[340px]">
            <Image
              src="/featuredProject.png"
              alt="Inventory Management System project screenshot"
              width={700}
              height={520}
              className="h-full max-h-[440px] w-full object-contain transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col justify-center py-2 md:py-4">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#E2F13C]">Full-stack · Solo project</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {project.name}
            </h2>

            <div className="mt-6 space-y-5">
              <div className="border-l border-zinc-700 pl-4">
                <h3 className="text-sm font-semibold text-zinc-200">
                  The challenge
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">
                  {project.problem}
                </p>
              </div>

              <div className="border-l border-zinc-700 pl-4">
                <h3 className="text-sm font-semibold text-zinc-200">
                  The approach
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">
                  {project.decisions}
                </p>
              </div>

              <div className="border-l border-[#E2F13C]/60 pl-4">
                <h3 className="text-sm font-semibold text-zinc-200">
                  The result
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">
                  {project.result}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-700/80 bg-black/30 px-3 py-1.5 text-xs text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#E2F13C] px-5 text-sm font-semibold text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d4e42b]"
              >
                Ask me about it
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
