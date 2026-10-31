export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mohammed Hassen. Made with care.</p>
        <a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-white">
          Back to top
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
            <path d="M10 16V4m0 0L5 9m5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </footer>
  );
}