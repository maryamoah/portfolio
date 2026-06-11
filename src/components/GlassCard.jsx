import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
      className={`min-w-0 rounded-3xl border border-white/10 bg-panel p-5 shadow-card backdrop-blur-xl sm:p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
