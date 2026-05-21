"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/lib/data";
import type { Experience } from "@/types";

const typeConfig = {
  work: { icon: Briefcase, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  education: { icon: GraduationCap, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  program: { icon: Award, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const config = typeConfig[exp.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-10 h-10 rounded-xl ${config.bg} border ${config.border} flex items-center justify-center z-10 -translate-x-1/2`}
        style={{ left: "0" }}
      >
        <Icon className={`w-5 h-5 ${config.color}`} />
      </div>

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="glass glow-border rounded-2xl p-6 ml-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-white font-semibold text-base">{exp.role}</h3>
            <p className={`text-sm font-medium mt-0.5 ${config.color}`}>{exp.company}</p>
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${config.bg} ${config.color} border ${config.border} whitespace-nowrap`}>
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
              <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${config.color} opacity-70`} />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Journey"
          title="Experience"
          subtitle="My professional journey and the milestones that shaped me as a developer."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/30 to-amber-500/20" />

          <div className="space-y-8 pl-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
