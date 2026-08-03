import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);

      if (!element) {
        return null;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-35% 0px -55% 0px' },
      );

      observer.observe(element);
      return observer;
    });

    const lastId = sectionIds[sectionIds.length - 1];
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(lastId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
