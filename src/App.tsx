import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const SectionSeparator = () => (
  <div
    style={{ borderTop: '1px solid #FFFFFF', opacity: 0.08, width: '100%' }}
  />
);

function App() {
  return (
    <div className='min-h-screen bg-dark'>
      <Header />
      <main className='relative'>
        <Hero />
        <SectionSeparator />
        <About />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Contact />
      </main>
      <SectionSeparator />
      <Footer />
    </div>
  );
}

export default App;
