import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaPhone,
  FaMobile,
  FaWhatsapp,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { fadeUp, stagger } from "../lib/motion";
import { useTheme } from "../context/ThemeContext";

interface FormDataState {
  name: string;
  email: string;
  number: string;
  message: string;
}

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "dankukennedy@gmail.com",
    href: "mailto:dankukennedy@gmail.com",
  },
  { icon: FaPhone, label: "Phone", value: "+233 24 783 6603" },
  { icon: FaMobile, label: "Alt", value: "+233 20 376 0941" },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/message/EXF33XUPKEM3E1",
  },
  {
    icon: FaMapMarkedAlt,
    label: "Location",
    value: "Amrahia, Accra — Ghana",
  },
];

export default function Contact() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const validate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.message
    )
      return "Please fill in all required fields.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      return "Please enter a valid email address.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) return toast.error(err);
    setLoading(true);
    try {
      const res = await fetch(
        "https://portfolioapi-17m9.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to send.");
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (e: any) {
      toast.error(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full px-3.5 sm:px-4 py-3 sm:py-3.5 text-sm rounded-xl bg-[var(--color-fg)]/[0.03] border border-[var(--color-border)] text-[var(--color-fg)] placeholder-[var(--color-fg-muted)] focus:outline-none focus:border-emerald-500/60 focus:bg-[var(--color-fg)]/[0.05] transition-all";

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-28 px-5 sm:px-6 md:px-12 lg:px-20 overflow-hidden bg-[var(--color-bg-soft)]"
    >
      <ToastContainer theme={theme} position="top-right" />
      <div className="absolute top-1/4 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-emerald-500/5 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none" />

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
            Contact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-fg)] mb-4"
          >
            Let's build something
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-[var(--color-fg-soft)] text-base sm:text-lg px-2"
          >
            Have a project, an idea, or just want to say hi? My inbox is always
            open.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 sm:gap-6">
          {/* Contact info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl glass hover:border-emerald-500/30 transition-colors"
              >
                <div className="grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-[var(--color-border)] text-emerald-500 shrink-0">
                  <Icon size={14} className="sm:hidden" />
                  <Icon size={16} className="hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--color-fg-muted)] font-semibold">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm text-[var(--color-fg)] hover:text-emerald-500 transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm text-[var(--color-fg)] truncate">
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-2xl glass p-5 sm:p-7 md:p-9"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-fg-soft)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-fg-soft)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-fg-soft)] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({ ...formData, number: e.target.value })
                  }
                  placeholder="+233 ..."
                  className={inputCls}
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[var(--color-fg-soft)] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:from-emerald-400 hover:to-cyan-400 shadow-lg shadow-emerald-900/20 transition-all disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
