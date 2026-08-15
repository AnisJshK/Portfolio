import React from "react";
import { LampContainer } from "../ui/lamp";
import { motion } from "motion/react";
import ScaleLetterText from "../ui/scale-letter-text";
import Ubasket from '../../app/public/images/Ubasket.png'
import Showtime from '../../app/public/images/Showtime.png'
import Chatnova from '../../app/public/images/chatnova.png'
import Tasksphere from '../../app/public/images/TaskSph.png'



interface ProjectLink {
  href: string;
  label: string;
  primary?: boolean;
}

interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  links: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}




// 1. Deployed Projects (2-Column Grid)
const deployedProjects = [
  {
    id: "showtime",
    title: "ShowTime",
    tagline: "Full-Stack Movie Ticket Booking Application (2026)",
    description:
      "A full-stack movie ticket booking platform supporting discovery, interactive seat selection, and end-to-end online booking workflows with role-based admin controls.",
    image:Showtime.src, // Replace with your image path
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Inngest",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Clerk Authentication & Webhooks to synchronize user identity with MongoDB for secure, stateless sessions.",
      "Event-driven background workflows with Inngest, including automated post-purchase booking reminder emails.",
      "Admin Dashboard with full CRUD control over movies, shows, and ticket pricing protected by role-based middleware.",
    ],
    links: [
      { label: "Live Demo", href: "https://show-time-mocha.vercel.app", primary: true },
      { label: "GitHub", href: "https://github.com/AnisJshK/ShowTime", primary: false },
    ],
  },
  {
    id: "urbanbasket",
    title: "UrbanBasket",
    tagline: "Full-Stack E-Commerce Platform (2026)",
    description:
      "An architected three-tier e-commerce platform (client, admin, server) featuring containerized micro-services, automated CI/CD deployment workflows, and multi-gateway checkout.",
    image: Ubasket.src, // Replace with your image path
    techStack: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Docker Hub",
      "CI/CD Pipeline",
      "Clerk",
      "Inngest",
      "Cloudinary",
      "Tailwind CSS",
      "Vercel",
    ],
    features: [
      "Containerized backend services with Docker and automated CI/CD pipelines pushing production-ready images to Docker Hub.",
      "Multi-step checkout with address collection and 3 payment methods: Stripe, Razorpay, and Cash on Delivery (COD).",
      "Clerk Auth + Inngest handlers to sync user creation, updates, and deletions directly to MongoDB.",
      "Dedicated Admin Dashboard with Cloudinary-backed uploads and real-time order status tracking (packed/shipped/out for delivery).",
    ],
    links: [
      { label: "Client Live", href: "https://urban-basket-topaz.vercel.app", primary: true },
      { label: "Admin Live", href: "https://urban-basket-6spe.vercel.app", primary: false },
      { label: "GitHub", href: "https://github.com/AnisJshK/UrbanBasket", primary: false },
    ],
  },
];

// 2. Full-Stack Repositories & Architecture Projects (2-Column Grid)
const repositoryProjects = [
  {
    id: "chatnova",
    title: "Chatnova",
    tagline: "Turborepo Real-Time Monorepo Chat System",
    description:
      "A scalable full-stack real-time messaging architecture structured as a Turborepo monorepo with dedicated HTTP and WebSocket servers sharing a unified Prisma package.",
    image: Chatnova.src, // Replace with your image path
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "WebSockets (ws)",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "Turborepo",
      "Tailwind CSS",
    ],
    features: [
      "Turborepo architecture orchestrating Next.js frontend (`chat-fe`), an HTTP server for auth, and a high-performance WS server.",
      "Shared database package powering both HTTP & WebSocket backends with Prisma ORM and PostgreSQL.",
      "Custom JWT-based authentication for registration/login and persistent, low-latency messaging via WebSockets.",
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/AnisJshK/Chat-app", primary: true },
    ],
  },
  {
    id: "tasksphere",
    title: "TaskSphere",
    tagline: "Task Management & RBAC Application",
    description:
      "A full-stack task management application enabling users to create, assign, and track tasks efficiently with strict authorization rules and pagination.",
    image: Tasksphere.src, // Replace with your image path
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
    ],
    features: [
      "Multi-user task assignment, due dates, priority management, and status pipeline tracking (Todo → In Progress → Completed).",
      "Granular Access Control: only task owners or assignees can view/modify tasks, and only the creator/owner can delete tasks.",
      "Optimized pagination & filtering (`page`/`limit`) with dynamic safe-field updates and Mongoose population for user details.",
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/AnisJshK/tasksphere-backend", primary: true },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-4">
        <h2
          id="projects-heading"
          className="text-cyan-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
        >
          <ScaleLetterText text="Projects" />
        </h2>
      </div>

      {/* Lamp Effect Banner */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 bg-linear-to-br from-slate-200 to-slate-400 py-2 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Production & Full-Stack Systems
        </motion.h1>
      </LampContainer>

      <div className="-mt-24 relative z-20 space-y-10 pb-20">
        {/* SECTION 1: DEPLOYED APPLICATIONS */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-slate-200">
              Deployed Applications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deployedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* SECTION 2: FULL-STACK MONOREPOS & ARCHITECTURE */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <h3 className="text-xl font-bold uppercase tracking-wider text-slate-200">
              Architecture & Monorepos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repositoryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Project Card Sub-Component
const ProjectCard :React.FC<ProjectCardProps>  = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
      className="flex flex-col bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 shadow-xl group"
    >
      {/* Project Image Banner */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6">
        <div>
          {/* Header & Tagline */}
          <div className="mb-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-semibold text-cyan-400/90 mt-0.5">{project.tagline}</p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech Stack Badges */}
          <div className="mb-5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features & Architecture Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              Highlights & Functionalities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold mt-0.5">•</span>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center py-2 px-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                link.primary
                  ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-md shadow-cyan-500/20"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;