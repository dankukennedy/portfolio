import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineCode } from "react-icons/hi";
import { fadeUp, stagger } from "../lib/motion";
import ProjectSlider from "./ProjectSlider";

import Flyer from "../assets/projects/flyer.jpeg";
import Sim from "../assets/projects/Sim1.jpg";
import Port from "../assets/projects/Port.jpg";
import CIC from "../assets/projects/cic.jpeg";
import Commerce from "../assets/projects/ecommerce.jpeg";
import Transcript from "../assets/projects/transcript.jpeg";
import Regal from "../assets/projects/regal.png";
import Employee from "../assets/projects/employee.jpg";
import Data from "../assets/projects/data.png";

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
    name: "Universal Data Analyzer",
    technologies: "Python, Streamlit, AI",
    image: Data,
    github: "https://universaldatamineranalyzer.streamlit.app/",
  },
  {
    id: 3,
    name: "Transcript Management System",
    technologies: "HTML, PHP, MySQL, Bootstrap",
    image: Transcript,
    github: "https://github.com/dankukennedy/transway",
  },
  {
    id: 4,
    name: "CIC Management System",
    technologies: "HTML, PHP, MySQL, JavaScript",
    image: CIC,
    github: "https://github.com/dankukennedy/CIC-Managemnt-System",
  },
  {
    id: 5,
    name: "E-commerce Platform",
    technologies: "HTML, PHP, MySQL, AJAX",
    image: Commerce,
    github: "https://github.com/dankukennedy/Ecommerce-site",
  },
];

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
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

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

function SectionHeader({
  dot,
  title,
  count,
}: {
  dot: string;
  title: string;
  count: number;
}) {
  return (
    <div className="flex items-end justify-between mb-8 gap-4">
      <div className="flex items-center gap-3">
        <span className={`w-2.5 h-2.5 rounded-full ${dot}`} />
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--color-fg)] tracking-tight">
          {title}
        </h3>
      </div>
      <span className="text-xs font-mono text-[var(--color-fg-muted)]">
        {String(count).padStart(2, "0")} projects
      </span>
    </div>
  );
}

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
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              dot="bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              title="Websites"
              count={websites.length}
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ProjectSlider perView={3}>
              {websites.map((p, i) => (
                <Card key={p.id} project={p} index={i} />
              ))}
            </ProjectSlider>
          </motion.div>
        </div>

        {/* Systems slider */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              dot="bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              title="Systems & Applications"
              count={systems.length}
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ProjectSlider perView={3}>
              {systems.map((p, i) => (
                <Card key={p.id} project={p} index={i} />
              ))}
            </ProjectSlider>
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
