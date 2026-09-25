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

    // const isMobile = window.matchMedia("(max-width: 640px)").matches;

    // // Fallback for mobile — simpler, no ripple animation
    // if (!("startViewTransition" in document) || isMobile) {
    //   toggleTheme();
    //   return;
    // }

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
      className={`relative grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl glass text-fg hover:border-emerald-500/40 transition-colors overflow-hidden shrink-0 ${className}`}
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
          <>
            <HiOutlineSun size={16} className="sm:hidden text-amber-300" />
            <HiOutlineSun
              size={18}
              className="hidden sm:block text-amber-300"
            />
          </>
        ) : (
          <>
            <HiOutlineMoon size={16} className="sm:hidden text-indigo-500" />
            <HiOutlineMoon
              size={18}
              className="hidden sm:block text-indigo-500"
            />
          </>
        )}
      </motion.span>
    </button>
  );
}
