import { EncryptedText } from "../ui/encrypted-text";
import { Terminal } from "../ui/terminal";
import ScaleLetterText from "../ui/scale-letter-text";
import DraggableCardDemo from "../draggable-card-demo-2";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center dark bg-background bg-grid bg-grid-fade overflow-hidden font-sans min-h-screen px-6 lg:px-12 ">
      {/* Top Hero Section: Status & Terminal */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 my-20">
        {/* Left Column: Big Intro Text */}
        <div className="flex-1 flex flex-col items-start text-left space-y-6 max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>const status = "Building Scalable web applications"</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Shaikh Anis
            </span>
            <br />
            <span className="text-slate-200">Full-Stack Developer</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            <EncryptedText text=" I build scalable and performant web applications using Node.js, Express, React, MongoDB, and Next.js, with a strong focus on clean architecture, reliable backend systems, and seamless user experiences." />
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all active:scale-95"
            >
              Get in Touch
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1BLDps8jrjnlzkK2zSo0CArfsbDu5oRWz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-all shadow-md active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Component */}
        <div className="flex-1 w-full max-w-2xl h-full">
          <Terminal
            className="w-full h-full shadow-2xl shadow-cyan-950/20"
            enableSound={true}
            username="Shaikh-Anis"
            commands={[
              "git clone https://github.com/AnisJshk/Portfolio.git",
              "cd portfolio && bun install",
              "bun run build",
              "vercel --prod",
            ]}
            outputs={{
              0: [
                "Cloning into 'portfolio'...",
                "remote: Enumerating objects: 142, done.",
              ],
              1: [
                "bun install v1.1.0",
                "Saved lockfile. Built dependencies: 4",
                "Checked 342 packages, installed 342 packages in 480ms",
              ],
              2: [
                "$ next build",
                "▲ Next.js 15",
                "- Collecting page data...",
                "- Generating static pages (5/5)",
                "✓ Production build complete.",
              ],
              3: [
                "🔍 Inspecting build...",
                "✅ Deployed to https://manus.dev [Production]",
              ],
            }}
            typingSpeed={40}
            delayBetweenCommands={800}
          />
        </div>
      </div>

      {/* About Me Section: Aligned with Heading */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 mt-28 lg:mt-12 pt-8 border-t border-slate-800/60  relative z-10 scroll-mt-24"
      >
        {/* Left Column: Heading + Paragraphs */}
        <div className="flex-1 flex flex-col gap-8 max-w-2xl ">
          <div className="text-center">

          <h2
            id="about-heading"
            className="text-cyan-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
            <ScaleLetterText text="About Me" />
          </h2>
            </div>

          <div className="flex flex-col gap-5 text-zinc-100 text-lg sm:text-xl leading-relaxed font-normal">
            <p className="text-zinc-200 drop-shadow-sm">
              I'm a developer focused on building practical, reliable web
              applications with a strong interest in backend engineering.
            </p>
            <p className="text-zinc-200 drop-shadow-sm">
              I work with Node.js, Express, MongoDB, React, TypeScript, and
              Nextjs, and I enjoy building everything from REST APIs and
              authentication systems to real-time applications. I'm also
              exploring Docker, CI/CD, and DevOps to better understand how
              applications are built, deployed, and maintained. <br />
              My curiosity will always make me learn new things in the industry.
            </p>
            <p className="text-zinc-200 drop-shadow-sm">
              I don't just want to learn technologies—I want to understand how
              they work together to build useful software.
            </p>
          </div>
        </div>

        {/* Right Column: Card positioned at top-level with the heading */}
        <div className="flex-1 w-full max-w-lg flex justify-center items-start lg:pt-2">
          <DraggableCardDemo />
        </div>
      </section>
    </div>
  );
}
