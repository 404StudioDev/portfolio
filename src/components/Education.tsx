import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "KIIT University",
      duration: "2021 – Present",
      location: "Bhubaneswar, India",
      color: "from-purple-500 to-indigo-500"
    },
    {
      degree: "12th Grade",
      institution: "Inter College Zilla School",
      duration: "2021",
      location: "Muzaffarpur, India",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Space background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Academic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-indigo-300 backdrop-blur-sm">
            <GraduationCap className="w-3 h-3" />
            Academic Foundation
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-indigo-100 to-cyan-100 bg-clip-text text-transparent">
            Education
          </h2>
          
          <p className="text-sm max-w-2xl mx-auto text-gray-300">
            Strong academic foundation in computer science and technology
          </p>
        </AnimatedSection>
        
        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                className="group relative rounded-xl p-6 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border effect */}
                <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(45deg, ${edu.color.split(' ')[1]}, ${edu.color.split(' ')[3]}, ${edu.color.split(' ')[1]})`,
                       backgroundSize: '300% 300%',
                       animation: 'gradient-shift 2s ease infinite'
                     }} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`
                        w-10 h-10 rounded-lg bg-gradient-to-r ${edu.color} 
                        flex items-center justify-center text-white flex-shrink-0 shadow-lg
                      `}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 transition-colors duration-300 text-white group-hover:text-indigo-400">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400 font-semibold text-base mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}