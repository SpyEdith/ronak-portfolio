"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-25"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Turning ideas into
            <br />
            <span className="text-gray-500">
              practical applications.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              I'm Ronak Taneja, an MSc IT student interested in
              artificial intelligence, software development, and
              modern AI tools.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I enjoy turning ideas into practical applications
              and exploring how AI can be used to solve real-world
              problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My current focus is strengthening my development
              skills while building projects that combine AI,
              software, and useful user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                MSc IT
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Gujarat University
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                4+
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Projects Built
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                AI
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Current Focus
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-bold text-white">
                Python
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Core Language
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}