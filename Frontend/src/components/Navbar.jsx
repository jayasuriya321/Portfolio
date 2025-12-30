import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineArrowUpRight,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2";
import { useState } from "react";

/* Variants */
const headerVariant = {
  hidden: { y: -30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, y: -6 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const mobileMenu = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.25 },
  },
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      variants={headerVariant}
      initial="hidden"
      animate="show"
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-md
        m-4 md:m-6
        bg-[#f7f7f797]
        rounded-2xl
      "
    >
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-head font-extrabold text-3xl uppercase"
          >
            JayaSuriya
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={navContainer}
            initial="hidden"
            animate="show"
            className="hidden md:flex gap-8 font-display text-xl font-semibold uppercase text-black"
          >
            {["Skills", "Experience", "Projects", "Connect"].map((item) => (
              <motion.a
                key={item}
                variants={navItem}
                href={`#${item.toLowerCase()}`}
                className="hover:opacity-70 transition"
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center"
          >
            <a
              href="#footer"
              className="
                group inline-flex items-center gap-2
                font-display text-2xl font-semibold uppercase
                border-b-2 border-black
              "
            >
              Contact Me
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
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
            aria-label="Open menu"
          >
            <HiOutlineBars3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="show"
            exit="exit"
            className="
              md:hidden absolute inset-x-0 top-full
              bg-[#f7f7f797]
              backdrop-blur-md
              rounded-2xl
              mx-4 mt-3 p-6
              shadow-lg
            "
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-3xl"
              aria-label="Close menu"
            >
              <HiOutlineXMark />
            </button>

            <motion.nav
              variants={navContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6 font-display text-2xl font-semibold uppercase"
            >
              {["Skills", "Experience", "Projects", "Connect"].map((item) => (
                <motion.a
                  key={item}
                  variants={navItem}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="
                    group inline-flex items-center gap-2
                    border-b-2 border-black
                  "
                >
                  {item}
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
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
