import React from 'react';
import { Rocket, Puzzle, Leaf } from 'lucide-react';

const projects = [
  {
    title: 'Automated Greenhouse',
    icon: Rocket,
    desc: 'IoT system controlling temperature, humidity, and lighting with a real-time web interface.',
    tags: ['IoT', 'Embedded', 'Web UI'],
  },
  {
    title: '2D Multiplayer Puzzle Game',
    icon: Puzzle,
    desc: 'Built during a Game Jam in Unity. Awarded the Technical Prize.',
    tags: ['Unity', 'Multiplayer', 'Netcode'],
  },
  {
    title: 'BeGreener App',
    icon: Leaf,
    desc: 'Led strategy and marketing plan for ITForGREEN Hackathon — Jury Favorite Prize.',
    tags: ['Strategy', 'Product', 'Hackathon'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 md:px-10 lg:px-12">
      <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white">Selected Projects</h2>
      <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">
        A few highlights that reflect my blend of systems thinking and user-centered delivery.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 group-hover:scale-105 dark:bg-neutral-800 dark:text-white">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
