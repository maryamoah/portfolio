import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
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
