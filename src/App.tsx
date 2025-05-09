import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Github, Linkedin, Mail, Twitter, Code } from 'lucide-react';

const App = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Header */}
      <header className='fixed top-0 w-full bg-background/60 backdrop-blur-md z-50 border-b border-border/40'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Code className='h-6 w-6 text-primary' />
            <h1 className='text-xl font-semibold'>DevPortfolio</h1>
          </div>
          <nav className='hidden md:flex items-center gap-8'>
            <Button
              variant='ghost'
              className='text-foreground hover:text-primary hover:bg-transparent'
            >
              Home
            </Button>
            <Button
              variant='ghost'
              className='text-foreground hover:text-primary hover:bg-transparent'
            >
              About
            </Button>
            <Button
              variant='ghost'
              className='text-foreground hover:text-primary hover:bg-transparent'
            >
              Projects
            </Button>
            <Button
              variant='ghost'
              className='text-foreground hover:text-primary hover:bg-transparent'
            >
              Skills
            </Button>
            <Button
              variant='ghost'
              className='text-foreground hover:text-primary hover:bg-transparent'
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='min-h-screen pt-32 pb-24 px-6 flex items-center'>
        <div className='container mx-auto text-center'>
          <Badge
            variant='outline'
            className='mb-8 px-4 py-2 text-sm font-medium border-primary/30 text-primary hover:bg-primary/10 transition-colors'
          >
            Available for Hire
          </Badge>

          <h2 className='text-5xl md:text-7xl font-bold mb-8 tracking-tight'>
            Hi, I'm <span className='text-primary'>John Doe</span>
          </h2>

          <p className='text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed'>
            Specializing in{' '}
            <span className='text-primary'>Web Development</span> and{' '}
            <span className='text-primary'>Data Analysis</span>
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 transition-colors'
            >
              View Projects
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-muted-foreground/30 text-muted-foreground hover:bg-muted/30 px-8 transition-colors'
            >
              My Resume
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-[#0A1A2F] text-[#0A1A2F] hover:bg-[#0A1A2F]/10 px-8 transition-colors'
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-24 px-6 bg-muted/30'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-12 text-center'>About Me</h2>
          <div className='max-w-3xl mx-auto text-muted-foreground'>
            <p className='mb-6 text-lg leading-relaxed'>
              I'm a full-stack developer with a passion for creating elegant
              solutions to complex problems. With expertise in modern web
              technologies, I focus on building responsive and user-friendly
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-24 px-6'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-16 text-center'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((project) => (
              <Card
                key={project}
                className='bg-muted/30 border-border/40 hover:border-primary/40 transition-colors'
              >
                <div className='p-8'>
                  <h3 className='text-xl font-bold mb-4'>Project {project}</h3>
                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    A brief description of the project and its key features.
                  </p>
                  <div className='flex gap-2'>
                    <Badge variant='secondary'>React</Badge>
                    <Badge variant='secondary'>TypeScript</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-24 px-6 bg-muted/30'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold mb-16 text-center'>Skills</h2>
          <div className='flex flex-wrap justify-center gap-4'>
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map(
              (skill) => (
                <Badge
                  key={skill}
                  variant='outline'
                  className='text-primary border-primary px-4 py-2 text-base'
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-24 px-6'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Get In Touch</h2>
          <p className='text-muted-foreground mb-12 max-w-2xl mx-auto text-lg leading-relaxed'>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className='flex justify-center gap-6'>
            <Button
              variant='outline'
              size='icon'
              className='border-primary text-primary h-12 w-12'
            >
              <Mail className='h-6 w-6' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='border-primary text-primary h-12 w-12'
            >
              <Github className='h-6 w-6' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='border-primary text-primary h-12 w-12'
            >
              <Linkedin className='h-6 w-6' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='border-primary text-primary h-12 w-12'
            >
              <Twitter className='h-6 w-6' />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-6 bg-muted/30 border-t border-border/40'>
        <div className='container mx-auto text-center text-muted-foreground'>
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
