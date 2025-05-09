import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const totalSections = sections.length;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Find the current section based on scroll position
      let currentSection = 0;
      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            currentSection = index;
          }
        }
      });

      // Calculate progress based on current section
      const sectionProgress = (currentSection / (totalSections - 1)) * 100;
      setProgress(sectionProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-1.5 z-50'>
      <div
        className='h-full bg-primary transition-all duration-300 ease-out'
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
