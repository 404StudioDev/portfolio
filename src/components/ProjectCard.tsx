import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech: string[];
  image: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  href,
  tech,
  image,
  index,
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
      className="group relative w-[68%] h-fit max-lg:w-[45%] max-sm:w-full flex justify-center max-lg:justify-start cursor-pointer mt-5 rounded-lg dark:shadow-2xl"
    >
      <div
        style={{
          "--border-width": "1px",
          "--border-radius": "10px",
          "--duration": "14s",
          "--mask-linear-gradient":
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "--background-radial-gradient":
            "radial-gradient(transparent,transparent,#FF9933,#FFFFFF,#138808,transparent,transparent)",
        } as React.CSSProperties}
        className="relative z-10 w-full h-full before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine bg-transparent flex items-center max-lg:flex-col max-lg:items-start pl-2 pr-5 py-5 md:shadow-xl space-x-4"
      >
        {/* Image */}
        <div className="w-[5vw] max-[1285px]:w-[13vw]">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="project"
              width={55}
              height={55}
              className="rounded-full border border-black max-lg:h-10 max-lg:w-10"
            />
          </a>
        </div>

        {/* Text */}
        <div>
          <div className="max-lg:mt-3">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <h1 className="text-xl max-lg:text-lg text-black dark:text-white font-bold tracking-tight">
                {title}
              </h1>
            </a>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>

          {/* Tech */}
          <div className="flex gap-1 mt-3 flex-wrap">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-[2px] rounded border text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="mt-3 flex gap-2">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] py-[3px] px-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
            >
              <ExternalLink className="inline-block w-[11px] h-[11px] mr-[2px]" />
              Visit
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
