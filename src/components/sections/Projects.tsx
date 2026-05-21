"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { GithubIcon } from "@/components/ui/SocialIcons";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";

const projectColors = [
  { from: "from-cyan-500/20", to: "to-blue-600/20", accent: "text-cyan-400", dot: "bg-cyan-400" },
  { from: "from-red-500/20", to: "to-orange-500/20", accent: "text-red-400", dot: "bg-red-400" },
  { from: "from-amber-500/20", to: "to-yellow-500/20", accent: "text-amber-400", dot: "bg-amber-400" },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/3 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects I've built — from e-commerce platforms to interactive apps."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const color = projectColors[i % projectColors.length];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass glow-border rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Thumbnail */}
                <div className={`relative h-44 bg-gradient-to-br ${color.from} ${color.to} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="relative text-center">
                    <div className={`text-5xl font-black ${color.accent} opacity-20 select-none font-mono`}>
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`text-2xl font-bold ${color.accent}`}>
                          {project.title[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}
                  {/* Gradient fade bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0f0f17] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ansengarie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors group"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View more on GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
