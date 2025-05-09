import { Code, Sun, Moon } from 'lucide-react';
import ScrollProgress from '../ui/scroll-progress';
import { useState, useEffect } from 'react';

const Header = () => {
  // Color mode state
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-dark-translucent backdrop-blur-sm border-b border-border/20 transition-colors duration-300'>
      <ScrollProgress />
      <div className='container mx-auto px-6 py-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <Code className='h-7 w-7 text-primary' />
            <span className='text-2xl font-bold tracking-tight'>
              DevPortfolio
            </span>
          </div>
          <div className='flex items-center space-x-2 md:space-x-8'>
            <nav className='hidden md:flex items-center space-x-8'>
              <a
                href='#home'
                className='text-sm font-medium hover:text-primary transition-colors'
              >
                Home
              </a>
              <a
                href='#about'
                className='text-sm font-medium hover:text-primary transition-colors'
              >
                About
              </a>
              <a
                href='#projects'
                className='text-sm font-medium hover:text-primary transition-colors'
              >
                Projects
              </a>
              <a
                href='#skills'
                className='text-sm font-medium hover:text-primary transition-colors'
              >
                Skills
              </a>
              <a
                href='#contact'
                className='text-sm font-medium hover:text-primary transition-colors'
              >
                Contact
              </a>
            </nav>
            <button
              aria-label={
                darkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
              onClick={() => setDarkMode((prev) => !prev)}
              className='ml-2 p-2 rounded transition-colors duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary'
            >
              {darkMode ? (
                <Sun className='h-6 w-6 text-primary' />
              ) : (
                <Moon className='h-6 w-6 text-primary' />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
