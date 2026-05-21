"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, Users } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Craft",
    desc: "Building pixel-perfect, responsive UIs with React, Vue, and Next.js",
  },
  {
    icon: Layers,
    title: "Backend Power",
    desc: "Designing robust APIs with Laravel, Express.js, and PostgreSQL",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimizing for speed, accessibility, and great user experience",
  },
  {
    icon: Users,
    title: "Team Player",
    desc: "Experienced in agile workflows, code reviews, and collaboration",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="About Me"
          title="Who I Am"
          subtitle="A developer who cares deeply about both code quality and user experience."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed text-base">
              I&apos;m <span className="text-white font-semibold">Aji Nuansa Sengarie</span>, a
              Frontend &amp; Fullstack Web Developer based in Indonesia. My journey in
              web development started with a curiosity about how things on the internet work —
              and grew into a deep passion for building them myself.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              Over the years I&apos;ve worked across the entire web stack. On the frontend, I
              specialize in <span className="text-cyan-400">React.js</span>,{" "}
              <span className="text-cyan-400">Vue.js</span>, and{" "}
              <span className="text-cyan-400">Next.js</span> with TypeScript and Tailwind CSS.
              On the backend, I build reliable services using{" "}
              <span className="text-cyan-400">Laravel</span>,{" "}
              <span className="text-cyan-400">Express.js</span>, and{" "}
              <span className="text-cyan-400">PostgreSQL</span>.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              I&apos;ve had the opportunity to develop real-world applications as a Frontend
              Developer at Universitas Pasundan, complete an intensive bootcamp at SYNRGY Academy,
              and participate in the national MBKM program — all of which shaped my professional
              foundation and mindset around delivering quality software.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              {["React.js", "Next.js", "Vue.js", "TypeScript", "Laravel", "PostgreSQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/5 border border-cyan-500/20 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass glow-border rounded-2xl p-5 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <h.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{h.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
