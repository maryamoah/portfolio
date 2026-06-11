import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Consulting } from './sections/Consulting';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { GitHubProjects } from './sections/GitHubProjects';
import { Hero } from './sections/Hero';
import { Instruction } from './sections/Instruction';
import { ProfessionalFocus } from './sections/ProfessionalFocus';
import { Projects } from './sections/Projects';
import { Research } from './sections/Research';
import { Skills } from './sections/Skills';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProfessionalFocus />
        <Consulting />
        <Experience />
        <Projects />
        <GitHubProjects />
        <Research />
        <Instruction />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Mary Abenawa Techiesiwa Amoah. Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
