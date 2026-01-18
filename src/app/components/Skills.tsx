import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Server, Database, Brain, Wrench, GitBranch } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      titleKey: 'skills.languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C / C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'PHP', level: 65 },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      titleKey: 'skills.frameworks',
      icon: Server,
      skills: [
        { name: 'Django', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Laravel', level: 75 },
        { name: 'Flask', level: 70 },
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      titleKey: 'skills.databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'SQLite', level: 80 },
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      titleKey: 'skills.ai',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'AI Logic', level: 80 },
        { name: 'Algorithms', level: 85 },
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      titleKey: 'skills.tools',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Vercel / Deployment', level: 80 },
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      titleKey: 'skills.other',
      icon: GitBranch,
      skills: [
        { name: 'UML / POO', level: 90 },
        { name: 'MVC Architecture', level: 85 },
        { name: 'API REST', level: 80 },
      ],
      gradient: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-secondary to-background overflow-hidden">
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
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="group"
            >
              <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm hover:bg-foreground/10 transition-all duration-300">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10`}>
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground">{t(category.titleKey)}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.2 * categoryIndex + 0.1 * skillIndex }}
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">{t('skills.learning')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
