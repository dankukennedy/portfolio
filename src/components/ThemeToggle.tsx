import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";

    // Fallback for browsers without View Transitions
    if (!("startViewTransition" in document)) {
      toggleTheme();
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // @ts-expect-error — View Transitions typing
    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        { clipPath: next === "dark" ? clipPath : clipPath.reverse() },
        {
          duration: 500,
          easing: "ease-out",
          pseudoElement:
            next === "dark"
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
        },
      );
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative grid place-items-center w-10 h-10 rounded-xl glass text-[var(--color-fg)] hover:border-emerald-500/40 transition-colors overflow-hidden ${className}`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        {isDark ? (
          <HiOutlineSun size={18} className="text-amber-300" />
        ) : (
          <HiOutlineMoon size={18} className="text-indigo-500" />
        )}
      </motion.span>
    </button>
  );
}
