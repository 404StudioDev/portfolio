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
      className="group relative w-full sm:w-[48%] xl:w-[32%] transition-transform duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1.5"
    >
      {/* 🌀 Animated Tricolor Frame */}
      <div className="relative rounded-xl overflow-hidden before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-xl before:p-[1px] before:will-change-[background-position] before:content-[''] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:[background-image:radial-gradient(transparent,transparent,#FF9933,#FFFFFF,#138808,transparent,transparent)] before:[background-size:300%_300%] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] motion-safe:before:animate-shine">
        
        {/* 🧱 Card Container */}
        <div className="relative rounded-xl bg-black p-3 h-full min-h-[310px] flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.01] z-10">

          {/* 📸 Image */}
          <div className="relative overflow-hidden rounded-md mb-2 h-[90px]">
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
          <div className="mb-2">
            <h3 className="text-sm font-semibold text-white line-clamp-1">
              {title}
            </h3>
            <p className="text-xs text-gray-400 line-clamp-2">{description}</p>
          </div>

          {/* 🛠️ Tech Tags */}
          <div className="flex flex-wrap gap-[6px] mt-1">
            {tech.slice(0, 4).map((item, i) => (
              <span
                key={i}
                className="px-2 py-[2px] text-[10px] rounded bg-gray-800/60 border border-gray-700/50 text-gray-300"
              >
                {item}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2 py-[2px] text-[10px] rounded bg-gray-800/60 border border-gray-700/50 text-gray-400">
                +{tech.length - 4}
              </span>
            )}
          </div>

          {/* 🔗 Full Clickable Link Overlay */}
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
