import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--color-border)] px-6 md:px-12 lg:px-20 py-14 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-black font-bold font-display text-sm">
            D
          </span>
          <span className="text-sm text-[var(--color-fg-soft)]">
            © {year}{" "}
            <span className="text-[var(--color-fg)] font-medium">
              Danku Kennedy Edem
            </span>
            . All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: FaGithub, href: "https://github.com/dankukennedy" },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/kennedy-edem-danku-839108137",
            },
            { icon: FaXTwitter, href: "#" },
            { icon: FaEnvelope, href: "mailto:dankukennedy@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center w-9 h-9 rounded-lg glass text-[var(--color-fg-soft)] hover:text-emerald-500 transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--color-fg-muted)] font-mono">
          Built with React · Tailwind v4 · Framer Motion
        </p>
      </div>
    </footer>
  );
}
