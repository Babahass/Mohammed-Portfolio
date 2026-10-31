export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 px-6 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <a href="#home" className="group inline-flex items-center gap-2.5 text-base font-semibold tracking-tight text-white">
          <span className="size-2 rounded-full bg-[#E2F13C] shadow-[0_0_12px_rgba(226,241,60,0.6)] transition-shadow group-hover:shadow-[0_0_18px_rgba(226,241,60,0.9)]" />
          Mohammed Hassen
        </a>

        <div className="flex w-full items-center justify-between gap-3 text-xs sm:w-auto sm:gap-7 sm:text-sm">
          <a href="#home" className="whitespace-nowrap text-zinc-400 transition-colors duration-200 hover:text-white">
            Home
          </a>
          <a href="#work" className="whitespace-nowrap text-zinc-400 transition-colors duration-200 hover:text-white">
            Work
          </a>
          <a href="#stack" className="whitespace-nowrap text-zinc-400 transition-colors duration-200 hover:text-white">
            Stack
          </a>
          <a href="#about" className="whitespace-nowrap text-zinc-400 transition-colors duration-200 hover:text-white">
            About
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-9 shrink-0 items-center rounded-full bg-[#E2F13C] px-4 text-xs font-semibold text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d4e42b] sm:text-sm"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}