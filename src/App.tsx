import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className='min-h-screen bg-dark'>
      <Header />
      <main className='relative'>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
