import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

/* Variants */
const section = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Footer() {
  return (
    <>
      <motion.footer
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="bg-white text-black"
        id="footer"
      >
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 pt-12 sm:pt-14">

          {/* Top Row */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-right font-display"
          >
            <motion.p
              variants={item}
              className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-6xl"
            >
              +91 86085 94627
            </motion.p>

            <motion.p
              variants={item}
              className="break-all font-semibold text-lg sm:text-2xl md:text-3xl lg:text-6xl"
            >
              jayasuriya0321@gmail.com
            </motion.p>

            {/* Socials */}
            <motion.div
              variants={stagger}
              className="
                flex flex-wrap justify-end gap-x-6 gap-y-2
                text-lg sm:text-xl md:text-3xl lg:text-4xl
                uppercase tracking-wide mt-6 sm:mt-8
              "
            >
              {["LinkedIN", "Github", "Medium"].map((name) => (
                <motion.a
                  key={name}
                  variants={item}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group inline-flex items-center gap-2
                    border-b-2 border-current
                    transition hover:opacity-60
                  "
                >
                  {name}
                  <span
                    className="
                      inline-block rotate-[10deg]
                      transition-transform duration-300 ease-out
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  >
                    <HiOutlineArrowUpRight />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle Row */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 mt-12 sm:mt-16"
          >
            {/* Navigation */}
            <motion.div
              variants={stagger}
              className="
                flex flex-col space-y-4 sm:space-y-6
                uppercase font-display font-semibold
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                tracking-wide
              "
            >
              {["About Me", "Experience", "Projects"].map((itemName) => (
                <motion.a
                  key={itemName}
                  variants={item}
                  href="#"
                  className="hover:opacity-60"
                >
                  {itemName}
                </motion.a>
              ))}
            </motion.div>

            {/* Address */}
            <motion.div
              variants={item}
              className="flex flex-col md:items-end"
            >
              <p
                className="
                  font-body text-xs sm:text-sm md:text-base lg:text-lg
                  text-gray-500 leading-relaxed
                "
              >
                Address:<br />
                1/2 Rice Mill Road, Kuniamuthur<br />
                Coimbatore, India
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Huge Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 overflow-hidden"
          >
            <h1
              className="
                font-body font-semibold leading-none
                tracking-tighter
                text-[18vw]
                sm:text-[14vw]
                md:text-[12vw]
                lg:text-[10vw]
                xl:text-[16.2vw]
              "
            >
              JAYASURIYA
            </h1>
          </motion.div>
        </div>
      </motion.footer>

      {/* Bottom Blur */}
      <div
        className="
          fixed inset-x-0 bottom-0 h-[160px] sm:h-[200px]
          backdrop-blur-xl pointer-events-none
          z-[199]
        "
        style={{
          maskImage: "linear-gradient(rgba(0,0,0,0) 0%, black 100%)",
          WebkitMaskImage: "linear-gradient(rgba(0,0,0,0) 0%, black 100%)",
        }}
      />
    </>
  );
}
