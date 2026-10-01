"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data/portfolio";

export function Blogs() {
  return (
    <section id="blogs" className="section section-border">
      <div className="container">
        <div className="section-heading centered">
          <p className="section-kicker">07 / BLOG</p>
          <h2>Engineering ideas worth sharing.</h2>
          <p>Notes and practical perspectives on building modern software products.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <motion.article
              className="blog-card"
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.06 }}
            >
              <span className="project-type">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <span className="blog-read">Article topic →</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
