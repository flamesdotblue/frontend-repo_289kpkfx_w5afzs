import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 text-neutral-900 dark:from-neutral-950 dark:to-neutral-950 dark:text-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8 md:px-10 lg:px-12">
          <a href="#home" className="font-semibold tracking-tight">TA</a>
          <div className="flex items-center gap-4 text-sm text-neutral-700 dark:text-neutral-300">
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#about">About</a>
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-neutral-900 dark:hover:text-white" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />

        {/* Contact / CTA */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-8 md:px-10 lg:px-12">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <h2 className="text-2xl font-semibold">Let’s build reliable systems together</h2>
            <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
              I’m seeking a final-year internship starting May 2026 in system-level or backend development, infrastructure automation, or AI-driven engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:trystan@example.com"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-white shadow hover:bg-neutral-800 active:scale-[0.99] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/70 py-6 text-sm text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60 dark:text-neutral-400">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 md:px-10 lg:px-12">
          <p>© {new Date().getFullYear()} Trystan Aubertin</p>
          <p className="text-xs">Built with React • Tailwind • Spline</p>
        </div>
      </footer>
    </div>
  );
}
