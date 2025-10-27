import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-neutral-950/80 dark:via-neutral-950/50 dark:to-neutral-950/90" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-24 sm:px-8 md:px-10 lg:px-12">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-neutral-200">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Available for a final-year internship — May 2026
        </span>

        <h1 className="text-balance text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl md:text-6xl dark:text-white">
          Trystan Aubertin
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
          Digital Engineering student at ISEP → Future Computer Systems Architecture student at CentraleSupélec. I design reliable backend systems, automate infrastructure, and craft pragmatic developer experiences.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-white shadow hover:bg-neutral-800 active:scale-[0.99] dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:trystan@example.com"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-800 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
