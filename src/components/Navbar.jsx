import { Shield } from 'lucide-react';
import { useMemo } from 'react';
import { profile } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { label: 'Work', href: '#featured-work', id: 'featured-work' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Focus', href: '#professional-focus', id: 'professional-focus' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(ids);

  const handleMobileNav = (event) => {
    const target = event.target.value;
    if (target) {
      window.location.hash = target;
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-3 text-white">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-glow">
            <Shield className="h-5 w-5 text-cyan-200" aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap text-sm font-semibold tracking-wide sm:text-base">
            {profile.shortName}
          </span>
        </a>

        <select
          aria-label="Navigate portfolio sections"
          value={activeId || 'featured-work'}
          onChange={handleMobileNav}
          className="max-w-[10rem] rounded-full border border-white/10 bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-100 outline-none ring-cyan-300/30 focus:ring-2 lg:hidden"
        >
          {navItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {navItems.map((item) => (
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
      </nav>
    </header>
  );
}
