import { Shield } from 'lucide-react';
import { useMemo } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { label: 'Hero', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Work', href: '#experience', id: 'experience' },
  { label: 'GitHub', href: '#github-projects', id: 'github-projects' },
  { label: 'Cases', href: '#case-studies', id: 'case-studies' },
  { label: 'Research', href: '#research', id: 'research' },

  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(ids);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-glow">
            <Shield className="h-5 w-5 text-cyan-200" aria-hidden="true" />
          </span>
          <span className="font-semibold tracking-wide">Mary Abenawa Techiesiwa Amoah</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {navItems.slice(1).map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-full px-3 py-2 text-xs transition xl:px-4 xl:text-sm ${
                activeId === item.id
                  ? 'bg-cyan-300/15 text-cyan-100'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}
