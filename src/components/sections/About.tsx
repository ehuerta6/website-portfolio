import { Button } from '../ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id='about' className='py-12 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-semibold mb-2'>About Me</h2>
          <p className='text-base font-medium text-white/70 max-w-xl mx-auto mb-4'>
            Bridging the gap between{' '}
            <span className='text-primary'>web development</span> and{' '}
            <span className='text-primary'>data analysis</span>.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
          {/* Left Column - Image */}
          <div className='relative aspect-square rounded-lg overflow-hidden bg-muted/30 border border-border/40 flex items-center justify-center'>
            <span className='text-base text-white/40'>
              Portrait Placeholder
            </span>
          </div>

          {/* Right Column - Content */}
          <div className='space-y-4 text-base font-normal text-white/80 leading-relaxed'>
            <h3 className='text-2xl font-semibold mb-2'>My Journey</h3>
            <p>
              I'm{' '}
              <span className='text-primary font-medium'>Emiliano Huerta</span>,
              a passionate developer with over{' '}
              <span className='text-primary font-medium'>5 years</span> of
              experience in both{' '}
              <span className='text-primary font-medium'>web development</span>{' '}
              and{' '}
              <span className='text-primary font-medium'>data analysis</span>.
            </p>
            <p>
              On the <span className='font-medium'>web development</span> side,
              I create modern, responsive applications using{' '}
              <span className='text-primary font-medium'>React</span>,{' '}
              <span className='text-primary font-medium'>Next.js</span>, and
              other cutting-edge technologies.
            </p>
            <p>
              For <span className='font-medium'>data analysis</span>, I leverage
              my skills in <span className='text-primary font-medium'>SQL</span>
              ,{' '}
              <span className='text-primary font-medium'>
                data visualization
              </span>
              , and{' '}
              <span className='text-primary font-medium'>
                statistical analysis
              </span>{' '}
              to transform raw data into actionable insights.
            </p>
            <div className='flex justify-center gap-4 mt-4'>
              <Button
                variant='outline'
                size='icon'
                className='btn-transparent h-10 w-10'
                aria-label='GitHub Profile'
              >
                <Github className='h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='btn-transparent h-10 w-10'
                aria-label='LinkedIn Profile'
              >
                <Linkedin className='h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='icon'
                className='btn-transparent h-10 w-10'
                aria-label='Email Contact'
              >
                <Mail className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
