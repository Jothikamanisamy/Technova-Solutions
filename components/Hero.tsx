"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper dark:bg-base"
    >
      <div className="absolute inset-0 bg-nova-burst opacity-70 dark:opacity-100" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-content flex-col gap-6 px-6 py-28 md:py-36"
      >
        <motion.span
          variants={item}
          className="text-sm font-medium text-nova-violet dark:text-nova-orange"
        >
          TechNova Solutions
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-2xl text-4xl font-semibold leading-tight text-inkLight md:text-6xl dark:text-ink"
        >
          Empowering Businesses Through Technology
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-xl text-base text-inkLight-muted md:text-lg dark:text-ink-muted"
        >
          We help organizations build scalable digital products and
          innovative technology solutions, from first prototype to
          production at scale.
        </motion.p>

        <motion.div variants={item}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-md bg-nova-violet px-6 py-3 text-sm font-medium text-white shadow-lg shadow-nova-violet/20 transition-transform hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
