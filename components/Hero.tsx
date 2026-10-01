"use client";

import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { skills } from "@/data/portfolio";

export function Hero() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Mukul-Singh-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, 3000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="hero section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="eyebrow">
            <span className="status-dot" />
            FULL-STACK DEVELOPER
          </div>

          <h1>
            4 Years of <span>Fullstack Experience</span>
          </h1>

          <p className="hero-text">
            Hi, I&apos;m Mukul — a Full-Stack Developer building scalable
            products across frontend, backend, databases, cloud infrastructure
            and modern AI-powered experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View my work <ArrowUpRight size={18} />
            </a>
            <a href="/resume.pdf" className="button button-secondary" download>
              Download resume <FileDown size={17} />
            </a>
          </div>

          <div className="hero-tech-strip" aria-label="Core technologies">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className="hero-tech-pill"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.025, duration: 0.3 }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div className="hero-profile-card">
            <div className="profile-photo-wrap">
              <img
                src="/profile.jpg"
                alt="Mukul Singh"
                className="profile-photo"
              />
              <div className="profile-fallback">MS</div>
            </div>
            <p className="profile-greeting">Hi Mukul</p>
            <h2>Full-Stack Developer</h2>
            <p>
              React · Next.js · Node.js · Cloud · Distributed Systems · Gen AI
            </p>
            <div className="availability">
              <span className="status-dot" />
              Available for new opportunities
            </div>
          </div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#projects">
        <ArrowDown size={17} />
        Explore projects
      </a>
    </section>
  );
}
