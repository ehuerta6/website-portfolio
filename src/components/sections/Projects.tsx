import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Eye, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id='projects' className='py-12 px-4 bg-muted/5'>
      <div className='container mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-3'>Projects</h2>
          <p className='text-lg text-white/70 max-w-xl mx-auto'>
            A showcase of my latest{' '}
            <span className='text-primary font-bold'>work</span> and{' '}
            <span className='text-primary font-bold'>experiments</span>.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3].map((project) => (
            <Card
              key={project}
              className='p-5 bg-[#0B111E] border border-white/10 rounded-xl flex flex-col gap-4'
            >
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-primary text-primary-foreground font-bold'>
                  Featured
                </Badge>
                <span className='text-xs text-white/60'>2025</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-1'>
                Project Title {project}
              </h3>
              <p className='text-white/80 text-sm mb-2'>
                This is a <span className='font-bold text-primary'>React</span>{' '}
                and <span className='font-bold text-primary'>TypeScript</span>{' '}
                project that demonstrates{' '}
                <span className='font-bold'>modern UI</span> and{' '}
                <span className='font-bold'>clean code</span>.
              </p>
              <div className='flex gap-3 mt-auto'>
                <Button
                  size='sm'
                  className='btn-transparent font-bold flex items-center gap-1'
                >
                  <Eye className='h-4 w-4' /> Demo
                </Button>
                <Button
                  size='sm'
                  className='btn-transparent font-bold flex items-center gap-1'
                >
                  <ExternalLink className='h-4 w-4' /> Code
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
