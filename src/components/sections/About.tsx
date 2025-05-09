import { Button } from '../ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id='about' className='py-24 px-6'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>About Me</h2>
          <p className='text-lg text-muted-foreground'>
            Bridging the gap between{' '}
            <span className='text-primary font-bold'>web development</span> and{' '}
            <span className='text-primary font-bold'>data analysis</span>
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Image */}
          <div className='relative aspect-square rounded-lg overflow-hidden bg-muted/30 border border-border/40'>
            <div className='absolute inset-0 flex items-center justify-center text-muted-foreground'>
              <span className='text-lg'>Portrait Placeholder</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold mb-6'>My Journey</h3>
              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  I'm{' '}
                  <span className='text-primary font-bold'>
                    Emiliano Huerta
                  </span>
                  , a passionate developer with over{' '}
                  <span className='text-primary font-bold'>5 years</span> of
                  experience in both web development and data analysis. My
                  technical journey began with building responsive web
                  applications, and evolved to include data-driven solutions
                  that help businesses make informed decisions.
                </p>
                <p>
                  On the web development side, I create modern, responsive
                  applications using{' '}
                  <span className='text-primary font-bold'>React</span>,{' '}
                  <span className='text-primary font-bold'>Next.js</span>, and
                  other cutting-edge technologies. For data analysis, I leverage
                  my skills in{' '}
                  <span className='text-primary font-bold'>SQL</span>, data
                  visualization, and statistical analysis to transform raw data
                  into actionable insights.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <Button
                variant='outline'
                size='lg'
                className='bg-[#0A1A2F] text-white border-[#0A1A2F] hover:bg-[#0A1A2F]/90 transition-colors font-bold'
              >
                <Github className='h-5 w-5 mr-2' />
                GitHub
              </Button>
              <Button
                size='lg'
                className='bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-bold'
              >
                <Linkedin className='h-5 w-5 mr-2' />
                LinkedIn
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='border-muted-foreground/30 text-muted-foreground hover:bg-muted/30 transition-colors font-bold'
              >
                <Mail className='h-5 w-5 mr-2' />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
