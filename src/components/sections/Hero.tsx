import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { FolderGit2, FileText, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section className='min-h-screen pt-32 pb-24 px-6 flex items-center'>
      <div className='container mx-auto text-center'>
        <Badge
          variant='outline'
          className='mb-8 px-4 py-2 text-sm font-bold border-primary/30 text-primary hover:bg-primary/10 transition-colors'
        >
          Available for Hire
        </Badge>

        <h2 className='text-5xl md:text-7xl font-bold mb-8 tracking-tight'>
          Hi, I'm <span className='text-primary font-bold'>John Doe</span>
        </h2>

        <p className='text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed'>
          Specializing in{' '}
          <span className='text-primary font-bold'>Web Development</span> and{' '}
          <span className='text-primary font-bold'>Data Analysis</span>
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Button
            size='lg'
            className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 transition-colors font-bold'
          >
            <FolderGit2 className='h-5 w-5 mr-2' />
            View Projects
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-muted-foreground/30 text-muted-foreground hover:bg-muted/30 px-8 transition-colors font-bold'
          >
            <FileText className='h-5 w-5 mr-2' />
            My Resume
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-[#0A1A2F] text-[#0A1A2F] hover:bg-[#0A1A2F]/10 px-8 transition-colors font-bold'
          >
            <Send className='h-5 w-5 mr-2' />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
