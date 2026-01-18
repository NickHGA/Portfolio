import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

interface HeroProps {
  onNavigate: (view: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating gradient orbs with animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[128px]"
        animate={{
          x: [0, 30, 0, -30, 0],
          y: [0, -20, 0, 20, 0],
          scale: [1, 1.1, 1, 0.9, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full filter blur-[128px]"
        animate={{
          x: [0, -40, 0, 40, 0],
          y: [0, 30, 0, -30, 0],
          scale: [1, 0.9, 1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Extra floating particles */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full"
        animate={{
          y: [0, -100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-3 h-3 bg-violet-500 rounded-full"
        animate={{
          y: [0, -120, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full"
        animate={{
          y: [0, -80, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-sm mb-8"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm text-muted-foreground">{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="block text-5xl md:text-7xl font-bold text-foreground mb-4">
            {t('hero.title1')}
          </span>
          <motion.span
            className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-violet-500 to-pink-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200%" }}
          >
            {t('hero.title2')}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => onNavigate('about')}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px var(--primary)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta1')}
          </motion.button>
          <motion.button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 bg-foreground/5 border border-foreground/10 text-foreground rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--foreground), 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta2')}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
