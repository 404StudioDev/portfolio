import { MagicCard } from './ui/magic-card';
import ShineBorder from './ui/shine-border';
import { bricolage_grotesque, inter } from '@/utils/fonts';
import { Badge, Link } from '@radix-ui/themes';
import Image from 'next/image';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import { Project } from '@/types/project';
import { useDarkMode } from '@/hooks/useDarkMode';
import { motion } from 'framer-motion';

const MaxProjectCard = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      {data.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.035 }}
          transition={{
            duration: 0.4,
            delay: idx * 0.08,
            ease: [0.4, 0, 0.2, 1],
          }}
          viewport={{ once: true }}
          className="group relative w-[68%] max-lg:w-[45%] max-sm:w-full rounded-lg cursor-pointer flex justify-center max-lg:justify-start mt-5 dark:shadow-2xl"
        >
          <div
            style={{
              '--border-width': '1px',
              '--border-radius': '8px',
              '--duration': '14s',
              '--mask-linear-gradient':
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              '--background-radial-gradient':
                'radial-gradient(transparent,transparent,#FF9933,#FFFFFF,#138808,transparent,transparent)',
            } as React.CSSProperties}
            className="before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine relative z-10 w-full"
          >
            <div className="w-full rounded-lg bg-white dark:bg-black p-4 flex flex-col sm:flex-row sm:items-start gap-4 text-black dark:text-white">
              <div className="w-[5vw] max-[1285px]:w-[13vw]">
                <Link href={project.link} target="_blank">
                  <Image
                    src={project.logo}
                    alt="company-logo"
                    width={55}
                    height={55}
                    className="rounded-full border border-black max-lg:h-10 max-lg:w-10"
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href={project.link ? project.link : project.source}
                  target="_blank"
                  underline="none"
                >
                  <h1
                    className={`text-xl max-lg:text-lg text-black dark:text-white font-bold tracking-tight text-start ${bricolage_grotesque}`}
                  >
                    {project.title}
                  </h1>
                </Link>
                <p className={`mt-1 text-sm dark:text-[#D1D5DB] ${inter}`}>
                  {project.description}
                </p>

                <div className="flex gap-1 mt-3 flex-wrap">
                  {project.techStack?.map((tech, idx) => (
                    <Badge
                      key={idx}
                      color="gray"
                      variant="outline"
                      highContrast
                      className={`text-[10px] dark:hover:!bg-white hover:!bg-black hover:!text-white dark:hover:!text-black ${bricolage_grotesque}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex gap-1">
                  {project.link && (
                    <Link href={project.link} target="_blank">
                      <Badge
                        color="gray"
                        variant="solid"
                        highContrast
                        className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}
                      >
                        <GlobeIcon width={11} height={11} /> Website
                      </Badge>
                    </Link>
                  )}
                  <Link href={project.source} target="_blank">
                    <Badge
                      color="gray"
                      variant="solid"
                      highContrast
                      className={`text-[10px] py-[3px] dark:hover:bg-gray-300 ${bricolage_grotesque}`}
                    >
                      <GitHubLogoIcon width={11} height={11} /> Source
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-80"
            style={{
              background:
                'radial-gradient(200px at -200px -200px, rgb(38, 38, 38), transparent 100%)',
            }}
          />
        </motion.div>
      ))}
    </>
  );
};

export default MaxProjectCard;

const data: Project[] = [
  {
    logo: '/portfolio-logo.jpg',
    title: 'Portfolio',
    description:
      'A portfolio crafted and developed by me, showcasing my skills, projects, and passion for web development in a sleek, user-friendly design.',
    techStack: [
      'NextJS',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
      'TipTap Editor',
      'Resend',
      'Cloudinary',
      'Zod',
      'framer-motion',
      'Radix UI',
      'Magic UI',
      'Tailwind CSS',
    ],
    link: 'https://fardeenmansoori.vercel.app/',
    source: 'https://github.com/Fardeen26/portfolio',
  },
];
