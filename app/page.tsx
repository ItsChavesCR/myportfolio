import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Highlights from "@/components/highlights";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/public/avatar.png"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border-2 border-teal-400"
            />
            <span className="font-bold text-xl text-teal-400">
              DevPortfolio
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-slate-200 hover:text-teal-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-slate-200 hover:text-teal-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-slate-200 hover:text-teal-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-slate-200 hover:text-teal-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-slate-200 hover:text-teal-400 transition-colors"
            >
              Skills
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="https://github.com/ItsChavesCR" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5 text-slate-200 hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-chaves-baltodano-47695a2bb/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-200 hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/its_chaves29/?__pwa=1"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-slate-200 hover:text-teal-400 transition-colors" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-teal-400">Desarrollador Front End</span> con
            pasión por crear experiencias digitales
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Especializado en crear aplicaciones web modernas y responsivas con
            las últimas tecnologías
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Ver Proyectos
            </Button>
            <Button
              variant="outline"
              className="border-teal-500 text-teal-400 hover:bg-teal-950"
            >
              <Mail className="mr-2 h-4 w-4" /> Contacto
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section with Bento Grid */}
      <section id="highlights" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="text-teal-400">Mis</span> Destacados
        </h2>
        <Highlights />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-400">About</span> Me
          </h2>
          <About />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-400">My</span> Projects
          </h2>
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-400">Work</span> Experience
          </h2>
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-400">My</span> Skills
          </h2>
          <Skills />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Link href="https://github.com/ItsChavesCR" target="_blank" aria-label="GitHub">
              <Github className="w-6 h-6 text-slate-400 hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-chaves-baltodano-47695a2bb/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-400 hover:text-teal-400 transition-colors" />
            </Link>
            <Link href="mailto:contact@example.com" aria-label="Email">
              <Mail className="w-6 h-6 text-slate-400 hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-slate-400 hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/its_chaves29/?__pwa=1"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-slate-400 hover:text-teal-400 transition-colors " />
            </Link>
          </div>
          <p className="text-slate-400">
            © {new Date().getFullYear()} DevPortfolio. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
