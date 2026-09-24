"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Data",
    skills: ["Python", "AI / LLMs", "Prompt Engineering", "NumPy", "Pandas"],
  },
  {
    title: "Development",
    skills: ["JavaScript", "React", "React Native", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Python", "REST APIs", "API Integration"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "ChatGPT", "Gemini", "Claude", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-25"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technologies I
            <br />
            <span className="text-gray-500">
              work with.
            </span>
          </h2>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-gray-400 transition hover:border-purple-400/30 hover:text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}