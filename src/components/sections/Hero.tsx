"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/8 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-[120px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/4 blur-[150px] animate-glow-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                <Sparkles className="w-3 h-3" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Hi, I&apos;m </span>
              <br />
              <span className="gradient-text">Aji Nuansa</span>
              <br />
              <span className="text-white">Sengarie</span>
            </motion.h1>

            <motion.div variants={item} className="mb-6">
              <p className="text-lg sm:text-xl text-cyan-400 font-medium font-mono">
                &lt; Frontend &amp; Fullstack Developer /&gt;
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Passionate about crafting fast, beautiful, and accessible web experiences.
              I bridge design and engineering to build products users love — from pixel-perfect
              UIs to robust backend systems.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-gray-500 text-sm">Find me on</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: "https://github.com/ansengarie", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://linkedin.com/in/ansengarie", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ansengarie@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-violet-600/20 blur-2xl scale-110 animate-glow-pulse" />

              {/* Avatar ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[2px] bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 animate-float">
                <div className="w-full h-full rounded-full bg-[#111118] flex items-center justify-center overflow-hidden">
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-[#0d1117] to-[#161b22] flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center">
                      <span className="text-3xl font-bold text-cyan-400 select-none">A</span>
                    </div>
                    <div className="text-center">
                      <p className="text-white text-sm font-semibold">Aji Nuansa</p>
                      <p className="text-cyan-400 text-xs">Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-8 glass rounded-xl px-3 py-2 border border-white/10"
              >
                <p className="text-xs text-gray-400">Experience</p>
                <p className="text-sm font-bold text-white">2+ Years</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-4 bottom-12 glass rounded-xl px-3 py-2 border border-white/10"
              >
                <p className="text-xs text-gray-400">Projects</p>
                <p className="text-sm font-bold text-white">10+ Built</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-xl px-3 py-2 border border-cyan-500/20 bg-cyan-500/5"
              >
                <p className="text-xs text-cyan-400 font-medium whitespace-nowrap">Open to work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
