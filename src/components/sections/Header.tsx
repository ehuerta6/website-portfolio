import { Button } from '../ui/button';
import { Code } from 'lucide-react';
import { ScrollProgress } from '../ui/scroll-progress';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-dark-translucent backdrop-blur-sm'>
      <ScrollProgress />
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Code className='h-6 w-6 text-primary' />
            <span className='text-xl font-bold'>DevPortfolio</span>
          </div>
          <nav className='hidden md:flex items-center space-x-6'>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
