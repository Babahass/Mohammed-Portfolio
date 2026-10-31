"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-6 sm:p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-[#E2F13C]/[0.05] blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div className="flex flex-col items-start">
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/30 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[#E2F13C]" />
                Get in touch
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Contact me about opportunities.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
                I am a software engineering student seeking internship and
                junior developer opportunities. Please use the form to get in
                touch.
              </p>

              <a href="/cv.pdf" className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-[#E2F13C]">
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
                  <path d="M10 3.75v8.5m0 0 3.25-3.25M10 12.25 6.75 9M4.5 14.25v1.25h11v-1.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download my CV
                <span aria-hidden="true" className="text-zinc-600 transition-transform group-hover:translate-y-0.5">↓</span>
              </a>

              <div className="mt-auto hidden pt-12 text-xs text-zinc-600 md:block">
                Thank you for your consideration.
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setSubmitted(false);

                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!name.trim()) {
                  setError("Please enter your name.");
                  return;
                }
                if (!emailPattern.test(email.trim())) {
                  setError("Please enter a valid email address.");
                  return;
                }
                if (!message.trim()) {
                  setError("Please enter a message.");
                  return;
                }

                setIsSubmitting(true);
                try {
                  const response = await fetch("/api", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name: name.trim(),
                      email: email.trim(),
                      message: message.trim(),
                    }),
                  });
                  const data = await response.json();

                  if (!response.ok || !data.success) {
                    setError(data.message || "Something went wrong. Please try again.");
                    return;
                  }

                  setSubmitted(true);
                  setName("");
                  setEmail("");
                  setMessage("");
                } catch {
                  setError("Unable to send your message right now. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-5 rounded-2xl border border-white/[0.06] bg-black/30 p-5 sm:p-6"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-[#E2F13C]/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="yourEmail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-[#E2F13C]/60"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me a little about what you have in mind..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full resize-y rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-[#E2F13C]/60"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#E2F13C] px-6 text-sm font-semibold text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-[#d4e42b] disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && (
                  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
              {submitted && (
                <p role="status" className="text-sm text-[#E2F13C]">
                  Thanks for your message! I&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
