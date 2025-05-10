import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import WebflixImg from '../../assets/projects/webflix.png';

const projects = [
  {
    name: 'Webflix WebApp',
    subtitle: 'Netflix-inspired streaming platform',
    tech: [
      'React',
      'React Router',
      'Tailwind CSS',
      'TMDB API',
      'Vite',
      'Firebase',
      'Firestore',
      'Flask',
    ],
    demo: 'https://ehuerta6.github.io/webflix-movie-app/',
    details: [
      'Engineered a Netflix-inspired streaming platform using React 19, Vite, and TailwindCSS, integrating the TMDB API for 100,000+ movies/shows and Firebase Authentication, resulting in a responsive UI with 95% cross-browser compatibility.',
      'Implemented full-stack architecture with a Flask RESTful backend and Firebase Firestore, featuring user authentication, 3+ personalized media libraries (watchlist, favorites, watched), and real-time data synchronization, reducing load times by 40%.',
      'Developed a comprehensive user experience with dynamic search, filtering across 20+ genres, detailed media pages, and customizable user profiles for a small and active user base, increasing engagement by 35% and session duration by 28%.',
    ],
    image: WebflixImg,
    date: 'April - May 2025',
  },
];

const Projects = () => {
  const [openDetails, setOpenDetails] = useState<string | null>(null);
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
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 gap-8 max-w-lg w-full'>
            {projects.map((project) => (
              <div
                key={project.name}
                className='rounded-xl overflow-hidden bg-[#0B111E] border border-white/10 flex flex-col h-full relative'
              >
                {/* Details Overlay */}
                {openDetails === project.name && (
                  <div className='absolute inset-0 z-20 flex items-center justify-center'>
                    <div
                      className='fixed inset-0 bg-black/60 backdrop-blur-sm z-30'
                      onClick={() => setOpenDetails(null)}
                    />
                    <div className='relative z-40 max-w-md w-full mx-auto bg-[#181f2a]/90 rounded-xl border border-white/10 shadow-2xl p-6 flex flex-col items-start'>
                      <button
                        className='absolute top-3 right-3 text-white/60 hover:text-white text-xl font-bold focus:outline-none'
                        onClick={() => setOpenDetails(null)}
                        aria-label='Close details'
                      >
                        ×
                      </button>
                      <h4 className='text-lg font-semibold text-white mb-3'>
                        Details
                      </h4>
                      <ul className='list-disc pl-5 space-y-2 text-white/90 text-sm'>
                        {project.details.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {/* Image or Placeholder */}
                <div
                  className={`bg-gray-200 flex items-center justify-center h-48 md:h-56 w-full transition duration-300 ${
                    openDetails === project.name ? 'opacity-40 blur-sm' : ''
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className='object-cover w-full h-full'
                    />
                  ) : (
                    <ImageIcon className='h-12 w-12 text-gray-400' />
                  )}
                </div>
                {/* Card Content */}
                <div
                  className={`flex flex-col flex-1 p-6 transition duration-300 ${
                    openDetails === project.name ? 'opacity-40 blur-sm' : ''
                  }`}
                >
                  <h3 className='text-xl font-semibold text-white mb-1'>
                    {project.name}
                  </h3>
                  <p className='text-base font-normal text-white/80 mb-2'>
                    {project.subtitle}
                  </p>
                  {project.date && (
                    <p className='text-xs text-white/50 mb-2'>{project.date}</p>
                  )}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className='px-2.5 py-0.5 rounded-full bg-[#232b36] text-[#4FC3F7] text-xs font-semibold border border-[#263241] shadow-sm tracking-wide'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className='flex items-center justify-between mt-auto gap-2'>
                    <button
                      className='px-4 py-2 rounded border border-white text-white text-sm font-semibold hover:bg-white/10 transition-colors'
                      onClick={() =>
                        setOpenDetails(
                          openDetails === project.name ? null : project.name
                        )
                      }
                    >
                      View Details
                    </button>
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
      </div>
    </section>
  );
};

export default Projects;
