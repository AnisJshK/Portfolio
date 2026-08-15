import React from "react";
import { motion } from "motion/react";
import ScaleLetterText from "../ui/scale-letter-text";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Telecommunication Engineering",
    institution:
      "Shri Guru Gobind Singhji Institute of Engineering and Technology",
    duration: "2023 – 2027",
    status: "Currently in Final Year",
    description:
      "Pursuing my B.Tech while developing practical experience in backend and full-stack development through hands-on projects and modern web technologies.",
  },
];

const Education = () => {
  return (
    <section id="education" className="mt-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
     
      <div className="text-center mb-12">
        <h2
          id="education-heading"
          className="text-cyan-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
        >
          <ScaleLetterText text="Education" />
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Academic background and foundational engineering principles.
        </p>
      </div>

      {/* Education Card Container */}
      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 shadow-xl group overflow-hidden"
          >
            {/* Subtle Cyan Gradient Ambient Glow */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

            {/* Degree Title & Status Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-cyan-400/90 font-medium text-base sm:text-lg mt-0.5">
                  {edu.field}
                </p>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{edu.status}</span>
              </div>
            </div>

            {/* Institution & Timeframe */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-400 mb-6 pb-4 border-b border-slate-800">
              <span className="font-semibold text-slate-200">{edu.institution}</span>
              <span>•</span>
              <span className="text-slate-300">{edu.duration}</span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {edu.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;