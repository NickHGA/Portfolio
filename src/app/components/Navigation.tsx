import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoreHorizontal, X, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '../provider/LanguageContext';

interface NavigationProps {
  onMenuClick: () => void;
  onHomeClick: () => void;
  isMenuOpen: boolean;
}

export function Navigation({ onMenuClick, onHomeClick, isMenuOpen }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-lg border-b border-foreground/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onHomeClick}
            className="font-bold text-xl bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOUAGA Primel
          </motion.button>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-foreground/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </motion.button>
            )}

            {/* Language Toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={toggleLanguage}
              className="flex items-center justify-center min-w-[44px] h-[44px] rounded-lg bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-bold text-foreground">
                {language.toUpperCase()}
              </span>
            </motion.button>

            {/* Menu Toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={onMenuClick}
              className="relative p-3 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:border-primary/50 transition-all duration-300 z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <MoreHorizontal className="w-6 h-6 text-foreground" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}