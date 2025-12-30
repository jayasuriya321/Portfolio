import { motion } from "framer-motion";

/* Animation Variants */
const cardLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
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
      desc: `Managed loan recovery operations and customer follow-ups.
Negotiated repayment plans while maintaining professional relationships.
Ensured timely collection and accurate reporting.`,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      className="bg-[#101010] py-20"
      id="experience"
    >
      <div className="max-w-[1800px] mx-auto px-4">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          className="
            text-center
            text-6xl md:text-7xl lg:text-9xl
            text-white font-bold uppercase
            mb-16 font-display tracking-tighter
          "
        >
          Experience
        </motion.h3>

        {/* Experience Cards */}
        <div className="flex flex-col gap-20 relative">
          {items.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                variants={isLeft ? cardLeft : cardRight}
                className={`flex flex-col md:flex-row items-center w-full
                  ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`p-6 text-white w-full 
                    ${isLeft ? "text-left" : "text-right"}`}
                >
                  <h4 className="text-xl sm:text-2xl lg:text-6xl font-display font-semibold uppercase">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-xl font-body font-thin">
                    {item.org}
                  </p>

                  <p className="mt-10 text-lg leading-relaxed uppercase mr-auto ml-auto max-w-8xl font-body font-light whitespace-pre-line">
                    {item.desc}
                  </p>

                  <span className="text-md font-body text-gray-500 mt-6 block">
                    {item.period}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
