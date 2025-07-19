import {
  Eye,
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
      {/* 🔳 Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/20 text-xs font-mono"
              style={{ left: `${Math.random() * 100}%`, top: "-10px" }}
              animate={{ y: ["0vh", "110vh"] }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5
                ? "const dev = () => {"
                : "function build() {"}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/10 to-slate-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* 🌟 Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          <AnimatedSection direction="down">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md mb-4 border border-blue-500/20 bg-black/80"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10 flex items-center gap-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Code className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium text-white">
                  Available for Frontend, AI & Data Roles
                </span>
                <Terminal className="w-3 h-3 text-slate-400" />
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-white font-space"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-orbitron tracking-wider">
                SHASHWAT
              </span>
            </motion.h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <motion.div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-medium mb-3">
              {[
                { icon: Code, label: "Frontend Developer", color: "blue" },
                { icon: Zap, label: "AI Enthusiast", fixed: true },
                { icon: Terminal, label: "Data Storyteller", color: "indigo" },
              ].map(({ icon: Icon, label, color, fixed }, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-sm ${
                    fixed
                      ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                      : `bg-${color}-500/10 border border-${color}-500/20 text-${color}-400`
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Icon className="w-3 h-3" />
                  <span className="font-rajdhani">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <motion.p className="text-sm md:text-base mb-6 max-w-3xl mx-auto leading-relaxed text-gray-300 font-space">
              Transforming ideas into{" "}
              <span className="text-blue-400 font-medium">
                elegant digital experiences
              </span>
              ,{" "}
              <span className="text-cyan-400 font-medium">innovative code</span>
              , <span className="text-indigo-400 font-medium">smart AI</span> &{" "}
              <span className="text-emerald-400 font-medium">
                data-driven insights
              </span>
            </motion.p>
          </AnimatedSection>

          {/* 🚀 CTA Buttons (No Resume Button) */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/10 to-indigo-500/5 rounded-2xl blur-xl" />
              <motion.div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 p-4">
                {[
                  {
                    label: "Read Blog",
                    onClick: onNavigateToBlog,
                    icon: BookOpen,
                    bg: "from-emerald-500 via-cyan-500 to-purple-500",
                    hover: "text-emerald-400",
                  },
                  {
                    label: "Let's Connect",
                    href: "#contact",
                    icon: MessageCircle,
                    bg: "from-blue-500 via-cyan-500 to-indigo-500",
                    hover: "text-cyan-400",
                  },
                ].map(({ label, icon: Icon, href, onClick, bg, hover }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    onClick={onClick}
                    className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-slate-600/30 backdrop-blur-md bg-black/80 ${hover}`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-r ${bg}`}
                      style={{
                        backgroundSize: "300% 300%",
                        animation: "gradient-shift 3s ease infinite",
                      }}
                    />
                    <div className="absolute inset-[1px] rounded-lg bg-black/90 backdrop-blur-md" />
                    <div className="relative z-10 flex items-center gap-2 text-white">
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* 🔗 Social Icons */}
          <AnimatedSection direction="up" delay={0.8}>
            <motion.div className="flex items-center justify-center gap-3 mb-8">
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
                  className="group relative p-2.5 rounded-lg transition-all duration-300 backdrop-blur-md border border-slate-600/30 bg-black/60"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-60 bg-gradient-to-r ${color}`}
                    style={{
                      backgroundSize: "300% 300%",
                      animation: "gradient-shift 2s ease infinite",
                    }}
                  />
                  <div className="absolute inset-[1px] rounded-lg bg-black/80 backdrop-blur-md" />
                  <div className="relative z-10">
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* 🖱️ Scroll Prompt */}
          <AnimatedSection direction="up" delay={1}>
            <motion.div className="flex flex-col items-center gap-1">
              <span className="text-xs text-gray-500 font-medium font-space">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-1.5 rounded-full border border-gray-600/30 bg-gray-800/30 backdrop-blur-sm"
              >
                <ArrowDown className="w-3 h-3 text-gray-400" />
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
