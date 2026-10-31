const interests = [
  "Web development",
  "Mobile development",
  "Learning new technologies",
  "Building useful applications",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          About me
        </p>

        <div className="mt-6 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="md:sticky md:top-32 md:self-start">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Software engineering student who enjoys building things.
            </h2>
            <div className="mt-6 h-px w-16 bg-[#E2F13C]" />
            <p className="mt-4 text-sm text-zinc-500">Curiosity, consistency, and a little bit of coffee.</p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] bg-zinc-950/60 p-6 sm:p-8">
            <p className="text-base leading-8 text-zinc-300">
              I am a Software Engineering student who enjoys learning how
              applications work and turning ideas into working software.
              I build web and mobile applications while continuously
              improving my development skills.
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              I enjoy learning step by step, exploring new technologies,
              and working on projects that help me understand how real
              software systems are built.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/30 px-3 py-2 text-xs text-zinc-300"
                >
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-[#E2F13C]" />
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}