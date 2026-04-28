import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Certificates } from "@/components/sections/certificates";
import { Education } from "@/components/sections/education";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.05),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.09),_transparent_28%),linear-gradient(to_bottom,_#f8fafc,_#eef2ff_70%,_#ffffff)] text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.65),_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a_62%,_#111827)] dark:text-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),transparent)] dark:bg-[linear-gradient(to_bottom,rgba(2,6,23,0.82),transparent)]" />
      <div className="animate-glow pointer-events-none absolute left-8 top-24 -z-10 h-72 w-72 rounded-full bg-sky-300/15 blur-3xl dark:bg-sky-400/10" />
      <div className="animate-glow pointer-events-none absolute right-0 top-[28rem] -z-10 h-80 w-80 rounded-full bg-indigo-300/10 blur-3xl dark:bg-cyan-400/10" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
