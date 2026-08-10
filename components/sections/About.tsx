import { Terminal } from "../ui/terminal";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center dark bg-background bg-grid bg-grid-fade relative overflow-hidden font-sans ">
      <div className="w-full h-auto flex justify-around relative z-10">
        <Terminal
          className="w-full h-full mr-10 "
          enableSound={true}
          username="Shaikh-Anis"
          commands={[
            "git clone https://github.com/AnisJshk/portfolio.git",
            "cd portfolio && npm install",
            "npm run build",
            "vercel --prod",
          ]}
          outputs={{
            0: [
              "Cloning into 'portfolio'...",
              "remote: Enumerating objects: 142, done.",
            ],
            1: ["added 342 packages, audited 343 packages in 4s"],
            2: [
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
          delayBetweenCommands={900}
        />
      </div>
    </div>
  );
}
