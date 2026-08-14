"use client";

import InteractiveGrid, { SkillItem } from "../originkit/ui/interactive-grid";
import ScaleLetterText from "../ui/scale-letter-text";
import expresslogo from "../../app/public/images/Express.png";
import socketlogo from "../../app/public/images/Socket IO.jpg";
import jwtlogo from "../../app/public/images/jwt.png";
import vercellogo from "../../app/public/images/Vercel.jpg";
import clerklogo from "../../app/public/images/clerk.png";
import inngestlogo from "../../app/public/images/inngest.jpg";
import turbologo from "../../app/public/images/turborepo.ico";
import zodlogo from "../../app/public/images/zod.png";
import cloudinarylogo from "../../app/public/images/cloudinary.png";
import githublogo from "../../app/public/images/Github.jpg";

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

interface ToolExperience {
  tool: string;
  category: string;
  usedIn: string[];
  useCase: string;
  impact: string;
}

const TOOL_EXPERIENCES: ToolExperience[] = [
  {
    tool: "Docker & CI/CD",
    category: "DevOps & Deployment",
    usedIn: ["UrbanBasket"],
    useCase:
      "Containerized the entire UrbanBasket full-stack application for dev-prod parity and configured automated CI/CD deployment pipelines.",
    impact:
      "Ensured deterministic production builds and automated linting, testing, and deployment cycles on main branch merges.",
  },
  {
    tool: "Inngest",
    category: "Event-Driven & Background Jobs",
    usedIn: ["ShowTime", "UrbanBasket"],
    useCase:
      "Engineered event-driven background functions in ShowTime and UrbanBasket to sync database records reliably with Clerk webhooks, and scheduled automated reminder triggers for upcoming shows and booked tickets.",
    impact:
      "Eliminated event-loop blocking for long-running workflows with automatic retries and durable execution.",
  },
  {
    tool: "Clerk Auth",
    category: "Identity & Access Management",
    usedIn: ["ShowTime", "UrbanBasket"],
    useCase:
      "Implemented secure authentication, session management, and social OAuth, utilizing webhooks to sync user metadata directly into application databases.",
    impact:
      "Provided robust route protection across Next.js App Router edge middleware and secure session persistence.",
  },
  {
    tool: "Cloudinary",
    category: "Cloud Media Pipeline",
    usedIn: ["UrbanBasket", "ShowTime"],
    useCase:
      "Handled dynamic media uploads, asset optimization (automatic format conversion, resizing, and responsive delivery), and fast CDN serving.",
    impact:
      "Offloaded media storage from core database schemas, significantly reducing page load latency.",
  },
  {
    tool: "Turborepo",
    category: "Monorepo Build System",
    usedIn: ["Full-Stack Architecture"],
    useCase:
      "Organized shared UI components, utility functions, and shared TypeScript types across multi-package workspaces.",
    impact:
      "Maximized build speeds through computational caching and maintained consistency across the codebase.",
  },
  {
    tool: "Zod",
    category: "Type-Safe Validation",
    usedIn: ["UrbanBasket", "ShowTime"],
    useCase:
      "Enforced runtime validation schemas on API routes, server action payloads, and client forms to ensure strict data contracts.",
    impact:
      "Prevented malformed database writes and inferred unified TypeScript types end-to-end.",
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

      {/* --- Production & Project Implementation Breakdown --- */}
      <div className="mt-12 pt-10 border-t border-slate-800/70">
        {/* Section Sub-header */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Real-World Implementation</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Applied These in My Projects
          </h3>

          <p className="text-slate-400 text-base max-w-2xl">
            Practical engineering breakdown showing which tools powers specific workflows across applications like <span className="text-cyan-400 font-medium">UrbanBasket</span> and <span className="text-cyan-400 font-medium">ShowTime</span>.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOL_EXPERIENCES.map((item) => (
            <div
              key={item.tool}
              className="group relative flex flex-col justify-between p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Header: Title + Category */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.tool}
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700/60">
                    {item.category}
                  </span>
                </div>

                {/* Used In Badges */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3">
                  <span className="text-xs font-mono text-slate-400">Used in:</span>
                  {item.usedIn.map((proj) => (
                    <span
                      key={proj}
                      className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                    >
                      {proj}
                    </span>
                  ))}
                </div>

                {/* Use Case */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.useCase}
                </p>
              </div>

              {/* Impact Footer */}
              <div className="pt-3 border-t border-slate-800/60 text-xs text-slate-400 leading-normal flex items-start gap-1.5">
                <span className="text-cyan-400 font-semibold shrink-0">Impact:</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}