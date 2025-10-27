import React from 'react';
import { Server, Cpu, Database, Command } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 md:px-10 lg:px-12">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">About</h2>
        <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">
          I build dependable systems that connect robust backend architectures with clear, human-centered interfaces. My work spans software engineering, infrastructure automation, and project leadership.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Professional Experience</h3>
          <ul className="mt-4 space-y-4 text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-medium text-neutral-900 dark:text-white">Software Developer — Swiiptel</span>
              <p className="text-sm">Infrastructure as Code, Rust CLIs, and CI/CD pipelines for Debian and Windows, improving consistency and reducing setup time.</p>
            </li>
            <li>
              <span className="font-medium text-neutral-900 dark:text-white">Project Manager, Treasurer & Board Member — Junior ISEP</span>
              <p className="text-sm">Led multi-discipline teams for clients in France and the U.S., managing a €200,000 yearly budget and strategic operations for a 44-member org.</p>
            </li>
            <li>
              <span className="font-medium text-neutral-900 dark:text-white">Freelance Developer</span>
              <p className="text-sm">Built a secure Raspberry Pi kiosk OS and custom web platforms for small businesses — balancing product goals and technical rigor.</p>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">Technical Focus</h3>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            I thrive where engineering rigor meets creativity — from low-level systems to scalable backend design and automation.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <TechPill icon={<Server className="h-4 w-4" />} label="Backend" />
            <TechPill icon={<Cpu className="h-4 w-4" />} label="Systems" />
            <TechPill icon={<Database className="h-4 w-4" />} label="Data" />
            <TechPill icon={<Command className="h-4 w-4" />} label="Automation" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Languages: C, C++, Rust, Python. Also experienced with HTML/CSS/JS, WordPress, and data domains (AI, BI, Big Data).
          </p>
        </div>
      </div>
    </section>
  );
}

function TechPill({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
      {icon}
      <span>{label}</span>
    </div>
  );
}
