import { Button } from '../ui/button';
import { Code } from 'lucide-react';

const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-background/60 backdrop-blur-md z-50 border-b border-border/40'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Code className='h-6 w-6 text-primary' />
          <h1 className='text-xl font-bold'>DevPortfolio</h1>
        </div>
        <nav className='hidden md:flex items-center gap-8'>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Button
              key={item}
              variant='ghost'
              className='text-foreground hover:text-primary hover:bg-transparent font-bold'
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
