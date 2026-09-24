"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Mail,
  Users,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Let's build
            <br />
            <span className="text-gray-500">
              something useful.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I'm open to opportunities, internships, collaborations,
            and interesting projects involving AI and software
            development.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">

          {/* Email */}
          <motion.a
            href="mailto:tanejaronak6@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.05]"
          >
            <Mail
              size={22}
              className="text-gray-400 transition group-hover:text-purple-300"
            />

            <p className="mt-5 text-sm text-gray-500">
              Email
            </p>

            <p className="mt-2 flex items-center gap-2 font-medium text-white transition group-hover:text-purple-300">
              Let's connect
              <ArrowUpRight size={16} />
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/SpyEdith"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.05]"
          >
            <Code2
              size={22}
              className="text-gray-400 transition group-hover:text-purple-300"
            />

            <p className="mt-5 text-sm text-gray-500">
              GitHub
            </p>

            <p className="mt-2 flex items-center gap-2 font-medium text-white transition group-hover:text-purple-300">
              View my code
              <ArrowUpRight size={16} />
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/ronak-taneja-963a95350"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.05]"
          >
            <Users
              size={22}
              className="text-gray-400 transition group-hover:text-purple-300"
            />

            <p className="mt-5 text-sm text-gray-500">
              LinkedIn
            </p>

            <p className="mt-2 flex items-center gap-2 font-medium text-white transition group-hover:text-purple-300">
              Connect with me
              <ArrowUpRight size={16} />
            </p>
          </motion.a>

        </div>
      </div>
    </section>
  );
}