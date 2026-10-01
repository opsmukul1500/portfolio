"use client";

import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="section section-border">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">03 / EXPERIENCE</p>
          <h2>Professional experience.</h2>
        </div>

        <motion.article
          className="experience-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="experience-date">AUG 2022 — PRESENT</div>
          <div className="experience-main">
            <div className="experience-title-row">
              <div>
                <h3>Full-Stack Developer</h3>
                <p className="company-name">Techsunset · Bengaluru</p>
              </div>
              <span className="remote-badge">Remote</span>
            </div>

            <p>
              Working on web and application development as a Full-Stack
              Developer, contributing to frontend interfaces, REST APIs and
              backend functionality.
            </p>

            <ul className="bullet-list">
              <li>Built user interfaces using React and Next.js.</li>
              <li>Developed REST APIs using Node.js and Express.</li>
              <li>Worked with MongoDB for application data.</li>
              <li>
                Worked with AWS services including EC2, S3 and Lambda, with
                approximately six months of AWS experience noted in the source
                profile.
              </li>
            </ul>

            <div className="tag-row">
              {["React", "Next.js", "Node.js", "Express", "MongoDB", "AWS", "Git", "Jira"].map(
                (tag) => <span key={tag} className="tag">{tag}</span>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}