import { Button } from '../ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id='about' className='py-12 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold mb-3'>About Me</h2>
          <p className='text-lg text-white/70 max-w-xl mx-auto'>
            Bridging the gap between{' '}
            <span className='text-primary font-bold'>web development</span> and{' '}
            <span className='text-primary font-bold'>data analysis</span>.
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
          <div className='space-y-4 text-white/80 leading-relaxed'>
            <h3 className='text-xl font-bold mb-2'>My Journey</h3>
            <p>
              I'm{' '}
              <span className='text-primary font-bold'>Emiliano Huerta</span>, a
              passionate developer with over{' '}
              <span className='text-primary font-bold'>5 years</span> of
              experience in both{' '}
              <span className='text-primary font-bold'>web development</span>{' '}
              and <span className='text-primary font-bold'>data analysis</span>.
            </p>
            <p>
              On the <span className='font-bold'>web development</span> side, I
              create modern, responsive applications using{' '}
              <span className='text-primary font-bold'>React</span>,{' '}
              <span className='text-primary font-bold'>Next.js</span>, and other
              cutting-edge technologies.
            </p>
            <p>
              For <span className='font-bold'>data analysis</span>, I leverage
              my skills in <span className='text-primary font-bold'>SQL</span>,{' '}
              <span className='text-primary font-bold'>data visualization</span>
              , and{' '}
              <span className='text-primary font-bold'>
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
