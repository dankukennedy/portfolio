import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "../lib/motion";
import AboutImage from "../assets/pro.jpeg";

const skills = [
  {
    name: "C++ · HTML · CSS · JavaScript · Python · PHP · TypeScript ",
    level: 92,
  },
  { name: " MySQL· PostgreSQL· MongoDB· Redis · MariaDB", level: 87 },
  { name: "Node.js· Express · NestJS · FastAPI", level: 85 },
  { name: "Docker · GitHub · GitLab · CI/CD", level: 75 },
  { name: "React · Vite · TypeScript", level: 78 },
  { name: "MERN · PERN · Stack ", level: 70 },
  { name: "Laravel · WordPress ", level: 60 },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "6+", label: "Happy Clients" },
  { value: "5+", label: "Active Builds" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-[var(--color-bg)]"
    >
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4"
          >
            About
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-fg)] mb-4"
          >
            Engineering with purpose
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--color-fg-soft)] text-lg"
          >
            A blend of craft, curiosity, and disciplined execution — delivered
            from concept to production.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Portrait */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-emerald-500/30 via-cyan-500/20 to-indigo-500/30 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
                <img
                  src={AboutImage}
                  alt="Danku Kennedy Edem"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium glass text-emerald-300">
                    ● Accra, GH
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium glass text-gray-200">
                    Since 2016
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio + skills */}
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[var(--color-fg-soft)] text-lg leading-relaxed mb-10"
            >
              I design and engineer modern, scalable, and accessible web
              applications. My work spans frontend architecture, backend APIs,
              and cloud deployment — always with an obsession for performance,
              clean code, and delightful UX.
            </motion.p>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-fg-muted)] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Core Proficiencies
            </motion.h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-5 mb-14"
            >
              {skills.map((s) => (
                <motion.div
                  key={s.name}
                  variants={fadeUp}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-fg-soft)]">
                      {s.name}
                    </span>
                    <span className="text-emerald-500 font-mono">
                      {s.level}%
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[var(--color-fg)]/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-linear-to-r from-emerald-400 to-cyan-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl glass p-6 text-center transition-colors hover:border-emerald-500/30"
            >
              <div className="font-display text-3xl font-bold text-linear mb-1">
                {s.value}
              </div>
              <p className="text-xs uppercase tracking-widest text-[var(--color-fg-muted)]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
