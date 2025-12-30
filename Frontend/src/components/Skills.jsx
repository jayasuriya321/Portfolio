import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiWoocommerce,
} from "react-icons/si";

/* Animation Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Skills() {
  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#616161" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
    { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#616161" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="py-20 md:py-28 lg:py-32"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="
          section-title font-display font-bold uppercase
          text-black tracking-tighter text-center
          text-5xl sm:text-6xl md:text-7xl lg:text-9xl
          mb-12 md:mb-16
        "
      >
        Skills
      </motion.h3>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          flex flex-wrap justify-center
          gap-x-6 sm:gap-x-10 lg:gap-x-12
          gap-y-12 sm:gap-y-16 lg:gap-y-20
          max-w-[1600px] mx-auto px-4 pb-25
        "
      >
        {skills.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            variants={item}
            className="group relative flex flex-col items-center px-4 sm:px-6 py-4"
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0 rounded-full
                opacity-0 blur-2xl
                transition-opacity duration-300
                group-hover:opacity-40
              "
              style={{ backgroundColor: color }}
            />

            {/* Icon */}
            <Icon
              className="
                relative z-10 mb-3 sm:mb-4
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                filter grayscale
                transition-all duration-300
                group-hover:grayscale-0
                group-hover:scale-110
              "
              style={{ color }}
            />

            {/* Label */}
            <span
              className="
                text-xs sm:text-sm
                font-light font-body
                text-gray-500
                transition-colors duration-300
                group-hover:text-white
              "
            >
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
