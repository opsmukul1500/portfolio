"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section section-border">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">02 / SELECTED WORK</p>
          <h2>Different products, one focus: useful software.</h2>
          <p>
            A selection of application types from my professional experience.
            Some projects were completed as part of a team.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card project-${index + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-number">0{index + 1}</div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
