import { motion } from "framer-motion";

/* Animation Variants */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function About() {
  return (
    <>
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="
          section-title
          text-5xl sm:text-7xl md:text-8xl lg:text-9xl
          font-display font-extrabold mt-10
          uppercase text-center text-[#101010] tracking-tighter
        "
      >
        About Me
      </motion.h3>

      {/* Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="bg-[#101010] mb-0 mt-10"
      >
        <div id="about" className="py-16 md:py-30">
          <div
            className="
              flex flex-col lg:flex-row
              justify-between gap-12 lg:gap-14
              items-center
              px-4 max-w-[1800px] m-auto
            "
          >
            {/* Left Content */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 max-w-[900px] mr-auto"
            >
              <motion.p
                variants={item}
                className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-body font-thin"
              >
                I’m a{" "}
                <span className="text-white font-semibold">
                  Front-End Developer
                </span>{" "}
                with over{" "}
                <span className="text-white font-semibold">
                  3+ years of experience
                </span>{" "}
                building high-performance, visually refined, and user-focused
                web applications.
              </motion.p>

              <motion.p
                variants={item}
                className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-body font-thin"
              >
                My core expertise lies in{" "}
                <span className="text-white font-medium">
                  JavaScript, React, TailwindCSS
                </span>{" "}
                and REST API integrations. I also work confidently with{" "}
                <span className="text-white font-medium">MERN stack</span> and{" "}
                <span className="text-white font-medium">
                  WordPress / WooCommerce
                </span>
                .
              </motion.p>

              <motion.p
                variants={item}
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-body font-thin"
              >
                I enjoy turning complex requirements into elegant interfaces,
                optimizing performance, and collaborating with teams that value
                clean code and thoughtful design.
              </motion.p>
            </motion.div>

            {/* Moving Text Strip */}
            <div
              className="
                relative
                h-[220px] sm:h-[280px] md:h-[320px] lg:h-[350px]
                overflow-hidden
              "
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, white 20%, white 80%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, white 20%, white 80%, rgba(0,0,0,0) 100%)",
              }}
            >
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ willChange: "transform" }}
              >
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="
                      flex flex-col items-center gap-2
                      text-4xl sm:text-6xl md:text-8xl lg:text-9xl
                      font-display font-extrabold
                      uppercase tracking-tight
                      text-white/90
                      transition-transform duration-500 hover:scale-[1.02]
                    "
                  >
                    <span>Design</span>
                    <span>Development</span>
                    <span>Frontend</span>
                    <span>Experience</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="border-[#b7b7b77c] max-w-[1800px] m-auto origin-left"
        />
      </motion.section>
    </>
  );
}
