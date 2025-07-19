import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech: string[];
  image: string;
  isDark: boolean;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  href,
  tech,
  image,
  isDark,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true, margin: "-30px" }}
      className="group relative transition-transform duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1.5"
    >
      {/* 🌀 Outer Border Animation */}
      <div className="p-[1.5px] rounded-xl animate-gradient-x bg-gradient-to- from-green-400 via-cyan-500 to-violet-500 bg-[length:300%_300%] shadow-[0_0_18px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(137,207,240,0.25)] transition-shadow duration-500">
        
        {/* 🧱 Inner Card */}
        <div className="rounded-xl bg-black p-3 h-full min-h-[250px] flex flex-col justify-between relative transform transition-transform duration-300 group-hover:scale-[1.01]">
          
          {/* 📸 Image */}
          <div className="relative overflow-hidden rounded-md mb-1 h-[90px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center rounded"
              style={{ imageRendering: "auto" }}
            />
            <div className="absolute top-2 right-2 z-20">
              <div className="p-1 rounded bg-gray-900/80 border border-gray-700/50">
                <ExternalLink className="w-3 h-3 text-gray-300" />
              </div>
            </div>
          </div>

          {/* 🔤 Title + Description */}
          <div className="mb-1">
            <h3 className="text-sm font-semibold text-white line-clamp-1">
              {title}
            </h3>
            <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
          </div>

          {/* 🛠️ Tech Tags */}
          <div className="flex flex-wrap gap-1 mt-1">
            {tech.slice(0, 4).map((item, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] rounded bg-gray-800/60 border border-gray-700/50 text-gray-300"
              >
                {item}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] rounded bg-gray-800/60 border border-gray-700/50 text-gray-400">
                +{tech.length - 4}
              </span>
            )}
          </div>

          {/* 🔗 Full Click Overlay */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-30"
            aria-label={`View ${title} project`}
          />
        </div>
      </div>
    </motion.div>
  );
}
