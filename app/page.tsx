'use client';

import { useEffect, useRef, useState } from 'react';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import { UserIcon, CodeIcon, FolderIcon, GraduationCapIcon, MailIcon, TerminalIcon } from 'lucide-react';
import {HoverLineNav} from '@/components/ui/Navbar';

const SECTIONS = ['about', 'skills', 'projects', 'education', 'contact'] as const;
type Section = typeof SECTIONS[number];

const SECTION_COMPONENTS: Record<Section, React.ComponentType> = {
  about: About,
  skills: Skills,
  projects: Projects,
  education: Education,
  contact: Contact,
};

const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

const DOCK_ICONS: Record<Section, React.ReactNode> = {
  about: <UserIcon size={20} />,
  skills: <CodeIcon size={20} />,
  projects: <FolderIcon size={20} />,
  education: <GraduationCapIcon size={20} />,
  contact: <MailIcon size={20} />,
};

export default function Home() {
  const [active, setActive] = useState<Section>('about');
  const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef<Record<Section, HTMLElement | null>>(
    {} as Record<Section, HTMLElement | null>
  );

  const scrollToSection = (section: Section) => {
    sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll-spy: highlight whichever section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as Section);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 } // triggers when section crosses the middle of viewport
    );

    SECTIONS.forEach((s) => {
      const el = sectionRefs.current[s];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-background bg-grid bg-grid-fade overflow-x-hidden text-white">
      {/* Top bar: brand | dock | status */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 ">
            <div className="flex items-center gap-2 font-mono text-sm text-cyan-400">
              <span>[</span>
              <span>&lt;Shaikh Anis/&gt;</span>
              <span>]</span>
            </div>

                <HoverLineNav/>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available for hire
              </div>
              <button className="rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition">
                <TerminalIcon size={16} />
              </button>
            </div>         
          </div>
        </div>

      {/* All sections rendered in one scrollable flow */}
      <div className="relative z-10 pt-6">
        {SECTIONS.map((s) => {
          const SectionComponent = SECTION_COMPONENTS[s];
          return (
            <section
              key={s}
              id={s}
              ref={(el) => {
                sectionRefs.current[s] = el;
              }}
              className="min-h-screen flex items-center justify-center px-6 py-2 scroll-mt-8"
            >
              <div className="w-full max-w-7xl">
                <SectionComponent />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}