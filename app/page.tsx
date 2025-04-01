import Hero from '@/app/components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
