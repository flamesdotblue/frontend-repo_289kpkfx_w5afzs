import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const roles = [
  {
    title: 'Software Developer',
    org: 'Swiiptel',
    period: '2024 — Present',
    location: 'Paris, FR',
    bullets: [
      'Infrastructure as Code for consistent, reproducible environments',
      'Rust CLI tooling and automation',
      'CI/CD pipelines for Debian and Windows deployments',
    ],
  },
  {
    title: 'Project Manager → Treasurer & Board Member',
    org: 'Junior ISEP',
    period: '2023 — 2024',
    location: 'Paris, FR',
    bullets: [
      'Oversaw client projects: PWAs, mobile apps, and custom websites',
      'Managed €200,000 annual budget and org operations',
      'Led a 44-member organization and coordinated strategy',
    ],
  },
  {
    title: 'Freelance Developer',
    org: 'Independent',
    period: '2022 — Present',
    location: 'Remote',
    bullets: [
      'Secure kiosk OS for Raspberry Pi',
      'Custom web platforms for small businesses',
      'End-to-end delivery with clear communication and impact',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 md:px-10 lg:px-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">Experience</h2>
          <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">
            Blending technical depth with organizational leadership across startups, student orgs, and freelance work.
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-600 shadow-sm md:inline-flex dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          <Award className="h-4 w-4" />
          <span>Jury Favorite — ITForGREEN Hackathon</span>
        </div>
      </div>

      <ul className="space-y-6">
        {roles.map((r) => (
          <li
            key={r.title + r.org}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                  {r.title} · <span className="text-neutral-600 dark:text-neutral-300">{r.org}</span>
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                  {r.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> {r.period}</div>
                <div className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {r.location}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
