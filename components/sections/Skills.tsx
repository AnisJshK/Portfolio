"use client";

import InteractiveGrid, { SkillItem } from "../originkit/ui/interactive-grid";
import ScaleLetterText from "../ui/scale-letter-text";
import expresslogo from '../../app/public/images/Express.png'
import socketlogo from '../../app/public/images/Socket IO.jpg'
import jwtlogo from '../../app/public/images/jwt.png'
import vercellogo from '../../app/public/images/Vercel.jpg'
import clerklogo from '../../app/public/images/clerk.png'
import inngestlogo from '../../app/public/images/inngest.jpg'
import turbologo from '../../app/public/images/turborepo.ico'
import zodlogo from '../../app/public/images/zod.png'
import cloudinarylogo from '../../app/public/images/cloudinary.png'
import githublogo from '../../app/public/images/Github.jpg'


const FRONTEND_SKILLS: SkillItem[] = [
  {
    name: "React.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
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
    src: expresslogo.src,
  },
  {
    name: "REST APIs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "WebSockets",
    src: socketlogo.src,
  },
  {
    name: "JWT Auth",
    src: jwtlogo.src,
  },
];

const DATABASE_SKILLS: SkillItem[] = [
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Mongoose",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Prisma ORM",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
];

const TOOLS_SKILLS: SkillItem[] = [
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: githublogo.src,
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "CI/CD",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "Vercel",
    src: vercellogo.src,
  },
  {
    name: "Clerk Auth",
    src: clerklogo.src,
  },
  {
    name: "Inngest",
    src: inngestlogo.src,
  },
  {
    name: "Turborepo",
    src: turbologo.src,
  },
  {
    name: "Zod",
    src: zodlogo.src,
  },
  {
    name: "Cloudinary",
    src: cloudinarylogo.src,
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
        <ScaleLetterText text="Skills & Tech Stack" />
      </h2>

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
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
          Databases & ORMs
        </h3>
        <InteractiveGrid items={DATABASE_SKILLS} columns={5} />
      </div>

      {/* Tools & Platforms */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
          Tools, DevOps & Libraries
        </h3>
        <InteractiveGrid items={TOOLS_SKILLS} columns={5} />
      </div>
    </section>
  );
}