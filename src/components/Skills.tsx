import { Code } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface SkillsProps {
  isDark: boolean;
}

export default function Skills({ isDark }: SkillsProps) {
  const skills = [
    // 🧑‍💻 Frontend
    { name: "HTML", icon: "🌐", color: "#e34f26" },
    { name: "CSS", icon: "🎨", color: "#1572b6" },
    { name: "JavaScript", icon: "🟨", color: "#f7df1e" },
    { name: "React.js", icon: "⚛️", color: "#61dafb" },
    { name: "Tailwind CSS", icon: "💨", color: "#06b6d4" },

    // 🚀 Backend
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "Express.js", icon: "🚂", color: "#000000" },
    { name: "FastAPI", icon: "⚡", color: "#009688" },
    { name: "Python", icon: "🐍", color: "#3776ab" },
    { name: "SQL", icon: "🗄️", color: "#336791" },
    { name: "MongoDB", icon: "🍃", color: "#47a248" },
    { name: "Firebase Firestore", icon: "🔥", color: "#ffca28" },
    { name: "Supabase", icon: "⚡", color: "#3ecf8e" },

    // 📊 Data & Visualization
    { name: "Pandas", icon: "🐼", color: "#150458" },
    { name: "Matplotlib", icon: "📈", color: "#11557c" },
    { name: "Jupyter Notebook", icon: "📓", color: "#f37626" },

    // ☁️ Cloud & Integration
    { name: "Firebase Auth", icon: "🔐", color: "#ffa000" },
    { name: "Rest API", icon: "🌐", color: "#3ecf8e" },
    { name: "Twilio API", icon: "📲", color: "#f22f46" },

    // 🔐 Tools & DevOps
    { name: "Git", icon: "📝", color: "#f05032" },
    { name: "WebSockets", icon: "🔌", color: "#000000" },
    { name: "VS Code", icon: "🖥️", color: "#007acc" },
    { name: "Linux", icon: "🐧", color: "#557c94" }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-gray-900/50 border border-gray-700/50 text-gray-300 backdrop-blur-sm">
            <Code className="w-4 h-4 text-green-400" />
            <span className="font-mono">./skills</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent font-mono">
            &lt;Technologies /&gt;
          </h2>

          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-300 font-mono">
            <span className="text-green-400">// </span>
            My technical arsenal for building modern applications
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="relative h-16 rounded-md overflow-hidden bg-gray-200 border border-gray-300 shadow-md">
                <div className="absolute left-0 top-0 w-12 h-full bg-black flex items-center justify-center border-r border-gray-800">
                  <span className="text-lg">{skill.icon}</span>
                </div>
                <div className="ml-12 h-full flex items-center justify-center px-3">
                  <span className="text-black font-semibold text-sm font-mono tracking-wide">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection className="text-center mt-16" delay={0.5}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 border border-green-400/50 text-green-400 font-mono text-sm backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>skills.length = {skills.length}</span>
            <span className="text-gray-500">// Always learning more...</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
