import React from "react";
import { LampContainer } from "../ui/lamp";
import { motion } from "motion/react";
import ScaleLetterText from "../ui/scale-letter-text";
import Showtimepic from "../../app/public/images/Showtime.png"
import Ubasket from "../../app/public/images/Ubasket.png"
import Chatnova from "../../app/public/images/chatnova.png"

// 1. Define your project data
const projectsData = [
  {
    id: "showtime",
    title: "Showtime",
    tagline: "Movie & Event Ticketing Platform",
    description:
      "A seamless ticket booking web app enabling users to discover movies, select seats in real-time, and securely book event passes.",
    image: Showtimepic.src, // Replace with your image path
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Razorpay"],
    features: [
      "Real-time interactive seat selection map",
      "Secure payment processing via Stripe",
      "User authentication and QR code ticket generation",
    ],
    liveUrl: "https://show-time-mocha.vercel.app/", // Replace with your live link
    githubUrl: "https://github.com/AnisJshK/ShowTime",
    colSpan: "col-span-1", // Standard 1 column
  },
  {
    id: "urbanbasket",
    title: "UrbanBasket",
    tagline: "Modern E-Commerce Grocery Store",
    description:
      "A high-performance online marketplace offering fast grocery deliveries with intuitive inventory browsing and cart management.",
    image: Ubasket.src, // Replace with your image path
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    features: [
      "Dynamic product filtering, search, and sorting",
      "Persistent shopping cart with local state sync",
      "Order tracking dashboard with status updates",
    ],
    liveUrl: "https://urban-basket-topaz.vercel.app", // Replace with your live link
    githubUrl: "https://github.com/AnisJshK/UrbanBasket",
    colSpan: "col-span-1", // Standard 1 column
  },
  {
    id: "chatnova",
    title: "Chatnova",
    tagline: "Real-time AI Chat & Messaging Application",
    description:
      "A collaborative messaging platform integrating conversational AI agents alongside real-time peer-to-peer chat rooms.",
    image: Chatnova.src, // Replace with your image path
    techStack: ["React", "Socket.io", "Node.js", "OpenAI API", "Tailwind CSS", "Redis"],
    features: [
      "Instant low-latency messaging powered by WebSockets",
      "AI-powered assistant integration within active channels",
      "Rich media sharing and end-to-end typing indicators",
    ],
    liveUrl: "https://chat-nova-5w1l.vercel.app/", // Replace with your live link
    githubUrl: "https://github.com/AnisJshK/Chat-Nova",
    colSpan: "md:col-span-2", // Spans both columns on medium+ screens
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-6">
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
          className="mt-8 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Deployed & Built to Scale
        </motion.h1>
      </LampContainer>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-24 relative z-20 pb-20">
        {projectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`flex flex-col bg-slate-900/80 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 shadow-xl group ${project.colSpan}`}
          >
            {/* Project Image Banner */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-6">
              <div>
                {/* Header */}
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-cyan-400/90 mb-3">{project.tagline}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="mb-5">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
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

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-xl bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;