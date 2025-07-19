import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Tag,
  User,
  Home,
  ArrowLeft,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface BlogProps {
  isDark: boolean;
  onNavigateHome: () => void;
  onNavigateToPost: (post: BlogPost) => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why I Started This Blog – My Developer Journey Begins",
    excerpt:
      "Join me as I document my coding journey, share daily progress, and create a living proof-of-work for recruiters and collaborators.",
    content: `
      <h1>Why I Started This Blog – My Developer Journey Begins</h1>
      
      <h2>Introduction</h2>
      <p>I'm <strong>Shashwat</strong>, a developer passionate about building real-world applications, solving practical problems, and continuously learning. This blog is where I share my development journey, technical challenges, and day-to-day progress.</p>
      
      <p>The goal is to document not just what I build, but how and why I built it. Whether it's a major project milestone or a small bug fix, I believe in sharing the process as much as the product.</p>
      
      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #10b981, transparent);" />
      
      <h2>Why a Blog?</h2>
      <ul>
        <li>To stay consistent and accountable in my personal learning</li>
        <li>To explain concepts in simple language for myself and others</li>
        <li>To create a visible, searchable proof-of-work for recruiters</li>
        <li>To help other self-taught developers through shared experiences</li>
      </ul>
      
      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #3b82f6, transparent);" />
      
      <h2>What to Expect from This Blog</h2>
      <ul>
        <li><strong>Dev Logs</strong>: Regular project updates and development progress</li>
        <li><strong>Tips & Fixes</strong>: Short, practical code solutions to real issues</li>
        <li><strong>Project Insights</strong>: The thought process behind tools, stacks, and architecture</li>
        <li><strong>Debug Diaries</strong>: Bugs I face and how I resolve them</li>
        <li><strong>Interview Preparation Logs</strong>: What I'm learning for tech interviews</li>
      </ul>
      
      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #8b5cf6, transparent);" />
      
     <h2>Current Focus Areas</h2>
<ul>
  <li>Building and maintaining this blog using React and Tailwind CSS</li>
  <li>Completed frontend (React) now learning Node.js for backend</li>
  <li>Exploring UI/UX to create better user experiences</li>
  <li>Enhancing my portfolio with new projects</li>
</ul>
      
      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #ec4899, transparent);" />
      
      <h2>Looking Ahead</h2>
      <p>Starting tomorrow, I'll be posting regular dev logs and technical write-ups. If you're interested in real-world development, debugging lessons, or simply following a consistent self-taught journey — this blog is for you.</p>
      
      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #f59e0b, transparent);" />
      
      <p style="text-align: center; font-size: 1.2rem; font-weight: bold; background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        Let's build and learn consistently — one log at a time.
      </p>
      
      <p style="text-align: center; margin-top: 1rem; font-style: italic; color: #10b981;">
        — Shashwat
      </p>
    `,
    author: "Shashwat",
    date: "2025-06-29",
    readTime: "4 min read",
    category: "Developer Journey",
    tags: ["Developer Journey", "React Blog", "Learning", "Portfolio"],
    image: "blog.webp",
    featured: true,
  },
  {
    id: "2",
    title:
      "Week 1 of My Full-Stack Internship at CodeBuckets – Starting with React!",
    excerpt:
      "I've just started my internship as a Full-Stack Developer at CodeBuckets and Week 1 was all about diving into React. Here's what I learned, built, and realized.",
    content: `
      <h1>Week 1 of My Full-Stack Internship at CodeBuckets – Starting with React!</h1>

      <h2>Introduction</h2>
      <p>On <strong>July 1st</strong>, I officially began my internship as a <strong>Full-Stack Developer</strong> at <strong><a href="https://codebuckets.in/" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">CodeBuckets</a></strong>. I've been learning by building, breaking things, and figuring them out again — and this blog will document my weekly progress throughout the journey.</p>

      <p>CodeBuckets is a dynamic tech company focused on innovative web solutions, and I'm excited to be part of their development team as I grow my skills in full-stack development.</p>

      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #10b981, transparent);" />

      <h2>About CodeBuckets</h2>
      <p><strong>CodeBuckets</strong> (<a href="https://codebuckets.in/" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">codebuckets.in</a>) is where I'm gaining hands-on experience in modern web development. The company provides an excellent learning environment for aspiring developers like me to work on real-world projects and build practical skills.</p>

      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #10b981, transparent);" />

      <h2>First Week Highlights</h2>
      <ul>
        <li>Set up my local development environment with Vite + React + Tailwind</li>
        <li>Learned about components, props, and hooks (especially useState)</li>
        <li>Built small components from scratch to strengthen my fundamentals</li>
        <li>Explored how JSX works under the hood</li>
        <li>Got familiar with CodeBuckets' development workflow and coding standards</li>
      </ul>

      <h2>What I'm Learning</h2>
      <ul>
        <li>Writing clean, reusable code in React</li>
        <li>Understanding component-driven architecture</li>
        <li>How to break down UI into smaller parts</li>
        <li>Responsive design using Tailwind CSS</li>
        <li>Professional development practices and team collaboration</li>
      </ul>

      <h2>Biggest Realization</h2>
      <p>React is powerful — but it really shines when you understand how components and state work together. Writing small, testable components has been a game-changer for me. Working at CodeBuckets has shown me the importance of writing maintainable code that other developers can easily understand and build upon.</p>

      <h2>Projects I've Built So Far</h2>
      <ul>
        <li><strong>Lyft.com Clone</strong>: A responsive clone of Lyft's landing page built using <strong>React</strong> and <strong>Tailwind CSS</strong>. Focused on reusable components and responsive design.</li>
        <li><strong>Quiz App</strong>: A React-based quiz application that dynamically fetches questions from a local <strong>JSON file</strong>. Helped me understand state management and conditional rendering in React.</li>
      </ul>

      <p>These projects helped me build confidence with React and frontend development before diving into backend technologies. The mentorship at CodeBuckets has been invaluable in guiding my learning process.</p>

      <h2>Next Steps</h2>
      <ul>
        <li>Start learning backend basics with Node.js</li>
        <li>Understand APIs and how frontend talks to backend</li>
        <li>Continue building real projects and documenting progress</li>
        <li>Contribute to CodeBuckets' client projects</li>
        <li>Learn more about full-stack architecture and best practices</li>
      </ul>

      <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #3b82f6, transparent);" />

      <p style="text-align: center; font-size: 1.2rem; font-weight: bold; background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        This is just the beginning. More logs, lessons, and bugs ahead.
      </p>

      <p style="text-align: center; margin-top: 1rem; font-style: italic; color: #10b981;">
        — Shashwat, Full-Stack Developer Intern at CodeBuckets
      </p>
    `,
    author: "Shashwat",
    date: "2025-07-06",
    readTime: "5 min read",
    category: "Internship Logs",
    tags: [
      "React",
      "CodeBuckets",
      "Full-Stack Internship",
      "Learning Journey",
      "Projects",
    ],
    image: "internship.webp",
    featured: false,
  },
  {
  id: "3",
  title: "Week 2 – Node.js, MySQL, and Launching ScriptZen AI",
  excerpt:
    "This week was packed! I explored Node.js, switched to MySQL from MongoDB, revised frontend-backend basics, started a Resume Builder, and launched ScriptZen AI — my first SaaS app built with the PERN stack.",
  content: `
    <h1>Week 2 – Node.js, MySQL, and Launching ScriptZen AI</h1>

    <h2>What I Did This Week</h2>
    <ul>
      <li>Started learning <strong>Node.js</strong> and built a basic server</li>
      <li>Explored <strong>MongoDB</strong> initially but was advised to use <strong>MySQL</strong> for structured data handling</li>
      <li>Learned and practiced CRUD operations with MySQL</li>
      <li>Revised frontend and backend fundamentals — especially API integration</li>
      <li>Started building a Resume Builder project</li>
      <li>Developed and deployed my first SaaS product: <strong>ScriptZen AI</strong></li>
    </ul>

    <h2>About ScriptZen AI</h2>
    <p>
      <a href="https://scriptzen-ai.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: underline;">
        ScriptZen AI
      </a> is a modern SaaS platform that helps users generate scripts using AI. It is built on the powerful <strong>PERN stack</strong>:
    </p>

    <ul>
      <li><strong>PostgreSQL</strong> – Hosted on Neon for scalable, serverless DB</li>
      <li><strong>Express.js</strong> – Backend API routing and logic</li>
      <li><strong>React.js</strong> – Frontend UI</li>
      <li><strong>Node.js</strong> – Core server handling</li>
      <li><strong>Clerk</strong> – Authentication (sign-in, user management)</li>
      <li><strong>Cloudinary</strong> – Media upload and storage</li>
    </ul>

    <h2>Next Steps</h2>
    <ul>
      <li>Finish Resume Builder project</li>
      <li>Improve the UI of ScriptZen AI</li>
      <li>Optimize backend performance</li>
      <li>Start writing technical blogs for ScriptZen</li>
    </ul>

    <hr style="margin: 2rem 0; border: none; height: 1px; background: linear-gradient(90deg, transparent, #3b82f6, transparent);" />

    <p style="text-align: center; font-size: 1.2rem; font-weight: bold; background: linear-gradient(45deg, #10b981, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
      Week by week, I'm building stronger — one line of code at a time.
    </p>

    <p style="text-align: center; margin-top: 1rem; font-style: italic; color: #10b981;">
      — Shashwat
    </p>
  `,
  author: "Shashwat",
  date: "2025-07-13",
  readTime: "6 min read",
  category: "Internship Logs",
  tags: ["Node.js", "MySQL", "PERN Stack", "ScriptZen AI", "SaaS"],
  image: "ScriptZenAI.webp",
  featured: false,
},

];

export default function Blog({
  isDark,
  onNavigateHome,
  onNavigateToPost,
}: BlogProps) {
  const allPosts = blogPosts;

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* 🌌 EXACT Hero Section Background */}
      <div className="absolute inset-0">
        {/* Animated cyber grid - Same as Hero */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>

        {/* Floating space orbs - Same as Hero */}
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-500/8 to-slate-500/8 rounded-full blur-3xl"
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

        {/* Matrix-style falling code effect - Same as Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/15 text-xs font-mono"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10px",
              }}
              animate={{
                y: ["0vh", "110vh"],
              }}
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
      </div>

      <div className="relative z-10">
        {/* 📱 RESPONSIVE Navigation Header */}
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Back Button - Responsive */}
              <motion.button
                onClick={onNavigateHome}
                className="flex items-center gap-1 sm:gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                whileHover={{ x: -3 }}
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium hidden xs:inline">
                  Back to Portfolio
                </span>
                <span className="text-xs sm:text-sm font-medium xs:hidden">
                  Back
                </span>
              </motion.button>

              {/* Center Title - Responsive */}
              <div className="flex items-center gap-1 sm:gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <h1 className="text-sm sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  <span className="hidden sm:inline">Shashwat's Blog</span>
                  <span className="sm:hidden">Blog</span>
                </h1>
              </div>

              {/* Home Button - Responsive */}
              <motion.button
                onClick={onNavigateHome}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium hidden xs:inline">
                  Home
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header - Compact & Responsive */}
          <AnimatedSection className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-300 backdrop-blur-sm">
              <BookOpen className="w-3 h-3" />
              Developer Journey
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              My Blog
            </h2>

            <p className="text-sm max-w-2xl mx-auto leading-relaxed text-gray-300 px-4">
              Documenting my coding journey, sharing insights, and building in
              public
            </p>
          </AnimatedSection>

          {/* All Posts Section */}
          <AnimatedSection className="mb-8 sm:mb-10">
            <div className="grid gap-4 sm:gap-6">
              {allPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group relative cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => onNavigateToPost(post)}
                >
                  {/* 🌊 SUBTLE MOVING BORDER - Matches Background */}
                  <div
                    className="absolute -inset-0.5 rounded-lg opacity-100"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(99,102,241,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.3))",
                      backgroundSize: "400% 400%",
                      animation: "gradient-shift 6s ease infinite",
                    }}
                  />

                  <div className="relative rounded-lg overflow-hidden bg-gray-950/95 backdrop-blur-sm p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Clean Image - No Text Overlay */}
                      <div className="relative w-full sm:w-32 h-24 sm:h-20 overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        {/* Category Badge - Separate from Image */}
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="px-2 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-800/60 text-gray-300 border border-gray-700/50"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1 text-xs font-medium text-gray-400 pt-1">
                          <span>Read Article</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatedSection>

          {/* Coming Soon Section - SUBTLE MOVING BORDER */}
          <AnimatedSection className="mt-6 sm:mt-8" delay={0.3}>
            <div className="text-center px-4 sm:px-0">
              <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4 text-white flex items-center justify-center gap-2">
                <div className="w-1 h-3 sm:h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                More Coming Soon
                <div className="w-1 h-3 sm:h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              </h3>

              <div className="group relative rounded-lg overflow-hidden max-w-xs mx-auto">
                {/* 🌊 SUBTLE MOVING BORDER - Matches Background */}
                <div
                  className="absolute -inset-0.5 rounded-lg opacity-100"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(99,102,241,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.3))",
                    backgroundSize: "400% 400%",
                    animation: "gradient-shift 6s ease infinite",
                  }}
                />

                <div className="relative px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-950/95 rounded-lg backdrop-blur-sm text-center">
                  <p className="text-xs text-gray-300 mb-1">
                    Daily dev logs coming soon!
                  </p>
                  <p className="text-xs text-gray-400">
                    Follow my coding journey
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
