"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/lib/data";

const categoryLabel = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & DevOps",
};

const skillIcons: Record<string, string> = {
  "React.js": "⚛️",
  "Vue.js": "💚",
  "Next.js": "▲",
  "TypeScript": "🔷",
  "Tailwind CSS": "🌊",
  "Laravel": "🔴",
  "Node.js": "🟢",
  "Express.js": "⚡",
  "PostgreSQL": "🐘",
  "Git": "🌿",
};

export default function Skills() {
  const categories = ["frontend", "backend", "tools"] as const;

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="space-y-12">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (!catSkills.length) return null;

            return (
              <div key={cat}>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3"
                >
                  <span className="flex-1 h-px bg-white/5" />
                  {categoryLabel[cat]}
                  <span className="flex-1 h-px bg-white/5" />
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {catSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      className="glass glow-border rounded-2xl p-5 flex flex-col items-center gap-3 group cursor-default transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 flex items-center justify-center text-2xl group-hover:border-cyan-500/50 transition-colors">
                        {skillIcons[skill.name] ?? "💡"}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
