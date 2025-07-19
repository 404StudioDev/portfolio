import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  const achievements = [
    "Developed dynamic UIs with HTML/CSS/JS",
    "Integrated REST APIs, improved page performance",
    "Boosted mobile engagement with responsive design",
    "Participated in Agile development cycles"
  ];

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-black/50 border border-green-400/30 text-green-300 backdrop-blur-sm font-mono">
            <Briefcase className="w-4 h-4 text-green-400" />
            <span className="font-mono">./experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent font-mono">
            &lt;Work Experience /&gt;
          </h2>

          <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-300 font-mono leading-relaxed">
            <span className="text-green-400">// </span>
            Hands-on exposure to professional dev workflows and production-ready builds
          </p>
        </AnimatedSection>

        {/* Experience Card */}
        <AnimatedSection className="max-w-4xl mx-auto">
          <motion.div
            className="group relative rounded-xl p-6 transition-all duration-300 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Minimal hover glow effect */}
            <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-green-500/30 via-cyan-400/30 to-purple-500/30 blur-[2px]" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white shadow-md">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                        Frontend Developer Intern
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm">E Square Systems</p>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-300 border border-blue-500/30 font-mono">
                      <Calendar className="w-3 h-3" />
                      April – May 2024
                    </div>
                  </div>

                  <div className="space-y-3 mt-4">
                    <h4 className="text-sm font-semibold text-gray-200">
                      Key Achievements & Responsibilities:
                    </h4>

                    <div className="grid md:grid-cols-2 gap-2 mt-2">
                      {achievements.map((point, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-lg bg-gray-800/40 border border-gray-700/30"
                        >
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-gray-300 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {['HTML/CSS', 'JavaScript', 'REST APIs', 'Responsive Design', 'Agile'].map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:border-green-400/40 hover:bg-green-400/10 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
