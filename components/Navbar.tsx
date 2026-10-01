"use client";

import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
  "919660193333";

const hireMessage = encodeURIComponent(
  "Hi Mukul, I would like to discuss a project/opportunity with you."
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${hireMessage}`;

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Hi Mukul home">
          <span className="brand-mark">
            <img src="/profile.jpg" alt="" />
            <span>MS</span>
          </span>
          <span>Hi Mukul</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="nav-hire">
            <MessageCircle size={16} />
            Hire Me
          </a>
        </nav>

        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18 }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mobile-nav-hire"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={18} /> Hire Me
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
