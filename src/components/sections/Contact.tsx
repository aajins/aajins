"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ansengarie@gmail.com",
    href: "mailto:ansengarie@gmail.com",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/ansengarie",
    href: "https://github.com/ansengarie",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ansengarie",
    href: "https://linkedin.com/in/ansengarie",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Gagal mengirim pesan.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 4000);
    } catch {
      setErrorMsg("Koneksi gagal. Periksa internet kamu.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
                freelance project, or an interesting collaboration. My inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl glass ${link.border} border group transition-all duration-200 hover:${link.bg}`}
                >
                  <div className={`w-10 h-10 rounded-xl ${link.bg} ${link.border} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <link.icon className={`w-5 h-5 ${link.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-xs font-medium mb-0.5">{link.label}</p>
                    <p className={`text-sm font-medium ${link.color} truncate`}>{link.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-cyan-400/60" />
              <span>Bandung, Indonesia — Available for Remote</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass glow-border rounded-2xl p-8 space-y-5"
            >
              <h3 className="text-white font-semibold text-lg mb-2">Send a Message</h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {errorMsg}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={status === "idle" || status === "error" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" || status === "error" ? { scale: 0.97 } : {}}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  status === "sent"
                    ? "bg-green-500/20 border border-green-500/40 text-green-400"
                    : status === "sending"
                    ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 cursor-wait"
                    : status === "error"
                    ? "bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20"
                    : "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(0,212,255,0.4)]"
                }`}
              >
                {status === "sent" ? (
                  "Pesan terkirim! Saya akan segera membalas."
                ) : status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                    />
                    Mengirim...
                  </>
                ) : status === "error" ? (
                  <>
                    <Send className="w-4 h-4" />
                    Coba Lagi
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
