"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
  "919660193333";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          whatsapp: data.get("whatsapp"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) throw new Error("Unable to send");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Mukul, I would like to discuss a project with you."
  )}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-card contact-layout"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="contact-copy">
            <p className="section-kicker">08 / CONTACT</p>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              Send me your details and I&apos;ll receive your message by email,
              or contact me directly on WhatsApp.
            </p>

            <a className="whatsapp-cta" href={whatsappHref} target="_blank" rel="noreferrer">
              <span className="whatsapp-icon"><MessageCircle size={40} /></span>
              <span>
                <strong>Chat on WhatsApp</strong>
                <small>Send a project enquiry directly</small>
              </span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              WhatsApp
              <input name="whatsapp" type="tel" placeholder="+91..." required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell me about your project..." rows={6} required />
            </label>
            <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>
              {status === "success" ? <CheckCircle2 size={18} /> : <Send size={18} />}
              {status === "sending" ? "Sending..." : status === "success" ? "Message sent" : "Send message"}
            </button>
            {status === "success" && <p className="form-status success">Thanks — your message has been sent.</p>}
            {status === "error" && <p className="form-status error">Something went wrong. Please try WhatsApp instead.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
