import { motion } from "framer-motion";

/* Animation Variants */
const row = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const divider = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      services: "WordPress, WooCommerce, PHP, HTML, CSS",
      year: "2025",
    },
    {
      title: "Business & Corporate Websites",
      services: "WordPress, Elementor, HTML, CSS",
      year: "2025",
    },
    {
      title: "Income Expense Tracker",
      services: "React, Node.js, Express, MongoDB, TailwindCSS",
      year: "2025",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      className="text-black px-4 sm:px-8 md:px-12 lg:px-24 py-20 sm:py-24 lg:py-32"
      id="projects"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="
          font-display font-bold uppercase tracking-tight text-center
          text-4xl sm:text-5xl md:text-6xl lg:text-9xl"
      >
        Projects
      </motion.h3>

      <div className="mt-14 sm:mt-16 lg:mt-20">
        {/* Desktop Header */}
        <div
          className="
            hidden md:grid grid-cols-3
            font-display uppercase tracking-wide text-gray-500
            text-sm md:text-base lg:text-xl
            mb-6
          "
        >
          <span>Client</span>
          <span className="text-center">Services</span>
          <span className="text-right">Year</span>
        </div>

        <hr className="border-gray-200 mb-10 md:mb-16" />

        {/* Project Rows */}
        <div className="space-y-14 sm:space-y-16 lg:space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={row}
            >
              {/* Row */}
              <div
                className="
                  grid grid-cols-1 md:grid-cols-3
                  gap-6 md:gap-8
                "
              >
                {/* Client */}
                <div>
                  <p className="md:hidden text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Client
                  </p>
                  <h2
                    className="
                      font-display font-extrabold uppercase tracking-tight
                      text-3xl sm:text-3xl md:text-4xl lg:text-4xl
                    "
                  >
                    {project.title}
                  </h2>
                </div>

                {/* Services */}
                <div className="md:text-center">
                  <p className="md:hidden text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Services
                  </p>
                  <p
                    className="
                      text-sm sm:text-base
                      font-body font-light
                      leading-relaxed
                    "
                  >
                    {project.services}
                  </p>
                </div>

                {/* Year */}
                <div className="md:text-right">
                  <p className="md:hidden text-xs uppercase tracking-wide text-gray-500 mb-2">
                    Year
                  </p>
                  <span
                    className="
                      text-sm sm:text-base
                      font-body font-light
                    "
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <motion.hr
                variants={divider}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-10 sm:mt-12 border-gray-200 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
