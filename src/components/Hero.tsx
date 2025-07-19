import {
  MessageCircle,
  ArrowDown,
  Github,
  Linkedin,
  Code,
  Terminal,
  Zap,
  BookOpen,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface HeroProps {
  isDark: boolean;
  onNavigateToBlog: () => void;
}

export default function Hero({ isDark, onNavigateToBlog }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
    >
      {/* 🌌 Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse pointer-events-none z-0" />

      {/* ✨ Floating Gradient Balls */}
      <motion.div
        className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-slate-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 🌟 Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10 text-center">
        <AnimatedSection direction="down">
          {/* 💻 Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md mb-4 border border-blue-500/20 bg-black/80">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <Code className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-white">Frontend, AI & Data</span>
            <Terminal className="w-4 h-4 text-slate-400" />
          </div>

          {/* 🧑‍💻 Name */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-space">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-orbitron tracking-wider">
              SHASHWAT
            </span>
          </h1>

          {/* 👨‍💻 Roles */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-medium mb-4">
            {[
              { icon: Code, label: "Frontend Developer", color: "blue" },
              { icon: Zap, label: "AI Enthusiast", fixed: true },
              { icon: Terminal, label: "Data Storyteller", color: "indigo" },
            ].map(({ icon: Icon, label, color, fixed }, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg backdrop-blur-sm ${
                  fixed
                    ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    : `bg-${color}-500/10 border border-${color}-500/20 text-${color}-400`
                }`}
              >
                <Icon className="w-3 h-3" />
                <span className="font-rajdhani">{label}</span>
              </div>
            ))}
          </div>

          {/* 📜 Bio */}
          <p className="text-sm md:text-base mb-6 max-w-3xl mx-auto leading-relaxed text-gray-300 font-space">
            Transforming ideas into{" "}
            <span className="text-blue-400 font-medium">elegant experiences</span>,{" "}
            <span className="text-cyan-400 font-medium">AI-driven code</span> &{" "}
            <span className="text-indigo-400 font-medium">insightful data</span>
          </p>
        </AnimatedSection>

        {/* 🚀 CTA Buttons with Animated Borders */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {[
              {
                label: "Read Blog",
                onClick: onNavigateToBlog,
                icon: BookOpen,
                bg: "from-orange-400 via-yellow-500 to-pink-500",
                hover: "text-orange-300",
              },
              {
                label: "Let's Connect",
                href: "#contact",
                icon: MessageCircle,
                bg: "from-cyan-400 via-blue-500 to-indigo-500",
                hover: "text-cyan-300",
              },
            ].map(({ label, icon: Icon, href, onClick, bg, hover }, i) => (
              <motion.a
                key={i}
                href={href}
                onClick={onClick}
                className={`relative group px-5 py-2.5 rounded-lg font-semibold text-sm overflow-hidden z-10 ${hover}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Gradient Border */}
                <span
                  className={`absolute inset-0 z-[-2] rounded-lg bg-gradient-to-r ${bg} bg-[length:200%_200%] animate-border-spin`}
                ></span>
                {/* Inner glassy layer */}
                <span className="absolute inset-[2px] rounded-lg bg-black/90 backdrop-blur-md border border-slate-600/30 z-[-1]" />
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        {/* 🔗 Socials */}
        <AnimatedSection delay={0.4}>
          <div className="flex items-center justify-center gap-3 mb-10">
            {[
              {
                icon: Github,
                href: "https://github.com/Scriptzstarling",
                color: "from-gray-600 to-gray-800",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/shashwat8w00",
                color: "from-blue-600 to-blue-800",
              },
            ].map(({ icon: Icon, href, color }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-lg border border-slate-600/30 bg-black/60 backdrop-blur-md"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div
                  className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 bg-gradient-to-r ${color}`}
                  style={{ backgroundSize: "300% 300%", animation: "gradient-shift 2s ease infinite" }}
                />
                <div className="absolute inset-[1px] rounded-lg bg-black/80 backdrop-blur-md" />
                <Icon className="relative z-10 w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        {/* 🖱️ Scroll Prompt */}
        <AnimatedSection delay={0.6}>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-gray-500 font-medium font-space">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-1.5 rounded-full border border-gray-600/30 bg-gray-800/30 backdrop-blur-sm"
            >
              <ArrowDown className="w-3 h-3 text-gray-400" />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
