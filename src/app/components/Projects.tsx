import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Database, Globe, Gamepad2, LayoutDashboard } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'SchoolHub',
      category: t('projects.schoolhub.cat'),
      description: t('projects.schoolhub.desc'),
      problem: t('projects.schoolhub.prob'),
      solution: t('projects.schoolhub.sol'),
      tech: ['Laravel', 'React', 'MySQL', 'API REST', 'PDF Generation'],
      icon: LayoutDashboard,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Medipass',
      category: t('projects.medipass.cat'),
      description: t('projects.medipass.desc'),
      problem: t('projects.medipass.prob'),
      solution: t('projects.medipass.sol'),
      tech: ['C++', 'Java', 'POO', 'UML', 'Console App'],
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'SondagePro',
      category: t('projects.sondagepro.cat'),
      description: t('projects.sondagepro.desc'),
      problem: t('projects.sondagepro.prob'),
      solution: t('projects.sondagepro.sol'),
      tech: ['Python (Django)', 'MySQL', 'HTML/CSS/JS', 'Data Collection'],
      icon: Globe,
      gradient: 'from-red-500 to-orange-500',
    },
    {
      title: 'IFRI_comotorage',
      category: t('projects.comotorage.cat'),
      description: t('projects.comotorage.desc'),
      problem: t('projects.comotorage.prob'),
      solution: t('projects.comotorage.sol'),
      tech: ['Python (Django/Flask)', 'MySQL', 'Tailwind', 'Matching Algorithm'],
      icon: Gamepad2,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Objectif 2026',
      category: t('projects.objectif2026.cat'),
      description: t('projects.objectif2026.desc'),
      problem: t('projects.objectif2026.prob'),
      solution: t('projects.objectif2026.sol'),
      tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      icon: LayoutDashboard,
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="relative py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 backdrop-blur-sm hover:border-foreground/20 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => {
                  // Simulate opening details or code - in a real app this would navigate
                  console.log(`Navigating to ${project.title}`);
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <project.icon className={`w-6 h-6 text-primary-foreground`} />
                    </motion.div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Problem & Solution */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs text-red-400 font-semibold uppercase">{t('projects.problem')}</span>
                      <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs text-green-400 font-semibold uppercase">{t('projects.solution')}</span>
                      <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.1)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.button
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors pointer-events-auto"
                      whileHover={{ x: 5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle details click
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('projects.details')}
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors pointer-events-auto"
                      whileHover={{ x: 5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle code click
                      }}
                    >
                      <Github className="w-4 h-4" />
                      {t('projects.code')}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">{t('projects.cta')}</p>
          <a
            href="https://github.com/NickHGA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-foreground/5 border border-foreground/10 text-foreground rounded-lg hover:bg-foreground/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            {t('projects.ctaBtn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}