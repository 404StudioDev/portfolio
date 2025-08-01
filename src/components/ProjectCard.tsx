'use client'

import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  href: string
  tech: string[]
  image: string
  index: number
  isDark: boolean
}

export default function ProjectCard({
  title,
  description,
  href,
  tech,
  image,
  index,
  isDark,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
      className="group relative w-full h-[310px] rounded-xl bg-transparent flex overflow-hidden"
    >
      {/* Shine Border */}
      <div
        style={{
          "--border-width": "1px",
          "--border-radius": "10px",
          "--duration": "14s",
          "--mask-linear-gradient":
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "--background-radial-gradient":
            "radial-gradient(transparent,transparent,#FF9933,#FFFFFF,#138808,transparent)",
        } as React.CSSProperties}
        className="before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine w-full h-full z-10"
      >
        <div className="h-full w-full rounded-xl bg-white dark:bg-[#0a0a0a] p-4 flex flex-col justify-between shadow-md dark:shadow-lg text-black dark:text-white">
          {/* Image */}
          <div className="h-[90px] relative overflow-hidden rounded-md">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-2 right-2 z-10 p-1 rounded bg-gray-900/80 border border-gray-700/50">
              <ExternalLink className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="mt-2">
            <h3 className="text-sm font-bold truncate">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="flex gap-1 mt-2 flex-wrap">
            {tech.slice(0, 4).map((item, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-[2px] rounded border text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              >
                {item}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="text-[10px] px-2 py-[2px] rounded border text-gray-400 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                +{tech.length - 4}
              </span>
            )}
          </div>

          {/* Clickable overlay */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="absolute inset-0 z-30"
          ></a>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-80"
        style={{
          background: `radial-gradient(200px at -200px -200px, ${
            isDark ? "rgb(38,38,38)" : "rgba(0,0,0,0.04)"
          }, transparent 100%)`,
        }}
      />
    </motion.div>
  )
}