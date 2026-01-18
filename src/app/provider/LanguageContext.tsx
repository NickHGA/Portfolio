import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    fr: {
        // Navigation
        'nav.logo': 'HOUAGA Primel',

        // Hero
        'hero.badge': 'Étudiant en 2e Année — Intelligence Artificielle (IFRI)',
        'hero.title1': 'En route vers',
        'hero.title2': "l'Intelligence Artificielle",
        'hero.description': "Passionné par l'innovation, je transforme mes apprentissages en solutions concrètes. Actuellement focalisé sur l'automatisation et les systèmes intelligents.",
        'hero.cta1': 'Mon parcours',
        'hero.cta2': 'Mes projets',

        // Menu
        'menu.home': 'Accueil',
        'menu.home.sub': "Retour à l'écran principal",
        'menu.about': 'À propos',
        'menu.about.sub': 'Mon parcours et mon histoire',
        'menu.projects': 'Projets',
        'menu.projects.sub': 'Mes réalisations récentes',
        'menu.skills': 'Compétences',
        'menu.skills.sub': 'Mes outils et technologies',
        'menu.contact': 'Contact',
        'menu.contact.sub': 'On discute ?',

        // About
        'about.title': 'À propos',
        'about.subtitle1': 'Étudiant passionné par l\'IA,',
        'about.subtitle2': "Apprenti créateur au quotidien",
        'about.p1': "Actuellement en 2ème année à l'Institut de Formation et de Recherche en Informatique (IFRI), je me spécialise en Intelligence Artificielle. Mon parcours est guidé par une curiosité insatiable et le désir constant d'apprendre.",
        'about.p2': "Le développement et l'IA sont apparus comme une évidence lors de mes formations. Je vois chaque projet comme une opportunité de créer des applications performantes, soucieuses de l'expérience utilisateur et tournées vers l'avenir. Le mobile et l'automatisation changent notre quotidien, et je souhaite prendre part à ce changement.",
        'about.p3': "En tant que passionné, j'aime créer des projets personnels pour augmenter mes compétences. Mon but est de transformer la théorie en impact concret, tout en explorant comment l'IA peut résoudre des enjeux actuels et futurs.",
        'about.highlight1.title': "Parcours Académique",
        'about.highlight1.desc': "2e année à l'IFRI – Université d'Abomey-Calavi, spécialisation IA",
        'about.edu.2024.year': "2024 – 2025",
        'about.edu.2024.title': "Licence 2 – Intelligence Artificielle",
        'about.edu.2024.inst': "Institut de Formation et de Recherche en Informatique (IFRI)",
        'about.edu.2024.univ': "Université d’Abomey-Calavi",
        'about.edu.2023.year': "2023 – 2024",
        'about.edu.2023.title': "Licence 1 – Informatique",
        'about.edu.2023.inst': "IFRI, Université d’Abomey-Calavi",
        'about.edu.2022.year': "2022 – 2023",
        'about.edu.2022.title': "Baccalauréat Scientifique",
        'about.edu.2022.desc': "Mention Très Bien — Spécialisation Mathématiques & Physique",
        'about.highlight2.title': 'Curiosité & Apprentissage',
        'about.highlight2.desc': 'Désir d\'apprendre et capacité à maîtriser rapidement de nouvelles technologies',
        'about.highlight3.title': 'Projets Passion',
        'about.highlight3.desc': 'Développement de solutions personnelles pour relever des défis techniques réels',
        'about.stat1': 'Projets réalisés',
        'about.stat2': 'Tech maîtrisées',
        'about.stat3': 'Curiosité',
        'about.stat4': 'Ambition',

        // Projects
        'projects.title': 'Projets réalisés',
        'projects.subtitle': 'De la théorie à la pratique : solutions concrètes pour des problèmes réels',
        'projects.problem': 'Problème',
        'projects.solution': 'Solution',
        'projects.details': 'Détails',
        'projects.code': 'Code',
        'projects.cta': 'Plus de projets disponibles sur GitHub',
        'projects.ctaBtn': 'Voir tous les projets',

        // Project 1: SchoolHub
        'projects.schoolhub.cat': 'Plateforme de gestion',
        'projects.schoolhub.desc': 'Système de gestion de présence intelligent avec API backend, dashboard interactif, rapports PDF et notifications.',
        'projects.schoolhub.prob': 'Gestion manuelle inefficace des présences scolaires.',
        'projects.schoolhub.sol': 'Automatisation complète avec rapports en temps réel.',

        // Project 2: Medipass
        'projects.medipass.cat': 'Informatique Médicale',
        'projects.medipass.desc': 'Système d’Information Médical orienté objet pour centraliser les dossiers patients et assurer le suivi des soins.',
        'projects.medipass.prob': 'Systèmes fragmentés rendant difficile le suivi médical et la sécurité des données.',
        'projects.medipass.sol': 'Application basée sur une architecture POO permettant une gestion structurée et sécurisée.',

        // Project 3: SondagePro
        'projects.sondagepro.cat': 'Plateforme Web / Data',
        'projects.sondagepro.desc': 'Plateforme de questionnaires professionnels permettant de collecter des données qualitatives et quantitatives via des profils ciblés.',
        'projects.sondagepro.prob': 'Manque d’outils structurés pour collecter des données auprès de profils professionnels variés.',
        'projects.sondagepro.sol': 'Solution web basée sur Django avec questionnaires dynamiques et inscription sans mot de passe.',

        // Project 4: IFRI_comotorage
        'projects.comotorage.cat': 'Application Web / Mobilité',
        'projects.comotorage.desc': 'Plateforme de covoiturage étudiant permettant la mise en relation via un algorithme de matching et une messagerie intégrée.',
        'projects.comotorage.prob': 'Manque de coordination et coûts élevés des trajets quotidiens pour les étudiants.',
        'projects.comotorage.sol': 'Solution web client-serveur facilitant les partages de trajets avec matching automatique.',

        // Project 5: Objectif 2026
        'projects.objectif2026.cat': 'Productivité / Web App',
        'projects.objectif2026.desc': 'Tableau de bord personnel interactif pour le suivi quotidien des habitudes et objectifs avec une approche gamifiée.',
        'projects.objectif2026.prob': 'Difficulté à suivre ses habitudes et rester motivé sur le long terme.',
        'projects.objectif2026.sol': 'Dashboard moderne et engageant avec statistiques visuelles et système d’aura.',

        // Skills
        'skills.title': 'Compétences techniques',
        'skills.subtitle': 'Stack technique diversifié pour construire des solutions complètes',
        'skills.learning': 'En apprentissage continu',
        'skills.languages': 'Langages',
        'skills.frameworks': 'Frameworks',
        'skills.databases': 'Bases de données',
        'skills.ai': 'Intelligence Artificielle',
        'skills.tools': 'Outils & DevOps',
        'skills.other': 'Autres compétences',

        // Contact
        'contact.title': 'Me contacter',
        'contact.subtitle': 'Retrouvez-moi sur les réseaux ou envoyez-moi un message direct.',
        'contact.form.title': "M'envoyer un message",
        'contact.form.name': 'Nom',
        'contact.form.namePlaceholder': 'Votre nom',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'votre@email.com',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Votre message...',
        'contact.form.submit': 'Envoyer le message (Email)',
        'contact.footer1': 'Conçu et développé avec passion par HOUAGA Primel',
        'contact.footer2': '© 2025 HOUAGA Primel • Étudiant en Intelligence Artificielle - IFRI',
    },
    en: {
        // Navigation
        'nav.logo': 'HOUAGA Primel',

        // Hero
        'hero.badge': '2nd Year Student — Artificial Intelligence (IFRI)',
        'hero.title1': 'On the path to',
        'hero.title2': 'Artificial Intelligence',
        'hero.description': 'Passionate about innovation, I transform my learning into concrete solutions. Currently focused on automation and intelligent systems.',
        'hero.cta1': 'My journey',
        'hero.cta2': 'My projects',

        // Menu
        'menu.home': 'Home',
        'menu.home.sub': 'Back to main screen',
        'menu.about': 'About',
        'menu.about.sub': 'My journey and story',
        'menu.projects': 'Projects',
        'menu.projects.sub': 'My recent work',
        'menu.skills': 'Skills',
        'menu.skills.sub': 'My tools and technologies',
        'menu.contact': 'Contact',
        'menu.contact.sub': 'Let\'s chat?',

        // About
        'about.title': 'About',
        'about.subtitle1': 'AI Student Enthusiast,',
        'about.subtitle2': 'Daily Learner and Creator',
        'about.p1': 'Currently in my 2nd year at the Institute of Research and Training in Computer Science (IFRI), specializing in Artificial Intelligence. My journey is driven by insatiable curiosity and a constant desire to learn.',
        'about.p2': 'Development and AI became an obvious choice during my training. I see every project as an opportunity to create high-performance applications, mindful of user experience and future-oriented. Mobile and automation are changing our daily lives, and I want to be part of that change.',
        'about.p3': 'As an enthusiast, I love creating personal projects to increase my skills. My goal is to transform theory into concrete impact, while exploring how AI can solve current and future challenges.',
        'about.highlight1.title': 'Academic Journey',
        'about.highlight1.desc': '2nd year at IFRI – University of Abomey-Calavi, specializing in AI',
        'about.edu.2024.year': "2024 – 2025",
        'about.edu.2024.title': "Licence 2 – Artificial Intelligence",
        'about.edu.2024.inst': "Institute of Research and Training in Computer Science (IFRI)",
        'about.edu.2024.univ': "University of Abomey-Calavi",
        'about.edu.2023.year': "2023 – 2024",
        'about.edu.2023.title': "Licence 1 – Computer Science",
        'about.edu.2023.inst': "IFRI, University of Abomey-Calavi",
        'about.edu.2022.year': "2022 – 2023",
        'about.edu.2022.title': "Scientific Baccalaureate",
        'about.edu.2022.desc': "High Honors (Mention Très Bien) — Mathematics & Physics major",
        'about.highlight2.title': 'Curiosity & Learning',
        'about.highlight2.desc': 'Desire to learn and ability to quickly master new technologies',
        'about.highlight3.title': 'Passion Projects',
        'about.highlight3.desc': 'Developing personal solutions to address real technical challenges',
        'about.stat1': 'Projects completed',
        'about.stat2': 'Tech mastered',
        'about.stat3': 'Curiosity',
        'about.stat4': 'Ambition',

        // Projects
        'projects.title': 'Completed Projects',
        'projects.subtitle': 'From theory to practice: concrete solutions for real problems',
        'projects.problem': 'Problem',
        'projects.solution': 'Solution',
        'projects.details': 'Details',
        'projects.code': 'Code',
        'projects.cta': 'More projects available on GitHub',
        'projects.ctaBtn': 'View all projects',

        // Project 1: SchoolHub
        'projects.schoolhub.cat': 'Management Platform',
        'projects.schoolhub.desc': 'Intelligent attendance management system with backend API, interactive dashboard, PDF reports and notifications.',
        'projects.schoolhub.prob': 'Inefficient manual tracking of school attendance.',
        'projects.schoolhub.sol': 'Full automation with real-time reporting.',

        // Project 2: Medipass
        'projects.medipass.cat': 'Medical Informatics',
        'projects.medipass.desc': 'Object-oriented Medical Information System to centralize patient records and ensure care follow-up.',
        'projects.medipass.prob': 'Fragmented systems making medical follow-up and data security difficult.',
        'projects.medipass.sol': 'Application based on an OOP architecture allowing structured and secure management.',

        // Project 3: SondagePro
        'projects.sondagepro.cat': 'Web Platform / Data',
        'projects.sondagepro.desc': 'Professional survey platform for collecting qualitative and quantitative data through targeted profiles.',
        'projects.sondagepro.prob': 'Lack of structured tools to collect data from diverse professional profiles.',
        'projects.sondagepro.sol': 'Django-based web solution with dynamic questionnaires and passwordless registration.',

        // Project 4: IFRI_comotorage
        'projects.comotorage.cat': 'Web App / Mobility',
        'projects.comotorage.desc': 'Student carpooling platform enabling connection via a matching algorithm and integrated messaging.',
        'projects.comotorage.prob': 'Lack of coordination and high costs of daily commutes for students.',
        'projects.comotorage.sol': 'Client-server web solution facilitating trip sharing with automatic matching.',

        // Project 5: Objectif 2026
        'projects.objectif2026.cat': 'Productivity / Web App',
        'projects.objectif2026.desc': 'Interactive personal dashboard for daily habits and goals tracking with a gamified approach.',
        'projects.objectif2026.prob': 'Difficulty tracking habits and staying motivated over the long term.',
        'projects.objectif2026.sol': 'Modern and engaging dashboard with visual statistics and aura system.',

        // Skills
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Diverse tech stack to build complete solutions',
        'skills.learning': 'Continuously learning',
        'skills.languages': 'Languages',
        'skills.frameworks': 'Frameworks',
        'skills.databases': 'Databases',
        'skills.ai': 'Artificial Intelligence',
        'skills.tools': 'Tools & DevOps',
        'skills.other': 'Other Skills',

        // Contact
        'contact.title': 'Contact Me',
        'contact.subtitle': 'Find me on social media or send me a direct message.',
        'contact.form.title': 'Send me a message',
        'contact.form.name': 'Name',
        'contact.form.namePlaceholder': 'Your name',
        'contact.form.email': 'Email',
        'contact.form.emailPlaceholder': 'your@email.com',
        'contact.form.message': 'Message',
        'contact.form.messagePlaceholder': 'Your message...',
        'contact.form.submit': 'Send message (Email)',
        'contact.footer1': 'Designed and developed with passion by HOUAGA Primel',
        'contact.footer2': '© 2025 HOUAGA Primel • Artificial Intelligence Student - IFRI',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['fr']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
