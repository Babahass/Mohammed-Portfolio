export default function Stats() {
  const stats = [
    { label: "Projects built", value: "10+" },
    { label: "GitHub commits this year", value: "100+" },
    { label: "Hackathons and competitions", value: "3" },
    { label: "Years learning to code", value: "2+" },
  ];

  return (
    <section className="border-y border-white/[0.07] bg-zinc-950/60 px-6 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-semibold tracking-tight text-[#E2F13C] sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-xs leading-5 text-zinc-400 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}