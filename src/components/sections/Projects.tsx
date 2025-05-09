import { ExternalLink, Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    name: 'E-Commerce Platform',
    subtitle: 'A full-featured online shopping experience',
    tech: ['React', 'Node.js', 'Firebase'],
    demo: '#',
    details: '#',
  },
  {
    name: 'Sales Analytics Dashboard',
    subtitle: 'Interactive visualization of sales data',
    tech: ['MySQL', 'D3.js', 'Python'],
    demo: '#',
    details: '#',
  },
  {
    name: 'Portfolio Website',
    subtitle: 'Responsive personal portfolio site',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    demo: '#',
    details: '#',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='py-16 px-4'>
      <div className='container mx-auto'>
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>My Projects</h2>
          <p className='text-base font-medium text-white/70 max-w-2xl mx-auto mb-4'>
            A showcase of my <span className='text-primary'>work</span> in{' '}
            <span className='text-primary'>web development</span> and{' '}
            <span className='text-primary'>data analysis</span>
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div
              key={project.name}
              className='rounded-xl overflow-hidden bg-[#0B111E] border border-white/10 flex flex-col h-full'
            >
              {/* Image Placeholder */}
              <div className='bg-gray-200 flex items-center justify-center h-48 md:h-56 w-full'>
                <ImageIcon className='h-12 w-12 text-gray-400' />
              </div>
              {/* Card Content */}
              <div className='flex flex-col flex-1 p-6'>
                <h3 className='text-xl font-semibold text-white mb-1'>
                  {project.name}
                </h3>
                <p className='text-base font-normal text-white/80 mb-4'>
                  {project.subtitle}
                </p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 rounded-full bg-white/5 text-white/80 text-base font-normal border border-white/10'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-between mt-auto gap-2'>
                  <a
                    href={project.details}
                    className='px-4 py-2 rounded border border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors'
                  >
                    View Details
                  </a>
                  <a
                    href={project.demo}
                    className='px-4 py-2 rounded bg-[#4FC3F7] text-white text-sm font-semibold flex items-center gap-1 hover:bg-[#2196c9] transition-colors'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo <ExternalLink className='h-4 w-4' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
