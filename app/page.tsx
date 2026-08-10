'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Dock from '@/components/Dock';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import { UserIcon, CodeIcon, FolderIcon, GraduationCapIcon, MailIcon } from 'lucide-react';

const SECTIONS = ['about', 'skills', 'projects', 'education', 'contact'] as const;
type Section = typeof SECTIONS[number];

const SECTION_MAP: Record<Section, React.ComponentType> = {
  about: About,
  skills: Skills,
  projects: Projects,
  education: Education,
  contact: Contact,
};

const DOCK_ICONS: Record<Section, React.ReactNode> = {
  about: <UserIcon size={20} />,
  skills: <CodeIcon size={20} />,
  projects: <FolderIcon size={20} />,
  education: <GraduationCapIcon size={20} />,
  contact: <MailIcon size={20} />,
};

export default function Home() {
  const [active, setActive] = useState<Section>('about');
  const ActiveComponent = SECTION_MAP[active];

  return (
    <main className="relative w-full min-h-screen bg-background bg-grid bg-grid-fade overflow-hidden text-white">
      <div className="relative z-10 h-screen flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full max-w-6xl"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock
          items={SECTIONS.map((s) => ({
            label: s.charAt(0).toUpperCase() + s.slice(1),
            icon: DOCK_ICONS[s],
            onClick: () => setActive(s),
            className: active === s ? 'dock-item-active' : '',
          }))}
        />
      </div>
    </main>
  );
}