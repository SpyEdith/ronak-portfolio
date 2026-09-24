"use client";

import {
  ArrowRight,
  Code2,
  Mail,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] items-center overflow-hidden px-6 pb-16 pt-32"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small heading */}
          <div className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            <Sparkles size={16} />
            Aspiring Developer · AI Explorer
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Ronak Taneja<span className="text-purple-400">.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I'm learning, experimenting, and building practical
            applications with AI and modern technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
            >
              Explore Projects

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Ronak_Taneja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/SpyEdith"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 text-gray-400 transition hover:text-white"
            >
              <Code2 size={20} />
              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/ronak-taneja-963a95350"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 text-gray-400 transition hover:text-white"
            >
              <Users size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="mailto:tanejaronak6@gmail.com"
              aria-label="Email"
              className="flex items-center gap-2 text-gray-400 transition hover:text-white"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT AI VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden justify-center md:flex"
        >
          <div className="relative h-80 w-80">

            {/* Outer rotating ring */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-purple-400/20" />

            {/* Middle ring */}
            <div className="absolute inset-8 rounded-full border border-purple-400/20" />

            {/* Inner ring */}
            <div className="absolute inset-16 rounded-full border border-blue-400/20" />

            {/* Center AI card */}
            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-purple-400/30 bg-white/5 shadow-2xl shadow-purple-500/20 backdrop-blur-md">
              <div className="text-center">
                <Sparkles
                  size={28}
                  className="mx-auto text-purple-300"
                />

                <p className="mt-2 text-sm font-semibold tracking-wider text-white">
                  AI
                </p>
              </div>
            </div>

            {/* Floating nodes */}
            <div className="absolute left-3 top-1/2 h-3 w-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400" />

            <div className="absolute right-5 top-1/4 h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400" />

            <div className="absolute bottom-7 left-1/3 h-3 w-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400" />

            <div className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-blue-300 shadow-lg shadow-blue-300" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}