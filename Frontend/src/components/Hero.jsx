import { motion } from "framer-motion";
import illusimage from "../assets/images/illusimage.png";

/* Variants */
const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 40,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Hero() {
  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="
        max-w-[1800px]
        mx-auto
        px-4 sm:px-6
        py-20 sm:py-28
        text-center
        uppercase
      "
    >
      {/* Image Wrapper */}
      <motion.div
        variants={imageVariant}
        className="relative mx-auto w-fit mt-15"
      >
        {/* Glow Effect */}
        <div
          className="
            absolute inset-0
            rounded-full
            blur-3xl
            opacity-30
            scale-110
            bg-gradient-to-tr
            from-[#cfcfcf]
            via-[#eaeaea]
            to-transparent
          "
        />

        {/* Floating Image */}
        <motion.img
          src={illusimage}
          alt="3D Illustration"
          className="
            relative z-10
            w-full
            max-w-xs sm:max-w-md md:max-w-lg
            lg:max-w-2xl xl:max-w-3xl
            h-auto
          "
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Description */}
      <motion.div
        variants={textVariant}
        className="mt-10 sm:mt-12"
      >
        <h1
          className="
            mx-auto
            max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl
            font-body font-light
            text-sm sm:text-base md:text-lg
            leading-relaxed
            text-[#101010]
          "
        >
          Experienced front-end & UI developer, crafting memorable web
          experiences for brands of all sizes.
        </h1>
      </motion.div>
    </motion.section>
  );
}
