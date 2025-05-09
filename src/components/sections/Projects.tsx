import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Eye, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id='projects' className='py-24 px-6 bg-muted/5'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Projects</h2>
          <p className='text-lg text-muted-foreground'>
            A showcase of my latest{' '}
            <span className='text-primary font-bold'>work</span> and{' '}
            <span className='text-primary font-bold'>experiments</span>
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[1, 2, 3].map((project) => (
            <Card
              key={project}
              className='group bg-background border-border/40 hover:border-primary/40 transition-all duration-300'
            >
              {/* Project Image */}
              <div className='relative aspect-video overflow-hidden rounded-t-lg bg-muted/30'>
                <div className='absolute inset-0 flex items-center justify-center text-muted-foreground'>
                  Project Image {project}
                </div>
              </div>

              {/* Project Content */}
              <div className='p-6 space-y-4'>
                <h3 className='text-xl font-bold'>Project {project}</h3>
                <p className='text-muted-foreground'>
                  A brief description of the project and its key features.
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary' className='font-bold'>
                    React
                  </Badge>
                  <Badge variant='secondary' className='font-bold'>
                    TypeScript
                  </Badge>
                  <Badge variant='secondary' className='font-bold'>
                    Node.js
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3 pt-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex-1 border-primary text-primary hover:bg-primary/10 font-bold'
                  >
                    <Eye className='h-4 w-4 mr-2' />
                    View Details
                  </Button>
                  <Button
                    size='sm'
                    className='flex-1 bg-[#0A1A2F] text-white hover:bg-[#0A1A2F]/90 font-bold'
                  >
                    <ExternalLink className='h-4 w-4 mr-2' />
                    View Project
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
