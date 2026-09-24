"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI SearchBot",
    description:
      "An AI-powered web application that answers user questions and provides a conversational search experience.",
    technologies: ["AI", "JavaScript", "OpenRouter", "HTML", "CSS"],
    type: "AI APPLICATION",
    image: "/projects/ai-searchbot.png",
    github: "https://github.com/SpyEdith/searchbot",
    demo: "https://searchbot-beryl.vercel.app/",
  },
  {
    number: "02",
    title: "NutriLife",
    description:
      "A smart diet and food recommendation application designed to help users create personalized diet plans and discover healthy meals.",
    technologies: ["React Native", "Python", "MySQL", "AI"],
    type: "AI / HEALTH APPLICATION",
    image: "/projects/nutrilife.png",
    github: "https://github.com/SpyEdith",
    demo: "https://clean-daily-eats.base44.app/DietPlans",
  },
  {
    number: "03",
    title: "Movie Discovery & Watchlist",
    description:
      "A movie discovery application with search, filtering, movie details, and a personal watchlist.",
    technologies: ["Next.js", "JavaScript", "REST API", "React"],
    type: "WEB APPLICATION",
    image: "/projects/movie-watchlist.png",
    github: "https://github.com/SpyEdith",
    demo: "#",
  },
  {
    number: "04",
    title: "Global Radio System",
    description:
      "A global radio system project designed to provide access to radio content from different locations.",
    technologies: ["Web Development", "JavaScript"],
    type: "WEB APPLICATION",
    image: "/projects/global-radio.png",
    github: "https://github.com/SpyEdith",
    demo: "https://global-groove-radio-5de577a9.base44.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Things I've
            <br />
            <span className="text-gray-500">
              built.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of applications and projects I've worked on
            while exploring AI, software development, and modern
            technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.05]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden border-b border-white/10 bg-black">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] md:h-80"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Project Number */}
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-md">
                  {project.number}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">

                  {/* Information */}
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] text-gray-500">
                      {project.type}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-gray-400 transition hover:border-purple-400/30 hover:text-purple-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 md:flex-col">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-purple-400/40 hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight size={15} />
                    </a>

                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full border border-purple-400/30 px-4 py-2 text-sm text-purple-300 transition hover:bg-purple-400/10"
                      >
                        Live Demo
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}