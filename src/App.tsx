import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  ExternalLink,
  Eye,
  FolderGit2,
  FileText,
  Send,
  Database,
  Brain,
  Globe,
  Terminal,
  Table,
  BarChart3,
} from 'lucide-react';

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
              <FolderGit2 className='h-5 w-5 mr-2' />
              View Projects
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-muted-foreground/30 text-muted-foreground hover:bg-muted/30 px-8 transition-colors'
            >
              <FileText className='h-5 w-5 mr-2' />
              My Resume
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-[#0A1A2F] text-[#0A1A2F] hover:bg-[#0A1A2F]/10 px-8 transition-colors'
            >
              <Send className='h-5 w-5 mr-2' />
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-24 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-xl text-muted-foreground'>
              Bridging the gap between web development and data analysis
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
                <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                <div className='space-y-4 text-muted-foreground leading-relaxed'>
                  <p>
                    I'm Emiliano Huerta, a passionate developer with over 5
                    years of experience in both web development and data
                    analysis. My technical journey began with building
                    responsive web applications, and evolved to include
                    data-driven solutions that help businesses make informed
                    decisions.
                  </p>
                  <p>
                    On the web development side, I create modern, responsive
                    applications using React, Next.js, and other cutting-edge
                    technologies. For data analysis, I leverage my skills in
                    SQL, data visualization, and statistical analysis to
                    transform raw data into actionable insights.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex flex-wrap gap-4 pt-4'>
                <Button
                  variant='outline'
                  size='lg'
                  className='bg-[#0A1A2F] text-white border-[#0A1A2F] hover:bg-[#0A1A2F]/90 transition-colors'
                >
                  <Github className='h-5 w-5 mr-2' />
                  GitHub
                </Button>
                <Button
                  size='lg'
                  className='bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
                >
                  <Linkedin className='h-5 w-5 mr-2' />
                  LinkedIn
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='border-muted-foreground/30 text-muted-foreground hover:bg-muted/30 transition-colors'
                >
                  <Mail className='h-5 w-5 mr-2' />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-24 px-6 bg-muted/5'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Projects</h2>
            <p className='text-xl text-muted-foreground'>
              A showcase of my latest work and experiments
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
                  <h3 className='text-xl font-semibold'>Project {project}</h3>
                  <p className='text-muted-foreground'>
                    A brief description of the project and its key features.
                  </p>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2'>
                    <Badge variant='secondary'>React</Badge>
                    <Badge variant='secondary'>TypeScript</Badge>
                    <Badge variant='secondary'>Node.js</Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3 pt-4'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='flex-1 border-primary text-primary hover:bg-primary/10'
                    >
                      <Eye className='h-4 w-4 mr-2' />
                      View Details
                    </Button>
                    <Button
                      size='sm'
                      className='flex-1 bg-[#0A1A2F] text-white hover:bg-[#0A1A2F]/90'
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

      {/* Skills Section */}
      <section id='skills' className='py-24 px-6'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>Skills & Expertise</h2>
            <p className='text-xl text-muted-foreground'>
              Technologies and tools I work with
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Web Development */}
            <div className='space-y-6'>
              <div className='flex items-center gap-3 mb-6'>
                <Brain className='h-6 w-6 text-primary' />
                <h3 className='text-2xl font-semibold'>Web Development</h3>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {[
                  { name: 'JavaScript', icon: Globe },
                  { name: 'React', icon: Code },
                  { name: 'Next.js', icon: Terminal },
                  { name: 'TypeScript', icon: Code },
                  { name: 'Node.js', icon: Terminal },
                  { name: 'Firebase', icon: Database },
                  { name: 'HTML', icon: Globe },
                  { name: 'CSS', icon: Globe },
                  { name: 'Tailwind CSS', icon: Globe },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                  >
                    <skill.icon className='h-4 w-4 text-primary' />
                    <span className='text-sm'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data & Databases */}
            <div className='space-y-6'>
              <div className='flex items-center gap-3 mb-6'>
                <BarChart3 className='h-6 w-6 text-primary' />
                <h3 className='text-2xl font-semibold'>Data & Databases</h3>
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {[
                  { name: 'Python', icon: Terminal },
                  { name: 'SQL', icon: Database },
                  { name: 'MySQL', icon: Database },
                  { name: 'PostgreSQL', icon: Database },
                  { name: 'Supabase', icon: Database },
                  { name: 'Pandas', icon: Table },
                  { name: 'Tableau', icon: BarChart3 },
                  { name: 'R', icon: Terminal },
                  { name: 'Excel', icon: Table },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className='flex items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                  >
                    <skill.icon className='h-4 w-4 text-primary' />
                    <span className='text-sm'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
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
