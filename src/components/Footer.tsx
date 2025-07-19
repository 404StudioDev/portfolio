import { Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/Scriptzstarling",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/shashwat8w00",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:shashwat11muz@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-8 relative overflow-hidden bg-gradient-to-r from-black via-gray-950 to-black border-t border-gray-800">
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Single responsive layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name and Text */}
          <motion.div 
            className="flex flex-col items-center md:items-start gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
              SʜᴀsʜwᴀƬ
            </p>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center md:text-left">
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">
                  © 2025 Shashwat. Coded with
                </p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code className="w-3 h-3 text-blue-400" />
                </motion.div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-400">
                  passion and
                </p>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Terminal className="w-3 h-3 text-cyan-400" />
                </motion.div>
                <p className="text-xs text-gray-400">
                  precision
                </p>
              </div>
            </div>
          </motion.div>

          {/* Divider - only visible on desktop */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-lg transition-all duration-300 group bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}