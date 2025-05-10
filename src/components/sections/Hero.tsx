import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { FolderGit2, FileText, Send } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Replace with your actual resume file path
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className='min-h-screen pt-24 pb-10 px-4 flex items-center'>
      <div className='container mx-auto text-center'>
        <Badge
          variant='outline'
          className='mb-6 px-3 py-1 text-xs font-medium text-white border-white/30 hover:border-white/50 transition-all duration-300 animate-float'
        >
          <span className='font-bold'>Available for Hire</span>
        </Badge>

        <h2 className='text-5xl md:text-7xl font-extrabold mb-6 tracking-tight'>
          Hi, I'm{' '}
          <span className='text-primary font-extrabold'>Emiliano Huerta</span>
        </h2>

        <p className='text-xl font-bold text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed'>
          Specializing in{' '}
          <span className='text-primary font-bold'>Web Development</span> and{' '}
          <span className='text-primary font-bold'>Data Analysis</span>.
        </p>

        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Button
            size='lg'
            className='btn-transparent px-8 font-bold'
            onClick={() => scrollToSection('projects')}
          >
            <FolderGit2 className='h-5 w-5 mr-2' />
            <span className='font-bold'>View Projects</span>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='btn-transparent px-8 font-bold'
            onClick={handleResumeClick}
          >
            <FileText className='h-5 w-5 mr-2' />
            <span className='font-bold'>My Resume</span>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='btn-transparent px-8 font-bold'
            onClick={() => scrollToSection('contact')}
          >
            <Send className='h-5 w-5 mr-2' />
            <span className='font-bold'>Contact Me</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
