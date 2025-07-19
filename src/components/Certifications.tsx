import { Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface CertificationsProps {
  isDark: boolean;
}

export default function Certifications({ isDark }: CertificationsProps) {
  const certifications = [
    {
      title: "Google Data Analytics",
      issuer: "Coursera",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Space background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Achievement grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20 text-orange-300 backdrop-blur-sm">
            <Award className="w-3 h-3" />
            Professional Credentials
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-orange-100 to-green-100 bg-clip-text text-transparent">
            Certifications
          </h2>
          
          <p className="text-sm max-w-2xl mx-auto text-gray-300">
            Validated expertise through industry-recognized certifications
          </p>
        </AnimatedSection>
        
        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                className="group relative rounded-xl p-4 transition-all duration-500 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border effect */}
                <div className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                     style={{
                       background: `linear-gradient(45deg, ${cert.color.split(' ')[1]}, ${cert.color.split(' ')[3]}, ${cert.color.split(' ')[1]})`,
                       backgroundSize: '300% 300%',
                       animation: 'gradient-shift 2s ease infinite'
                     }} />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`
                      w-10 h-10 rounded-lg bg-gradient-to-r ${cert.color} 
                      flex items-center justify-center text-white mb-3 shadow-lg
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                  
                  <h3 className="text-base font-semibold mb-1 transition-colors duration-300 text-white group-hover:text-orange-400">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs text-gray-300">{cert.issuer}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}