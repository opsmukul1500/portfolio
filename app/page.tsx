import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Blogs } from "@/components/Blogs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Resume />
        <Blogs />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Mukul Singh</span>
          <span>Built with Next.js</span>
        </div>
      </footer>

      <a
        className="mobile-hire"
        href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919660193333").replace(/\D/g, "")}?text=${encodeURIComponent("Hi Mukul, I would like to discuss a project/opportunity with you.")}`}
        target="_blank"
        rel="noreferrer"
      >
        Hire Me
      </a>
    </>
  );
}
