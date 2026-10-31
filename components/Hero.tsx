import Image from "next/image";
import type { ReactNode } from "react";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M5 15 15 5M6 5h9v9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-4"
    >
      <path
        d="M10 3.75v8.5m0 0 3.25-3.25M10 12.25 6.75 9M4.5 14.25v1.25h11v-1.25"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-4 text-[#E2F13C]"
    >
      <path
        d="m6.5 6-4 4 4 4m7-8 4 4-4 4m-2-9-3 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Babahass" },
  { name: "Instagram", href: "https://instagram.com/baba_has3" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mohammed-hassen-576281357" },
  { name: "TikTok", href: "https://tiktok.com/@baba_has3" },
  { name: "X", href: "https://x.com/your-username" },
  { name: "Email", href: "mailto:mame202122@gmail.com" },
];

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["name"] }) {
  const iconPaths: Record<(typeof socialLinks)[number]["name"], ReactNode> = {
    GitHub: (
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.5 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.65 2.24 3.18 1.58.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.13 3.05-1.13.61 1.53.23 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.27-2.6 5.2-5.08 5.48.4.34.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z"
      />
    ),
    Instagram: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M7.5 3.5h9A4 4 0 0 1 20.5 7.5v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4Zm4.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.3-1.3h.01"
        strokeLinecap="round"
      />
    ),
    LinkedIn: (
      <path
        fill="currentColor"
        d="M5.2 7.7a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM3.4 9.3H7v11.3H3.4V9.3Zm5.8 0h3.4v1.55h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.15h-3.55v-5.45c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88v5.54H9.2V9.3Z"
      />
    ),
    TikTok: (
      <path
        fill="currentColor"
        d="M19.7 8.1a7.1 7.1 0 0 1-4.3-1.45v7.2a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8.05 1.18.14v3.35a2.2 2.2 0 1 0 1.02 1.87V2.5h3.3c.23 2.2 1.95 3.95 4.3 4.15v3.32Z"
      />
    ),
    X: (
      <path
        fill="currentColor"
        d="M18.9 3h2.9l-6.34 7.25L22.9 21h-5.8l-4.55-6.56L6.8 21H3.9l6.78-7.76L3.5 3h5.95l4.11 5.94L18.9 3Zm-1.02 16h1.61L8.58 4.9H6.85L17.88 19Z"
      />
    ),
    Email: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 6.5h17v11h-17v-11Zm.6.6 7.9 6.1 7.9-6.1"
      />
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      {iconPaths[name]}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-6 py-20 sm:px-8 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[34rem] rounded-full bg-[#E2F13C]/[0.06] blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-[hero-enter_700ms_ease-out_both]">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-2 text-sm font-medium text-zinc-300">
            <CodeIcon />
            Software engineering student
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl">
            Hi, I&apos;m <span className="text-[#E2F13C]">Mohammed</span>
            <br className="hidden sm:block" /> Hassen.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I build thoughtful web applications and turn ideas into useful,
            well-crafted digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#E2F13C] px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_30px_rgba(226,241,60,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d4e42b] hover:shadow-[0_0_30px_rgba(226,241,60,0.25)] active:translate-y-0"
            >
              View my work
              <ArrowIcon />
            </a>

            <a
              href="/cv.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>

          <div aria-label="Social media links" className="mt-10 flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const isEmail = link.name === "Email";

              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  title={link.name}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/70 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:border-[#E2F13C]/50 hover:bg-zinc-900 hover:text-[#E2F13C]"
                >
                  <SocialIcon name={link.name} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[26rem] animate-[hero-enter_900ms_ease-out_100ms_both] md:ml-auto md:mr-0">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] border border-zinc-800/70"
          />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black/50">
            <Image
              src="/profile.jpg"
              alt="Mohammed Hassen"
              width={600}
              height={600}
              priority
              className="aspect-[4/5] w-full rounded-[1.15rem] object-cover transition duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-x-2 bottom-2 rounded-b-[1.15rem] bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-6 pt-16">
              <p className="text-sm font-medium text-white">Curious by nature.</p>
              <p className="mt-1 text-sm text-zinc-300">Building one project at a time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}