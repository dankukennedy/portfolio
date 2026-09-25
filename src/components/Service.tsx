import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineColorSwatch,
  HiOutlineServer,
  HiOutlineCube,
  HiOutlineLightningBolt,
  HiOutlineChip,
} from "react-icons/hi";
import { fadeUp, stagger } from "../lib/motion";

const services = [
  {
    icon: HiOutlineColorSwatch,
    title: "Web Design",
    desc: "Visually striking, brand-aligned interfaces that convert.",
  },
  {
    icon: HiOutlineCode,
    title: "Frontend Engineering",
    desc: "Responsive, accessible UIs built with modern frameworks.",
  },
  {
    icon: HiOutlineServer,
    title: "Backend Development",
    desc: "Robust APIs, secure auth, and efficient data layers.",
  },
  {
    icon: HiOutlineCube,
    title: "Full-Stack Solutions",
    desc: "End-to-end products from design system to deployment.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Rapid Prototyping",
    desc: "From idea to working MVP in days, not weeks.",
  },
  {
    icon: HiOutlineChip,
    title: "IT Consultancy",
    desc: "Architecture reviews, strategy, and technical guidance.",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      className="relative py-16 sm:py-24 lg:py-28 px-5 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-[var(--color-bg-soft)]"
    >
      <div className="absolute top-1/2 right-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-emerald-500/5 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4"
          >
            Services
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-fg)] mb-4"
          >
            What I do best
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--color-fg-soft)] text-base sm:text-lg px-2"
          >
            Full-spectrum engineering services — designed to take your product
            from idea to impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl glass p-5 sm:p-7 hover:border-emerald-500/40 transition-colors overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-center justify-between mb-6 sm:mb-8">
                  <div className="grid place-items-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-[var(--color-border)] text-emerald-500">
                    <Icon size={18} className="sm:hidden" />
                    <Icon size={22} className="hidden sm:block" />
                  </div>
                  <span className="font-mono text-xs text-[var(--color-fg-muted)]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative font-display text-lg sm:text-xl font-semibold text-[var(--color-fg)] mb-2 group-hover:text-emerald-500 transition-colors">
                  {s.title}
                </h3>
                <p className="relative text-xs sm:text-sm text-[var(--color-fg-soft)] leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
