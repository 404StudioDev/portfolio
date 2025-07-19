import { Calendar, Clock, ArrowLeft, User, Tag, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    image: string;
  };
  onBack: () => void;
  onNavigateHome: () => void;
}

export default function BlogPost({ post, onBack, onNavigateHome }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* EXACT Hero Section Background */}
      <div className="absolute inset-0">
        {/* Animated cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
        
        {/* Floating space orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/8 to-slate-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Matrix-style falling code effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/15 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px'
              }}
              animate={{
                y: ['0vh', '110vh']
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear'
              }}
            >
              {Math.random() > 0.5 ? 'const dev = () => {' : 'function build() {'}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
              whileHover={{ x: -3 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Blog</span>
            </motion.button>
            
            <motion.button
              onClick={onNavigateHome}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Hero image */}
        <AnimatedSection>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 text-sm font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                {post.category}
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Article header */}
        <AnimatedSection delay={0.2}>
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>
            
            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 hover:text-white hover:border-blue-400/50 transition-all duration-200"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Article content */}
        <AnimatedSection delay={0.4}>
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}
            />
          </div>
        </AnimatedSection>

        {/* Article footer */}
        <AnimatedSection delay={0.6} className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">Written by</p>
              <p className="text-white font-semibold text-lg">{post.author}</p>
              <p className="text-gray-400 text-sm">Frontend Developer | AI Enthusiast | Data Storyteller</p>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                onClick={onBack}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>More Articles</span>
              </motion.button>
              
              <motion.button
                onClick={onNavigateHome}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-4 h-4" />
                <span>Portfolio</span>
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}