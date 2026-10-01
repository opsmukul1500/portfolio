"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section section-border">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">03 / TECH STACK</p>
          <h2>Technologies I work with.</h2>
          <p>
            A modern full-stack toolkit covering product engineering,
            infrastructure, data, messaging and AI.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.035 }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-logo">
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}`}
                  alt=""
                  loading="lazy"
                />
                <span>{skill.short}</span>
              </div>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
