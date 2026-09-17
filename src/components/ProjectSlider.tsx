import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiArrowLeft, HiOutlineCode } from "react-icons/hi";
import { fadeUp, stagger } from "../lib/motion";

import Flyer from "../assets/projects/flyer.jpeg";
import Sim from "../assets/projects/Sim1.jpg";
import Port from "../assets/projects/Port.jpg";
import CIC from "../assets/projects/cic.jpeg";
import Commerce from "../assets/projects/ecommerce.jpeg";
import Transcript from "../assets/projects/transcript.jpeg";
import Regal from "../assets/projects/regal.png";
import Employee from "../assets/projects/employee.jpg";

interface ProjectItem {
  id: number;
  name: string;
  technologies: string;
  image: string;
  website?: string;
  github?: string;
}

const websites: ProjectItem[] = [
  {
    id: 1,
    name: "Regal Gospel Ministries",
    technologies: "React, Framer Motion, Tailwind, TypeScript",
    image: Regal,
    website: "https://regal-web-site.vercel.app",
  },
  {
    id: 2,
    name: "Edem-Tech Enterprise",
    technologies: "React, Tailwind, TypeScript",
    image: Flyer,
    website: "https://edem-tech-ent.vercel.app",
  },
  {
    id: 3,
    name: "Koge Portfolio",
    technologies: "React, Tailwind, TypeScript",
    image: Port,
    website: "https://koge-portfolio.vercel.app",
  },
  {
    id: 4,
    name: "Data System Frontend",
    technologies: "React, Tailwind, TypeScript",
    image: Sim,
    website: "https://data-system-lyart.vercel.app",
  },
];

const systems: ProjectItem[] = [
  {
    id: 1,
    name: "Employee Management System",
    technologies: "React Vite, TS, Node.js, Express, Prisma, PostgreSQL",
    image: Employee,
    website: "https://employeemgt.vercel.app/login",
  },
  {
    id: 2,
    name: "Transcript Management System",
    technologies: "HTML, PHP, MySQL, Bootstrap",
    image: Transcript,
    github: "https://github.com/dankukennedy/transway",
  },
  {
    id: 3,
    name: "CIC Management System",
    technologies: "HTML, PHP, MySQL, JavaScript",
    image: CIC,
    github: "https://github.com/dankukennedy/CIC-Managemnt-System",
  },
  {
    id: 4,
    name: "E-commerce Platform",
    technologies: "HTML, PHP, MySQL, AJAX",
    image: Commerce,
    github: "https://github.com/dankukennedy/Ecommerce-site",
  },
];

/* ------------------------------ Card ------------------------------ */

function Card({ project, index }: { project: ProjectItem; index: number }) {
  const href = project.website ?? project.github;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative rounded-2xl glass overflow-hidden hover:border-emerald-500/40 transition-colors flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-surface)]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-xl glass text-[var(--color-fg)] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
          <HiArrowRight />
        </div>

        {project.website ? (
          <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-emerald-500 text-black">
            Live
          </span>
        ) : (
          <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full glass text-cyan-500">
            Repo
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-semibold text-[var(--color-fg)] mb-3 group-hover:text-emerald-500 transition-colors">
          {project.name}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.split(",").map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-[var(--color-fg)]/5 border border-[var(--color-border)] text-[var(--color-fg-soft)]"
            >
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

/* ------------------------- Section Header ------------------------- */

function SectionHeader({
  dot,
  title,
  count,
  current,
  total,
  onPrev,
  onNext,
  showArrows,
}: {
  dot: string;
  title: string;
  count: number;
  current?: number;
  total?: number;
  onPrev?: () => void;
  onNext?: () => void;
  showArrows?: boolean;
}) {
  return (
    <div className="flex items-end justify-between mb-8 gap-4">
      <div className="flex items-center gap-3">
        <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-fg)] tracking-tight">
          {title}
        </h3>
        <span className="text-xs font-mono text-[var(--color-fg-muted)] ml-1">
          ({String(count).padStart(2, "0")})
        </span>
      </div>

      <div className="flex items-center gap-3">
        {showArrows && (
          <>
            <span className="hidden sm:inline-block text-xs font-mono text-[var(--color-fg-muted)]">
              {String((current ?? 0) + 1).padStart(2, "0")} /{" "}
              {String(total ?? 0).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous projects"
                className="grid place-items-center w-10 h-10 rounded-xl glass text-[var(--color-fg)] hover:border-emerald-500/40 hover:text-emerald-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <HiArrowLeft />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Next projects"
                className="grid place-items-center w-10 h-10 rounded-xl glass text-[var(--color-fg)] hover:border-emerald-500/40 hover:text-emerald-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <HiArrowRight />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* --------------------------- Slider Hook -------------------------- */

/**
 * Returns the number of items visible per viewport breakpoint.
 *  - < 768px (mobile)  → 1
 *  - < 1024px (tablet) → 2
 *  - >= 1024px (desktop) → 3
 */
function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

/* ------------------------ Project Slider -------------------------- */

function ProjectSlider({
  projects,
  dot,
  title,
}: {
  projects: ProjectItem[];
  dot: string;
  title: string;
}) {
  const visible = useVisibleCount();
  const maxIndex = Math.max(0, projects.length - visible);
  const [index, setIndex] = useState(0);

  // Clamp current index if visible count changes (e.g. resize)
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // Drag handler
  const dragX = useRef(0);
  const onDragStart = (_: any, info: { offset: { x: number } }) => {
    dragX.current = info.offset.x;
  };
  const onDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 80;
    if (info.offset.x < -threshold) goNext();
    else if (info.offset.x > threshold) goPrev();
    dragX.current = 0;
  };

  const showArrows = projects.length > 3;
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  // Card width percentages: each card occupies (100/visible)% of track
  const cardWidthPct = 100 / visible;

  return (
    <>
      <SectionHeader
        dot={dot}
        title={title}
        count={projects.length}
        current={index}
        total={maxIndex + 1}
        onPrev={goPrev}
        onNext={goNext}
        showArrows={showArrows}
      />

      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 opacity-60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 opacity-60" />

        <div className="overflow-hidden">
          <motion.div
            drag={showArrows ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={onDragEnd}
            animate={{ x: `-${index * cardWidthPct}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {projects.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                style={{
                  flex: `0 0 calc(${cardWidthPct}% - ${((visible - 1) * 24) / visible}px)`,
                }}
                className="min-w-0"
              >
                <Card project={p} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators (only when > 3) */}
        {showArrows && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-emerald-500"
                    : "w-1.5 bg-[var(--color-fg)]/20 hover:bg-[var(--color-fg)]/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

/* ----------------------------- Section ---------------------------- */

export default function Project() {
  return (
    <section
      id="project"
      className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-fg)] mb-4"
          >
            Selected work
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--color-fg-soft)] text-lg"
          >
            A curated set of client websites and robust database-driven systems.
          </motion.p>
        </motion.div>

        {/* Websites slider */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ProjectSlider
              projects={websites}
              dot="bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              title="Websites"
            />
          </motion.div>
        </div>

        {/* Systems slider */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ProjectSlider
              projects={systems}
              dot="bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              title="Systems & Applications"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/dankukennedy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl glass text-[var(--color-fg)] hover:border-emerald-500/40 transition-colors"
          >
            <HiOutlineCode />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
