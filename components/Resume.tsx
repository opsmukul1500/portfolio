"use client";

import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function Resume() {
  return (
    <section id="resume" className="section section-border">
      <div className="container">
        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="resume-icon"><FileText size={28} /></div>
          <div>
            <p className="section-kicker">06 / RESUME</p>
            <h2>4 years of full-stack product development.</h2>
            <p>Download my resume for a detailed overview of my experience and technical background.</p>
          </div>
          <a href="/resume.pdf" download className="button button-primary">
            <Download size={18} /> Download PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
}
