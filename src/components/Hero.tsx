import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  HiArrowDown,
  HiOutlineDownload,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { fadeUp, stagger } from "../lib/motion";
import cv from "../assets/files/DKE.pdf";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-150 h-150 bg-emerald-500/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-70 sm:w-105 h-70 sm:h-105 bg-cyan-500/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-bg to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        {/* Copy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-7 text-center lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="flex justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wide rounded-full glass text-emerald-500 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects · 2026
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display font-bold tracking-tight text-fg text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.05]"
          >
            Building the <span className="text-gradient">web of tomorrow</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            with clean code.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-fg-soft text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            I'm <span className="text-fg font-medium">Danku Kennedy Edem</span>{" "}
            — a Software Engineer & Full-Stack Architect crafting fast,
            accessible, and beautiful digital products from Accra, Ghana 🇬🇭.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
          >
            <a
              href="#project"
              className="group inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-fg text-bg hover:bg-emerald-500 hover:text-black transition-colors"
            >
              View my work
              <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-xl glass text-fg hover:border-emerald-500/40 transition-colors"
            >
              <HiOutlineSparkles className="text-emerald-500" />
              Let's talk
            </a>
            <a
              href={cv}
              download
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold rounded-xl text-fg-soft hover:text-fg transition-colors"
            >
              <HiOutlineDownload />
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-fg-muted">
              Connect
            </span>
            <div className="h-px flex-1 max-w-10 bg-border" />
            {[
              { icon: FaGithub, href: "https://github.com/dankukennedy" },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/kennedy-edem-danku-839108137",
              },
              { icon: FaXTwitter, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass text-fg-soft hover:text-emerald-500 transition-colors"
              >
                <Icon className="text-sm sm:text-base" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Code card with 3D tilt — hidden on very small screens? No, keep but simplify */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={onMouseMove}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
          style={{ perspective: 1200 }}
          className="relative flex justify-center mt-8 lg:mt-0"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-lg"
          >
            <div className="relative rounded-2xl overflow-hidden glass shadow-2xl shadow-black/5 dark:shadow-black/50">
              <div className="flex items-center gap-2 px-3 sm:px-5 py-3 sm:py-3.5 border-b border-border bg-fg/2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] sm:text-xs text-fg-muted font-mono ml-1 sm:ml-2">
                  developer.ts
                </span>
                <span className="ml-auto text-[9px] sm:text-[10px] uppercase tracking-widest text-emerald-500">
                  ● live
                </span>
              </div>

              <pre className="p-3 sm:p-5 md:p-6 text-[10px] sm:text-[12px] md:text-[13px] font-mono leading-relaxed overflow-x-auto text-fg">
                <code>
                  {`const `}
                  <span className="text-cyan-500 dark:text-cyan-300">
                    developer
                  </span>
                  {` = {\n  `}
                  <span className="text-fg-muted">name</span>
                  {`: `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Danku Kennedy Edem"
                  </span>
                  {`,\n  `}
                  <span className="text-fg-muted">role</span>
                  {`: `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Software Engineer"
                  </span>
                  {`,\n  `}
                  <span className="text-fg-muted">location</span>
                  {`: `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Accra, GH"
                  </span>
                  {`,\n  `}
                  <span className="text-fg-muted">stack</span>
                  {`: [\n    `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "React"
                  </span>
                  {`, `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Next.js"
                  </span>
                  {`, `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Laravel"
                  </span>
                  {`, `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Node"
                  </span>
                  {`, `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "FastAPI"
                  </span>
                  {`,\n    `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "TypeScript"
                  </span>
                  {`, `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "PostgreSQL"
                  </span>
                  {`, `}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    "Docker"
                  </span>
                  {`\n  ],\n  `}
                  <span className="text-fg-muted">status</span>
                  {`: `}
                  <span className="text-amber-600 dark:text-yellow-300">
                    "Available for hire"
                  </span>
                  {`\n};`}
                </code>
              </pre>

              <div className="px-3 sm:px-6 py-3 sm:py-4 border-t border-border flex items-center justify-between bg-fg/2">
                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-fg-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{" "}
                    main
                  </span>
                  <span>TypeScript</span>
                </div>
                <span className="text-[10px] sm:text-xs text-fg-muted font-mono">
                  UTF-8 · Ln 10
                </span>
              </div>
            </div>

            {/* Floating badges — hide on very small screens */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(60px)" }}
              className="hidden sm:block absolute -top-5 -right-5 px-4 py-2 rounded-xl glass text-xs font-medium text-cyan-500 shadow-xl"
            >
              ⚡ 99 Lighthouse
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{ transform: "translateZ(60px)" }}
              className="hidden sm:block absolute -bottom-5 -left-5 px-4 py-2 rounded-xl glass text-xs font-medium text-emerald-500 shadow-xl"
            >
              5+ yrs experience
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
