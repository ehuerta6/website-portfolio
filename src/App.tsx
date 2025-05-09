import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import BugChase from './components/BugChase';
import { useState } from 'react';
import JohnPorkAudio from './assets/JohnPorkCalling.mp3';
import NellyFurtadoManeater from './assets/NellyFurtadoManeater.mp3';
import MangosPhonk from './assets/MangosPhonk.mp3';

const SectionSeparator = () => (
  <div
    style={{ borderTop: '1px solid #FFFFFF', opacity: 0.08, width: '100%' }}
  />
);

type EasterEggMode = 'none' | 'johnpork' | 'chico' | 'troll';

function App() {
  const [easterEgg, setEasterEgg] = useState<EasterEggMode>('none');
  let accentClass = '';
  let audioSrc: string | null = null;
  switch (easterEgg) {
    case 'johnpork':
      accentClass = 'johnpork-mode';
      audioSrc = JohnPorkAudio;
      break;
    case 'chico':
      accentClass = 'chico-mode';
      audioSrc = NellyFurtadoManeater;
      break;
    case 'troll':
      accentClass = 'troll-mode';
      audioSrc = MangosPhonk;
      break;
    default:
      accentClass = '';
      audioSrc = null;
  }
  return (
    <div
      className={`min-h-screen bg-dark${accentClass ? ' ' + accentClass : ''}`}
    >
      <Header />
      <main className='relative'>
        <Hero />
        <SectionSeparator />
        <About easterEgg={easterEgg} />
        <SectionSeparator />
        <Projects />
        <SectionSeparator />
        <Skills />
        <SectionSeparator />
        <Contact easterEgg={easterEgg} triggerEasterEgg={setEasterEgg} />
      </main>
      <SectionSeparator />
      <Footer />
      <BugChase />
      {audioSrc && (
        <audio src={audioSrc} autoPlay loop style={{ display: 'none' }} />
      )}
    </div>
  );
}

export default App;
