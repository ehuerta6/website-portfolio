import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
