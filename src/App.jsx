import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { FeaturedWork } from './sections/FeaturedWork';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-300">
        <p>© {new Date().getFullYear()} Mary Abenawa Techiesiwa Amoah. Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
