"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section section-border">
      <div className="container two-column">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="section-kicker">01 / ABOUT</p>
          <h2>A developer who cares about the problem behind the code.</h2>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            My interest in coding started through self-learning and eventually
            led me into professional web development. In 2021, I studied web
            development and the MERN stack, and in 2022 I started working as a
            Full-Stack Developer.
          </p>
          <p>
            My professional work has included web applications across
            e-commerce, crypto, real estate, healthcare and feedback/review
            domains. I work across both frontend and backend, building
            interfaces and REST APIs.
          </p>
          <p>
            I also have hands-on exposure to AWS cloud services including
            EC2, S3 and Lambda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}