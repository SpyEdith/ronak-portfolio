"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2027",
    title: "MSc Information Technology",
    organization: "Gujarat University — CPC Department, Ahmedabad",
    description:
      "Currently pursuing MSc IT with a focus on strengthening software development and AI-related skills.",
  },
  {
    year: "2025",
    title: "BSc Information Technology",
    organization: "Completed",
    description:
      "Completed undergraduate studies in Information Technology.",
  },
];

const certifications = [
  {
    title: "Python with AI",
    organization: "Certificate",
  },
  {
    title: "AI Foundations",
    organization: "OpenAI Academy — Module 1",
  },
];

const achievements = [
  {
    title: "Second Runner-Up",
    description: "100 Meter Run",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-6 py-25"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Education,
            <br />
            <span className="text-gray-500">
              learning & achievements.
            </span>
          </h2>
        </motion.div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-xl font-semibold text-white"
          >
            Education
          </motion.h3>

          <div className="space-y-5">
            {education.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30 md:grid-cols-[100px_1fr] md:p-8"
              >
                <div className="text-sm font-semibold text-purple-400">
                  {item.year}
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    {item.organization}
                  </p>

                  <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications + Achievements */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((certificate, index) => (
                <motion.div
                  key={certificate.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30"
                >
                  <h4 className="font-semibold text-white">
                    {certificate.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-500">
                    {certificate.organization}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              Achievements
            </h3>

            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-400/30"
              >
                <p className="text-2xl">🏃</p>

                <h4 className="mt-4 font-semibold text-white">
                  {achievement.title}
                </h4>

                <p className="mt-2 text-sm text-gray-500">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}