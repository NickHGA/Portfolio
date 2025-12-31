import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Vision />
      <Contact />
    </div>
  );
}
