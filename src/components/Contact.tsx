import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "shashwat11muz@gmail.com",
      href: "mailto:shashwat11muz@gmail.com",
      color: "from-red-500 to-pink-500",
      description: "Drop me a line anytime",
    },

    {
      icon: <span className="text-xl font-bold text-white">X</span>,
      label: "X",
      value: "@SHXx_Tech",
      href: "https://x.com/SHXx_Tech",
      color: "from-blue-400 to-black",
      description: "Follow for tech updates",
    },
    {
      icon: <Github className="w-4 h-4" />,
      label: "GitHub",
      value: "@Scriptzstarling",
      href: "https://github.com/Scriptzstarling",
      color: "from-gray-600 to-gray-800",
      description: "Check out my repositories",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      label: "LinkedIn",
      value: "@shashwat8w00",
      href: "https://linkedin.com/in/shashwat8w00",
      color: "from-blue-600 to-blue-700",
      description: "Connect professionally",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950"
    >
      {/* Space background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        {/* Communication grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:45px_45px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300 backdrop-blur-sm">
            <MessageCircle className="w-3 h-3" />
            Get In Touch
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>

          <p className="text-sm max-w-2xl mx-auto leading-relaxed text-gray-300">
            Ready to collaborate on your next project? I'm always excited to
            work on innovative solutions and bring creative ideas to life.
          </p>
        </AnimatedSection>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {contactInfo.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative flex items-center gap-3 p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-gray-900/80 to-black/80 hover:from-gray-800/80 hover:to-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated border effect */}
                <div
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${
                      item.color.split(" ")[1]
                    }, ${item.color.split(" ")[3]}, ${
                      item.color.split(" ")[1]
                    })`,
                    backgroundSize: "300% 300%",
                    animation: "gradient-shift 2s ease infinite",
                  }}
                />

                <div className="relative z-10 flex items-center gap-3 w-full">
                  <motion.div
                    className={`
                      w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} 
                      flex items-center justify-center text-white shadow-lg
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-medium text-gray-400">
                        {item.label}
                      </p>
                      {item.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      )}
                    </div>
                    <p className="font-semibold text-sm transition-colors duration-300 text-white group-hover:text-purple-400">
                      {item.value}
                    </p>
                    <p className="text-xs mt-0.5 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
