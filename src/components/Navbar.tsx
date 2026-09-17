import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Projects", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-xl shadow-black/5 dark:shadow-black/40"
              : "bg-transparent border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-cyan-500 text-black font-bold font-display">
              D
            </span>
            <span className="font-display font-semibold tracking-tight text-[var(--color-fg)]">
              D . K<span className="text-emerald-500"> Edem</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-[var(--color-fg-soft)] hover:text-[var(--color-fg)] transition-colors rounded-lg group"
                >
                  {l.label}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-px w-0 bg-linear-to-r from-emerald-400 to-cyan-400 group-hover:w-6 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[var(--color-fg)] text-[var(--color-bg)] hover:bg-emerald-500 hover:text-black transition-colors"
            >
              Hire Me
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-xl glass text-[var(--color-fg)]"
            >
              {open ? <HiX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-2 glass rounded-2xl p-4"
            >
              <ul className="flex flex-col">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-[var(--color-fg-soft)] hover:text-[var(--color-fg)] hover:bg-[var(--color-fg)]/5 transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block text-center px-4 py-3 rounded-xl bg-emerald-500 text-black font-semibold"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
