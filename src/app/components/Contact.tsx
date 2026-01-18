import { motion, AnimatePresence, useInView } from 'motion/react';
import { useRef, useState, FormEvent } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare, Phone, Facebook, Instagram, Twitter, MessageCircle, Copy, Check, X } from 'lucide-react';
import { useLanguage } from '../provider/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Construction du lien mailto
    const subject = `Nouveau message de ${formData.name}`;
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Votre adresse email de réception
    const recipientEmail = "primelhouaga22@gmail.com";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Ouverture du client mail
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:primelhouaga22@gmail.com',
      color: 'hover:text-red-500',
      info: 'primelhouaga22@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      info: '+229 53 93 47 04',
      color: 'hover:text-green-500',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      link: 'tel:+2290153934704',
      color: 'hover:text-green-500',
      info: '+229 01 53 93 47 04',
      info: '+229 01 44 67 84 10',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/NickHGA',
      color: 'hover:text-foreground',
      info: 'NickHGA',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/prim-hga-69347a380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-blue-600',
      info: 'prim-hga',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      link: '#', // À remplacer par votre lien
      color: 'hover:text-blue-500',
      info: 'En attente',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: '#', // À remplacer par votre lien
      color: 'hover:text-pink-500',
      info: 'En attente',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      link: '#', // À remplacer par votre lien
      color: 'hover:text-sky-400',
      info: 'En attente',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-background to-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full filter blur-[128px]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          {/* Social Icons Row */}
          <div className="flex flex-col items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">
                  <a
                    href={social.link || '#'}
                    onClick={(e) => {
                      if (!social.link && social.info) {
                        e.preventDefault();
                        setActiveInfo(activeInfo === social.info ? null : social.info);
                      }
                    }}
                    target={social.link ? "_blank" : undefined}
                    rel={social.link ? "noopener noreferrer" : undefined}
                    onMouseEnter={() => {
                      if (social.info) setActiveInfo(social.info);
                    }}
                    className={`p-4 rounded-2xl bg-foreground/5 border border-foreground/10 transition-all duration-300 flex items-center justify-center hover:bg-foreground/10 ${social.color} text-muted-foreground hover:scale-110 active:scale-95`}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                </div>
              ))}
            </motion.div>

            {/* Info display area */}
            <div className="h-12 mt-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-xl shadow-primary/5"
                  >
                    <span className="text-foreground font-bold tracking-wider">{activeInfo}</span>
                    <div className="flex items-center gap-1 border-l border-primary/20 pl-2 ml-1">
                      <button
                        onClick={() => handleCopy(activeInfo)}
                        className="p-1.5 rounded-lg hover:bg-primary/20 transition-colors group/copy"
                        title="Copier"
                      >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-primary group-hover/copy:scale-110 transition-transform" />}
                      </button>
                      <button
                        onClick={() => {
                          setActiveInfo(null);
                        }}
                        className="p-1.5 rounded-lg hover:bg-red-500/20 transition-colors group/close"
                        title="Fermer"
                      >
                        <X className="w-4 h-4 text-muted-foreground group-hover/close:text-red-500 transition-colors" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">{t('contact.form.title')}</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-violet-600 text-primary-foreground font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-foreground/10 text-center"
        >
          <p className="text-muted-foreground mb-4">
            {t('contact.footer1')}
          </p>
          <p className="text-sm text-muted-foreground/60">
            {t('contact.footer2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}