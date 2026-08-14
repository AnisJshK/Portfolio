"use client";

import InteractiveGrid, { SkillItem } from "../originkit/ui/interactive-grid";
import ScaleLetterText from "../ui/scale-letter-text";

const LANGUAGES_SKILLS: SkillItem[] = [
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
];

const FRONTEND_SKILLS: SkillItem[] = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

const BACKEND_SKILLS: SkillItem[] = [
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Socket.io",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  },
];

const DATABASE_SKILLS: SkillItem[] = [
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];

const TOOLS_SKILLS: SkillItem[] = [
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Vercel",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  {
    name: "Linux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full max-w-7xl mx-auto flex flex-col mt-28 lg:mt-12 pt-8 border-t border-slate-800/60 relative z-10 scroll-mt-24"
    >
      <h2
        id="skills-heading"
        className="text-cyan-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-10"
      >
        <ScaleLetterText text="Skills" />
      </h2>

      {/* Languages */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Languages</h3>
        <InteractiveGrid items={LANGUAGES_SKILLS} columns={5} />
      </div>

      {/* Frontend */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Frontend</h3>
        <InteractiveGrid items={FRONTEND_SKILLS} columns={5} />
      </div>

      {/* Backend */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Backend</h3>
        <InteractiveGrid items={BACKEND_SKILLS} columns={5} />
      </div>

      {/* Databases */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Databases</h3>
        <InteractiveGrid items={DATABASE_SKILLS} columns={5} />
      </div>

      {/* Tools & DevOps */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
          Tools & DevOps
        </h3>
        <InteractiveGrid items={TOOLS_SKILLS} columns={5} />
      </div>
    </section>
  );
}