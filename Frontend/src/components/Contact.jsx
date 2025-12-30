import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useState } from "react";
import working from "../assets/images/working.svg";

/* Animation Variants */
const sectionVariant = {
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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const field = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", phone: "", email: "", message: "" });
      }
    } catch {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <motion.section
      id="connect"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-24 bg-[#101010] text-white px-4 sm:px-6"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        className="font-display text-5xl sm:text-6xl md:text-8xl font-bold uppercase text-center mb-16"
      >
        Let&apos;s Connect
      </motion.h1>

      {/* Content Wrapper */}
      <div className="max-w-[1800px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT: Form */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <motion.input
              variants={field}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name*"
              required
              className="w-full border-b border-[#b7b7b77c] bg-transparent py-2 uppercase focus:outline-none text-lg text-white"
            />

            <motion.input
              variants={field}
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              className="w-full border-b border-[#b7b7b77c] bg-transparent py-2 uppercase focus:outline-none text-lg text-white"
            />

            <motion.input
              variants={field}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full border-b border-[#b7b7b77c] bg-transparent py-2 uppercase focus:outline-none text-lg text-white"
            />

            <motion.textarea
              variants={field}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full h-28 border-b border-[#b7b7b77c] bg-transparent py-2 uppercase resize-none focus:outline-none text-lg text-white"
            />

            {/* Submit */}
            <motion.div variants={field} className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`
                  group inline-flex items-center gap-3
                  text-2xl sm:text-3xl font-display font-semibold uppercase
                  border-b-2 border-white text-white
                  transition
                  ${loading ? "opacity-60 cursor-not-allowed" : ""}
                `}
              >
                Discuss the Project

                <span
                  className={`
                    inline-block
                    transition-transform duration-300 ease-out
                    ${loading
                      ? "animate-spin-slow"
                      : "group-hover:translate-x-1 group-hover:-translate-y-1"}
                  `}
                >
                  <HiOutlineArrowUpRight />
                </span>
              </button>
            </motion.div>

            {success && (
              <motion.p
                variants={field}
                className="font-display text-green-500 uppercase pt-4"
              >
                Message sent successfully 🚀
              </motion.p>
            )}
          </motion.form>
        </motion.div>

        {/* RIGHT: Illustration */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={working}
            alt="Contact illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
