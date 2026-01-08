import { motion } from "framer-motion";

/* Animation Variants */
const cardLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Experience() {
  const items = [
    {
      title: "Front-End Developer",
      org: "Media Twelve",
      period: "2024 – Present",
      desc: `Developed modern, responsive web interfaces using React and Tailwind CSS.
Implemented smooth animations and reusable UI components.
Optimized performance, accessibility, and SEO across projects.`,
    },
    {
      title: "Front-End Developer",
      org: "Cleverso Software Solutions",
      period: "2022 – 2024",
      desc: `Built responsive websites and dashboards with clean UI/UX.
Collaborated with designers and backend teams for seamless integration.
Improved page load speed and cross-browser compatibility.`,
    },
    {
      title: "Branch Executive",
      org: "Kosamattam Finance",
      period: "2021 – 2022",
      desc: `Handled customer onboarding and loan documentation processes.
Maintained accurate financial records and ensured policy compliance.
Provided customer support and resolved service-related issues.`,
    },
    {
      title: "Loan Recovery Agent",
      org: "Star Associates",
      period: "2020 – 2021",
     desc: `Managed loan recovery operations. Followed up with customers. Negotiated repayment plans. Ensured timely collection and reporting.`
    },
  ];

  return (
    <section className="bg-red-500 py-20" id="experience">

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="text-center text-6xl md:text-7xl lg:text-9xl text-white font-bold uppercase mb-20 font-display"
      >
        Experience
      </motion.h3>

      {/* Experiences */}
      {items.map((item, idx) => {
        const isLeft = idx % 2 === 0;

        return (
          <section
            key={idx}
            className="max-w-[1800px] mx-auto px-4 mb-24"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={isLeft ? cardLeft : cardRight}
              className={`flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`text-white text-justify max-w-[580px] ${
                  isLeft ? "text-left" : "text-right"
                }`}
              >
                <h4 className="text-xl sm:text-2xl lg:text-6xl font-display font-semibold uppercase">
                  {item.title}
                </h4>

                <p className="mt-2 text-xl font-body font-medium uppercase">
                  {item.org}
                </p>

                <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed capitalize font-body font-light">
                  {item.desc}
                </p>

                <span className="mt-6 block text-lg font-display opacity-70">
                  {item.period}
                </span>
              </div>
            </motion.div>
          </section>
        );
      })}
    </section>
  );
}
