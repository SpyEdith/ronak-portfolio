"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/10 px-6 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Ronak Taneja. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/SpyEdith"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/ronak-taneja-963a95350"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#home"
            className="transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </motion.footer>
  );
}