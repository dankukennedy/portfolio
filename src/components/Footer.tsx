import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border px-5 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-14 bg-bg">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3 order-1">
          <span className="grid place-items-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-linear-to-br from-emerald-400 to-cyan-500 text-black font-bold font-display text-xs sm:text-sm shrink-0">
            D
          </span>
          <span className="text-xs sm:text-sm text-fg-soft text-center md:text-left">
            © {year}{" "}
            <span className="text-fg font-medium">
              Danku Kennedy Edem
            </span>
            . All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 order-2">
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
              className="grid place-items-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg glass text-fg-soft hover:text-emerald-500 transition-colors"
            >
              <Icon size={13} className="sm:hidden" />
              <Icon size={14} className="hidden sm:block" />
            </a>
          ))}
        </div>

        <p className="text-[10px] sm:text-xs text-fg-muted font-mono order-3 text-center">
          Built with React · Tailwind v4 · Framer Motion
        </p>
      </div>
    </footer>
  );
}
