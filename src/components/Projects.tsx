import { cn } from '@/lib/utils';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Badge } from '@radix-ui/themes';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tech: string[];
  image: string;
  isDark: boolean;
  index: number;
}

export default function ProjectCard({ title, description, href, tech, image, isDark, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative w-full h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {/* Shine Border */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] shadow-md shadow-white/[0.05]">
        <div className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden">
          <div className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-br from-white/5 to-white/0.5" />
          <div className="absolute -inset-[300%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffff_0%,#8a2be2_50%,#00ffff_100%)]" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col h-full rounded-2xl bg-black/80 backdrop-blur-xl text-white overflow-hidden">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={`/projects/${image}`}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top w-full h-full group-hover:scale-[1.01] transition duration-300 ease-out"
            />
            <div className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 transition p-1.5 rounded-full text-white">
              <a href={href} target="_blank" rel="noopener noreferrer">
                <GlobeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <div className="font-bold text-base truncate text-white/90" title={title}>{title}</div>
            <div className="text-sm text-white/70 line-clamp-3 font-mono leading-relaxed">
              {description}
            </div>

            <div className="flex flex-wrap gap-2 mt-2 overflow-x-auto max-w-full scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {tech.map((item, i) => (
                <Badge key={i} color="gray" variant="soft" className="rounded-full whitespace-nowrap text-xs px-2 py-1 bg-white/10">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}